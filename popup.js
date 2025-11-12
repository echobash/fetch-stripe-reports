document.addEventListener("DOMContentLoaded", async () => {
  const apiKeyInput = document.getElementById("apiKey");
  const keyStatus = document.getElementById("keyStatus");

  // Load saved API key (if any)
  const { stripeKey } = await chrome.storage.local.get("stripeKey");
  if (stripeKey) {
    apiKeyInput.value = stripeKey;
    keyStatus.textContent = "Saved key loaded.";
  } else {
    keyStatus.textContent = "No saved key yet.";
  }

  document.getElementById("fetchBtn").addEventListener("click", async () => {
    const apiKey = apiKeyInput.value.trim();
    const type = document.getElementById("reportType").value;
    const output = document.getElementById("output");

    if (!apiKey) {
      alert("Enter your Stripe secret key first.");
      return;
    }

    // Save the key for future use
    await chrome.storage.local.set({ stripeKey: apiKey });
    keyStatus.textContent = "Key saved locally.";

    output.textContent = "Fetching " + type + "...";

    try {
      const data = await fetchAllStripeData(apiKey, type);
      if (!data || data.length === 0) {
        output.textContent = "No data found.";
        return;
      }

      const csv = convertToCSV(data);
      downloadCSV(csv, `${type}.csv`);
      output.textContent = `${data.length} records downloaded as ${type}.csv`;
    } catch (err) {
      output.textContent = " Error: " + err.message;
    }
  });

  document.getElementById("clearKeyBtn").addEventListener("click", async () => {
    await chrome.storage.local.remove("stripeKey");
    apiKeyInput.value = "";
    keyStatus.textContent = "️ Saved key cleared.";
  });
});

async function fetchAllStripeData(apiKey, type) {
  const url = `https://api.stripe.com/v1/${type}?limit=100`;
  const response = await fetch(url, {
    headers: { Authorization: "Bearer " + apiKey }
  });
  const json = await response.json();
  if (json.error) throw new Error(json.error.message);
  return json.data;
}

function convertToCSV(data) {
  if (!data.length) return "";
  const headers = Object.keys(flattenObject(data[0]));
  const rows = data.map(obj => {
    const flat = flattenObject(obj);
    return headers.map(h => JSON.stringify(flat[h] ?? "")).join(",");
  });
  return headers.join(",") + "\n" + rows.join("\n");
}

function flattenObject(obj, prefix = "", res = {}) {
  for (let [key, val] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (val && typeof val === "object" && !Array.isArray(val))
      flattenObject(val, newKey, res);
    else res[newKey] = val;
  }
  return res;
}

function downloadCSV(csv, filename) {
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

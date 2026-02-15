# Stripe Reports (by echobash)

A free Chrome Extension to fetch your **Stripe charges, payouts, refunds, and customers** — and export them as a CSV in one click.

👉 [Website](https://devdunia.com/privacy/stripe-reports)  
👉 [Privacy Policy](https://devdunia.com/privacy/stripe-reports)

### 🔗 Install the Extension

- 👉 **Chrome Extension:**  
  [Stripe Reports by Echobash](https://chromewebstore.google.com/detail/stripe-reports-by-echobas/eiekgkgjpglcajifogmdpbbkckcmmhbl)

- 👉 **Landing Page:**  
  https://echobash.com/stripe-reports

- 👉 **Source Code:**  
  https://github.com/echobash/fetch-stripe-reports
  <img width="1344" height="753" alt="Screenshot 2026-02-15 at 11 32 01 PM" src="https://github.com/user-attachments/assets/68b98602-e06c-40ce-835e-165ce844da44" />



## 🧩 Features
- Fetches **charges, payouts, refunds, customers, and balance transactions**
- **CSV export** for instant download
- **Secure** — your Stripe API key stays local in Chrome storage
- **No backend**, no analytics, no data collection
- Plug and Play
---

## ⚙️ Installation (Developer Mode)
1. Download the repo ZIP or clone it:
   ```bash
   git clone https://github.com/echobash/fetch-stripe-reports


1.	Open Chrome and navigate to chrome://extensions/
2.	Enable Developer mode (top-right toggle)
3.	Click Load unpacked → select the cloned folder
4.	The extension icon will appear in your toolbar
5.	Open it, enter your Stripe Secret Key, choose a report, and click Fetch & Download CSV

🧠 How It Works
- The extension uses your Stripe Secret Key to call https://api.stripe.com/v1/* endpoints.
- Data is fetched directly from Stripe’s API and converted into a clean, downloadable CSV file.
- Your key is stored locally in Chrome’s secure storage — never transmitted anywhere else.

If you are using the extension, feel free to star the repo

# Stripe Reports (by echobash)

A free Chrome Extension to fetch your **Stripe charges, payouts, refunds, and customers** — and export them as a CSV in one click.

👉 [Website](https://devdunia.com/privacy/stripe-reports)  
👉 [Privacy Policy](https://devdunia.com/privacy/stripe-reports)

### 🔗 Install the Extension  
- 👉 **Chrome Extension:** https://chromewebstore.google.com/detail/stripe-reports-by-echobas/eiekgkgjpglcajifogmdpbbkckcmmhbl
- 👉 **Landing Page:** https://echobash.com/stripe-reports  
- 👉 **Source Code:** https://github.com/echobash/fetch-stripe-reports

---

## 🧩 Features
- Fetches **charges, payouts, refunds, customers, and balance transactions**
- **CSV export** for instant download
- **Secure** — your Stripe API key stays local in Chrome storage
- **No backend**, no analytics, no data collection

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

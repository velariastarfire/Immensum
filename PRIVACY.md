# Privacy Policy for Immensum

**Effective Date:** May 31, 2026  
**Developer:** Velaria Starfire / Recursive Roots  
**Contact:** [Your Contact Email or GitHub Profile Link]

Recursive Roots ("we," "our," or "us") operates the Immensum Google Sheets Add-on and its connected mathematical calculation processing engine (the "Service"). We are fundamentally committed to the privacy and security of our users.

### 1. The Core Principle: Absolute Statelessness
Immensum is designed as a secure, stateless execution utility. The data processing pipeline handles large-integer and high-precision calculations completely in-memory. 
* **No Core Data Storage:** Any numerical inputs, data cell strings, or mathematical calculations (`a` and `b` parameters) submitted to our processing bridge are evaluated instantly in volatile memory on our Cloudflare Worker environment.
* **No Logging:** We do not log, record, write, or track the contents of your calculations, cell metrics, spreadsheet titles, or numeric values. Once the result is sent back to your Google Sheet, the data completely vanishes from our servers.

### 2. Information Collected and Permissions Used
To function properly, the Immensum Add-on requests access to the following limited scopes via Google OAuth:
* `https://www.googleapis.com/auth/spreadsheets.currentonly`: Used solely to read active numbers selected by the user for calculations and to write the processed results back into the user's active spreadsheet cells. We cannot read your broader Google Drive or other files.
* `https://www.googleapis.com/auth/script.external_request`: Used to securely route your numbers over an encrypted HTTPS connection to our external calculation engine.
* `https://www.googleapis.com/auth/script.container.ui`: Used to display the Immensum custom sidebar Console.

### 3. Subscription & License Key Verification
When you enter a license key into the Immensum Console:
* The license string is stored locally on *your device* inside your secure Google Workspace User Properties container.
* The key is cross-checked against our licensing provider (Lemon Squeezy) to verify subscription validity. No data from your spreadsheets is ever attached to this license verification request.

### 4. Data Sharing and Third Parties
Because we do not store, harvest, or collect your data, we have absolutely zero user calculation data to share, sell, distribute, or monetize with third parties.

### 5. Changes to This Policy
We preserve the right to update this policy to reflect future optimizations. Any changes will be committed directly to this public domain profile.

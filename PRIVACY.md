# Privacy Policy for Immensum for Google Sheets™

**Effective Date:** June 1, 2026  
**Developer:** Velaria Starfire / Recursive Roots  

Your privacy is paramount. Immensum for Google Sheets™ ("the Software") is designed to process high-precision calculations securely and transparently. This Privacy Policy outlines how data is handled.

### 1. Data Collection & Processing
* **No Personal Data Stored:** The Software does not collect, harvest, or permanently store any personal data, email addresses, or user credentials.
* **Calculation Data Transmitted:** To perform arbitrary-precision mathematics, numeric inputs from your spreadsheet are temporarily transmitted to our secure computation engine. 
* **Data Transience:** This numeric data is processed entirely in-memory. Once the calculation is complete and the text string result is returned to your Google Sheet, the data is instantly dropped from memory. We do not logs or store your spreadsheet inputs.

### 2. Google Workspace Permissions (Scopes)
The Software requests specific permissions via Google OAuth solely to execute its core functions:
* **View and manage spreadsheets this application is installed in:** Required to read the numeric inputs you pass to our custom formulas and write back the exact text results.
* **Connect to an external service:** Required to send numeric inputs to our secure server-side engine for processing.

### 3. Third-Party Sharing
We do not sell, trade, or share your data with any third parties. Your data never leaves our secure execution path.

### 4. Contact & Support
For questions regarding this policy, please open an issue at our official support repository: https://github.com/velariastarfire/Immensum/issues

---
*Google Sheets™ is a trademark of Google LLC.*

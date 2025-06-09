 WEB AUTOMATION TASK USING PLAYWRIGHT AND JAVASCRIPT

 Objective:
Automate a web workflow using Playwright to simulate user interactions and validate expected outcomes.



Requirements:

Make sure the following are installed:
1. Node.js
2. Visual Studio Code
3. Playwright (`npm install -D @playwright/test`)



 Task Description:

Automated user flow on (https://www.marrow.com):

1. Open the Marrow website  
2. Sign Up / Login (manually complete Google login to bypass CAPTCHA)  
3. Access QBank  
4. Navigate to Anatomy → Vertebral Column  
5. Logout  
6. Validate the "First-year MBBS" course opens in a new tab  

---

 How to Run

### Step 1: Download & Open Folder

- Download the folder.
- Open the folder in **Visual Studio Code** or terminal.

### Step 2: Install Dependencies

Open terminal and run:

npm init -y
npm install -D @playwright/test
npx playwright install

Use of the function:
Initializes a new Node.js project by creating a package.json file with default settings.(npm init -y)
Installs Playwright’s testing library as a dev dependency (only needed during development/testing). (npm install -D @playwright/test)
Downloads and installs the required browsers (Chromium, Firefox, WebKit) that Playwright uses for automation. (npx playwright install)
 

### Step 3: Run the Test

#### ✅ Default (Headless mode)
npx playwright test tests/marrow.test.js

With Browser UI (for manual login & CAPTCHA)
npx playwright test tests/marrow.test.js --headed


 Use this for the first run so you can manually complete the Google login.

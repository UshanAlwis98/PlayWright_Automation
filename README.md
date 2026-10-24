# Playwright UI Automation

## 📌 Overview

This repository contains UI test automation scripts developed using **Playwright** and **JavaScript** to automate web application testing. The project focuses on validating application functionality, improving test coverage, and ensuring application reliability through automated testing.

## 🛠️ Technologies Used

* **Playwright** – End-to-end web application test automation.
* **JavaScript** – Programming language used to write test scripts.
* **Node.js** – JavaScript runtime environment.
* **npm** – Package manager for managing project dependencies.
* **Visual Studio Code / Cursor** – IDEs used for development and test execution.

## 📂 Project Structure

```text
Playwright_Automation/
├── tests/                  # Contains automated test scripts
├── playwright.config.js    # Playwright configuration
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Dependency version lock file
└── README.md               # Project documentation
```

*Note: The project structure may vary depending on the implemented test cases and configuration.*

## ⚙️ Prerequisites

Before running the automation tests, ensure that the following are installed:

* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/)
* [Visual Studio Code](https://code.visualstudio.com/) or another compatible code editor
* [Git](https://git-scm.com/)

## 🚀 Installation and Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the Project Directory

```bash
cd Playwright_Automation
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Install Playwright Browsers

```bash
npx playwright install
```

## ▶️ Running Tests

### Run All Tests

```bash
npx playwright test
```

### Run Tests in Headed Mode

Run tests with the browser UI visible.

```bash
npx playwright test --headed
```

### Run Tests in a Specific Browser

Run tests using Chromium:

```bash
npx playwright test --project=chromium
```

### Run a Specific Test File

```bash
npx playwright test tests/Clientapp.spec.js
```

### Run Tests in Debug Mode

```bash
npx playwright test --debug
```

## 📊 Test Reports

### Generate and View the HTML Report

After executing the tests, generate and open the HTML report using:

```bash
npx playwright show-report
```

The report provides information about test execution results, including passed tests, failed tests, and execution details.

## 🧪 Automation Concepts Covered

This repository can be used to practise and demonstrate the following Playwright automation concepts:

* Browser and page automation
* Locators and element selection
* Handling input fields, buttons, and dropdowns
* Assertions and validations
* Handling multiple browser tabs and child windows
* Working with alerts, dialogs, and pop-ups
* Waiting strategies and synchronization
* Handling frames and iframes
* Web table interactions
* File uploads and downloads
* Mouse and keyboard actions
* Test execution and debugging
* HTML test reporting

## 📚 Official Documentation

For detailed information about Playwright installation, configuration, locators, assertions, browser automation, and test execution, refer to the official documentation:

**[Playwright Official Documentation](https://playwright.dev/docs/intro)**

## 🎯 Project Goals

* Develop practical skills in Playwright UI automation.
* Build reliable and maintainable automated test scripts.
* Understand end-to-end testing concepts and best practices.
* Improve debugging and test execution skills.
* Strengthen knowledge of JavaScript-based test automation.

## 👨‍💻 Author

**Ushan Alwis**

GitHub: [UshanAlwis98](https://github.com/UshanAlwis98)

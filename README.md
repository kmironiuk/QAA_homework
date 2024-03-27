# **QAA_homework**

### Module 2

The cypress/support/commands.js file contains custom command:
  - Finds the email field and enters the appropriate email
  - Finds the password field and enters the appropriate password
  - Press the "Log in" button

The cypress/e2e/homework_2.cy.js file contains two tests:
+ Test 1
  - Opens https://www.edu.goit.global/account/login
  - Uses a custom login command
  - Enters e-mail **user888@gmail.com** and password **1234567890**
  - Finds the button and opens the website menu
  - Finds the "Log out" button in the menu, clicks on it and returns to the login page
+ Test 2
  - Opens https://www.edu.goit.global/account/login
  - Uses a custom login command
  - Enters e-mail **testowyqa@qa.team** and password **QA!automation-1**
  - Finds the button and opens the website menu
  - Finds the "Log out" button in the menu, clicks on it and returns to the login page

### Module 3

The cypress/e2e/homework_3.cy.js file contains prescribed tests from Module 2 using the **Page Object Pattern**

Separate files were created in the **pages** folder:
+ For the login page, the **Login.js** file
+ For the home page, the **HomePage.js** file
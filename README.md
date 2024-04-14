# **QAA_homework**

### Module 2 **E2E tests**

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

### Module 3 **Page object pattern**

The cypress/e2e/homework_3.cy.js file contains prescribed tests from Module 2 using the **Page Object Pattern**

Separate files were created in the **pages** folder:
+ For the login page, the **Login.js** file
+ For the home page, the **HomePage.js** file

### Module 4 **Testing HTTP API**

The cypress/e2e/homework_4.cy.js file contains tests API:
+ Test 1 - GET method
+ Test 2 - POST method
+ Test 3 - PUT method
+ Test 4 - Add headers
+ Test 5 i 6 - Cookies and test duration
+ Test 7 - Randomization of data in the query
+ Test 8 - Query parameters
+ Test 9 i 10 - Checking the response code

### Module 5 **Performance testing**

The cypress/artillery contains Spike Test

The artillery-homework_5 file contains test results

**Spike test** - It requires several phases and involves reaching an unexpectedly high load spike and returning to normal values.

First, the system is used at the expected load for 5 minutes.

We then simulate a sudden and short-lived spike in the number of  virtual users.

After the jump, we stabilize the system again at expected usage levels.

+ errors.Failed capture or match - number of errors
+ http.codes.200 - number of requests that returned code 200
+ http.codes.301 - number of requests that returned code 301
+ http.codes.302 - number of requests that returned code 302
+ http.codes.404 - number of requests that returned code 404
+ http.request_rate - average number of requests sent per second
+ http.requests - total number of http requests sent
+ The http.response_time block shows the execution time of requests:
  - min - time of the fastest request
  - max - time of the longest request
  - median - median value
  - p95 - average value for 95% of users
  - p99 - average value for 99% of users
+ http.responses - total number of responses
+ vusers.created - the number of virtual users for which the scenario was created
+ vusers.failed - the number of virtual users for which the scenario failed

We check whether users will receive a response to the http request within a maximum time of 2 seconds -> http.response_time.max < 2000

We check whether the number of requests per second is greater than or equal to 2 and whether the time of the slowest request does not exceed 600 milliseconds -> http.request_rate >= 2 and http.response_time.max < 600

We check whether at least one virtual user failed his scenario -> vusers.failed == 0

We verify that 95 percent of our users receive a response to an http request within one second or faster -> http.response_time.p95 < 10

### Module 6 **CI/CD**

asdfggg
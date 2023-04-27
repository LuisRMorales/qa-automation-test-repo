# qa-automation-test-repo
## prerequisite 
install node.js and restore all dependencies in package.json or you can install the following dependencies

nyc mocha
> npm install --save-dev nyc mocha 

selenium
> npm install selenium-webdriver webdriver-manager npm 

selenium side runner
> npm install -g selenium-side-runner

## Part 1  
required functions where added and are available in src\shoping-cart.js

## Part 2 to excecute unit test and code coverage report 
you should run npm test in the console, it will return the results of the tests and the report of code coverage.
> npm test 

## to excecute unit test and code coverage report in html   
you should run npm test in the console, it will return the results of the tests and the report of code coverage in html.

> npx nyc report --reporter=html

# Part 3 and 4 to run the test of selenium webdriver you should run
npm run test-selenium

## test case documents
Test cases documents can be found in documents\ folder. Original design is inside an excel file, and the document used by mocha and selenium is the Json file.

# response to part 5 
## KPI 1 - Test Coverage
This measure tells us wich percentage of code is being tested. The more % tested reduces de probability of undetected defects passing to production and enables the team to do sanity regression testing ensuring a better quality software.

## KPI 2 - Mean time to detect
The earlier defects are detected the less impact they have (costs, delivery time).

## KPI 3 - Test Efficiency
Amount of resources (time and testers) spent on testing. Testing could be a bottle neck to deliver, test eficciendy is an indicator that we are capable to deliver fast and with confidence on the quality of the product.  

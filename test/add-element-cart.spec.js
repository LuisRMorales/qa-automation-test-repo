const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const fs = require('fs'); 

describe('It should log in search for a product add the product and check the cart then remove the product, after all log out.', function() {
  this.timeout(30000)
  let driver = new Builder().forBrowser('chrome').build()
  let result
  let testCases = JSON.parse(fs.readFileSync('./documents/test-cases.json', 'utf-8'));  
  //console.log(testCases)
  afterEach(async function() {
    // Update actual result and status after each test case
    //console.log(this.currentTest)
    const currentTestCase = testCases.find(tc => tc.testCaseID === this.currentTest.title);

    await driver.takeScreenshot().then(function(data) {
      currentTestCase.actualResult = data;
    });
    currentTestCase.status = this.currentTest.state;
  });
  after(async function() {
    await driver.quit();
    fs.writeFileSync('./documents/test-cases.json', JSON.stringify( testCases ));
  })
  
  it('SAUCE.0001', async function() {
    //should succesfuly login to saucedemo
    const tc = testCases.find(tc => tc.testCaseID === 'SAUCE.0001');
   
    // 1 | open | https://www.saucedemo.com/ | 
    await driver.get(tc.testData.url)
    // 3 | click | css=*[data-test="username"] | 
    await driver.sleep(1000);
    await driver.findElement(By.css("*[data-test=\"username\"]")).click()
    // 4 | type | css=*[data-test="username"] | standard_user
    await driver.sleep(1000);
    await driver.findElement(By.css("*[data-test=\"username\"]")).sendKeys(tc.testData.username)
    // 5 | click | css=*[data-test="password"] | 
    await driver.sleep(1000);
    await driver.findElement(By.css("*[data-test=\"password\"]")).click()
    // 6 | type | css=*[data-test="password"] | secret_sauce
    await driver.sleep(1000);
    await driver.findElement(By.css("*[data-test=\"password\"]")).sendKeys(tc.testData.password)
    // 7 | click | css=*[data-test="login-button"] |    
    await driver.sleep(1000);
    await driver.findElement(By.css("*[data-test=\"login-button\"]")).click()

    result = driver.getTitle;
  })
  it('SAUCE.0002', async function(){    
    // should succesfuly add the red t-shirt product to saucedemo 
    const tc = testCases.find(tc => tc.testCaseID === 'SAUCE.0002');

    await driver.sleep(1000);
    await driver.findElement(By.css("*[data-test=\"add-to-cart-test.allthethings()-t-shirt-(red)\"]")).click()   
  })
  it('SAUCE.0003', async function(){
     // should go to the cart successfuly     

     await driver.sleep(1000);
     await driver.findElement(By.linkText("1")).click()     
  })
  it('SAUCE.0004', async function(){    
    // should find the red t-shirt product
    const tc = testCases.find(tc => tc.testCaseID === 'SAUCE.0004');
    await driver.sleep(1000);
    assert.equal(await driver.findElement(By.className("inventory_item_name")).getText(),tc.testData.product_name);    
 })
  it('SAUCE.0005', async function(){    
    // should remove the red t-shirt from the cart successfuly 
    await driver.sleep(1000);
    await driver.findElement(By.css("*[data-test=\"remove-test.allthethings()-t-shirt-(red)\"]")).click()
 })
  it('SAUCE.0006', async function(){
  // should logout successfuly 
  await driver.sleep(1000);
  await driver.findElement(By.id("react-burger-menu-btn")).click()
  // 12 | click | id=logout_sidebar_link | 
  await driver.sleep(1000);
  await driver.findElement(By.id("logout_sidebar_link")).click()
})

})

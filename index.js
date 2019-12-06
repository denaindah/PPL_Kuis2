const { Builder, By } = require("selenium-webdriver");

async function googling() {
  //buka browser
  let driver = await new Builder().forBrowser("firefox").build();
  let assert = require("assert");
  // buka url google
  try {
  await driver.get("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login");
  
  await driver.findElement(By.name("txtUsername")).sendKeys("opensourcecms");
  await driver.findElement(By.name("txtPassword")).sendKeys("opensourcecms");
  await driver.findElement(By.name("Submit")).click();

  const testcase = await driver.findElement(By.xpath('//li')).getText();
  assert.equal(testcase, "Welcome Admin", "Failed");
  console.log("Success");
  
  }catch(error){
    console.log("failed")
  }
}
googling();

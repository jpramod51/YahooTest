import{ Given, When, Then } from "cucumber"
import { browser, by, element } from "protractor"
import { moveCursor } from "readline";
var { After, Status, } = require("cucumber");


 
// Launching the Browser and URL
Given ('I launch the url', { timeout: 60*1000 },async function () {
 browser.waitForAngularEnabled(false);
   //await  browser.get("https://way2automation.com/angularjs-protractor/banking/#/login").then (async function(){
    await  browser.get("https://login.yahoo.com/manage_account?signin=true&done=https%3A%2F%2Fwww.yahoo.com%2F&eid=100").then (async function(){
      browser.manage().window().maximize();
   await browser.sleep(5000)
    })
})

Given('I give the User mailId {string}',{ timeout: 60*1000 },async function(mail) {
    browser.waitForAngularEnabled(false);
     await element(by.xpath("//input[@name='username']")).sendKeys(mail)
     await browser.sleep(2000)
     await element(by.xpath("(//input[@id='login-signin'])")).click();
     await browser.sleep(3000)
  });

  Given('I give the User password {string}',{ timeout: 60*1000 },async function (psw) {
    browser.waitForAngularEnabled(false);
    await element(by.xpath("//input[@type='password']")).sendKeys(psw)
     await browser.sleep(2000)
     await element(by.xpath("(//button[@type='submit'])")).click();
     await browser.sleep(3000)
  });

  Then('i will click Mail icon',{ timeout: 60*1000 },async function () {
    browser.waitForAngularEnabled(false);
    await element(by.xpath("//a[@id='ybarMailLink']")).click()
    await browser.sleep(2000)
  });

  Given('I click on Compose',{ timeout: 60*1000 },async function () {
    browser.waitForAngularEnabled(false);
    await element(by.xpath("//a[text()='Compose']")).click()
    await browser.sleep(2000)
  })

  Then('I sends an email with subject {string},{string}',{ timeout: 60*1000 },async function (tomail, sub) {
    browser.waitForAngularEnabled(false);
    await browser.sleep(3000)
    await element(by.xpath("(//*[@type='text'])[4]")).sendKeys(tomail);
    await element(by.xpath("//*[@placeholder='Subject']")).sendKeys(sub);
    await element(by.xpath("//*[text()='Send']")).click();
    await browser.sleep(5000)
  })

  Then('I click on Sent folder and mail appears with the subject entered',{ timeout: 60*1000 },async function () {
    browser.waitForAngularEnabled(false);
    await element(by.xpath("//*[text()='Sent']")).click()
    await browser.sleep(2000)
  });

  Then('I will Logout',{ timeout: 60*1000 },async function() {
    browser.waitForAngularEnabled(false);
    await browser.sleep(3000)
    await element(by.id("ybarAccountMenuOpener")).click()
    //it('Mouse Operations', function() {
		// set implicit time to 30 seconds
	//	browser.manage().timeouts().implicitlyWait(2000);
		// mouse hover on a submenu
		//browser.actions().mouseMove(element(by.id("ybarAccountMenuOpener"))).perform()
	//});
    await browser.sleep(1000)
    await element(by.xpath("//*[text()='Sign out']")).click();
    await browser.sleep(1000)
  });


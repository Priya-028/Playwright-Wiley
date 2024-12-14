import { test, expect, Browser, Page, Locator} from '@playwright/test';

import {webkit, chromium , firefox}  from 'playwright/test';

test('test case 01', async () => {
    const browser:Browser = await firefox.launch({headless:false});
    const page:Page = await browser.newPage();
    await page.goto("https://onlinelibrary.wiley.com/");
    
    const profile:Locator = await page.locator('.sign-in-label');
    const Individuallogin:Locator = await page.locator('text = Individual login');


    
    const emailId2:Locator = await page.locator('#email-input');
    const continuebtn:Locator = await page.locator('#sign-up-btn');
    const pwd:Locator = await page.locator('#pass-input');
    const continuebtn2:Locator = await page.locator('#password-sign-in-btn');
    
    //const profilebtn:Locator = await page.locator('#indivLogin');
    //const logoutbtn:Locator = await page.locator('text = Logout');
   
    await profile.click();
    await Individuallogin.click();
    await emailId2.fill("riyachandran2808@gmail.com");
    await continuebtn.click();   
    await pwd.fill("Qwert@098"); 
    await continuebtn2.click();
   // await profilebtn.click();
   // await logoutbtn.click();


    const title = await page.title();
    console.log("Sign up - Wiley Online Library title : ", title);

    await page.screenshot({path : 'signup.png'});

    expect (title).toEqual('Sign up - Wiley');
    await browser.close();

}); 
import { test, expect, Browser, Page, Locator} from '@playwright/test';

import {webkit, chromium , firefox}  from 'playwright/test';

test('test case 01', async () => {
    const browser:Browser = await firefox.launch({headless:false});
    const page:Page = await browser.newPage();
    await page.goto("https://wiley.scienceconnect.io/register");
    

    const emailId:Locator = await page.locator('#email-input');
    const continuebtn:Locator = await page.locator('#sign-up-btn');

    await emailId.fill("riyachandran2808@gmail.com");
    await continuebtn.click();

    const title = await page.title();
    console.log("Sign up - Wiley Online Library title : ", title);

    await page.screenshot({path : 'signup.png'});

    expect (title).toEqual('Sign up - Wiley');
    await browser.close();

}); 
import { test, expect, Browser, Page, Locator} from '@playwright/test';

import {webkit, chromium , firefox}  from 'playwright/test';

test('test case 09', async () => {
    const browser:Browser = await firefox.launch({headless:false});
    const page:Page = await browser.newPage();
    await page.goto("https://onlinelibrary.wiley.com/?logout=true");

    const profilebtn:Locator = await page.locator('text = Priyanthini');
    const logoutbtn:Locator = await page.locator('text = Logout');
    
    await profilebtn.click();
    await logoutbtn.click();
    


    const title = await page.title();
    console.log("Logout - Wiley Online Library : ", title);

    await page.screenshot({path : 'Logout.png'});

    expect (title).toEqual('Sign up - Wiley');
    await browser.close();

});
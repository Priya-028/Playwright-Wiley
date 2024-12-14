import { test, expect, Browser, Page, Locator} from '@playwright/test';

import {webkit, chromium , firefox}  from 'playwright/test';

test('test case 05', async () => {
    const browser:Browser = await firefox.launch({headless:false});
    const page:Page = await browser.newPage();
    await page.goto("https://onlinelibrary.wiley.com/?msockid=2542eced41386cbf1bd7f9bc40626dc6");
    
    const searchBar:Locator = await page.locator('#searchField1');
    const searchbtn:Locator = await page.locator("[class='btn quick-search__button icon-search']");

    await searchBar.fill("article");
    await searchbtn.click();

    const title = await page.title();
    console.log("searched article page : ", title);

    await page.screenshot({path : 'search.png'});

    expect (title).toEqual('Just a moment...');
    await browser.close();

});
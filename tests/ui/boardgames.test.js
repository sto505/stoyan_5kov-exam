const { test, expect } = require('@playwright/test');

test('Check boardgames page', async ({ page }) => {
    await page.goto('https://stoyan-5kov-exam.onrender.com/');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });

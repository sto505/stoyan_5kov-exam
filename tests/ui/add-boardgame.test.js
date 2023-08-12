const { test, expect } = require('@playwright/test');

test('Check add boardgame page', async ({ page }) => {
    await page.goto('https://stoyan-5kov-exam.onrender.com/');
    const form = await page.$('add-boardgame');
    expect(form).toBeTruthy();
  });

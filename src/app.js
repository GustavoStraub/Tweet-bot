require('dotenv').config()
const puppeteer = require('puppeteer');

(async () => {
  const TWEET = 'Tweet feito por NodeJs'
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://twitter.com/login');
  await page.waitForSelector('[name="session[username_or_email]"]')
  await page.type('input[name="session[username_or_email]"', process.env.USER_EMAIL);
  await page.type('input[name="session[password]"', process.env.USER_PASSWORD);
  await page.click('div[role=button]');
  await page.waitForSelector('.DraftEditor-root')
  await page.click('div.DraftEditor-root')
  await page.type('.public-DraftStyleDefault-ltr', TWEET)
  await page.click('div[data-testid="tweetButtonInline"]')
  await browser.close();
})();

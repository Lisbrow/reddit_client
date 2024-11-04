const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

jest.setTimeout(30000);

let driver;

beforeAll(async () => {
  driver = await new Builder().forBrowser('chrome').build();
});

afterAll(async () => {
  await driver.quit();
});

test('loads the homepage', async () => {
  await driver.get('http://localhost:3000');
  const title = await driver.findElement(By.tagName('h1')).getText();
  expect(title).toBe('Reddit Client');
});

test('fetches and displays posts', async () => {
  await driver.get('http://localhost:3000');
  const postTitle = await driver.wait(until.elementLocated(By.tagName('h3')), 10000);
  expect(await postTitle.getText()).toBe('Test Post'); // Assuming you have a post titled 'Test Post'
});

test('toggles comments on a post', async () => {
  await driver.get('http://localhost:3000');
  await driver.findElement(By.xpath("//button[contains(text(), 'Show Comments')]")).click();
  const button = await driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'Hide Comments')]")), 10000);
  expect(await button.getText()).toBe('Hide Comments');
});

test('navigates to subreddits', async () => {
  await driver.get('http://localhost:3000');
  await driver.findElement(By.xpath("//button[contains(text(), 'Popular')]")).click();
  await driver.wait(until.urlContains('/r/popular'), 10000);
  const postTitle = await driver.wait(until.elementLocated(By.tagName('h3')), 10000);
  expect(await postTitle.getText()).toBe('Test Post');
});

const { firefox } = require('playwright');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });

it("Home page should have the correct title", async () => {
  // const browser = await firefox.launch({ headless: false, slowMo: 30 });
  // const page = await browser.newPage();
  await page.goto('http://www.baidu.com');
  const elementHandle = await page.$('#su');
  // const elementHandle = await page();
  const image=await elementHandle.screenshot();
  // expect(await page.title()).toBe("百度一下，你就知道");
  expect(image).toMatchImageSnapshot({
    customSnapshotIdentifier:browserName
  });

  await browser.close();
});

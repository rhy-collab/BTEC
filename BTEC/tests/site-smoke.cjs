const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');

let baseUrl = process.env.SITE_URL;

function startStaticServer() {
  const root = path.resolve(__dirname, '..');
  const contentTypes = { '.css': 'text/css', '.html': 'text/html', '.js': 'text/javascript', '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg', '.pdf': 'application/pdf', '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp' };
  const server = http.createServer((request, response) => {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const requestedFile = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
    const filePath = path.resolve(root, requestedFile);
    if (!filePath.startsWith(`${root}${path.sep}`)) {
      response.writeHead(403).end('Forbidden');
      return;
    }
    fs.stat(filePath, (error, stats) => {
      if (error || !stats.isFile()) {
        response.writeHead(404).end('Not found');
        return;
      }
      response.writeHead(200, { 'Content-Type': contentTypes[path.extname(filePath)] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(response);
    });
  });
  return new Promise(resolve => server.listen(0, '127.0.0.1', () => resolve(server)));
}

async function checkPage(page, label, route = '') {
  const consoleErrors = [];
  const failedRequests = [];
  page.on('console', message => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });
  page.on('requestfailed', request => {
    if (new URL(request.url()).origin === new URL(baseUrl).origin) {
      failedRequests.push(`${request.url()} — ${request.failure()?.errorText}`);
    }
  });

  const response = await page.goto(new URL(route, baseUrl).href, { waitUntil: 'domcontentloaded', timeout: 15000 });
  assert.equal(response.status(), 200, `${label}: homepage should return HTTP 200`);
  const images = page.locator('img');
  for (let index = 0; index < await images.count(); index += 1) {
    await images.nth(index).scrollIntoViewIfNeeded();
    await page.waitForTimeout(80);
  }
  const reveals = page.locator('.reveal');
  for (let index = 0; index < await reveals.count(); index += 1) {
    await reveals.nth(index).scrollIntoViewIfNeeded();
    await page.waitForTimeout(35);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1200);

  const imageFailures = await page.locator('img').evaluateAll(images => images
    .filter(image => image.naturalWidth === 0)
    .map(image => image.getAttribute('src')));
  assert.deepEqual(imageFailures, [], `${label}: every image should load`);

  const nonLocalImages = await page.locator('img').evaluateAll(images => images
    .map(image => image.getAttribute('src'))
    .filter(source => source && !source.startsWith('images/')));
  assert.deepEqual(nonLocalImages, [], `${label}: image sources should come only from images/`);

  assert.equal(await page.locator('.whatsapp img[src="images/whatsapp.svg"]').count(), 1, `${label}: WhatsApp control should use a brand image`);

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  assert.ok(overflow <= 1, `${label}: page should not overflow horizontally (overflow: ${overflow}px)`);
  assert.equal(consoleErrors.length, 0, `${label}: console should contain no errors\n${consoleErrors.join('\n')}`);
  assert.equal(failedRequests.length, 0, `${label}: requests should not fail\n${failedRequests.join('\n')}`);
}

(async () => {
  const server = baseUrl ? null : await startStaticServer();
  if (server) baseUrl = `http://127.0.0.1:${server.address().port}/`;
  const browser = await chromium.launch({ headless: true });
  try {
    console.log('Checking desktop rendering…');
    const desktop = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
    await checkPage(desktop, 'desktop');
    const homeText = await desktop.locator('body').innerText();
    assert.match(await desktop.locator('h1').innerText(), /alternative route to university/i);
    assert.doesNotMatch(homeText, /parent-friendly/i);
    assert.match(homeText, /£899/);
    assert.match(homeText, /95% historical distinction rate/i);
    assert.ok(await desktop.locator('a[href="why-btec.html"]').count(), 'desktop: BTEC Explained should be a page link');
    assert.ok(await desktop.locator('a[href="curriculum.html"]').count(), 'desktop: Curriculum should be a page link');
    assert.ok(await desktop.locator('a[href="experience.html"]').count(), 'desktop: Experience should be a page link');
    assert.ok(await desktop.locator('a[href="fees.html"]').count(), 'desktop: Fees should be a page link');
    assert.ok(await desktop.locator('a[href="faq.html"]').count(), 'desktop: FAQ should be a page link');
    assert.ok(await desktop.locator('main > section').count() <= 8, 'desktop: homepage should remain compact');

    await checkPage(desktop, 'curriculum', 'curriculum.html');
    const curriculumText = await desktop.locator('body').innerText();
    assert.match(curriculumText, /15-unit/i);
    assert.match(curriculumText, /six mandatory units and nine optional units/i);
    assert.match(curriculumText, /20-month/i);
    assert.match(curriculumText, /September/i);
    assert.match(curriculumText, /February/i);
    assert.match(curriculumText, /April/i);
    assert.match(curriculumText, /within the next three months/i);

    await checkPage(desktop, 'BTEC explained', 'why-btec.html');
    assert.match(await desktop.locator('body').innerText(), /no traditional final written exams/i);

    await checkPage(desktop, 'experience', 'experience.html');
    assert.equal(await desktop.locator('img[src="images/rhys-coombes.jpeg"]').count(), 1, 'experience: supplied Rhys portrait should be used once');

    await checkPage(desktop, 'fees', 'fees.html');
    await checkPage(desktop, 'FAQ', 'faq.html');
    await desktop.locator('.faq-question').first().click();
    assert.equal(await desktop.locator('.faq-question').first().getAttribute('aria-expanded'), 'true');

    const requiredLinks = [
      'https://qualifications.pearson.com/en/qualifications/btec-international-level-3/business.html',
      'https://www.youtube.com/watch?v=JFB16smPJSM&t=24s',
      'https://www.youtube.com/watch?v=jbM4a_4aSYo',
      'https://www.youtube.com/watch?v=Nr7GOjYTCTQ'
    ];
    await desktop.goto(new URL('why-btec.html', baseUrl).href);
    const hrefs = await desktop.locator('a').evaluateAll(links => links.map(link => link.href));
    requiredLinks.forEach(link => assert.ok(hrefs.includes(link), `BTEC explained: required resource link should be present: ${link}`));

    const pdfResponse = await desktop.request.head(new URL('downloads/pearson-btec-international-level-3-business-specification.pdf', baseUrl).href);
    assert.equal(pdfResponse.status(), 200, 'Pearson specification download should load');
    assert.match(pdfResponse.headers()['content-type'] || '', /pdf|octet-stream/, 'specification download should be a PDF');

    await desktop.goto(baseUrl);
    await desktop.screenshot({ path: '/tmp/btec-home-desktop.png', fullPage: true });

    console.log('Checking mobile rendering…');
    const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
    await checkPage(mobile, 'mobile');
    await mobile.locator('.menu-toggle').click();
    assert.equal(await mobile.locator('.menu-toggle').getAttribute('aria-expanded'), 'true');
    assert.ok(await mobile.locator('.main-nav').isVisible(), 'mobile: navigation should open');
    await mobile.keyboard.press('Escape');
    assert.equal(await mobile.locator('.menu-toggle').getAttribute('aria-expanded'), 'false');
    await mobile.locator('.menu-toggle').click();
    await mobile.screenshot({ path: '/tmp/btec-home-mobile.png', fullPage: true, timeout: 15000 });

    console.log('Site smoke test passed: desktop + mobile, local images, navigation, FAQ, console and overflow.');
  } finally {
    await browser.close();
    if (server) await new Promise(resolve => server.close(resolve));
  }
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});

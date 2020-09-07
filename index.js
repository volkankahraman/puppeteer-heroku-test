const express = require('express')
const puppeteer = require("puppeteer");
const PORT = process.env.PORT || 5000
const app = express();


app.get('/',async function(req, res) {
    const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"]
  });
  const tab = await browser.newPage();
  const text = await (await tab.goto("http://example.com/")).text();
  console.log(text);
  console.log("done");
  browser.close();
	res.json({ message: text });
});
app.listen(PORT);

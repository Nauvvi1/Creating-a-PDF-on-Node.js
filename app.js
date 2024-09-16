const puppeteer = require('puppeteer');
const fs = require('fs');

async function createPdfFromHtml() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Beautiful PDF</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 20px;
        }
        h1 {
          color: #2c3e50;
          text-align: center;
        }
        h2 {
          color: #16a085;
          text-align: center;
        }
        p {
          font-size: 16px;
          line-height: 1.5;
          color: #34495e;
          text-align: justify;
        }
        .container {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
        }
        .image {
          text-align: center;
          margin: 20px 0;
        }
        img {
          width: 300px;
        }
        footer {
          margin-top: 50px;
          text-align: center;
          font-size: 14px;
          color: #7f8c8d;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Beautiful PDF</h1>
        <h2>Generated with Puppeteer and Node.js</h2>
        <div class="image">
          <img src="https://via.placeholder.com/300" alt="Placeholder Image">
        </div>
        <p>
          This is a beautiful PDF document generated from HTML using Puppeteer.
          You can fully style your content with CSS, add images, and format the layout just as you would in a web page.
          This flexibility allows you to create stunning documents with ease, combining the power of web technologies with PDF generation.
        </p>
      </div>
      <footer>
        &copy; 2024 Nauvvi1
      </footer>
    </body>
    </html>
  `;

  await page.setContent(htmlContent);

  await page.pdf({
    path: 'beautiful-output.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '20px', bottom: '20px', left: '20px', right: '20px' }
  });

  await browser.close();
}

createPdfFromHtml();


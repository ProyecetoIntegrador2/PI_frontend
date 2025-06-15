import puppeteer from 'puppeteer';

export default async function handler(req: any, res: any) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/home/dashboard/1', { waitUntil: 'networkidle0' });
    const pdf = await page.pdf({ format: 'A4' });
    await browser.close();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=dashboard.pdf');
    res.status(200).end(pdf); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al generar el PDF');
  }
}
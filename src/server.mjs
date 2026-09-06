import { createServer } from 'node:http';
import { p95, mean } from './stats.mjs';
const sample = [12, 40, 8, 95, 33, 7, 61, 20];
const port = process.env.PORT || 3000;
createServer((req, res) => {
  res.setHeader('content-type', 'text/html');
  res.end(`<!doctype html><meta charset="utf8"><title>Stats dashboard</title>
  <body style="font-family:system-ui;padding:2rem">
    <h1>Stats dashboard</h1>
    <p>p95 = ${p95(sample)} · mean = ${mean(sample).toFixed(1)}</p>
  </body>`);
}).listen(port, () => console.log(`serving on ${port}`));

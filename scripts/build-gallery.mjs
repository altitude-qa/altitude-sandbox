import { mkdirSync, writeFileSync } from 'node:fs';
import { p95, mean } from '../src/stats.mjs';
mkdirSync('dist-gallery', { recursive: true });
const sample = [12, 40, 8, 95, 33, 7, 61, 20];
writeFileSync('dist-gallery/index.html', `<!doctype html><meta charset="utf8"><title>Stats gallery</title>
<link rel="stylesheet" href="./style.css">
<body><main><h1>Stats gallery</h1>
<p class="stat">p95 <b>${p95(sample)}</b></p>
<p class="stat">mean <b>${mean(sample).toFixed(1)}</b></p>
</main></body>`);
writeFileSync('dist-gallery/style.css', `body{font-family:system-ui;background:#0b0b0f;color:#e8e8ea;padding:3rem}
h1{font-weight:650}.stat{font-size:1.25rem}.stat b{color:#8ab4ff}`);
console.log('built dist-gallery');

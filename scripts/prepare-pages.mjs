import { readFile, mkdir, writeFile } from 'node:fs/promises';

// Pages serves directories directly, so each client route gets the same app entry.
const routes = ['products', 'products/paddle-wheel', 'products/compact-aerator',
  'products/spiral-impeller', 'products/water-pumps', 'products/pond-equipment',
  'products/pond-care', 'aerators', 'equipment', 'probiotics', 'solutions', 'about',
  'quality', 'knowledge', 'request-a-quote', 'contact', 'image-credits',
  'legal/privacy', 'legal/terms', 'accessibility'];
const html = await readFile('dist/index.html', 'utf8');
for (const route of routes) {
  await mkdir(`dist/${route}`, { recursive: true });
  await writeFile(`dist/${route}/index.html`, html);
}
await writeFile('dist/404.html', html);
await writeFile('dist/.nojekyll', '');
console.log(`Prepared ${routes.length} direct-entry routes for GitHub Pages.`);

import { readFileSync } from 'node:fs';

const rootPage = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const appPage = readFileSync(new URL('../apps/web/index.html', import.meta.url), 'utf8');

const errors = [];
if (rootPage !== appPage) {
  errors.push('Root index.html and apps/web/index.html have drifted. Keep both deployment entry points in sync.');
}
if (!/^<!doctype html>/i.test(rootPage.trimStart())) {
  errors.push('index.html must begin with a valid HTML doctype.');
}
if (!/<html\b/i.test(rootPage) || !/<\/html>/i.test(rootPage)) {
  errors.push('index.html is missing its opening or closing html element.');
}
for (const id of ['services', 'vendors', 'contact']) {
  if (!new RegExp('id=["\\']' + id + '["\\']').test(rootPage)) {
    errors.push('Expected page section is missing: #' + id);
  }
}
if (errors.length) {
  console.error('EcoHubNG checks failed:\n- ' + errors.join('\n- '));
  process.exitCode = 1;
} else {
  console.log('EcoHubNG checks passed: synchronized entry points and expected sections exist.');
}

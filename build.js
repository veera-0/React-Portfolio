#!/usr/bin/env node

const { execSync } = require('child_process');

const buildDate = new Date().toISOString();
const defineArg = `import.meta.env.BUILD_DATE={"@json":"${buildDate}"}`;

try {
  execSync(`vite build --define "${defineArg}"`, { stdio: 'inherit' });
  process.exit(0);
} catch (error) {
  process.exit(1);
}

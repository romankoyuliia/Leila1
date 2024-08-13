import { defineConfig } from '@playwright/test';
 
export default defineConfig({
  testDir: './tests',
  use: {
    headless: true,
  },
  reporter: [['list'], ['json', { outputFile: 'test-results.json' }]],
  timeout: 30000,
});

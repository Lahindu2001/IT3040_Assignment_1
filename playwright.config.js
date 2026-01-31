// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  timeout: 60000, // 60 seconds per test
  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],
  use: {
    baseURL: 'https://www.swifttranslator.com/',
    trace: 'retain-on-failure',
    screenshot: 'on',
    video: 'on',
    actionTimeout: 30000,
    navigationTimeout: 30000,
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 },
      },
    },
  ],
});

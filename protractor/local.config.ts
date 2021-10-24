import { browser, Config } from 'protractor';

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/google.spec.js'],
  seleniumAddress: 'http://localhost:4444/wd/hub',
  onPrepare: () => {
    // Shows deprecated but will keep for workshop
    browser.ignoreSynchronization = true;
  },
};

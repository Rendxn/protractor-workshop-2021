import { browser, Config } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  SELENIUM_PROMISE_MANAGER: false,
  specs: ['../test/google.spec.js'],
  onPrepare: () => {
    // Shows deprecated but will keep for workshop
    browser.ignoreSynchronization = true;
    reporter();
  },
};

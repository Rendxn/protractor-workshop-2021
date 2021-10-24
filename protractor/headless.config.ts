import { Config } from 'protractor';
import { config as base } from './local.config';

export const config: Config = {
  ...base,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu'],
    },
  },
};

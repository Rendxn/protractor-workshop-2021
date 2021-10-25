import { $, ElementFinder } from 'protractor';

export class MenuContentPage {
  private tShirtMenu: ElementFinder;

  constructor() {
    this.tShirtMenu = $('li:nth-child(3) > a[title="T-shirts"]');
  }

  public async goToTShirtMenu(): Promise<void> {
    await this.tShirtMenu.click();
  }
}

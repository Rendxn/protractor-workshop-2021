import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private proceedToCheckoutBtn: ElementFinder;

  constructor() {
    this.proceedToCheckoutBtn = $('button[name="processAddress"]');
  }

  public async goToCheckout(): Promise<void> {
    await this.proceedToCheckoutBtn.click();
  }
}

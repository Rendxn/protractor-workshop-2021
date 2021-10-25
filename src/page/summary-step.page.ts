import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private proceedToCheckoutBtn: ElementFinder;

  constructor() {
    this.proceedToCheckoutBtn = $('.standard-checkout');
  }

  public async goToCheckout(): Promise<void> {
    await this.proceedToCheckoutBtn.click();
  }
}

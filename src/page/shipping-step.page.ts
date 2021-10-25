import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private termsInput: ElementFinder;

  private proceedToCheckoutBtn: ElementFinder;

  constructor() {
    this.termsInput = $('#cgv');
    this.proceedToCheckoutBtn = $('button[name="processCarrier"]');
  }

  public async acceptTerms(): Promise<void> {
    await this.termsInput.click();
  }

  public async goToCheckout(): Promise<void> {
    await this.proceedToCheckoutBtn.click();
  }
}

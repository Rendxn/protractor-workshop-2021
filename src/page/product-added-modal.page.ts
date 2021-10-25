import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private proceedToCheckoutBtn: ElementFinder;

  public get ProceedToCheckoutBtn(): ElementFinder {
    return this.proceedToCheckoutBtn;
  }

  public set ProceedToCheckoutBtn(value: ElementFinder) {
    this.proceedToCheckoutBtn = value;
  }

  constructor() {
    this.proceedToCheckoutBtn = $('a[title="Proceed to checkout"]');
  }

  public async goToCheckout(): Promise<void> {
    await this.proceedToCheckoutBtn.click();
  }
}

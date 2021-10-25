import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByBankWireBtn: ElementFinder;

  constructor() {
    this.payByBankWireBtn = $('.bankwire');
  }

  public async choosePaymentMethod(): Promise<void> {
    await this.payByBankWireBtn.click();
  }
}

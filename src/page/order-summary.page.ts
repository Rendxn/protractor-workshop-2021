import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private message: ElementFinder;

  constructor() {
    this.message = $('.cheque-indent');
  }

  public async confirmationMessage(): Promise<string> {
    return this.message.getText();
  }
}

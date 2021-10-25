import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private addToCartBtn: ElementFinder;

  public get AddToCartBtn(): ElementFinder {
    return this.addToCartBtn;
  }

  public set AddToCartBtn(value: ElementFinder) {
    this.addToCartBtn = value;
  }

  constructor() {
    this.addToCartBtn = $('.ajax_add_to_cart_button');
  }

  public async addToCart(): Promise<void> {
    await this.addToCartBtn.click();
  }
}

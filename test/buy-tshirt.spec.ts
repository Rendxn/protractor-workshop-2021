import {
  browser,
  ExpectedConditions,
  ProtractorExpectedConditions,
} from 'protractor';

import {
  MenuContentPage,
  ProductListPage,
  ProductAddedModalPage,
  SummaryStepPage,
  SignInStepPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  BankPaymentPage,
  OrderSummaryPage,
} from '../src/page/index';

describe('Buy a t-shirt', () => {
  const EC: ProtractorExpectedConditions = ExpectedConditions;

  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentStepPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await browser.wait(EC.elementToBeClickable(productListPage.AddToCartBtn), 3000);
    await productListPage.addToCart();
    await browser.wait(EC.elementToBeClickable(productAddedModalPage.ProceedToCheckoutBtn), 3000);
    await productAddedModalPage.goToCheckout();
    await summaryStepPage.goToCheckout();
    await signInStepPage.fillForm();
    await signInStepPage.signIn();
    await addressStepPage.goToCheckout();
    await shippingStepPage.acceptTerms();
    await shippingStepPage.goToCheckout();
    await paymentStepPage.choosePaymentMethod();
    await bankPaymentStepPage.confirmOrder();

    await expect(orderSummaryPage.confirmationMessage())
      .toBe('Your order on My Store is complete.');
  });
});

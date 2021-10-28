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

  describe('Given a page', async () => {
    beforeAll(async () => {
      await browser.get('http://automationpractice.com/');
    });

    describe('when wanting to buy a  t-shirt', async () => {
      beforeAll(async () => {
        const menuContentPage: MenuContentPage = new MenuContentPage();
        const productListPage: ProductListPage = new ProductListPage();
        const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
        const summaryStepPage: SummaryStepPage = new SummaryStepPage();

        await menuContentPage.goToTShirtMenu();
        await browser.wait(EC.elementToBeClickable(productListPage.AddToCartBtn), 3000);
        await productListPage.addToCart();
        await browser.wait(EC.elementToBeClickable(productAddedModalPage.ProceedToCheckoutBtn),
          3000);
        await productAddedModalPage.goToCheckout();
        await summaryStepPage.goToCheckout();
      });

      describe('Sign in the webpage', async () => {
        beforeAll(async () => {
          const signInStepPage: SignInStepPage = new SignInStepPage();

          await signInStepPage.fillForm();
          await signInStepPage.signIn();
        });

        describe('Choose default address', async () => {
          beforeAll(async () => {
            const addressStepPage: AddressStepPage = new AddressStepPage();
            const shippingStepPage: ShippingStepPage = new ShippingStepPage();

            await addressStepPage.goToCheckout();
            await shippingStepPage.acceptTerms();
            await shippingStepPage.goToCheckout();
          });

          describe('Pay order', async () => {
            beforeAll(async () => {
              const paymentStepPage: PaymentStepPage = new PaymentStepPage();
              const bankPaymentStepPage: BankPaymentPage = new BankPaymentPage();

              await paymentStepPage.choosePaymentMethod();
              await bankPaymentStepPage.confirmOrder();
            });

            it('then should be bought a t-shirt', async () => {
              const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

              await expect(orderSummaryPage.confirmationMessage())
                .toBe('Your order on My Store is complete.');
            });
          });
        });
      });
    });
  });
});

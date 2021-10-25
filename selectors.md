# CSS Selector Efficiency

According to multiple articles and especifically a [blog post](https://www.stevesouders.com/blog/2009/06/18/simplifying-css-selectors/)
made by Steve Souders, where he mentions a section of David Hyatt's article on Writing Efficient CSS for use in the Mozilla UI:

> The style system matches a rule by **starting with the rightmost selector** and moving to the left through the rule’s selectors.
> As long as your little subtree continues to check out, the style system will continue moving to the left until it either matches the rule or bails out because of a mismatch.

Therefore, the key to optimizing CSS selectors is to focus on the rightmost selector, also called the _key selector_ and matching the smallest number possible of elements with it.

Also, in my opinion, I value readability over performance, as long as it's not a very big performance hit.

## MenuContentPage

- From: `#block_top_menu > ul > li:nth-child(3) > a`
- To: `li:nth-child(3) > a[title="T-shirts"]`

## ProductListPage

- From: `#center_column a.button.ajax_add_to_cart_button.btn.btn-default`
- To: `.ajax_add_to_cart_button`

## ProductAddedModalPage

- From: `[style*="display: block;"] .button-container > a`
- To: `a[title="Proceed to checkout"]`

## SummaryStepPage

- From: `.cart_navigation span`
- To: `.standard-checkout`

## AddressStepPage

- From: `#center_column > form > p > button > span`
- To: `button[name="processAddress"]`

## ShippingStepPage

### Accept terms

This remains unchanged, since it uses an `id` selector, which is the fastest and is unique.

### Checkout

- From: `#form > p > button > span`
- To: `button[name="processCarrier"]`

## PaymentStepPage

- From: `#HOOK_PAYMENT > div:nth-child(1) > div > p > a`
- To: `.bankwire`

## BankPaymentPage

- From: `#cart_navigation > button > span`
- To: `#cart_navigation .button-medium`

## OrderSummaryPage

- From: `#center_column > div > p > strong`
- To: `.cheque-indent`

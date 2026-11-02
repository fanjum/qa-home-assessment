Bug Reports: SauceDemo

Environment: https://www.saucedemo.com/
OS: Chrome on Windows
User: problem_user
Date: 31-10-2026


BUG-01: Sorting has no effect
- Severity: Major · Priority: P2 · Test cases: PS-TC002, PS-TC003, PS-TC004
- Steps to Reproduce:
    - Log in as problem_user.
    - Choose any option in the sort dropdown (for example Price low to high).
- Observed Behavior: Sorting order stayed A to Z. Clicking other sort options had no impact. This is reproducible for all four options.
- Expected Behavior: The products should reorder to match the selected option.
- Evidence: manual-tests\Screenshots\BUG-01

BUG-02: All product images on the Products grid are the same placeholder
- Severity: Minor · Priority: P1 · Test cases: PS-TC006, AC-TC003
- Steps to Reproduce:
    - Log in as problem_user and view the Products page.
- Observed Behavior: All 6 products on the grid show the same product picture. The product detail pages show the correct image, so this issue is limited to the Products grid.
- Expected Behavior: Each product should show its own image.
- Evidence: manual-tests\Screenshots\BUG-02

BUG-03: Three products cannot be added to the cart
- Severity: Major · Priority: P1 · Test case: AC-TC002
- Steps to Reproduce:
    - Log in as problem_user.
    - Click "Add to cart" on each of the 6 products, one at a time.
- Observed Behavior: Bolt T-Shirt, Fleece Jacket and Test.allTheThings() T-Shirt (Red) do not respond. Their buttons stay "Add to cart" and the cart icon stops at 3.
- Expected Behavior: Each button should change to "Remove" and the cart icon reaches 6.
- Evidence: manual-tests\Screenshots\BUG-03

BUG-04: Product title links open the wrong product
- Severity: Critical · Priority: P1 · Test case: AC-TC003
- Steps to Reproduce:
    - Log in as problem_user.
    - Click each product title on the Products page.
- Observed Behavior: Every title opens a different product (Backpack opens Fleece Jacket, Bike Light opens Bolt T-Shirt, Bolt T-Shirt opens Onesie, Fleece Jacket opens "product NOT FOUND", Onesie opens Test.allTheThings(), Test.allTheThings  () opens Backpack).
- Expected Behavior: The detail page should show the product that was clicked.
- Evidence: manual-tests\Screenshots\BUG-04

BUG-05: Remove button on the Products page and Product Details page does nothing
- Severity: Major · Priority: P2 · Test cases: AC-TC004, AC-TC005, AC-TC006
- Steps to Reproduce:
    - Log in as problem_user and add the some products.
    - Click "Remove" on a product from the Products page.
    - Click on product title on the Products page.
    - Click "Remove" on a product from the Product Details page.
- Observed Behavior: Nothing happens. The button stays "Remove" and the cart icon does not change. Removing from the Cart page does work, which is the workaround.
- Expected Behavior: The button should return to "Add to cart" and the cart icon decreases.
- Evidence: manual-tests\Screenshots\BUG-05

BUG-06: "ITEM NOT FOUND" page shows an Add to cart button and an invalid price
- Severity: Critical · Priority: P3 · Test case: AC-TC007
- Steps to Reproduce:
    - Log in as problem_user.
    - Open /inventory-product.html?id=99.
    - Review the page and click "Add to cart".
- Observed Behavior: 
    - UI Issue: Shows "ITEM NOT FOUND", but still displays an "Add to cart" button with an invalid price ($√-1).
    - Inconsistent Behavior:
        - Session 1: Clicking "Add to cart" adds a phantom item, causing the Checkout: Overview page to crash/render blank (due to the error code on price probably).
        - Session 2: Clicking "Add to cart" does nothing.
- Expected Behavior: A product-not-found message should be shown and no Add to cart button or price should be displayed.
- Evidence: manual-tests\Screenshots\BUG-06

BUG-07: Checkout can proceed with an empty cart
- Severity: Minor · Priority: P2 · Test case: CR-TC005
- Steps to Reproduce:
    - Log in and make sure the cart is empty.
    - Open the cart and click Checkout.
- Observed Behavior: The app proceeds to the Your Information page and a zero-product checkout can be started.
- Expected Behavior: Checkout should be blocked for an empty cart and user should get appropriate message.
- Evidence: manual-tests\Screenshots\BUG-07

BUG-08: Last Name field overwrites First Name, blocking checkout
- Severity: Critical · Priority: P1 · Test case: CHK-TC001. CHK-TC004. CHK-TC005
- Steps to Reproduce:
    - Log in as problem_user and add any product to the cart.
    - Open the cart and click Checkout.
    - Type in First Name.
    - Type in Last Name.
    - Type in Postal Code and click Continue.
- Observed Behavior: Typing in Last Name overwrites First Name and Last Name stays empty. Continue shows "Error: Last Name is required". The order cannot be completed through the UI.
- Expected Behavior: Each field should retain its own value and Continue should move forward to the Checkout: Overview page.
- Evidence: manual-tests\Screenshots\BUG-08

BUG-09: Order totals are doubled in Checkout: Overview page
- Severity: Critical · Priority: P1 · Test cases: CHK-TC007, CHK-TC008
- Steps to Reproduce:
    - Log in as problem_user and add a product.
    - Navigate to the Checkout: Overview page (/checkout-step-two.html).
    - Review the price summary.
- Observed Behavior: Product total is double the value than actual amount. The tax is a correct 8% but of the doubled subtotal.
- Expected Behavior: Product total should display accurate value.
- Evidence: manual-tests\Screenshots\BUG-09 

BUG-10: Checkout: Overview and Finish are reachable by direct URL without customer info
- Severity: Low · Priority: P3 · Test case: CHK-TC010
- Steps to Reproduce:
    - Log in and add an product.
    - Navigate directly to /checkout-step-two.html.
    - Click Finish.
- Observed Behavior: The Checkout: Overview page loads with Finish enabled and the order completes with no customer information entered.
- Expected Behavior: The user should be sent back to the information step. An order should not be completed without a name and postal code.
- Evidence: manual-tests\Screenshots\BUG-10

BUG-11: Cart is not cleared after an order completes
- Severity: Major · Priority: P2 · Test case: CHK-TC012
- Steps to Reproduce:
    - Log in as problem_user, add an product, and complete an order.
    - On the confirmation page, click Back Home.
- Observed Behavior: The cart is not cleared. The cart icon still shows the product count and the product still shows "Remove" after Back Home.
- Expected Behavior: The cart should be empty, the cart icon should be cleared, and every product shows "Add to cart".
- Evidence: manual-tests\Screenshots\BUG-11

BUG-12: "Generate PDF order" button appears for problem_user only
- Severity: Minor · Priority: P3 · Scope: problem_user (confirmed absent for standard_user)
Note: This control is not in the requirements. Raising it for product clarification as it may be an intended feature that needs a spec and test coverage, or an unintended addition. It is logged here so the gap is visible, not as a judgement that it is wrong.
- Steps to Reproduce:
    - Complete an order as problem_user.
    - Observe the confirmation page. Repeat as standard_user.
- Observed Behavior: problem_user sees an extra "Generate PDF order" button that standard_user does not. The generated PDF also carries the doubled totals from BUG-09.
- Expected Behavior: Both users should see the same set of controls on the confirmation page (the requirements do not mention a PDF export).
- Evidence: manual-tests\Screenshots\BUG-12

BUG-13: Product copy contains code-like strings in customer-facing text
- Severity: Minor · Priority: P2 · Test case: PS-TC006
- Steps to Reproduce:
    - Log in and view the Products page (/inventory.html).
    - Read the Sauce Labs Backpack description and the sixth product's name.
- Observed Behavior: The Backpack description begins with "carry.allTheThings()" and one product is named "Test.allTheThings() T-Shirt (Red)". These read as code or developer artifacts rather than normal product copy. They appear for all users.
- Expected Behavior: Customer-facing product names and descriptions should be plain, readable copy with no code-style wordings.
- Evidence: manual-tests\Screenshots\BUG-13
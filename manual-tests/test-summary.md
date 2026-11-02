Test Summary: SauceDemo (problem_user)
Execution & Results: Executed 42 test cases across 6 modules. 23 Passed, 16 Failed, 3 Blocked (55% overall pass rate; 59% executable pass rate).

Area Breakdown:
    - Stable: Login and Logout passed completely (100%); Cart Review was mostly stable (4/5 passed).
    - Impacted: Failures were heavily concentrated in Product Sorting, Add to Cart, and Checkout.

Critical / Release-Blocking Defects:
    - Name Field Bug (BUG-08): Entering a Last Name overwrites the First Name field, blocking checkout progression (directly causing the 3 blocked test cases).
    - Calculation Bug (BUG-09): Order totals are doubled in the UI and carry over onto the PDF receipt.
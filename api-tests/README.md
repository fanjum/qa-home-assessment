Simple Grocery Store API - QA Assignment

This collection covers the core end-to-end flow (auth -> products -> cart -> order) and includes three targeted negative tests. 

Breakdown of the negative cases:
1. Missing Auth (GET /orders): Ensures the API blocks unauthenticated requests with a 401 and the correct "missing header" error.
2. Invalid Product ID (GET /products/999999): Verifies that requesting a non-existent resource returns a clean 404 rather than throwing a server error.
3. Malformed Payload (POST /orders): Sends invalid JSON to confirm the API safely catches parse errors and returns a 400 Bad Request.

A quick note on state: Because this API destroys the cart once an order is successfully placed, I intentionally isolated the negative tests from the cart flow. Trying to test invalid cart items after checkout would just result in a 404 (cart not found), which doesn't actually test the item validation logic.

Setup note: All required variables have defaults built into the Collection Variables. You can run this file as-is without needing to import a separate environment.
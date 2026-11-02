DevTools Findings: Checkout Flow (standard_user) 

Environment: https://www.saucedemo.com/
OS: Chrome on Windows
User: standard_user
Date: 01-11-2026

- Steps:
    - Log into the application
    - From Product Page > Add a Product to cart
    - Navigate to Cart page > Click Checkout
    - On Checkout: Your Information input first name, last name and postal code then click Continue button.
    - On Checkout: Overview click Finish button. > Order Complete


API requests
    - No API requests were observed during the checkout flow. 
    - Therefore there is no request payload, response body, or status code to record for any checkout action.

Network Activity
    - All remaining requests were static resources, none carrying a request payload.
    - Resource: /inventory.html (direct address / refresh)
        - Method: GET
        - Type: document
        - Status: 404
        - Result: Fail (see section 8)
    - Resource: /?/inventory.html
        - Method: GET
        - Type: document
        - Status: 200
        - Result: Pass
    - Resource: /assets/index-DnLqFcJI.js
        - Method: GET
        - Type: script
        - Status: 304
        - Result: Pass
    - Resource: /assets/index-aSZoiKGF.css
        - Method: GET
        - Type: stylesheet
        - Status: 304
        - Result: Pass
    - Resource: /manifest.json
        - Method: GET
        - Type: fetch (manifest)
        - Status: 200
        - Result: Pass
   -  Resource: fonts.googleapis.com (DM Mono, DM Sans)
        - Method: GET
        - Type: stylesheet
        - Status: 200
        - Result: Pass
    - Resource: fonts.gstatic.com (.woff2 font files)
        - Method: GET
        - Type: font
        - Status: 200
        - Result: Pass
    - Resource: /assets/-1200x1500-.jpg (product images)
        - Method: GET
        - Type: img
        - Status: 200
        - Result: Pass
    - Resource: /assets/checkmark-VLWQafip.png (Order Complete)
        - Method: GET
        - Type: img
        - Status: 200
        - Result: Pass
    - Resource: favicon.ico
        - Method: GET
        - Type: other
        - Status: 200 (cache)
        - Result: Pass
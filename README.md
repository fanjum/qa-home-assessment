# QA Home Assessment

Three deliverables, one folder each:

| Folder | Contents |
| --- | --- |
| `manual-tests/` | Manual test cases (`test-cases.xlsx`), bug reports, DevTools findings, test summary, and screenshots |
| `playwright-tests/` | Automated UI test against [SauceDemo](https://www.saucedemo.com) (`saucedemo.spec.ts`) |
| `api-tests/` | Postman collection for the [Simple Grocery Store API](https://github.com/vdespa/Postman-Complete-Guide-API-Testing/blob/main/simple-grocery-store-api.md) (`postman-collection.json`) |

## Repository layout

```
qa-home-assessment/
├── manual-tests/
│   ├── test-cases.xlsx
│   ├── bug-reports.md
│   ├── devtools-findings.md
│   ├── test-summary.md
│   └── Screenshots/
│       └── BUG-01 ... BUG-13/
├── playwright-tests/
│   ├── saucedemo.spec.ts
│   ├── package.json
│   └── package-lock.json
├── api-tests/
│   ├── postman-collection.json
│   └── README.md
└── README.md
```
## Manual tests

`manual-tests/test-summary.md` summarises the manual run (42 cases across 6 modules). `bug-reports.md` lists each defect with steps and severity; evidence for each is in `Screenshots/BUG-xx/`. `devtools-findings.md` records network and console observations from the checkout flow.

## Postman collection

### Import

1. Open Postman.
2. Click **Import** (top left).
3. Drag in `api-tests/postman-collection.json`, or browse to it.
4. The collection **Simple Grocery Store - QA** appears under Collections in the left sidebar.

No environment file is needed. All required variables (base URL, client name, customer name, order quantity) have defaults as collection variables, and runtime values (token, product id, cart id, order id) are set by the test scripts.

### Run

1. Hover over the collection, choose Run collection.
2. Leave all requests selected in their existing order.
3. Click Run Simple Grocery Store - QA.
4. Each request lists its assertions as passed or failed. Click a failed one to see expected versus actual.

---

## Playwright tests

### What the spec covers

`saucedemo.spec.ts` contains one end-to-end test with four steps:

1. Log in to https://www.saucedemo.com as `standard_user`
2. Verify the inventory page loads (page title `Swag Labs`, heading `Products`, at least one item visible)
3. Add the Sauce Labs Backpack to the cart and verify the cart badge shows `1`
4. Log out via the side menu and verify the login button is visible again

Locators use the site's `data-test` attributes and are grouped in a single `LOCATORS` object at the top of the file.

### Setup (first time only)

All Playwright commands run from the `playwright-tests` folder, which holds `package.json`.

```bash
cd playwright-tests
npm install
npx playwright install chromium
```

`npm install` installs `@playwright/test`. `npx playwright install chromium` downloads the browser binary. There is no `playwright.config.ts`, so Playwright uses its defaults and runs in Chromium only.

### Run

`npx playwright test saucedemo.spec.ts`


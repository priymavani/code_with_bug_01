# error-backend

> ⚠️ **This repository intentionally contains coding errors.**  
> It is designed for use with automated tools like ESLint and Jest to detect common mistakes.

---

## What's Wrong (Intentional Errors)

| File | Error Type | Description |
|------|-----------|-------------|
| `controllers/userController.js` | Runtime | `users` is used but never imported (`ReferenceError`) |
| `controllers/userController.js` | Lint | `unusedVar` is declared but never used |
| `controllers/userController.js` | Runtime | No body validation — crashes if `req.body` is missing |
| `controllers/productController.js` | Lint/Runtime | Wrong import path: `'../util/mathUtil'` (should be `'../utils/mathUtil'`) |
| `controllers/productController.js` | Lint | Typo: `prodcutList` instead of `productList` |
| `controllers/productController.js` | Runtime | Accesses `item.titre` instead of `item.title` |
| `utils/mathUtil.js` | Logic Bug | `sum(a, b)` returns `a - b` instead of `a + b` |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the server

```bash
npm start
```

Server runs at `http://localhost:3000`

---

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/users` | Returns list of users *(crashes — missing import)* |
| POST | `/users` | Adds a new user *(crashes if body missing)* |
| GET | `/products` | Returns products *(wrong property access)* |
| GET | `/products/sum?a=1&b=2` | Returns sum *(wrong — subtracts instead)* |

---

## Running Tests

```bash
npm test
```

Expected outcome:
- ❌ `GET /users` — FAILS (ReferenceError: users is not defined)
- ❌ `POST /users` — May FAIL
- ❌ `GET /products` — FAILS (wrong import path for mathUtil)
- ❌ `GET /products/sum` — FAILS (result is `a - b`, test expects `a + b`)

---

## Running ESLint

```bash
npm run lint
```

Expected lint errors:
- `no-unused-vars` — `unusedVar` in `userController.js`
- `no-undef` — `users` in `userController.js`
- Import path typo in `productController.js`

---

## Purpose

This project is used to demonstrate how static analysis tools (ESLint) and test runners (Jest) can automatically detect:

- **Missing imports** → `no-undef` rule catches undefined variables
- **Unused variables** → `no-unused-vars` rule
- **Logic bugs** → Tests fail when output doesn't match expectations
- **Runtime crashes** → Caught by test runner error reports

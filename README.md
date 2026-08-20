# 🛍️ Shop Hub

A modern, responsive e-commerce frontend built with React and Redux Toolkit.

Shop Hub was created as a practical project to understand and implement
Redux Toolkit, especially `createAsyncThunk`, API state management,
React Router, and basic cart state management.

## 🚀 Live Demo

👉 [View Shop Hub Live](https://YOUR-USERNAME.github.io/Shop-Hub/)

## ✨ Features

- 🔍 Product search
- ⚡ API data fetching with `createAsyncThunk`
- 🔄 Loading, fulfilled and rejected states
- 🛒 Add products to cart
- 🗑️ Remove products from cart
- 🧹 Clear cart
- 💾 Cart persistence using LocalStorage
- 🔔 Add/remove cart notifications
- 📱 Responsive design
- 🌙 Dark aesthetic UI
- 🧭 Client-side navigation with React Router

## 🛠️ Tech Stack

- React
- Redux Toolkit
- React Redux
- React Router
- Axios
- Tailwind CSS
- React Toastify
- DummyJSON API
- Vite

## 📂 Project Structure

```text
Shop-Hub/
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── CartHeader.jsx
│   │   ├── CartItem.jsx
│   │   ├── CartSummery.jsx
│   │   ├── EmptyCart.jsx
│   │   ├── Footer.jsx
|   |   ├── MiddleSection.jsx
│   │   └── Navbar.jsx
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── SearchPage.jsx
│   │   └── CartPage.jsx
│   │
│   ├── redux/
│   │   ├── store.js
│   │   └── features/
│   │       ├── productSlice.js
│   │       └── cartSlice.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## 🧠 Redux Concepts Used

This project mainly focuses on:

- `configureStore`
- `createSlice`
- `useSelector`
- `useDispatch`
- `createAsyncThunk`
- `extraReducers`
- Redux state management
- API request lifecycle
- LocalStorage persistence

## 🔄 Application Flow

```text
Search Product
      ↓
React Router
      ↓
Search Page
      ↓
createAsyncThunk
      ↓
DummyJSON API
      ↓
extraReducers
      ↓
Redux Store
      ↓
Product Cards
      ↓
Add to Cart
      ↓
Cart Redux State
      ↓
LocalStorage
      ↓
Cart Page
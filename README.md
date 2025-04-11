# 💸Budget & Expense Tracker

**Tech Stack:**  
React.js • JavaScript (ES6+) • Chart.js • localStorage • CSS Modules

---

## 🧾 Overview

THis is a simple, responsive **budget & expense tracker** built using **React.js**.  
It allows users to:

- Add income and expense transactions
- Get live budget stats (total income, expenses, and balance)
- View spending breakdown with a **pie chart**
- Toggle between **Light/Dark mode**
- Save all data locally using `localStorage` – no backend required

---

## 🚀 Features

### 📥 Add Transactions
- Input amount, description, and type (income/expense)
- Form validates input and uses shake animation for invalid entries

### 📊 Live Budget Summary
- Calculates and displays:
  - ✅ Total Income
  - ❌ Total Expenses
  - 💰 Balance

### 🧾 Transaction History
- Scrollable list of transactions with auto-scroll to newest

### 📦 Persistent Data
- Stores data in `localStorage`
- Fully reload-safe and offline-friendly

### 📉 Pie Chart Visualization
- Pie chart of income vs expenses using Chart.js



---


---

## 🛠️ Getting Started

### 📦 Install Dependencies

```bash
npm install
```

### 🔄 Start Development Server

```bash
npm start
```

App runs on: `http://localhost:3000`

---
# 📊 Portfolio Dashboard

A full-stack investment portfolio dashboard that displays **summary cards, sector/market-cap allocation, performance charts, and holdings data**.  
Built with **React** (frontend) and **Node.js + Express** (backend).

---

## 🚀 Features
- **Real-time portfolio summary** (total value, invested amount, gains/losses)
- **Top & worst performers** with gain percentage
- **Diversification score** and **risk level**
- **Pie charts** for sector & market-cap allocation
- **Line chart** comparing Portfolio, Nifty50, and Gold performance
- **Holdings table** with gain/loss color coding
- **Responsive UI** for mobile and desktop
- **Styled with modern CSS** (no external CSS frameworks)

---

## 📂 Project Structure
```
portfolio/
│
├── backend/       # Node.js + Express API
│   ├── server.js
│   ├── routes/
│   └── data/
│
├── frontend/      # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/portfolio-dashboard.git
cd portfolio
```

---

### 2️⃣ Install Backend Dependencies
```bash
cd backend
npm install
```

---

### 3️⃣ Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

---

## ▶️ Running the Project

### **Start Backend Server**
```bash
cd backend
npm start
```
Runs at **http://localhost:5000** by default.  
Check by visiting:  
```
http://localhost:5000/api/portfolio/summary
```

---

### **Start Frontend (React App)**
```bash
cd frontend
npm start
```
Runs at **http://localhost:3000** by default.  

---

## 🌐 Connecting Frontend & Backend

- The **frontend** fetches data from **http://localhost:5000**.
- To avoid CORS issues, add this to `frontend/package.json`:
```json
"proxy": "http://localhost:5000"
```
Then in your React code, you can call:
```js
fetch("/api/portfolio/summary")
```
without hardcoding the full URL.

---


## 🧩 Tech Stack
- **Frontend**: React, Recharts, CSS
- **Backend**: Node.js, Express
- **Data**: Mock JSON / API

---

## 📌 Notes
- **Run backend first** before starting frontend.

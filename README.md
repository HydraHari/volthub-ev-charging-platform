# ⚡ VoltHub — Smart EV Charging Network Platform

A modern EV Charging Network Management Platform built with **React, Vite, and REST APIs**. VoltHub provides an interactive dashboard to manage EV charging stations, monitor charging sessions, handle bookings, and visualize network performance.

## 🚀 Features

- **Dashboard:** Overview of charging network statistics and key metrics.
- **Station Management:** View and manage EV charging stations.
- **Charging Sessions:** Monitor charging activity and session information.
- **Bookings:** Manage charging reservations.
- **Analytics:** Visualize network performance using interactive charts.
- **REST API Integration:** Fetch and manage application data through API services.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Frontend UI |
| Vite | Development server and build tool |
| JavaScript | Application logic |
| CSS | Styling and responsive layout |
| REST API | Data communication |
| JSON Server | Mock backend API |
| Recharts | Data visualization |

## 📁 Project Structure

```text
VoltHub/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   └── StatCard.jsx
│   ├── data/
│   │   └── mockData.js
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── GenericPage.jsx
│   │   └── Stations.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── db.json
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/volthub-ev-charging-platform.git
```

### 2. Navigate to the project directory

```bash
cd volthub-ev-charging-platform
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the frontend

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### 5. Start the backend API

Open another terminal in the project directory:

```bash
npm run server
```

The JSON Server API will run at `http://localhost:5000`.

## 📊 Application Overview

VoltHub is designed to simplify EV charging network operations through a centralized dashboard, station management interface, booking workflows, and performance analytics.

## 🔮 Future Enhancements

- Real-time charging station monitoring

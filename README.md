# Health Care Connect

A marketing website and contact backend for Health Care Connect, a home healthcare and caregiving service.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## About

The project has two parts: a single-page React site that presents the service (mission, vision, services such as personal caregivers, nursing assistance and elderly companion care, and why to choose it), and a small Express backend. When a visitor submits the contact form, the backend emails them a styled thank-you message and sends the enquiry details to the admin inbox.

## Features

- One-page site with Hero, Info, About, Healthcare, Content, Services, Features and Connect sections
- Intro video splash screen and a lazy-loaded home page with a bouncing-dot fallback loader
- Contact form (first name, surname, email, phone, gender) with toast notifications
- `POST /connect` sends two emails through Gmail with Nodemailer: a thank-you to the visitor and a new-enquiry alert to the admin
- Backend configured for Vercel serverless deployment (`vercel.json`)

## Tech Stack

- **Frontend:** React 19, Vite 6, Tailwind CSS 4, MUI 6, Framer Motion, React Router 7, react-scroll, react-hot-toast, Axios
- **Backend:** Node.js, Express 4, Nodemailer, Mongoose, dotenv, CORS
- **Hosting:** Vercel (backend)

## Project Structure

```
.
├── Backend/
│   ├── index.js            # Express server and /connect route
│   └── vercel.json
└── Health Care Connect/    # React + Vite frontend
    ├── public/             # Images and intro video
    └── src/
        ├── Layout/         # Header, Footer, Layout
        ├── pages/Home.jsx
        ├── sections/       # Hero, About, Services, Connect, ...
        └── utilities/Loader.jsx
```

## Getting Started

Prerequisites: Node.js and npm.

### Backend

```bash
cd Backend
npm install
node index.js
```

Environment variables (in `Backend/.env`):

| Name | Purpose |
| ---- | ------- |
| `PORT` | Server port (defaults to 3000) |
| `URI` | MongoDB connection string |
| `email` | Gmail address that sends and receives the emails |
| `pass` | Gmail app password |

### Frontend

```bash
cd "Health Care Connect"
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

The contact form posts to the deployed backend URL set in `src/sections/Connect.jsx`. Change it to `http://localhost:3000/connect` to use a local backend.

## API Endpoints

| Method | Path | Description |
| ------ | ---- | ----------- |
| `GET` | `/` | Health check |
| `POST` | `/connect` | Body: `{ fname, sname, email, phone, gender }`. Sends the thank-you and admin emails. |

## Author

**Aryan Bhandari**: [GitHub](https://github.com/aryanbha123)

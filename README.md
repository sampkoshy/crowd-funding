# 💰 Crowdfunding Platform

A full-stack web application built with **React** and **ExpressJS** that enables users to create, manage, and donate to crowdfunding campaigns.

## 🚀 Features

- 🔐 User authentication (JWT-based)
- 🎯 Campaign creation & management
- 💳 Donation functionality (with payment gateway integration)
- 🧾 Donation tracking & campaign progress
- 🛠 Admin dashboard for managing users & campaigns
- 💬 Commenting system for campaign discussions
- 📱 Fully responsive design

## 🛠 Tech Stack

### Frontend
- React.js
- React Router
- Context API or Redux
- Tailwind CSS / CSS Modules

### Backend
- Node.js + Express.js
- MongoDB (via Mongoose)
- JWT for authentication

## 📁 Folder Structure

crowdfunding-platform/
├── client/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── context/
│ │ ├── App.js
│ │ └── index.js
│ └── ...
├── server/ # Express backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── config/
│ └── index.js
├── .env
├── package.json
└── README.md

bash
Copy
Edit

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/crowdfunding-platform.git
cd crowdfunding-platform
2. Install Dependencies
Server
bash
Copy
Edit
cd server
npm install
Client
bash
Copy
Edit
cd ../client
npm install
3. Configure Environment Variables
Create a .env file in the server/ directory:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_URL=your_cloudinary_url
STRIPE_SECRET_KEY=your_stripe_key
4. Run the Application
bash
Copy
Edit
# In one terminal
cd server
npm run dev

# In another terminal
cd client
npm start
Visit: http://localhost:3000



🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.



Built with ❤️ by [sam p koshy]




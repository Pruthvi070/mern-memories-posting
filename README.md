# Memories Blog Posting Project
![Screenshot](Screenshot%202025-02-14%20110138.png)
![Screenshot](Screenshot%202025-02-14%20110248.png)

## Overview
Memories is a full-stack blog posting application that allows users to share and explore memorable moments. Built with **React, Redux, Node.js, Express, MongoDB, and Cloudinary**, this project provides a seamless experience for users to create, edit, and manage blog posts with images.

## Features
- 📝 **User Authentication** – Secure login and signup functionality
- 🖼 **Image Upload** – Integrated Cloudinary for storing images
- 📚 **CRUD Operations** – Create, Read, Update, and Delete blog posts
- 🔎 **Search & Filter** – Search for blogs using keywords
- 💾 **Persistent Storage** – MongoDB Atlas for cloud-based database management
- 🎨 **Material UI** – Modern UI components for a seamless user experience

## Tech Stack
- **Frontend:** React.js, Redux, Material UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Storage:** Cloudinary for image hosting
- **Deployment:** Render/Vercel (Adjust as needed)

## Installation & Setup
bash
# Clone the repository
git clone https://github.com/Pruthvi070/mern-memories-posting
cd memories-blog

# Install dependencies for client and server
cd client && npm install
cd ../server && npm install

# Add environment variables (create a .env file in the server directory)
MONGO_URI=your_mongo_connection_string


# Run the application
cd client && npm start
cd ../server && nodemon i or node index.js
```

License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

> 🚀 Enjoy blogging with Memories! Let me know if you need any improvements. 😊

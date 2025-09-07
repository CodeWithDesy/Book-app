📚 Book App – Backend

An API-powered Book App backend built with Node.js and Express.
It provides book management and user authentication features, fully testable with Postman / Thunder Client.


🚀 Features (Backend)

📚 Book Management with Admin option – Add, update, delete, and search books.

📝 Reading Lists – Organize books into Currently Reading, Completed, or Wishlist.

🔐 Authentication – Signup & login with secure password hashing (bcryptjs) and token-based authentication (JWT).

🛠 Testable – Fully functional with Postman/Thunder Client.

🎨 Future Ready – Frontend integration (React + Tailwind CSS) planned.

🛠 Tech Stack

Backend: Node.js, Express

Database: MongoDB

Authentication: JWT, bcryptjs

Frontend (Planned): React, Tailwind CSS, TypeScript

AI (Planned): Recommendation engine for personalized book suggestions

Deployment (Planned): Vercel / Render / Railway

Tools: Git, GitHub, Postman/Thunder Client


🤔 Why Book App Backend?

The backend is the engine of the Book App:

🛠 Developer Friendly – Straightforward API endpoints.

🔐 Secure – User authentication with JWT + hashed passwords.

⏱ Efficient – Easy testing with Postman.

🚀 Future-Ready – Designed for quick frontend integration.

📖 Flexible – Works for personal libraries, book clubs, or larger systems.


📌 Sample API Endpoints

Base URL: http://localhost:5454/

🔐 Authentication
➕ Signup (POST)

/api/signup

{
  "username": "john_doe",
  'dob':    "07/09/2025"
  "email": "john@example.com",
  "password": "securePassword123"
  "isAdmin":  "true or false"
}

🔑 Login (POST)

/api/login

{
  "email": "john@example.com",
  "password": "securePassword123"
}


✅ Returns a JWT token for authenticated requests.

📚 Books
➕ Add a Book (POST)

/api/books (requires auth)

{
  "title": "Atomic Habits",
  "yop":   "2001"
  "genre": "Self-help"
  "author": "James Clear",
}

📖 Get All Books (GET)

/api/books

🔍 Search Book by Title (GET)

/api/books?title=Atomic Habits

✏️ Update Book (PUT)

/api/books/:id (requires auth)

{
  "status": "Completed"
}

❌ Delete Book (DELETE)

/api/books/:id (requires auth)


🤝 Contributing

Contributions are welcome! 🎉
If you’d like to improve this project, here’s how you can get started:

Fork the repo

Clone your fork

git clone https://github.com/your-username/book-app-backend.git


Install dependencies

npm install


Run locally

npm run dev


Submit a pull request with your changes


📄 License

This project is licensed under the MIT License – feel free to use, share, and modify with proper attribution.


🙌 Acknowledgements

Built for portfolio and learning purposes

Inspired by Goodreads and modern digital libraries

Thanks to open-source tools and the developer community for resources and guidance.

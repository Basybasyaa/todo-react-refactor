# Todo List App – React Refactor Project

This project is a Todo List application built with React.  
The main objective of this project is **refactoring a legacy React Class Component**
into a **modern Function Component using React Hooks**.

This project simulates a real-world scenario where a developer works on
existing code written by others, understands it, and improves it
using current best practices.

---

## 📌 Original Source

The original version of this project was adapted from the following tutorial:

🔗 **GeeksForGeeks – Create Todo App using ReactJS**  
https://www.geeksforgeeks.org/reactjs/create-todo-app-using-reactjs/

The original implementation uses **React Class Components**.  
This repository focuses on **modernizing and improving** that implementation.

---

## 🗂 Project Structure

``txt
src/
├─ legacy/
│  └─ App.class.jsx     # Original class-based component (reference only)
├─ App.jsx              # Refactored version using React Hooks
├─ index.js

legacy/App.class.jsx
Contains the original class-based implementation for comparison.

App.jsx
The fully refactored and improved version using modern React patterns.

---

✨ Features
Add new todo items
Edit existing todo items
Delete todo items
Submit todo using Enter key
Disable submit button when input is empty
Persist todo list using localStorage
Responsive UI using React-Bootstrap

---

🔄 Refactoring Highlights
Key improvements made during refactoring:

Converted this.state → useState
Replaced lifecycle methods (componentDidMount, componentDidUpdate) with useEffect
Removed usage of this and constructor
Improved form handling using <form onSubmit>
Added input validation before submission
Implemented data persistence with localStorage
Improved code readability and maintainability

---

🧠 Why This Project Matters
Instead of creating a project from scratch, this repository demonstrates:

Reading and understanding legacy code
Refactoring old React patterns into modern Hooks-based architecture
Improving UX and data handling
Writing cleaner, more maintainable code
This reflects real-world development work more accurately than tutorial-only projects.

---

🛠 Tech Stack
React (Function Components & Hooks)
JavaScript (ES6+)
React-Bootstrap
Browser Local Storage

---

🚀 Getting Started
To run this project locally:

bash
Copy code
git clone https://github.com/USERNAME/todo-react-refactor.git
cd todo-react-refactor
npm install
npm start

---

📚 Key Learnings
Understanding legacy React class-based code
Refactoring without breaking functionality
Managing state with React Hooks
Persisting data using browser storage
Writing cleaner and more modern React code

🧑‍💻 Author
Refactored and maintained by [Basybasyaa]

This project is part of a learning journey toward mastering modern
frontend development with React.

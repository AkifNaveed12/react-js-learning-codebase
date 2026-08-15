# Redux Toolkit Todo App

A simple **Todo application built with React and Redux Toolkit** to understand how global state management works in modern React applications.

This project is part of my ongoing React learning journey and focuses on moving beyond local component state into **centralized state management using Redux Toolkit**.

---
### Demo

https://github.com/user-attachments/assets/39125500-fe7a-4dd4-a280-4d2a2feeeac5



---

## 🚀 Project Overview

The application allows users to:

* ➕ Add new todos
* 📋 Display todos from the Redux store
* 🗑️ Remove todos
* 🔄 Manage application state globally with Redux Toolkit

Although the application itself is intentionally simple, the main purpose is to understand the **architecture and data flow of Redux**, rather than building a feature-heavy Todo application.
# Redux Toolkit Todo App

A simple **Todo application built with React and Redux Toolkit** to understand how global state management works in modern React applications.

This project is part of my ongoing React learning journey and focuses on moving beyond local component state into **centralized state management using Redux Toolkit**.

---

## 🚀 Project Overview

The application allows users to:

* ➕ Add new todos
* 📋 Display todos from the Redux store
* 🗑️ Remove todos
* 🔄 Manage application state globally with Redux Toolkit

Although the application itself is intentionally simple, the main purpose is to understand the **architecture and data flow of Redux**, rather than building a feature-heavy Todo application.

---

## 🧠 Concepts Covered

This project helped me practice the following concepts:

### React

* Functional components
* `useState`
* Controlled inputs
* Event handling
* Component composition
* Props/components interaction
* Rendering lists with `.map()`
* `key` props

### Redux Toolkit

* `configureStore()`
* `createSlice()`
* Redux reducers
* Redux actions
* `useSelector()`
* `useDispatch()`
* `initialState`
* Action payloads
* State updates with Redux Toolkit
* `nanoid()` for unique IDs

### React-Redux

* `<Provider />`
* Connecting React components to the Redux store
* Reading global state
* Dispatching Redux actions

---

## 🏗️ Application Architecture

The basic data flow of the application is:

```text
User
 │
 ├── Add Todo
 │      │
 │      ▼
 │   AddTodo Component
 │      │
 │      │ dispatch(addTodo(input))
 │      ▼
 │   Redux Store
 │      │
 │      ▼
 │   todoSlice
 │      │
 │      ▼
 │   State Updated
 │      │
 │      ▼
 │   Todos Component
 │      │
 │      │ useSelector()
 │      ▼
 │   Todo List
 │
 └── Delete Todo
        │
        ▼
     dispatch(removeTodo(id))
        │
        ▼
     Redux Reducer
        │
        ▼
     Todo Removed
```

---

## 📁 Project Structure

```text
src/
│
├── app/
│   └── store.js
│
├── components/
│   ├── AddTodo.jsx
│   └── Todos.jsx
│
├── features/
│   └── todo/
│       └── todoSlice.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

### Important Files

| File           | Purpose                                              |
| -------------- | ---------------------------------------------------- |
| `main.jsx`     | Application entry point and Redux `<Provider>` setup |
| `App.jsx`      | Main application component                           |
| `store.js`     | Creates and configures the Redux store               |
| `todoSlice.js` | Contains Todo state, actions, and reducers           |
| `AddTodo.jsx`  | Handles Todo input and dispatches `addTodo`          |
| `Todos.jsx`    | Reads Todo state and displays/removes todos          |
| `App.css`      | Application-level styling                            |
| `index.css`    | Global styling                                       |

---

## ⚙️ Redux Store

The Redux store is configured using Redux Toolkit:

```js
configureStore({
  reducer: {
    todos: todoReducer,
  },
})
```

The `todoReducer` manages the Todo-related state.

The application accesses the store through React-Redux's:

```jsx
<Provider store={store}>
  <App />
</Provider>
```

---

## 🔄 Todo Slice

The Todo functionality is organized inside a Redux Toolkit slice.

The slice contains:

### `initialState`

Stores the application's Todo data.

### `addTodo`

Creates a new Todo using `nanoid()` and adds it to the Todo array.

### `removeTodo`

Filters the Todo array and removes the Todo matching the supplied ID.

---

## ➕ Adding a Todo

The `AddTodo` component maintains the input field using React's local state:

```js
const [input, setInput] = useState('')
```

When the form is submitted:

```js
dispatch(addTodo(input))
```

The input becomes the Redux action's payload.

The reducer then creates a Todo object and adds it to the store.

---

## 🗑️ Removing a Todo

Each Todo has a delete button.

When clicked:

```js
dispatch(removeTodo(todo.id))
```

The Todo ID is passed as the action payload.

The reducer then removes the matching Todo from the Redux state.

---

## 🛠️ Technologies Used

* **React**
* **Redux Toolkit**
* **React Redux**
* **Vite**
* **JavaScript**
* **Tailwind CSS**
* **HTML/CSS**

---

## ▶️ Running the Project

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate into the project

```bash
cd <project-folder>
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL, usually:

```text
http://localhost:5173
```

---

## 🎯 Learning Objective

The primary goal of this project was **not simply to build a Todo application**.

The goal was to understand:

> **How React components communicate with a centralized Redux store and how actions, reducers, and state updates work together.**

This project helped reinforce the transition from:

```text
Local Component State
        ↓
useState()
```

to:

```text
Global Application State
        ↓
Redux Toolkit
        ↓
Store → Actions → Reducers → Updated State
```

---

## 🧩 Key Takeaways

While building this project, I practiced:

* Setting up Redux Toolkit in a React application
* Creating a Redux store
* Creating slices with `createSlice`
* Creating actions and reducers
* Dispatching actions from React components
* Reading Redux state using `useSelector`
* Understanding action payloads
* Managing immutable-style state updates through Redux Toolkit/Immer
* Structuring Redux logic by feature
* Understanding the importance of consistent naming and state shape

---

## 🚧 Future Improvements

Possible improvements for future versions include:

* ✏️ Edit existing todos
* ✅ Mark todos as completed
* 🔍 Filter/search todos
* 🧹 Clear completed todos
* 💾 Persist todos using `localStorage`
* 🌐 Connect the application to a backend API
* 📱 Improve responsive design
* 🌙 Add theme switching
* 🧪 Add tests

---

## 📚 Learning Context

This project was built as part of my ongoing journey of learning **React and modern frontend development**, with a focus on understanding the underlying concepts rather than simply copying a finished application.

The project represents a step toward building larger React applications where **predictable and centralized state management** becomes important.

---

## 👨‍💻 Author

**Muhammad Akif Naveed**

Software Engineering Student | Aspiring AI Engineer

GitHub: [AkifNaveed12](https://github.com/AkifNaveed12)

---

## ⭐ Acknowledgment

This project was created for learning and experimentation with **React, Redux Toolkit, and modern frontend state management**.

If you're also learning React, feel free to explore the code and experiment with the Redux data flow.


---

## 🧠 Concepts Covered

This project helped me practice the following concepts:

### React

* Functional components
* `useState`
* Controlled inputs
* Event handling
* Component composition
* Props/components interaction
* Rendering lists with `.map()`
* `key` props

### Redux Toolkit

* `configureStore()`
* `createSlice()`
* Redux reducers
* Redux actions
* `useSelector()`
* `useDispatch()`
* `initialState`
* Action payloads
* State updates with Redux Toolkit
* `nanoid()` for unique IDs

### React-Redux

* `<Provider />`
* Connecting React components to the Redux store
* Reading global state
* Dispatching Redux actions

---

## 🏗️ Application Architecture

The basic data flow of the application is:

```text
User
 │
 ├── Add Todo
 │      │
 │      ▼
 │   AddTodo Component
 │      │
 │      │ dispatch(addTodo(input))
 │      ▼
 │   Redux Store
 │      │
 │      ▼
 │   todoSlice
 │      │
 │      ▼
 │   State Updated
 │      │
 │      ▼
 │   Todos Component
 │      │
 │      │ useSelector()
 │      ▼
 │   Todo List
 │
 └── Delete Todo
        │
        ▼
     dispatch(removeTodo(id))
        │
        ▼
     Redux Reducer
        │
        ▼
     Todo Removed
```

---

## 📁 Project Structure

```text
src/
│
├── app/
│   └── store.js
│
├── components/
│   ├── AddTodo.jsx
│   └── Todos.jsx
│
├── features/
│   └── todo/
│       └── todoSlice.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

### Important Files

| File           | Purpose                                              |
| -------------- | ---------------------------------------------------- |
| `main.jsx`     | Application entry point and Redux `<Provider>` setup |
| `App.jsx`      | Main application component                           |
| `store.js`     | Creates and configures the Redux store               |
| `todoSlice.js` | Contains Todo state, actions, and reducers           |
| `AddTodo.jsx`  | Handles Todo input and dispatches `addTodo`          |
| `Todos.jsx`    | Reads Todo state and displays/removes todos          |
| `App.css`      | Application-level styling                            |
| `index.css`    | Global styling                                       |

---

## ⚙️ Redux Store

The Redux store is configured using Redux Toolkit:

```js
configureStore({
  reducer: {
    todos: todoReducer,
  },
})
```

The `todoReducer` manages the Todo-related state.

The application accesses the store through React-Redux's:

```jsx
<Provider store={store}>
  <App />
</Provider>
```

---

## 🔄 Todo Slice

The Todo functionality is organized inside a Redux Toolkit slice.

The slice contains:

### `initialState`

Stores the application's Todo data.

### `addTodo`

Creates a new Todo using `nanoid()` and adds it to the Todo array.

### `removeTodo`

Filters the Todo array and removes the Todo matching the supplied ID.

---

## ➕ Adding a Todo

The `AddTodo` component maintains the input field using React's local state:

```js
const [input, setInput] = useState('')
```

When the form is submitted:

```js
dispatch(addTodo(input))
```

The input becomes the Redux action's payload.

The reducer then creates a Todo object and adds it to the store.

---

## 🗑️ Removing a Todo

Each Todo has a delete button.

When clicked:

```js
dispatch(removeTodo(todo.id))
```

The Todo ID is passed as the action payload.

The reducer then removes the matching Todo from the Redux state.

---

## 🛠️ Technologies Used

* **React**
* **Redux Toolkit**
* **React Redux**
* **Vite**
* **JavaScript**
* **Tailwind CSS**
* **HTML/CSS**

---

## ▶️ Running the Project

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate into the project

```bash
cd <project-folder>
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL, usually:

```text
http://localhost:5173
```

---

## 🎯 Learning Objective

The primary goal of this project was **not simply to build a Todo application**.

The goal was to understand:

> **How React components communicate with a centralized Redux store and how actions, reducers, and state updates work together.**

This project helped reinforce the transition from:

```text
Local Component State
        ↓
useState()
```

to:

```text
Global Application State
        ↓
Redux Toolkit
        ↓
Store → Actions → Reducers → Updated State
```

---

## 🧩 Key Takeaways

While building this project, I practiced:

* Setting up Redux Toolkit in a React application
* Creating a Redux store
* Creating slices with `createSlice`
* Creating actions and reducers
* Dispatching actions from React components
* Reading Redux state using `useSelector`
* Understanding action payloads
* Managing immutable-style state updates through Redux Toolkit/Immer
* Structuring Redux logic by feature
* Understanding the importance of consistent naming and state shape

---

## 🚧 Future Improvements

Possible improvements for future versions include:

* ✏️ Edit existing todos
* ✅ Mark todos as completed
* 🔍 Filter/search todos
* 🧹 Clear completed todos
* 💾 Persist todos using `localStorage`
* 🌐 Connect the application to a backend API
* 📱 Improve responsive design
* 🌙 Add theme switching
* 🧪 Add tests

---

## 📚 Learning Context

This project was built as part of my ongoing journey of learning **React and modern frontend development**, with a focus on understanding the underlying concepts rather than simply copying a finished application.

The project represents a step toward building larger React applications where **predictable and centralized state management** becomes important.

---

## 👨‍💻 Author

**Muhammad Akif Naveed**

Software Engineering Student | Aspiring AI Engineer

GitHub: [AkifNaveed12](https://github.com/AkifNaveed12)

---

## ⭐ Acknowledgment

This project was created for learning and experimentation with **React, Redux Toolkit, and modern frontend state management**.

If you're also learning React, feel free to explore the code and experiment with the Redux data flow.

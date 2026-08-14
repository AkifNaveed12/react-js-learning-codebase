# ⚛️ React JS Learning Codebase

> My hands-on React.js learning journey through the **Chai aur React** series by **Hitesh Choudhary (Chai aur Code)**, with additional practice and projects developed as part of my learning journey at **Dev Weekends Fellowship**.

This repository contains my **practice code, mini-projects, experiments, notes, and implementations** as I progress through React.

Rather than keeping the learning purely theoretical, I am using this repository to turn each concept into working code and gradually move from basic React fundamentals toward more structured and reusable applications.

---

## 🎯 Repository Motivation

The goal of this repository is to build a **strong practical foundation in React.js** by learning concepts incrementally and immediately applying them through projects.

My approach is:

```text
Learn a Concept
      ↓
Understand the Concept
      ↓
Implement It
      ↓
Build a Small Project
      ↓
Debug & Experiment
      ↓
Document the Learning
      ↓
Move to the Next Concept
```

This repository is therefore not intended to be a single production application.

It is a **living learning codebase** that will continue evolving as I progress through the React ecosystem.

---

## 📚 Learning Source

This repository is primarily based on the **Chai aur React** series by Hitesh Choudhary from Chai aur Code.

The series focuses on building a practical understanding of React through concepts and hands-on projects rather than only theoretical explanations.

### Current Progress

**15 videos completed so far** 🚀

The repository will continue to grow as I progress through the remaining lessons and build more projects.

---

# 🚀 Projects & Practice

The repository currently contains several projects and experiments, progressing from basic React concepts to more advanced component communication and state-management patterns.

| #  | Project                          | Main Concepts                                                        |
| -- | -------------------------------- | -------------------------------------------------------------------- |
| 01 | **Basic React**                  | React fundamentals, JSX, components                                  |
| 02 | **Counter Project**              | `useState`, event handling, state updates                            |
| 03 | **Tailwind + Props**             | Props, reusable components, Tailwind CSS                             |
| 04 | **Background Changer**           | State, events, dynamic styling                                       |
| 05 | **Password Generator**           | Hooks, controlled inputs, random generation, clipboard interaction   |
| 06 | **Currency Converter**           | API integration, state, effects, reusable components                 |
| 07 | **React Router Project**         | Routing, layouts, navigation, dynamic pages                          |
| 08 | **Mini Context Project**         | Context API, Provider, shared state, `useContext`                    |
| 09 | **Theme Switcher**               | Context API, custom hooks, Tailwind dark mode                        |
| 10 | **Todo Context + Local Storage** | Context API, CRUD, Local Storage, Hooks, Props                       |
| 11 | **Custom React**                 | Understanding React concepts by building a simplified implementation |

---

# 🧠 Concepts Covered So Far

## ⚛️ React Fundamentals

The early projects focus on understanding the fundamental building blocks of React:

* React components
* JSX
* Component structure
* Rendering
* Functional components
* Component composition
* Event handling
* Dynamic UI rendering
* Basic project structure

---

## 🪝 React Hooks

Hooks are an important part of the learning progression.

### `useState`

Used throughout multiple projects for managing component state.

Examples include:

* Counter
* Password Generator
* Background Changer
* Currency Converter
* Theme Switcher
* Todo Application

### `useEffect`

Practiced for handling side effects such as:

* API-related operations
* Synchronizing state
* Local Storage
* DOM interactions

### Other Hook-Based Patterns

The projects also introduce the idea of:

* Custom hooks
* Hook-based state management
* Sharing logic between components

---

# 📦 Props & Component Communication

Props are used to pass data and behavior between components.

For example:

```jsx
<TodoItem todo={todo} />
```

This helped me understand the relationship between:

```text
Parent Component
       ↓
      Props
       ↓
Child Component
```

The learning progression later moves toward Context API when prop drilling becomes less convenient.

---

# 🌐 Context API

One of the major milestones in this repository is learning **React Context API**.

The Mini Context project introduces the basic idea of:

```text
Context
   ↓
Provider
   ↓
Consumer Components
```

The Theme Switcher and Todo application then build on this concept.

For example, the Todo application provides shared functionality such as:

```text
todos
addTodo
updateTodo
deleteTodo
toggleComplete
```

through Context rather than manually passing everything through multiple component levels.

---

# 🎨 Tailwind CSS

Tailwind CSS is used in several projects for building and experimenting with UI.

Concepts practiced include:

* Utility-first styling
* Responsive layouts
* Flexbox
* Spacing
* Typography
* Colors
* Component styling
* Conditional styling
* Dark mode

The Theme Switcher project combines Tailwind CSS with React Context to implement a light/dark theme system.

---

# 🌙 Theme Switching

The Theme Switcher project combines several concepts learned earlier:

```text
useState
   ↓
Theme State
   ↓
Context API
   ↓
Custom Hook
   ↓
Theme Button
   ↓
Tailwind Dark Mode
```

This project helped connect individual React concepts into a more complete application architecture.

---

# 💾 Local Storage

The Todo project introduces persistence using the browser's Local Storage API.

The application follows this flow:

```text
User Action
    ↓
React State
    ↓
useEffect
    ↓
Local Storage
```

When the application starts:

```text
Local Storage
      ↓
Retrieve Saved Todos
      ↓
React State
      ↓
Render UI
```

This means todos remain available even after refreshing the browser.

---

# 📝 Todo Application

The Todo application is currently one of the most complete projects in the repository.

### Features

* Add todos
* Edit todos
* Delete todos
* Mark todos as completed
* Persistent Local Storage
* Context API state management
* Reusable components
* Tailwind CSS styling

### Architecture

```text
                 App.jsx
                    │
                    ▼
              TodoProvider
                    │
          ┌─────────┴─────────┐
          │                   │
          ▼                   ▼
      TodoForm            TodoItem
          │                   │
          ▼                   ▼
       Add Todo        Edit / Delete / Complete
          │                   │
          └─────────┬─────────┘
                    ▼
                Todo State
                    │
                    ▼
              Local Storage
```

---

# 🛣️ React Router

The React Router project introduces client-side navigation and multi-page-like experiences within a React application.

Concepts practiced include:

* React Router
* Routes
* Navigation
* Layouts
* Multiple views/pages
* Route-based rendering
* Navigation links

The project contains pages such as:

* Home
* About
* Contact
* GitHub

---

# 🔐 Password Generator

The Password Generator project focuses on interactive state-driven UI.

Concepts include:

* State management
* Controlled inputs
* Random password generation
* User-configurable password options
* Copy-to-clipboard interaction
* Dynamic UI updates

This project was an important step toward building applications where multiple UI elements depend on shared state.

---

# 💱 Currency Converter

The Currency Converter introduces working with external data and API-based functionality.

Concepts practiced include:

* API requests
* Asynchronous operations
* State management
* `useEffect`
* Form inputs
* Dynamic conversion
* Reusable components

This project helped bridge the gap between static React interfaces and applications that consume external data.

---

# 🎨 Background Changer

A small project focused on understanding how React state can directly control UI behavior.

The core idea is:

```text
User Interaction
       ↓
State Update
       ↓
Component Re-render
       ↓
UI Changes
```

It provides a simple demonstration of React's reactive rendering model.

---

# 🧩 Custom React

The `customReact` experiment goes beyond simply using React.

It explores the underlying idea of how a simplified rendering system can work by creating a small custom implementation.

The purpose is not to recreate React itself, but to better understand concepts such as:

* Elements
* Rendering
* DOM manipulation
* Component-like structures
* The relationship between JavaScript objects and UI rendering

---

# 🛠️ Technologies Used

### Core

* **JavaScript**
* **React.js**
* **JSX**
* **HTML**
* **CSS**

### React Ecosystem

* React Hooks
* Context API
* React Router
* Custom Hooks
* Component-based architecture

### Styling

* Tailwind CSS
* CSS

### Tools

* Vite
* npm
* Git
* GitHub
* VS Code
* Chrome DevTools

### Browser APIs

* Local Storage
* Clipboard API

---

# 📈 Learning Progression

The repository follows an intentional progression:

```text
React Fundamentals
        ↓
Components & JSX
        ↓
State & Events
        ↓
Props
        ↓
Tailwind CSS
        ↓
Interactive Projects
        ↓
API Integration
        ↓
React Router
        ↓
Context API
        ↓
Custom Hooks
        ↓
Theme Management
        ↓
Local Storage
        ↓
CRUD Application
        ↓
More Advanced React
```

The goal is to gradually move from understanding individual React features to understanding **how those features work together in real applications**.

---

# 📂 Repository Structure

The repository is organized around individual learning milestones:

```text
react-js-learning-codebase/
│
├── 01basic-react/
├── 01react/
│   └── 01basicsofreact/
│
├── 02CounterProject/
├── 03tailwindProps/
├── 05passwordgenerator/
├── 06CurrencyConverter/
├── 07reactRouter/
├── 08miniContext/
├── 09themeswitcher/
├── 10todocontextlocal/
│
├── bgChanger/
├── customReact/
│
├── README.md
├── package.json
└── package-lock.json
```

The repository currently contains separate folders for the different experiments and projects rather than combining everything into one application.

---

# 🚀 Running a Project

Most projects are individual Vite/React applications.

Navigate into the project you want to run:

```bash
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL provided by Vite.

---

# 🧪 Learning Through Debugging

An important part of this repository is not only writing the code but also **debugging it**.

While building these projects, I have worked through issues involving:

* React rendering
* Props
* Context API
* Provider values
* Hooks
* Tailwind configuration
* Dark mode
* Local Storage
* Routing
* Component communication
* Git/GitHub workflows
* Merge operations

These debugging experiences are part of the learning process and help reinforce how the different parts of the React ecosystem actually work.

---

# 🎓 Learning Context

This repository is being developed alongside my software engineering studies and my participation in the **Dev Weekends Fellowship**.

It represents my practical progression through React rather than a finished curriculum.

Each project is intentionally small enough to understand while introducing a new concept or combining previously learned concepts.

---

# 📌 Current Status

**React learning progress:** 🟢 In Progress

**Chai aur React videos completed:** `15`

**Projects / experiments:** `11+`

**Current focus:** React fundamentals → state management → component architecture → Context API → reusable patterns

More projects and concepts will be added as the learning journey continues.

---

# 🔮 What's Next?

As I continue through the React series, this repository will expand into areas such as:

* More advanced Hooks
* Better component architecture
* API handling
* Performance optimization
* Advanced routing
* Form handling
* Authentication concepts
* More complex state management
* Larger React applications
* Production-oriented patterns

The objective is to eventually move from **small learning projects → complete frontend applications → full-stack applications**.

---

# 🙌 Acknowledgements

A huge thanks to **Hitesh Choudhary and the Chai aur Code community** for providing the Chai aur React learning series and making practical React education accessible.

This repository is my own learning implementation and is intended to document my progress, experimentation, and understanding of the concepts taught throughout the series.

---

# 👨‍💻 About Me

**Muhammad Akif Naveed**

Software Engineering Student | Aspiring AI Engineer

Currently building my foundations across:

* Software Engineering
* React.js
* AI/ML
* Backend Development
* System Design
* Developer Tools

I believe in learning by **building, breaking, debugging, and rebuilding**.

---

⭐ **This repository is a work in progress. Follow along as I continue building my React skills.**

> **Learn → Build → Break → Debug → Understand → Repeat.**

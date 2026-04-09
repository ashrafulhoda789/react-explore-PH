# 📘 React Learning Journey – SPA & React Router

## 🚀 Single Page Application (SPA)

A **Single Page Application (SPA)** is a modern web application architecture where:

- Only a **single HTML page** is loaded initially
- The application **dynamically updates content** without reloading the page
- Navigation feels **fast, smooth, and seamless**

### 🔑 Key Benefits
- ⚡ Faster performance (no full reload)
- 🎯 Better user experience
- 🔄 Efficient data handling with APIs

👉 In React, SPAs are built by rendering and updating components instead of reloading entire pages.

---

## 🧭 React Router Overview

React Router enables **client-side routing** in a React SPA, allowing users to navigate between different views without refreshing the page.

---

## 🔧 Router Setup

### 🔹 `createBrowserRouter`
- Creates a router configuration using browser history API
- Defines all routes in a structured way

### 🔹 `RouterProvider`
- Provides the router to the entire application
- Wraps the root component

```js
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
]);

<RouterProvider router={router} />

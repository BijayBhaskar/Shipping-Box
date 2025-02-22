// src/index.js
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';


// Get the root element
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Render the application
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

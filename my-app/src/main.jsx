// ini adalah entry point dari server react itu sendiri

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx"; //import app akan di render ke halaman dom
import "./index.css";

// root ini adalah bagian id yang ada di app.jsx
// sehingga bisa dengan mudah untuk mengakses bagian div di html
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
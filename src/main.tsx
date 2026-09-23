import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const legacyPath = window.location.hash.slice(1);
if (legacyPath.startsWith("/") && URL.canParse(legacyPath, window.location.origin)) {
  const legacyUrl = new URL(legacyPath, window.location.origin);

  if (legacyUrl.origin === window.location.origin) {
    new URLSearchParams(window.location.search).forEach((value, key) => {
      legacyUrl.searchParams.append(key, value);
    });
    window.history.replaceState(null, "", legacyUrl.href);
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import './i18n';
import ReviewPage from "./ReviewPage";
import DynamicReview from "./DynamicPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sweet-and-sour-screen" element={<ReviewPage />} />
        <Route path="/movie/:id" element={<DynamicReview />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

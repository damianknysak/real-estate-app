import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Generate from "./pages/Generate";
import Leads from "./pages/Leads";
import Syndication from "./pages/Syndication";
import Header from "./components/Header";

function App() {
  return (
    <main className="bg-black">
      <div className="relative min-h-screen flex max-w-[2000px] mx-auto">
        <Header />
        <div className="m-10 bg-primary w-full rounded-xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/generate" element={<Generate />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/syndication" element={<Syndication />} />
          </Routes>
        </div>
      </div>
    </main>
  );
}

export default App;

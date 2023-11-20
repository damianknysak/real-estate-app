import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Generate from "./pages/Generate";
import Leads from "./pages/Leads";
import Syndication from "./pages/Syndication";
import Header from "./components/Header";
import Modals from "./components/Shared/Modals/Modals";
import CreateNew from "./pages/CreateNew";

function App() {
  return (
    <main className="bg-black overflow-hidden">
      <Modals />
      <div className="relative h-screen flex max-w-[2000px] mx-auto">
        <Header />
        <div className="m-10 h-full bg-primary w-full rounded-xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/generate" element={<Generate />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/syndication" element={<Syndication />} />
            <Route path="/add" element={<CreateNew />} />
          </Routes>
        </div>
      </div>
    </main>
  );
}

export default App;

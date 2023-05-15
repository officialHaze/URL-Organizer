import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShortUrl from "./pages/ShortUrl";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:urlId" element={<ShortUrl />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

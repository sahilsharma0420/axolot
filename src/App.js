import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
function App() {
  return <>
  <BrowserRouter>
  <Routes>
  <Route path="/axolot" element={<Home />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/*" element={<Navigate to="/" />} />
  </Routes>
  </BrowserRouter>
  </>;
}

export default App;

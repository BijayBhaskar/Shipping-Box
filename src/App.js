// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import AddBoxForm from "./components/AddBoxForm.js";
import BoxTable from "./components/BoxTable.js";

const App = () => (
  <Router>
    <Navbar />
    <div className="container mt-4 text-center">
      <Routes>
        <Route path="/" element={<AddBoxForm />} />
        <Route path="/list" element={<BoxTable />} />
      </Routes>
    </div>
  </Router>
);

export default App;



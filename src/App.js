import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CharacterCounter from "./components/CharacterCounter";
import ProductFilter from "./components/ProductFilter";
import SvgDrawer from "./components/SvgDrawer";

function App() {
  return (
    <Router>
      <nav style={{ padding: "15px", background: "#111" }}>
        <Link to="/" style={{ color: "white", margin: 10 }}>Home</Link>
        <Link to="/exp1" style={{ color: "white", margin: 10 }}>1.2.1</Link>
        <Link to="/exp2" style={{ color: "white", margin: 10 }}>1.2.2</Link>
        <Link to="/exp3" style={{ color: "white", margin: 10 }}>1.2.3</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h2 style={{ textAlign: "center" }}>Full Stack Experiments</h2>} />
        <Route path="/exp1" element={<CharacterCounter />} />
        <Route path="/exp2" element={<ProductFilter />} />
        <Route path="/exp3" element={<SvgDrawer />} />
      </Routes>
    </Router>
  );
}

export default App;

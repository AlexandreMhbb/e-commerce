import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/panier">Voir le panier</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/panier" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;



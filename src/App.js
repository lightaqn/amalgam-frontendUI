import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import Home from "./container/Home";
import Cart from "./container/Cart";
import Login from "./container/Login";
import Product from "./container/Product";
import Register from "./container/Register";
import Nod from "./container/Nod";
import ProductArray from "./container/ProductArray";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route
          exact
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />

        <Route path="/product/:id" element={<Product />} />
        <Route exact path="/products/:category" element={<ProductArray />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          exact
          path="/nod"
          element={!user ? <Navigate to="/login" /> : <Nod />}
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

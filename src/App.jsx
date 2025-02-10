import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import VegItems from "./VegItems";
import NonVegItems from "./NonVegItems";
import Cart from "./Cart";
import Orders from "./Orders";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import "./App.css"; 
import MilkItems from "./MilkItems";
import { useSelector } from "react-redux";
import NotFound from "./NotFound";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css"; 
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <BrowserRouter>
   <h1 className="text-center fw-bold py-4 px-3 rounded-pill shadow-lg text-light" 
    style={{ background: "#121212", textShadow: "0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff" }}>
  🛒 TAAZA MART 🛍️
</h1>





 <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link to="/home" className="nav-link" style={{ fontSize: '1.50rem' }}> <i class="fa-solid fa-house-user"></i>  Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/veg" className="nav-link" style={{ fontSize: '1.50rem' }}><i class="fa-sharp fa-solid fa-carrot"></i>Veg Items</Link>
        </li>
        <li className="nav-item">
          <Link to="/nonveg" className="nav-link" style={{ fontSize: '1.50rem' }}> <i class="fa-solid fa-drumstick-bite"></i>Non-Veg Items</Link>
        </li>
        <li className="nav-item">
          <Link to="/milk" className="nav-link" style={{ fontSize: '1.50rem' }}> <i class="fa-solid fa-cow"></i>Milk Items</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link" style={{ fontSize: '1.50rem' }}><i class="fa-solid fa-cart-shopping"></i>
            Cart <span className="badge bg-warning">{totalItems}</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/orders" className="nav-link" style={{ fontSize: '1.50rem' }}> <i class="fa-brands fa-jedi-order"></i>Orders</Link>
        </li>
        <li className="nav-item">
          <Link to="/aboutus" className="nav-link" style={{ fontSize: '1.50rem' }}> <i class="fa-solid fa-circle-exclamation"></i>About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/contactus" className="nav-link" style={{ fontSize: '1.50rem' }}> <i class="fa-regular fa-address-book"></i>Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link" style={{ fontSize: '1.50rem' }}> <i class="fa-solid fa-user"></i>Sign In</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <div className="container mt-4">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="veg" element={<VegItems />} />
          <Route path="nonveg" element={<NonVegItems />} />
          <Route path="cart" element={<Cart />} />
          <Route path="orders" element={<Orders />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="milk" element={<MilkItems />} />
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

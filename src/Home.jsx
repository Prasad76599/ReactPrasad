import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Grocery & Kitchen</h2>

      <div className="row text-center">
        {/* Vegetables & Fruits */}
        <div className="col-md-4 mb-4   ">
          <Link to="/veg" className="text-decoration-none">
            <div className="card shadow">
              <img 
                src="https://tse3.mm.bing.net/th?id=OIP.Dq4SjBjz2b9H9ow82I7e0wHaE8&pid=Api&P=0&h=180" 
                className="card-img-top" 
                alt="Vegetables & Fruits" 
              />
              <div className="card-body">
                <h5 className="card-title text-dark">Fruits & Vegetables</h5>
              </div>
            </div>
          </Link>
        </div>

        {/* Dairy & Bread */}
        <div className="col-md-4 mb-4">
          <Link to="/milk" className="text-decoration-none">
            <div className="card shadow">
              <img 
                src="https://tse3.mm.bing.net/th?id=OIP.oHzNYJE0WBJyKHgDOMIEeQHaEo&pid=Api&P=0&h=180" 
                className="card-img-top" 
                alt="Dairy & Bread" 
              />
              <div className="card-body">
                <h5 className="card-title text-dark">Dairy, Bread & Eggs</h5>
              </div>
            </div>
          </Link>
        </div>

        {/* Meat & Fish */}
        <div className="col-md-4 mb-4">
          <Link to="/nonveg" className="text-decoration-none">
            <div className="card shadow">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyg0sSQ7hs-siMFDeQUYBbjdKe3yAO62qQfQ&s" 
                className="card-img-top" 
                alt="Meat & Fish" 
              />
              <div className="card-body">
                <h5 className="card-title text-dark">Meat, Fish & Eggs</h5>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

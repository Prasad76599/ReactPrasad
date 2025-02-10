import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

function NonVegItems() {
    let NonVegItems = useSelector(state => state.product.NonVegItems);
    let dispatch = useDispatch();

    let finalItems = NonVegItems.map((item, index) => (
        <div key={index} className="col-md-4 mb-4">
            <div className="card">
            <img src={item.image} className="card-img-top" alt={item.name} style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">${item.price.toFixed(2)}</p>
                    <button
                       className="btn btn-success"
                        onClick={() => dispatch(addToCart(item))}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="container">
            <h1 className="text-center my-4"> Welcome to Non-Veg Items</h1>
            <div className="row">
                {finalItems}
            </div>
        </div>
    );
}

export default NonVegItems;

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function VegItems() {
    let dispatch = useDispatch();
    let vegItems = useSelector(state => state.product.VegItems);

    let finalItems = vegItems.map((item, index) => (
        <div key={index} className="col-md-4 mb-4">
            <div className="card">
                {/* Product Image */}
                <img src={item.image} className="card-img-top" alt={item.name} style={{ height: "200px", objectFit: "cover" }} />

                <div className="card-body text-center">
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
        <>
            <h1 className="text-center my-4">Welcome to Veg Items</h1>
            <div className="container">
                <div className="row">
                    {finalItems}
                </div>
            </div>
        </>
    );
}

export default VegItems;

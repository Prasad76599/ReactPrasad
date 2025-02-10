import { useDispatch, useSelector } from "react-redux";
import { addPurchaseDetails, clearCart, decrement, increment, remove } from "./Store";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Cart() {
    let cartObjects = useSelector((state) => state.cart);
    let dispatch = useDispatch();
    let cartItems = cartObjects.map((item, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item.name} - ${item.price}
            <div>
                <button className="btn btn-success btn-sm me-2" onClick={() => dispatch(increment(item))}>+</button>
                <button className="btn btn-warning btn-sm me-2" onClick={() => dispatch(decrement(item))}>-</button>
                Quantity: <strong>{item.quantity}</strong>
                <button className="btn btn-danger btn-sm ms-2" onClick={() => dispatch(remove(item))}>Remove</button>
            </div>
        </li>
    ));

    let totalPrice = cartObjects.reduce((sum, item) => sum + item.quantity * item.price, 0);
    let [discountPercentage, setDiscountPercentage] = useState(0);
    let [showDiscount, setShowDiscount] = useState(false);
    let discountAmount = (totalPrice * (discountPercentage / 100));
    let totalAmount = totalPrice - discountAmount;

    let [cuponCode, setCuponCode] = useState('');
    let [cuponCodeDiscountPer, setCuponCodeDiscountPer] = useState(0);
    let [cuponApplied, setCuponApplied] = useState(false);

    let handlingCuponPer = () => {
        switch (cuponCode.toUpperCase()) {
            case 'PRASAD10':
                setCuponCodeDiscountPer(10);
                setCuponApplied(true);
                break;
            case 'PRASAD20':
                setCuponCodeDiscountPer(20);
                setCuponApplied(true);
                break;
            case 'PRASAD30':
                setCuponCodeDiscountPer(30);
                setCuponApplied(true);
                break;
            case 'PRASAD40':
                setCuponCodeDiscountPer(40);
                setCuponApplied(true);
                break;
            default:
                alert('Invalid Coupon Code');
                setCuponCodeDiscountPer(0);
        }
    };

    let cuponCodeDiscountAmount = totalPrice * cuponCodeDiscountPer / 100;
    let finalAmount = totalAmount - cuponCodeDiscountAmount;

    let handlePurchase = () => {
        const purchaseDate = new Date().toLocaleDateString();
        let purchaseDetails = {
            date: purchaseDate,
            items: [...cartObjects],
            totalPrice: totalPrice
        };

        dispatch(addPurchaseDetails(purchaseDetails));
        dispatch(clearCart());
    };

    return (
        <div className="container mt-4">
            {cartObjects.length > 0 ? (
                <div className="card shadow p-4">
                    <h1 className="text-center">Cart Page</h1>
                    <ul className="list-group mb-3">{cartItems}</ul>
                    <p className="text-success fw-bold">Total Price: ${totalPrice}</p>

                    {showDiscount && (
                        <div className="alert alert-info">
                            <p>Discount Percentage: <strong>{discountPercentage}%</strong></p>
                            <p>Discount Amount: <strong>${discountAmount}</strong></p>
                        </div>
                    )}

                    <p className="text-danger fw-bold">Final Net Amount To Pay: ${finalAmount}</p>

                    <div className="mb-3">
                        <button className="btn btn-outline-primary me-2" onClick={() => { setDiscountPercentage(10); setShowDiscount(true); }}>Apply 10% Discount</button>
                        <button className="btn btn-outline-primary me-2" onClick={() => { setDiscountPercentage(20); setShowDiscount(true); }}>Apply 20% Discount</button>
                        <button className="btn btn-outline-primary" onClick={() => { setDiscountPercentage(30); setShowDiscount(true); }}>Apply 30% Discount</button>
                    </div>

                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            value={cuponCode}
                            onChange={(e) => setCuponCode(e.target.value)}
                            placeholder="Enter Coupon Code"
                        />
                        <button className="btn btn-primary" onClick={handlingCuponPer}>Apply Coupon</button>
                    </div>

                    <button className="btn btn-success w-100" onClick={handlePurchase}>Complete Purchase</button>

                    {cuponApplied && (
                        <div className="alert alert-warning mt-3">
                            <p>Your Coupon Code Applied: <strong>{cuponCode}</strong></p>
                            <p>Your Coupon Discount: <strong>${cuponCodeDiscountAmount}</strong></p>
                        </div>
                    )}
                </div>
            ) : (
                <p className="text-center text-muted">Your Cart Is Empty...</p>
            )}
        </div>
    );
}

export default Cart;

import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"; 

function Orders() { 
    const purchaseHistory = useSelector(state => state.purchaseDetails);

    return (
        <div className="container mt-5">
            <div className="card shadow p-4">
                <h2 className="text-center mb-4">Purchase History</h2>
                {!purchaseHistory.length ? (
                    <p className="text-center">No Orders Are Available</p>
                ) : (
                    <ul className="list-group">
                        {purchaseHistory.map((purchase, index) => (
                            <li key={index} className="list-group-item mb-3">
                                <p><strong>Date:</strong> {purchase.date}</p>
                                <p><strong>Total Amount:</strong> ${purchase.totalPrice.toFixed(2)}</p>
                                <ul className="list-group list-group-flush">
                                    {purchase.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="list-group-item">
                                            {item.name} - ${item.price.toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Orders;

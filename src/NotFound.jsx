import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/home");
        }, 5000);

        return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }, [navigate]);

    return (
        <div className="container mt-5 text-center">
            <div className="card shadow p-4">
                <h1 className="display-4 text-danger mb-4">404 Page Not Found</h1>
                <img 
                    src="https://tse2.mm.bing.net/th?id=OIP.heeZQ84fzkgUzWydY8ZmPwHaC2&pid=Api&P=0&h=180" 
                    alt="404 Error" 
                    className="img-fluid mb-4" 
                />
                <p className="lead">Redirecting to Home in 5 seconds...</p>
            </div>
        </div>
    );
}

export default NotFound;

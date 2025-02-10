import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, logout } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

function Login() {
    let userName = useRef(null);
    let password = useRef(null);
    let errorMessage = useRef(null);
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);

    const loginCheck = () => {
        if (!userName.current.value || !password.current.value) {
            errorMessage.current.textContent = "Please Enter Both Username and Password";
            errorMessage.current.className = "text-danger";
            return;
        }
        if (userName.current.value === "Prasad" && password.current.value === "Prasad@123") {
            dispatch(login(userName.current.value)); 
            navigate("/home");
        } else {
            errorMessage.current.textContent = "Your credentials are wrong. Please Check Once!";
            errorMessage.current.className = "text-danger";
        }
    };

    const handleSignOut = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <div className="container mt-5">
            <div className="card shadow p-4">
                <h2 className="text-center mb-4">Login Form</h2>
                {!isAuthenticated ? (
                    <>
                        <div className="mb-3">
                            <label className="form-label">User Name:</label>
                            <input type="text" ref={userName} className="form-control"  placeholder="Enter Your UserName"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password:</label>
                            <input type="password" ref={password} className="form-control" placeholder="Enter Your Password"/>
                        </div>
                        <button type="submit" className="btn btn-primary w-100" onClick={loginCheck}>Login</button>
                        <p ref={errorMessage} className="mt-3"></p>
                    </>
                ) : (
                    <div className="text-center">
                        <p className="fw-bold">Welcome, {user}</p>
                        <button className="btn btn-danger w-100" onClick={handleSignOut}>Sign Out</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;

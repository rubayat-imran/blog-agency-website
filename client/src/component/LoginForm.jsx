import React, { useState } from 'react';
import Loading from "./loading.jsx";
import { useNavigate } from "react-router-dom";
import { UserLoginRequest } from "../APIRequest/APIRequest.js";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    let [loading, setLoading] = useState("d-none");
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please fill in all fields.');
            return;
        }

        setLoading("");

        let data = await UserLoginRequest(email, password);

        setLoading("d-none");

        //console.log('data:', data['data']);
        if (data['data'] && data['data'].status === "fail") {
            setError('user not found');
            return;
        }

        if (data['data'] && data['data'].status === "success") {
            let token = data['data']?.data?.token;
            sessionStorage.setItem('loginToken', token);
            navigate("/dashboard")

        }

        setError('');
    };

    return (
        <>
            <div className={loading}><Loading /></div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h3 className="card-title text-center">Login</h3>
                                {error && <div className="alert alert-danger">{error}</div>}
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Enter your password"
                                        />
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-dark">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default LoginForm;
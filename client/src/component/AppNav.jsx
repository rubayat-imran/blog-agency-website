import { Link } from "react-router-dom";
import logo from "../assets/icon/logo.png";

function AppNav() {
    const logout = () => {
        sessionStorage.clear()
        window.location.href = "/"
    }

    return (
        <nav className="navbar shadow-sm bg-white navbar-expand-lg">
            <div className="container-fluid py-3 px-5">
                <a className="navbar-brand" href="/">
                    <img className="nav-logo" src={logo} alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav me-auto">
                        <Link className="nav-link fs-6" to="/">Home</Link>
                        <Link className="nav-link fs-6" to="/blog">Blogs</Link>
                        <Link className="nav-link fs-6" to="/service">Services</Link>
                        <Link className="nav-link fs-6" to="/about">About us</Link>
                        <Link className="nav-link fs-6" to="/contact">Contact us</Link>
                    </div>
                    <div className="d-flex">
                        {!sessionStorage.getItem("loginToken") && <Link className="btn btn-dark fs-6 me-2" to="/login">Login</Link>}
                        {sessionStorage.getItem("loginToken") && <Link className="btn btn-secondary fs-6 me-2" to="/dashboard">Dashboard</Link>}

                        {sessionStorage.getItem("loginToken") && <Link onClick={logout} className="btn btn-danger fs-6" to="/logout">Logout</Link>}


                    </div>
                </div>
            </div>
        </nav>
    );
}

export default AppNav;

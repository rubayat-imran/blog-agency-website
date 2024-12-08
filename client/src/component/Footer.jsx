import React from 'react'

function Footer() {
    return (

        <footer className="py-3 mt-auto bg-white">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
                <li className="nav-item"><a href="/blog" className="nav-link px-2 text-muted">Blogs</a></li>
                <li className="nav-item"><a href="/service" className="nav-link px-2 text-muted">Services</a></li>
                <li className="nav-item"><a href="/about" className="nav-link px-2 text-muted">About us</a></li>
                <li className="nav-item"><a href="/contact" className="nav-link px-2 text-muted">Contact us</a></li>
            </ul>
            <p className="text-center text-muted">© 2024 Company, Inc</p>
        </footer>

    )
}

export default Footer
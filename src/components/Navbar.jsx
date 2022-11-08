import React from "react";
import { Link } from "react-router-dom";

function Navbar (){
    return(
        <>
            <div className="container-fluid nav-bag position-sticky">
                <div className="row border-bottom">
                    <div className="col-11 mx-auto">
                        <div className="pt-5 pt-lg-0 order-2 order-lg-1 ">
                            <nav className="navbar navbar-expand-lg">
                                <div className="container-fluid">
                                    <Link className="navbar-brand text-primary" to="/">JLegacy-AI</Link>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0 gap-3">
                                            <li className="nav-item">
                                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/service">Services</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/contact">Contacts</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/about">About</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
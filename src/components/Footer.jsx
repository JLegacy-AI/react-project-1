import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <>
            <footer className="bg-dark text-center text-white">
                <div className="container p-4 pb-0">
                    <section className="">
                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                    <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                <div className="col-md-5 col-12">
                                    <div class="input-group">
                                        <span class="input-group-text" id="basic-addon1">@</span>
                                        <input type="text" class="form-control" placeholder="Email" aria-label="email" aria-describedby="basic-addon1"/>
                                    </div>
                                </div>
                            <div class="col-auto">
                                <button type="submit" className="btn btn-outline-primary mb-4" onClick={(e) => e.preventDefault() }>
                                    Subscribe
                                </button>
                            </div>
                            </div>
                        </form>
                    </section>
                </div>
                <div class="text-center p-3">
                    © 2020 Copyright:
                    <Link className="text-white text-decoration-none" to="/"> JLegacy-AI</Link>
                </div>
            </footer>
        </>
    )
}

export default Footer;
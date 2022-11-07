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
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example2" className="form-control" placeholder="Email Address"/>
                                    </div>
                                </div>
                            <div class="col-auto">
                                <button type="submit" className="btn btn-outline-primary mb-4 text-white">
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
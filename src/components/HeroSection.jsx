import React from "react";
import { Link } from "react-router-dom";

const HeroSection = ()=>{
    return (
        <>
            <section id="header">
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-10 mx-auto d-flex align-item-center h-100"> 
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                <h1 className="my-3">
                                    Polish your Projects and Ideas
                                    <strong className="brand-name"> JLegacy-AI</strong>
                                </h1>
                                <h3 className="my-3">
                                    We help companies to optimize and automate their work by using AI and Robotics 
                                </h3> 
                                <div className="mt-3 btn-get-started border border-primary rounded-pill d-flex justify-content-center align-items-center">
                                    <Link className="text-decoration-none" to="/">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroSection;
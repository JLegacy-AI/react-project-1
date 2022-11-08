import React from "react";
import { Link } from "react-router-dom"; 

const CommonSection = ({url, text, detail})=>{
    return (
        <>
            <section id="header">
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-10 mx-auto d-flex align-item-center h-100"> 
                            <div className="col-md-6 pt-5 pt-lg-0 d-flex flex-column justify-content-center">
                                <h1 className="my-3">
                                    {text}
                                    <strong className="brand-name"> JLegacy-AI</strong>
                                </h1>
                                <h5 className="my-3">
                                    {detail} 
                                </h5> 
                                <div className="mt-3 btn-get-started rounded-pill d-flex justify-content-center align-items-center">
                                    <Link className="text-decoration-none hero-btn" to="/">Get Started</Link>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <img className="w-75 hero-section-img" src={url} alt="Hero Section" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CommonSection;
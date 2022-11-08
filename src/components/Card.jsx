import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, detail}) => {
    return (
        <>
            <Link className="card col-3 text-decoration-none">
                <div className="d-flex justify-content-center card-img-container"></div>
                <div>
                    <div className="card-body">
                        <h5 className="card-title">Service</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit</p>
                    </div>
                    <div className="text-black w-100 d-flex justify-content-center py-1 border-top card-read-more">
                        Read More
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Card;
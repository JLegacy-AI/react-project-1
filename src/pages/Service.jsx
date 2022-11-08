import React from "react";
import CardGallery from "../components/CardGallery";
import CommonSection from "../components/CommonSection";

const Service = () => {

    const page ={
        "url": process.env.PUBLIC_URL+"/services.jpg" ,
        "text": "Online Marketing Services",
        "detail": "We provide your business with one-stop solutions for online marketing services."
    }

    return(
        <>  
            <CommonSection {...page}/>
            <div className="d-grid gap-3 grid-column-10 w-100 p-5">
                <h1 className="w-100 text-center p-4">Our Services</h1>
                <CardGallery/>
            </div>
        </>
    )
}

export default Service;
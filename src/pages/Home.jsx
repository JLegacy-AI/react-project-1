import React from "react";
import CommonSection from "../components/CommonSection";

function Home() {

    const page ={
        "url": process.env.PUBLIC_URL+"/hero-section-image.jpg" ,
        "text": "Polish your Projects and Ideas",
        "detail":"We help companies to optimize and automate their work by using AI and Robotics"
    }

    return (
        <>
            <CommonSection {...page}/>
        </>
    );
}

export default Home;

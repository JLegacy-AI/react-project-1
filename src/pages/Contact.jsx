import React from "react";
import CommonSection from "../components/CommonSection"

const Contact = () =>{
    const page ={
        "url": process.env.PUBLIC_URL+"/contact-us.jpg" ,
        "text": "Get in touch with us",
        "detail":"We enjoy discussing digital marketing. If you have a question or a comment, please enter it in the spaces below and we will respond as soon as possible."
    }

    return(
        <>
            <CommonSection {...page}/>
        </>
    )
}

export default Contact;
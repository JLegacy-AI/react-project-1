import React from "react";
import CommonSection from "../components/CommonSection"
import ContactCard from "../components/ContactCard";

const Contact = () =>{
    const page ={
        "url": process.env.PUBLIC_URL+"/contact-us.jpg" ,
        "text": "Get in touch with us",
        "detail":"We enjoy discussing digital marketing. If you have a question or a comment, please enter it in the spaces below and we will respond as soon as possible."
    }

    return(
        <>
            <CommonSection {...page}/>
            <section className="py-3">
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-4 mx-auto shadow p-3 mb-5 bg-body rounded"> 
                            <ContactCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;
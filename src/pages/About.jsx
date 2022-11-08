import React from "react";
import CommonSection from "../components/CommonSection";
import AboutCard from "../components/AboutCard";

const About = () => {
    const page ={
        "url":process.env.PUBLIC_URL+"/about-us.jpg" ,
        "text":"Welcome to About us Page",
        "detail":"We’re a digital marketing firm that specialises on Creating success stories for our clients . Our openness and sincerity speak for themselves."
    }

    const cards = [
        {
            "title":"Our Vision",
            "detail":"We are a creatively driven team who are passionate about new ideas and how these can be developed to drive more business for our clients."
        },
        {
            "title":"Our Mission",
            "detail":"Our experienced team is ready to Design, research, plan, cost, develop and launch. Driven to get the best results for our clients."
        },
        {
            "title":"Our Values",
            "detail":"Creating visual experiences across the full spectrum of marketing collateral for all businesses large or small."
        }
    ]

    return (
        <>
            <div>
                <CommonSection {...page}/>
                <section className="py-3">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-10 mx-auto d-flex align-item-center h-50 justify-content-around"> 
                                    {
                                        cards.map((value, key) => {
                                            return <AboutCard key={key} {...value}/>
                                        })
                                    }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default About;
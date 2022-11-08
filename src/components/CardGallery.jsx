import React from "react";
import Card from "./Card";

const CardGallery = () => {
    const cards =[
        {
            title:"Service",
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit, ut soluta dignissimos illum eos voluptates repellendus corrupti saepe libero reiciendis repudiandae in quidem modi vero ratione nam deleniti nisi."     
        },
        {
            title:"Service",
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit, ut soluta dignissimos illum eos voluptates repellendus corrupti saepe libero reiciendis repudiandae in quidem modi vero ratione nam deleniti nisi."     
        },
        {
            url: process.env.PUBLIC_URL+"/hero-section-image.jpg",
            title:"Service",
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit, ut soluta dignissimos illum eos voluptates repellendus corrupti saepe libero reiciendis repudiandae in quidem modi vero ratione nam deleniti nisi."     
        },
        {
            url: process.env.PUBLIC_URL+"/hero-section-image.jpg",
            title:"Service",
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit, ut soluta dignissimos illum eos voluptates repellendus corrupti saepe libero reiciendis repudiandae in quidem modi vero ratione nam deleniti nisi."     
        },
        {
            url: process.env.PUBLIC_URL+"/hero-section-image.jpg",
            title:"Service",
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit, ut soluta dignissimos illum eos voluptates repellendus corrupti saepe libero reiciendis repudiandae in quidem modi vero ratione nam deleniti nisi."     
        },
        {
            url: process.env.PUBLIC_URL+"/hero-section-image.jpg",
            title:"Service",
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit, ut soluta dignissimos illum eos voluptates repellendus corrupti saepe libero reiciendis repudiandae in quidem modi vero ratione nam deleniti nisi."     
        },
        {
            url: process.env.PUBLIC_URL+"/hero-section-image.jpg",
            title:"Service",
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit, ut soluta dignissimos illum eos voluptates repellendus corrupti saepe libero reiciendis repudiandae in quidem modi vero ratione nam deleniti nisi."     
        },
        {
            url: process.env.PUBLIC_URL+"/hero-section-image.jpg",
            title:"Service",
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit, ut soluta dignissimos illum eos voluptates repellendus corrupti saepe libero reiciendis repudiandae in quidem modi vero ratione nam deleniti nisi."     
        },
        {
            url: process.env.PUBLIC_URL+"/hero-section-image.jpg",
            title:"Service",
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit, ut soluta dignissimos illum eos voluptates repellendus corrupti saepe libero reiciendis repudiandae in quidem modi vero ratione nam deleniti nisi."     
        }
    ]

    return(
        <> 
                <div className="row gap-5 d-flex justify-content-around">
                    {
                        cards.map( 
                            (i,e) => {
                                return <Card/>
                            }
                        )
                    }
                </div>
        </>
    )
}

export default CardGallery;
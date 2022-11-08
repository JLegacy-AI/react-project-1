import React from "react";


const AboutCard = ({title, detail}) => {
    return (
        <>
            <div class="card w-25 shadow-sm p-3 mb-5 bg-body rounded">
                <div class="card-body">
                    <h5 class="card-title text-primary">{title}</h5>
                    <p class="card-text">{detail}</p>
                </div>
            </div>
        </>
    );
}

export default AboutCard;
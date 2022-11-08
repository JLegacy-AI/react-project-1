import React from "react";

const ContactCard = () => {
    return (
        <>
           <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email:</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
            </div>
        </>
    );
}

export default ContactCard;
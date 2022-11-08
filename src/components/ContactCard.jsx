import React from "react";

const ContactCard = () => {
    return (
        <>
            <div>
                <h3 className="text-center p-3 text-primary">Contact Us</h3>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Subject:</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Subject"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message:</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="Message"></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary mb-4" onClick={(e) => e.preventDefault() }>
                    Send Message
                </button>
            </div>
        </>
    );
}

export default ContactCard;
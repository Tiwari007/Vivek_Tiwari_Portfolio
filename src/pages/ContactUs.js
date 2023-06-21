import ContactUsCard from "../components/ContactUsCard"
import ContactUsForm from "../components/ContactUsForm"



const ContactUs = () => {

    return (
        <div className="contact__us" id="contactus">
            <h3>Contact</h3>
            <h1>Contact With Me</h1>
            <div className="contactUs__container">
                <ContactUsCard />
                <ContactUsForm />
            </div>
        </div>
    )
}

export default ContactUs
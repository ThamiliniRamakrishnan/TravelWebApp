import './ContactUsFormStyles.css'

function ContactUsForm() {
    return(
        <div className='Travel_contact-form'>
            <h1>Send a message to Us!</h1>
            <form>
                <input type='text' placeholder='Name'/>
                <input type='email' placeholder='Email'/>
                <input type='text' placeholder='Subject'/>
                <textarea placeholder='Message' rows='4'/>
                <button>Send Message</button>
            </form>
        </div>
    )
}

export default ContactUsForm
import React, {useRef} from 'react'
import '../css/contact.css'
import emailjs from '@emailjs/browser'
// npm i @emailjs/browser
function Contact({theme, setTheme}) {
    const form = useRef()
    const sendEmail = (e) =>{
        e.preventDefault();
        //service_id, template_id, formValue, publicKey
        emailjs.sendForm("service_wmvhz58", "template_1sou6ae", form.current, "jMbED-dENmhNipyQO").then(()=>{
            alert("Message was sent successfully!");
            form.current.reset();
        },
        (error) => {
            alert("Failed to send message try again!", error.text);
        }
    )
    }
  return (
    <div className={`contact-container ${theme}`} id='contact'>
        <form ref={form} onSubmit={sendEmail} className="contact">
            <h1>Get in touch!</h1>
            <label>You're name</label>
            <input type="text" placeholder="write your name" name="name"/>
            <label>You're Email </label>
            <input type="email" placeholder="write your Email" name="email"/>
            <label>You're subject</label>
            <input type="text" placeholder="write your subject" name="subject"/>
            <label>Your're Message</label>
            <textarea placeholder="write your message" name="message"></textarea>
            <button type="submit">Send message</button>
        </form>
    </div>
  )
}

export default Contact

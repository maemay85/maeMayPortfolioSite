import { useRef } from "react"
import emailjs from "emailjs-com";
import { SpaceLink } from "./styled-components/SpaceLink";
import { Link } from "react-router-dom";


const EmailContactForm = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f0weiij', 'template_9tf6q6f', form.current, 'hxHheb-8UKemaGtn8').then((result) => {
      console.log(result.text);
      alert("message sent!")
    }, (error) => {
      console.log(error.text);
    })
    e.target.reset()
  }

  return (
    <div id="email-form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Send me an email, please and thank you: </label>
        <input type="text" placeholder="Name" name="name" />

        <input type="email" placeholder="Email" name="email" />

        <input type="text" placeholder="Subject" name="subject" />

        <textarea placeholder="Message" name="message" />
        <input type="submit" value="Send" className="submit" />
      </form>
      <SpaceLink>
        <Link to={'/contact'}>back to contact</Link>
      </SpaceLink>
    </div>
  )

}

export default EmailContactForm;

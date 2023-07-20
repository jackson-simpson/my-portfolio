import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FormEvent, useRef } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef()

  const sendEmail = (e: FormEvent) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_sp4hoeg',
        'template_c3m0uwp',
        form.current,
        'MYKApgiQYvDVm33mZ'
      )
      .then((result) => {
        console.log(result.text)
        alert('Email Sent')
      })
      .catch((error) => {
        console.log(error.text)
      })

    e.target.reset()
  }

  return (
    <section className="container contact-page">
      <h2>Get In Touch With Me</h2>
      <div className="contact-form-container">
        <div className="contact-form">
          <form ref={form} method="POST" onSubmit={sendEmail}>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="sender-name"
                placeholder="Enter Your Name"
                className="input-field"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="sender-email"
                placeholder="Enter Your Email"
                className="input-field"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                cols={60}
                rows={10}
                placeholder="Enter Your Message"
                name="message"
                className="input-field"
                required
              ></textarea>
            </div>
            <input
              type="submit"
              value="Send"
              id="submit-btn"
              className="submit-btn"
            />
          </form>
        </div>
      </div>
      <h3>Or Follow me on Linkedin or Github</h3>
      <div className="socials">
        <a href="https://www.linkedin.com/in/david-simpson-17482416a/">
          <FontAwesomeIcon icon={faLinkedin} color="#f2f2f2" />
        </a>
        <a href="https://github.com/jackson-simpson">
          <FontAwesomeIcon icon={faGithub} color="#f2f2f2" />
        </a>
      </div>
    </section>
  )
}

export default Contact

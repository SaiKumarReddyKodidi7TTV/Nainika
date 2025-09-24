import './Contact.css'

export default function Contact() {
  return (
    <section className="contact-page">
      <h2>Contact Us</h2>
      <p>
        We’d love to hear from you! Whether you have a question, feedback, or a business inquiry —
        feel free to reach out.
      </p>

      <div className="contact-container">
        {/* Company Details */}
        <div className="contact-info">
          <h3>Our Office</h3>
          <p><strong>Address:</strong> Geetha Decorticators, Redipalle, Nallamada, Andhra Pradesh, 515501</p>
          <p><strong>Phone:</strong> +91 (830) 980-1813</p>
          <p><strong>Email:</strong> ranireddykodidhi@gmail.com</p>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <label>
            Name
            <input type="text" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="Your email" required />
          </label>
          <label>
            Message
            <textarea rows={4} placeholder="Your message" required></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}

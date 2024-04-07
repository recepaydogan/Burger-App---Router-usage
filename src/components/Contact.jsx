import "../styles/contact.css";
function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact">
        <div className="contact-left"></div>
        <div className="contact-right">
          <h1>Contact Us</h1>
          <form>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Please Enter Your Name"
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Please Enter Your Email"
            />
            <label>Your Message</label>
            <textarea
              rows="6"
              name="message"
              placeholder="Please Enter Your Message"
            ></textarea>
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

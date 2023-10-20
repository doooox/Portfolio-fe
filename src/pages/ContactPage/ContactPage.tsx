import "./ContactPage.css";
import { Link } from "react-router-dom";
import { FiLinkedin } from "react-icons/fi";
import { FcPhone, FcHome, FcAddressBook } from "react-icons/fc";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact">
        <div className="contact-info">
          <h1>Contact Me</h1>
          <p>
            If you have any questions or inquiries, feel free to reach out to
            me. I'd love to hear from you!
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">
                <FcPhone />
              </span>
              <p className="contact-text">Phone: +38162304063</p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <FcAddressBook />
              </span>
              <p className="contact-text">Email: dtopic12@gmail.com</p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <FcHome />
              </span>
              <p className="contact-text">Location: Novi Sad, Serbia</p>
            </div>
          </div>
          <div className="social-links">
            <h3>You can also contact me via LinkedIn: </h3>
            <ul>
              <li className="social-network-linkedin">
                <Link
                  to={"https://rs.linkedin.com/in/dusan-topic-b668431ba"}
                  target="_blank"
                >
                  <FiLinkedin className="linkedin" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

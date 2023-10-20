import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3>Contact Me</h3>
          <ul className="footer-list">
            <li>Email: dtopic12@gmail.com </li>
            <li>Phone: +381 62 304 060</li>
            <li>Address: Bulevar Patrijarha Pavla 5A, Novi Sad, Serbia</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Follow Me</h3>
          <ul className="footer-list">
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Dusan Topic. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

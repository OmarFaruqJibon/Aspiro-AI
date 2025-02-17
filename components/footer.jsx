import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <p>Developed by © MD Omar Faruq</p>
      <div className="social-icons">
        <div className="social-wrapper">
          <div className="social-connect">
            <a
              href="https://www.facebook.com/omarfarukjibon.a/"
              rel="author"
              target="_blank"
              className="share facebook"
            >
              <FaFacebook className="social-icon" size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/omarfaruqjibon73/"
              rel="author"
              target="_blank"
              className="share facebook"
            >
              <FaGithub className="social-icon" size={20} />
            </a>
            <a
              href="https://github.com/OmarFaruqJibon"
              rel="author"
              target="_blank"
              className="share facebook"
            >
              <FaLinkedin className="social-icon" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

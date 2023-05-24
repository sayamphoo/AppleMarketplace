import "./footer.css";
import logo from "../img/logo.png";

function Footer() {
  return (
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-logo">
          <img src={logo} alt="Logo" />
           
        </div>
        <div class="footer-links">
          <h4>Course</h4>
          <h4>CPE201 WEB TECHNOLOGY LABORATORY </h4>
        </div>
        <div class="footer-social">
          <h4>  </h4>
          <ul>
            <li>
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
     
      </div>
      <div class="footer-bottom">
        <p>
          &copy; 2023 Your Company Name. All rights reserved. | Privacy Policy |
          Terms of Service
        </p>
      </div>
    </footer>
  );
}

export default Footer;

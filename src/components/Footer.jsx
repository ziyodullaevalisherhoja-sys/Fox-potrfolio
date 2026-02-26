import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-bottom">
          <p>Copyright <span className="highlight">Banana Studio</span> 2022. All Right Reserved</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-behance"></i></a>
            <a href="#"><i className="fab fa-slack"></i></a>
            <a href="#"><i className="fab fa-dribbble"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
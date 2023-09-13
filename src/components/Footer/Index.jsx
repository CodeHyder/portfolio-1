import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Raphael</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__link">Home</a>
                    </li>

                        <li>
                        <a href="#about" className="footer__link">About</a>
                    </li> 

                    <li>
                        <a href="#portfolio" className="footer__link">Portfolio</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/rapha_plinio/" 
                    className="footer__social-link" 
                    target="blank">
                        <i class="bx bxl-instagram"></i>
                    </a>
                    <a 
                    href="https://www.linkedin.com/in/raphael-rodrigues-85ab69168/" 
                    className="footer__social-link" 
                    target="blank">
                        <i class="bx bxl-linkedin"></i>
                    </a>
                    <a 
                    href="https://github.com/CodeHyder/" 
                    className="footer__social-link" 
                    target="blank">
                        <i class="bx bxl-github"></i>
                    </a>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer;
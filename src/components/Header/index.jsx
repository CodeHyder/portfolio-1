import './header.css'
import React, { useState } from 'react'
// import { data } from './Data';

const data = [
    {
        id: 1,
        name: "Home",
        icon: "uil uil-estate nav__icon",
    },

    {
        id: 2,
        name: "About",
        icon: "uil uil-user nav__icon",
    },

    {
        id: 3,
        name: "Skills",
        icon: "uil uil-file-alt nav__icon",
    },
];

const Header = () => {

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#Home")

    return (
        <header className='header'>
            <nav className="nav container">
                <a href="#home" className="nav__logo">Rapha</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    {/* <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home"
                                onClick={() => setActiveNav("#home")}
                                className={activeNav === "#home" ?
                                "nav__link active-link" 
                                : "nav__link"
                                }
                            >
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about"
                                onClick={() => setActiveNav("#about")}
                                className={activeNav === "#about" ?
                                "nav__link active-link" 
                                : "nav__link"
                                }
                            >
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" 
                                onClick={() => setActiveNav("#skills")}
                                className={activeNav === "#skills" ?
                                "nav__link active-link" 
                                : "nav__link"
                                }
                            >
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#services" 
                                onClick={() => setActiveNav("#services")}
                                className={activeNav === "#services" ?
                                "nav__link active-link" 
                                : "nav__link"
                                }
                            >
                                <i className="uil uil-briefcase-alt nav__icon"></i> Services
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" 
                                onClick={() => setActiveNav("#portfolio")}
                                className={activeNav === "#portfolio" ?
                                "nav__link active-link" 
                                : "nav__link"
                                }
                            >
                                <i className="uil uil-scenery nav__icon"></i> Portfolio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" 
                                onClick={() => setActiveNav("#contact")}
                                className={activeNav === "#contact" ?
                                "nav__link active-link" 
                                : "nav__link"
                                }
                            >
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul> */}

                    <ul className='nav__list grid'>
                        {data.map((item, index) => {
                            return (
                                <li key={index} className='nav__item'>
                                    <a 
                                    href={`#${item.name.toLowerCase()}`} 
                                    onClick={() => setActiveNav(`#${item.name.toLowerCase()}`)}
                                    className={activeNav === `#${item.name.toLowerCase()}` ?
                                    "nav__link active-link" 
                                    : "nav__link"
                                    }
                                    >
                                    <i className={item.icon}></i> {item.name}
                                    </a>
                                </li>   
                            )
                        })}
                    </ul>

                    <i
                        class="uil uil-times nav__close"
                        onClick={() => showMenu(!Toggle)}>
                    </i>
                </div>

                <div
                    className="nav__toggle"
                    onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )

}

export default Header;
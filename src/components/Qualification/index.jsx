import React, { useState } from "react";
import './Qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggletab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={
                        toggleState === 1
                            ? "qualification__button qualification__active button--flex"
                            : "qualification__button button--flex"
                    }
                        onClick={() => toggletab(1)}
                    >
                        <i className="uil uil-graduation-cap 
                        qualification__icon"></i> Education
                    </div>

                    <div className={
                        toggleState === 2
                            ? "qualification__button qualification__active button--flex"
                            : "qualification__button button--flex"
                    }
                        onClick={() => toggletab(2)}
                    >
                        <i className="uil uil-briefcase-alt
                        qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"
                    }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Colégio Waldorf Micael de São Paulo</h3>
                                <span className="qualification__subtitle">Ensino Médio</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2014 - 2016
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Faculdade Rudolf Steiner</h3>
                                <span className="qualification__subtitle">Pedagogia</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2019 - 2022
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">ALURA</h3>
                                <span className="qualification__subtitle">Front End Devolpment</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2023 - 2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Front End | TI</h3>
                                <span className="qualification__subtitle">Faculdade Descomplica</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Mar/2023 - Jul/2023
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className={toggleState === 2
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"
                    }>
                        <div className="qualification__data">


                            <div>
                                <h3 className="qualification__title">Secretário Pedagógico</h3>
                                <span className="qualification__subtitle">FEWB</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Out/2019 - Out/2020
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Auxiliar de classe</h3>
                                <span className="qualification__subtitle">Colégio Waldorf Micael</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Auxiliar de classe</h3>
                                <span className="qualification__subtitle">EMEF Solano Trindade</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Freelancer</h3>
                                <span className="qualification__subtitle">Secretario Juridico</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2019 - Present
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;
import React from "react";
import Info from "./Info";
import "./About.css";
import AboutImg from "assets/perfil.jpg";


const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data">
          <Info />

          <p className="about__description">
          Sou formada em Pedagogia pela Faculdade Rudolf Steiner. Atualmente estou estudando desenvolvimento Front End pela ALURA. Pretendo fazer uma pós graduação na área da técnologia.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;


import React from "react";
import { Container, Row, Col } from "react-bootstrap";


import myImg from "../../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Palmeraie() {
  return (
    <section>
      <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Création d'un <span className="purple"> Site Web</span> 
            </h1>
            <p className="home-about-body">
              La 
              <i>
                <b className="purple">ToasterCorp </b>
              </i>
              a été engagée par une palmeraie normande afin de créer une 
              <i>
                <b className="purple"> identité numérique </b>
              </i>
              pour cette entreprise.
              <br />
              <br />Durant la création de ce site web j'apprends à 
              <i>
                <b className="purple"> répondre aux besoins du client </b>
              </i>
              et à améliorer mes comptes rendu de travail auprès de mon manager.
              <br />
              <br />
              Je me suis biens sur perfectionné en 
              <i>
                <b className="purple"> HTML, CSS, JS</b>
              </i>
              <br />
              <br />
              Durant ce projet je dois prévoir<i>
                <b className="purple"> les futurs dévelopement de l'entreprise cliente  </b>
              </i>  et anticiper un future dévelopement du site web. De plus, je dois méler réunions professionelle et cours ce qui m'oblige à avoir un agenda bien organisé.
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Retrouvez-Moi ICI!</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ozyloop"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Ozylo1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/leroux-thomas-ozylo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ozyloop/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
    </section>
  );
}

export default Palmeraie;

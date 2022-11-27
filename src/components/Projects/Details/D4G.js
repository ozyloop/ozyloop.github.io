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


function D4G() {
  return (
    <section>
      <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple">  Eco-Conception Web </span> 
            </h1>
            <p className="home-about-body">
              J'ai participé à la conpétition d'éco-concéption web 
              <i>
                <b className="purple"> Design 4 Green </b>
              </i>
              avec mon équipe 
              <i>
                <b className="purple"> GreenITea </b>
              </i>
              <br />
              <br />Cette Compétition m'a permis d'apprendre les règles d'éco-conception et d'améliorer mes compétence d'
              <i>
                <b className="purple"> optimisations informatique </b>
              </i> acquise en prépa.
              <br />
              <br />
              Durant ce projet de 48h j'ai pu dépasser mes limites en ne dormant qu'une heure afin de rendre le projet dans les temps. 
              <br/>
              <br/>
              Je me suis principalement consacré à la conception de la carte interactive en
              <i>
                <b className="purple"> full SVG </b>
              </i>
                afin de minimiser le poids. Mais j'ai aussi participé au pseudo-code du filtre et à la conception global du site. 
              
              
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

export default D4G;

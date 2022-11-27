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


function Footmania() {
  return (
    <section>
      <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> Mini-jeu </span> Python
            </h1>
            <p className="home-about-body">
              Durant ma prépa PC, j'ai eu l'occasion d'
              <i>
                <b className="purple"> appliquer la réalité physique </b>
              </i> dans un mini-jeu en
              <i>
                <b className="purple"> Python </b>
              </i>
              <br />
              <br />En effet, j'ai dû créer un jeu de coup franc en ayant comme malus de ne pas utiliser PyGames. 
              <br />
              <br />
              Ce jeu implémente des conceptes de physique mécaniques telles que les 
              <i>
                <b className="purple"> équations différentiels du second ordres </b>
                  et la méthode d'approximation d'
                <b className="purple">
                  Euler
                </b>
              </i>
              <br />
              <br />
              C'est ce premier petit projet informatique qui m'a fait me passionner pour l'informatique. Il m'a permis de me rendre compte du potentiel immense 
              de cette technologie et le chemin aussi grand à parcourir avant de pouvoir maitriser ce pouvoir. 
              <br />
              <br />Et comme disait un certain oncle 
              <i>
                <b className="purple">
                    {" "}
                   "Un grand pouvoir implique de grandes responsabilités" 
                   
                </b>
              </i>
              {" "}
              C'est pour cela que je m'applique à utiliser ces connaissances et compétences au services des autres.
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

export default Footmania;

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
              Création d'un <span className="purple">jeu-vidéo</span> 
            </h1>
            <p className="home-about-body">
              Avec les membre de la 
              <i>
                <b className="purple">ToasterCorp </b>
              </i>
              nous avons commencé la création d'un jeu-vidéo de type <i>
                <b className="purple">rogue lite.</b>
              </i>
              <br />
              <br />Ce dévelopement me permet de perfectionner ma maitrise du 
              <i>
                <b className="purple"> C# </b>
              </i>
              ainsi que d'
              <i>
                <b className="purple">Unity</b>
              </i>
              <br />
              <br />
              Ce 1er projet me permet d'apprendre à travailler en ayant une structure de travail qui n'est pas la mienne et à suivre un rythme de travail et de réunion régulier
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

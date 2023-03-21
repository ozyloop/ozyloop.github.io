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


function Adm() {
  return (
    <section>
      <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple">  Application Mobile</span> 
            </h1>
            <p className="home-about-body">
              Pour mon stage de 3ème année j'ai pu commencer la création d'une application mobile qui a bpour but <b className="purple">d'améliorer l'échange d'information</b> au sein de l'association.
              <br />
              <br />Je poursuis actuelement le développement de cette application en bénévole. 
              <br />
              <br />Le dévelopement de cette application m'a permis d'apprendre un nouveau language de programmation 
              <i>
                <b className="purple"> le Dart </b>
              </i> avec la bibliothèque 
              <i>
                <b className="purple"> Flutter</b>
              </i> 
              <br />
              <br />
              J'ai pu aussi apprendre le 
              <i>
                <b className="purple"> design UX et UI  </b>
                  que j'ai appris et que j'apprend en {" "}
                <b className="purple">
                autodidacte
                </b>
              </i>
              <br />
              <br />
              Le but à terme est de pouvoir utiliser cette application comme base afin de pouvoir la vendre à plusieurs autres club de sport en s'adaptant au mieux à chaque besoins.
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

export default Adm;

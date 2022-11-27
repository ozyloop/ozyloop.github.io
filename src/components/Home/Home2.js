import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Laissez-Moi me<span className="purple">  Presenter</span> 
            </h1>
            <p className="home-about-body">
              Je suis tombé amoureux de la programmation et j'ai appris à faire quelques truc, je pense… 🤷‍♂️
              <br />
              <br />Je suis à l'aise avec les classiques
              <i>
                <b className="purple"> C#, Flutter, Javascript et Python. </b>
              </i>
              <br />
              <br />
              Mon but est de créer des &nbsp;
              <i>
                <b className="purple">technologies et produits </b>
                  répondant aux besoins du  {" "}
                <b className="purple">
                  CgFileDocument
                </b>
              </i>
              <br />
              <br />
              Je suis en train de créer ma société avec 4 amis. La <b className="purple">ToasterCorp </b> 
              est une start-up qui a pour but de simplifier la vie de ses clients en mettant ses
              <i>
                <b className="purple">
                  {" "}
                  compétences variés
                  
                </b>
              </i>
              &nbsp; au service de celui-ci.
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
  );
}
export default Home2;

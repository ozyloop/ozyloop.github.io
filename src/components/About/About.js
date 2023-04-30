import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";

import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import pastImg from "../../Assets/futurAbout.svg";
import futurImg from "../../Assets/pastAbout.svg";
import Toolstack from "./Toolstack";
import Card from "react-bootstrap/Card";
import { ImPointRight, ImPointLeft } from "react-icons/im";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Savoir qui <strong className="purple">Je Suis</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={pastImg} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              D'où <strong className="purple">Je Viens</strong>
            </h1>
            <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Je suis originaire d'une famille modeste où je me suis passionné seul pour les sciences cherchant à comprendre le monde qui m'entoure. 
            
            <br />Je me suis donc naturelement tourné vers un <strong className="purple">Bac S</strong>.
            <br />
            <br />J'ai ensuite continué avec une <strong className="purple">CPGE Physique Chimie</strong> où j'ai découvert l'informatique. 
            <br />

            <br />Je me suis alors tournée vers  <strong className="purple">l'intelligence artificielle</strong> dans l'école d'ingénieur ESAIP.
            
          
          </p>
        </blockquote>
      </Card.Body>
    </Card>
          </Col>
          
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Où <strong className="purple">Je Vais</strong>
            </h1>
            <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Je suis co-créateur d'une start-up du nom de <strong className="purple">Sykey</strong> qui a pour but de créer du jeu vidéo et des applications diverses. 
            <br />
            
            <br />Je vais tout d'abord finir mes études puis poursuivre dans le développement d'intelligence artificielle. Mais je ne me ferme pas la porte à d'autre poste de développeur ou concepteur logicielle.
            <br />
            <br />Sur le coté personnel, je vais continué à travailler pour Sykey sur mon temps libre et apprendre toujours plus sur la conception informatique. En effet, <strong className="purple">j'adore faire de l'imaginaire une réalité</strong>.
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={futurImg} alt="about" className="img-fluid" />
          </Col>
        </Row>



        
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
            md={6}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">Valeurs</strong>
            </h1>
            <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <ul>
            <li className="about-activity2">
              <ImPointRight /> Respect
            </li>
            <li className="about-activity2">
              <ImPointRight /> Motivation
            </li>
            <li className="about-activity2">
              <ImPointRight /> Passion
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
          </Col>
          <Col
            md={6}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
               <strong className="purple">Anti-Valeurs</strong>
            </h1>
            <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <ul>
            
            <li className="about-activity2">
               Arrogance <ImPointLeft />
            </li>
            <li className="about-activity2">
               Irresponsabilité <ImPointLeft />
            </li>
            <li className="about-activity2">
               Pepsimisme <ImPointLeft />
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
          </Col>
          </Row>

        <h1 className="project-heading">
          Mes <strong className="purple"> Outils</strong> 
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;

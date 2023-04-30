import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import laptopImg from "../../Assets/about.png";
import Techstack from "../About/Techstack";
function Skills() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Connaissances */ }
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
               <strong className="purple">Mes Connaissances</strong>
            </h1>
            <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <ul>
            <li className="about-activity">
              <ImPointRight /> Langages de Programmation
            </li>
            <li className="about-activity">
              <ImPointRight /> Gestion de Projet Agile
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong className="purple">Français </strong>(Natif) / <strong className="purple">Anglais </strong> (B2) / <strong className="purple">Espagnol </strong> (Scolaire)
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
{/* Langage de programmation */ }
        <Row style={{ justifyContent: "center", padding: "10px" }}>
      <h1 className="project-heading">
          Mes <strong className="purple">Langages </strong> de programmation
        </h1>

        <Techstack />
        </Row>
    {/* Compétences */ }
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
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
               <strong className="purple">Mes Compétences</strong>
            </h1>
            <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <ul>
            <li className="about-activity">
              <ImPointRight /> Création d'un site Web React FullStack
            </li>
            <li className="about-activity">
              <ImPointRight /> Création de modèles d'IA (NLP, Deep Learning, Reinforcement Learning, ...)
            </li>
            <li className="about-activity">
              <ImPointRight /> Création d'une application mobile (Flutter, Android)
            </li>
            <li className="about-activity">
              <ImPointRight /> Création d'un environnement 3D Unity
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Skills;

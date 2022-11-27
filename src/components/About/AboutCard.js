import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour, je suis <span className="purple">Thomas Leroux </span>
            d' <span className="purple"> Angers, France.</span>
            <br />Je suis un étudiant en ingénieurie informatique à l'<span className="purple">ESAIP</span>, spécialisé en Intelligence artificielle.
            <br />
            <br />
            À coté du code, voici quelques activités que j'aime faire!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer aux jeux vidéos (cohesion d'équipe)
            </li>
            <li className="about-activity">
              <ImPointRight /> Faire du sport Volley/Athlétisme (force physique et mentale)
            </li>
            <li className="about-activity">
              <ImPointRight /> Regarder des animés (des valeurs)
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

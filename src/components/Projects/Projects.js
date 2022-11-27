import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Expériences </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets auquels j'ai pu faire partie ou sur lesquels je travail actuelement
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Application Mobile"
              description="L'avenir de Mortain est une association sportive auprès de laquelle j'ai pu effectué mon stage de 3ème année. Durant ce stage j'ai pu commencer la conception d'une application mobile afin de facilité la communication d'informations."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Jeux Vidéo"
              description="Avec mes collègues de la ToasterCorp, nous créons un jeu vidéo type rogue lite. Ce jeu sera disponible sur PC."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Site Web Pro"
              description="Avec mes collègues de la ToasterCorp, nous développons un site web pour une palmeraie. Nous sommes aussi en charge de créer sa communication digitale ainsi que son identité graphique."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Eco-Conception Web"
              description="Durant ma 4ème année d'étude sup j'ai pu participer au concours design 4 green, un concours d'éco-conception web pendant une durée de seulement 48h."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Mini-Jeu Python"
              description="Durant mes études en classe préparatoire en Physique Chimie j'ai pu développer en projet un mini-jeu en python qui implementait les calculs de réalités physiques."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Engagement Bénévoles </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques uns de mes Engagement Bénévoles
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Coach"
              description="J'aide quand le temps me le permet un club d'athlétisme pour les entrainements."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Eco-Run"
              description="Je participe aux Eco-run. Ce sont des marche / jogging qui ont pour but de nettoyer les endroits que nous parcouront."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Co-Organisateur d'observation astronomique"
              description="Avec le club Astro'Esaip dont j'ai pu faire partie j'ai pu organiser plusieurs sortie d'observation afin de pour voir éduquer les autres membres sur les mystères de l'univers."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

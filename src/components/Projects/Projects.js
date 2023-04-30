import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import adm from "../../Assets/Projects/pc_adm.png";
import astro from "../../Assets/Projects/pc_astro.png";
import coach from "../../Assets/Projects/pc_coach_thomas2.png";
import d4g from "../../Assets/Projects/pc_d4g.png";
import ecoRun from "../../Assets/Projects/pc_eco_run.png";

import footmania from "../../Assets/Projects/pc_footmania.png";
import toaster from "../../Assets/Projects/pc_toaster.png";
import unity from "../../Assets/Projects/pc_unity.png";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";



function Projects() {
  const [expand, updateExpanded] = useState(false);
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
          <Nav.Link
                as={Link}
                to="/Adm"
                onClick={() => updateExpanded(false)}
              >
            <ProjectCard
              imgPath={adm}
              isBlog={false}
              title="Application Mobile"
              description="L'avenir de Mortain est une association sportive auprès de laquelle j'ai pu effectué mon stage de 3ème année. Durant ce stage j'ai pu commencer la conception d'une application mobile afin de facilité la communication d'informations."
              
              
            />
            </Nav.Link>
          </Col>

          <Col md={4} className="project-card">
          <Nav.Link
                as={Link}
                to="/O2A"
                onClick={() => updateExpanded(false)}
              >
            <ProjectCard
              imgPath={unity}
              isBlog={false}
              title="Jeux Vidéo"
              description="Avec mes collègues de la ToasterCorp, nous créons un jeu vidéo type rogue lite. Ce jeu sera disponible sur PC. Il apportera un nouveau style de jeu tout en reprenant les codes qui font de ce type, l'un des plus en vogue."
             
              
            />
            </Nav.Link>
          </Col>

          <Col md={4} className="project-card">
          <Nav.Link
                as={Link}
                to="/Palmeraie"
                onClick={() => updateExpanded(false)}
              >
            <ProjectCard
              imgPath={toaster}
              isBlog={false}
              title="Site Web Pro"
              description="Avec mes collègues de Sykey, companie que nous avons créé, nous développons un site web Front et Back pour une palmeraie. Nous sommes aussi en charge de créer sa communication digitale ainsi que son identité graphique."
              
                         
            />
            </Nav.Link>
          </Col>

          <Col md={4} className="project-card">
          <Nav.Link
                as={Link}
                to="/D4G"
                onClick={() => updateExpanded(false)}
              >
            <ProjectCard
              imgPath={d4g}
              isBlog={false}
              title="Eco-Conception Web"
              description="Durant ma 4ème année d'étude sup j'ai pu participer au concours design 4 green, un concours d'éco-conception web pendant une durée de seulement 48h."
            />
            </Nav.Link>
          </Col>

          <Col md={4} className="project-card">
          <Nav.Link
                as={Link}
                to="/Footmania"
                onClick={() => updateExpanded(false)}
              >
            <ProjectCard
              imgPath={footmania}
              isBlog={false}
              title="Mini-Jeu Python"
              description="Durant mes études en classe préparatoire en Physique Chimie j'ai pu développer en projet un mini-jeu en python qui implementait les calculs de réalités physiques."
              
              
            />
            </Nav.Link>
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
              imgPath={coach}
              isBlog={false}
              title="Coach"
              description="J'aide, quand le temps me le permet, un club d'athlétisme pour les entrainements, encadrer les athlètes, mise à disposition du matériel etc."
              
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecoRun}
              isBlog={false}
              title="Eco-Run"
              description="Je participe aux Eco-runs. Ce sont des marches / jogging qui ont pour but de nettoyer les endroits que nous parcouront. l'année dernière nous avons récolté plus de 200kg de déchet en l'espace de 2h."
              
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={astro}
              isBlog={false}
              title="Co-Organisateur d'observation astronomique"
              description="Avec le club Astro'Esaip dont j'ai pu faire partie j'ai pu organiser plusieurs sortie d'observation afin de pouvoir éduquer les autres membres sur les mystères de l'univers."
              
                        
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Son <strong className="purple">Projelerim</strong>
        </h1>
        <p style={{ color: "white" }}>
          Burada yapmış olduğum bazı projeleri görebilirsin.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={''}
              isBlog={false}
              title="Digital Inspector"
              description="Belediyeler için geliştirilen Digital Inspector, yöneticilerin denetçilere görev atayabildiği, denetçilerin ise sahaya giderek rapor oluşturabildiği kapsamlı bir platformdur. Web uygulaması React.js, Node.js, Firebase Auth, Firestore Database ve Firebase Storage ile geliştirilmiştir. Mobil uygulama ise Java ile yazılmıştır. REST API, OpenStreetMap ve OpenStreetMap Routing entegrasyonları sayesinde harita üzerinde görev ve rota takibi sağlanır. Sistem, modern yazılım standartlarına uygun olarak güvenli ve kullanıcı dostu bir deneyim sunar."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://mir-s3-cdn-cf.behance.net/project_modules/1400/00b03344660881.5819dc7a5f216.jpg'}
              isBlog={false}
              title="Hava Durumu Uygulaması"
              description="Flutter ile geliştirilen bu profesyonel hava durumu uygulaması, kullanıcı dostu arayüzüyle anlık hava durumu bilgilerini sunar. Uygulama, Firebase altyapısı ile güvenli kullanıcı yönetimi ve veri saklama imkânı sağlarken, REST API entegrasyonu sayesinde güncel hava durumu verilerini hızlı ve güvenilir şekilde kullanıcıya ulaştırır. Modern yazılım standartlarına uygun olarak geliştirilen bu uygulama, hem performans hem de güvenlik açısından yüksek kalite sunar."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

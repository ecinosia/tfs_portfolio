import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
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
              ÖNCE <span className="purple"> KISACA BEN </span> KİMİM?
            </h1>
            <p className="home-about-body">
              Merhaba! Ben bir <b className="purple">Full Stack Developer</b>’ım ve yazılım geliştirmeye duyduğum tutku beni her gün daha fazlasını üretmeye motive ediyor.
              <br /><br />
              Web ve mobil uygulama geliştirme konularında aktif olarak çalışıyorum. Özellikle
              <b className="purple"> React.js, Next.js, Node.js, Express.js, MongoDB</b> ile modern web projeleri geliştiriyor; mobil tarafta ise
              <b className="purple"> Flutter, Kotlin ve Java</b> kullanarak etkileyici uygulamalar oluşturuyorum.
              <br /><br />
              Şu anda <b className="purple">Bilgisayar Mühendisliği 4. sınıf</b> öğrencisiyim ve <b className="purple">Haziran ayı itibarıyla mezun</b> oluyorum.
              <br /><br />
              Yeni teknolojileri keşfetmek, fikirleri gerçeğe dönüştüren ürünler tasarlamak ve yazılım alanında derinleşmek en büyük tutkularım arasında. Geliştirdiğim her projede hem kullanıcı deneyimini hem de teknik kaliteyi ön planda tutuyorum.
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
            <h1>BENİ BURADA BULABİLİRSİN</h1>
            <p>
              Benimle <span className="purple">iletişime geçmekten</span> çekinme!
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="mailto:furkansaridiken@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/ecinosia"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/furkansaridiken/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/tahirfurkansaridiken"
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

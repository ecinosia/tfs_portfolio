import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Merhaba, ben <span className="purple">Furkan Sarıdiken.</span>
            <br />
            KTO Karatay Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Aynı zamanda yaklaşık 2 yıldır iyi bir şirket olan <span className="purple">Makina Bilgi Teknolojileri A.Ş.</span> firmasında uzun dönem stajyerlik yapıyorum.
            <br />
            <br />
            Kod yazmak dışında, birçok farklı aktivite de yapmayı seviyorum!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Enstrüman Çalmak
            </li>
            <li className="about-activity">
              <ImPointRight /> Seyahate Gitmek
            </li>
            <li className="about-activity">
              <ImPointRight /> Yüzmek
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Her zaman fark yaratan şeyler yapmaya çalış!"{" "}
          </p>
          <footer className="blockquote-footer">Furkan Sarıdiken</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

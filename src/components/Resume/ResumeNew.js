import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/tfs_cv.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;CV'i İndir
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            className="d-flex flex-column align-items-center"
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            {Array.from(
              new Array(
                (() => {
                  // We need to get the number of pages, so let's use a state
                  // But since we can't declare state here, let's move the logic up
                  // So, let's assume numPages is in state
                  // We'll add the state and onLoadSuccess handler above
                  // For now, just use numPages
                  // This code will work with the state added above
                  // If not, add: const [numPages, setNumPages] = useState(null);
                  // and pass onLoadSuccess
                  // This is the correct way to render all pages
                  return numPages || 0;
                })()
              ),
              (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  scale={width > 786 ? 1.7 : 0.6}
                  style={{ marginBottom: "2rem" }}
                />
              )
            )}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;CV'i İndir
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;

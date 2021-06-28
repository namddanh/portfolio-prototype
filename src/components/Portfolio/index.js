import React, { useState } from "react";
import Loader from "../Loader";
import ControlPanel from "./ControlPanel";
import pdfFile from "../../images/resume/NamDanh.pdf";
import {
  PortfolioContainer,
  PortfolioWrapper,
  ResumeDisplayAndController,
} from "./PortfolioElements";
import "../../style/ResumePage.css";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Portfolio = () => {
  const [scale, setScale] = useState(1.0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setIsLoading(false);
  }

  function styleCanvasAndLayers() {
    // removeTextLayerOffset
    const textLayers = document.querySelectorAll(
      ".react-pdf__Page__textContent"
    );
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = "0";
      style.left = "0";
      style.transform = "";
      style.display = "none"; // 100% removed
    });

    // autoAdjustMarginCanvas
    const canvasMarginAdjustment = document.querySelectorAll(
      ".react-pdf__Page__canvas"
    );
    canvasMarginAdjustment.forEach((layer) => {
      const { style } = layer;
      style.margin = "auto";
    });
  }

  return (
    <PortfolioContainer id="portfolio">
      <PortfolioWrapper id="ResumeWrapper">
        <Loader isLoading={isLoading} />
        <ResumeDisplayAndController className="d-flex flex-column align-items-center">
          <ControlPanel
            fileUrl={pdfFile}
            scale={scale}
            setScale={setScale}
            numPages={numPages}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
          <Document
            className={"PDFDocument"}
            file={pdfFile}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page
              className={"PDFPage PDFPageOne"}
              pageNumber={pageNumber}
              onLoadSuccess={styleCanvasAndLayers}
              scale={scale}
              renderTextLayer={false}
              renderInteractiveForms={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </ResumeDisplayAndController>
      </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export default Portfolio;

import React from "react";
import {
  Viewer,
  Worker,
  SpecialZoomLevel,
  RenderViewer,
} from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

interface PDFViewerProps {
  file: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ file }) => {
  const renderToolbar = (Toolbar: any) => (
    <>
      <Toolbar />
      <div
        style={{
          borderTop: "1px solid rgba(0, 0, 0, 0.1)",
          marginTop: "4px",
          padding: "4px",
        }}
      ></div>
    </>
  );

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar,
  });

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <Viewer
        fileUrl={file}
        plugins={[defaultLayoutPluginInstance]}
        theme={"dark"}
        defaultScale={SpecialZoomLevel.PageFit}
      />
    </Worker>
  );
};

export default PDFViewer;

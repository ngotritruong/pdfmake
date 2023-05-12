import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

import docDefinition from "./docDefinition";
// định nghĩa các cấu hình cho pdfmake.
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
// end
function App() {
  const [url, setUrl] = useState(null);
  const createPDF = () => {
    const pdfGenerator = pdfMake.createPdf(docDefinition);
    console.log(pdfGenerator);
    // test 
    pdfGenerator.getBlob((blog) => {
      console.log("blog" + blog);
    });
    pdfGenerator.getStream((stream) => {
      console.log("stream " + stream);
    });
    pdfGenerator.getBuffer((buffer) => {
      console.log("buffer " + buffer);
    });
    // end text
    pdfGenerator.getBlob((blob) => {
      const url = URL.createObjectURL(blob);
      setUrl(url);
    });
  };
  return (
    <div className="App">
      <div className="title">DEMO PDFMAKE</div>
      <button onClick={createPDF} className="btn-Generate">Generate PDF</button>
      {url && (
        <div>
          <object
            style={{
              width: "100%",
              height: "100vh",
            }}
            data={url}
            type="application/pdf"
          >
            <embed src={url} type="application/pdf" />
          </object>
        </div>
      )}
    </div>
  );
}

export default App;

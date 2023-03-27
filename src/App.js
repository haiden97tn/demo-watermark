import logo from './logo.svg';
import './App.css';
import { Watermark } from '@hirohe/react-watermark';
import avatar from './data/avatar.jpg'
import nghiaCV from './data/nghia-cv.pdf'
import DocViewer from '@cyntler/react-doc-viewer';

function App() {

  const docs = [
    // { uri: "https://url-to-my-pdf.pdf" },
    { uri: require("./data/sample.pdf") }, // Local File
  ];


  return (
    <div className="App">
      <Watermark text="Nguyen Hai">
        <div style={{ width: "100vw", height: "100vh", backgroundColor: '#5f5f5f', overflow: "hidden" }}>
          <DocViewer documents={docs} />
        </div>
      </Watermark>
    </div>
  );
}

export default App;

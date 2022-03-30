import { useState, useRef } from 'react';
import Header from './Header';
import Flag from './Flag';
import exportAsImage from './utils/exportAsImage';

function App() {

  const exportRef = useRef();

  const [text, setText] = useState("TODO DIA UM 7 A 1 DIFERENTE");

  return (
    <main>
      <div className="export" ref={exportRef}>
        <Flag text={text} />
      </div>
      <Header />
      <section className="editor">
        <div className="flag">
          <Flag text={text} />
        </div>
        <div>
          <h1>Make your own flag</h1>
          <input type="text" value={text} onChange={e => setText(e.target.value)} />


          <button onClick={() => exportAsImage(exportRef.current, "Bandeirola")}>
          Capture Image
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
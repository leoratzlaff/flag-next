import { useState, useRef } from 'react';
import Header from './Header';
import Flag from './Flag';
import RadioButton from './RadioButton';
import exportAsImage from '../utils/exportAsImage';

function App() {

  const exportRef = useRef();

  const [text, setText] = useState("TODO DIA UM 7 A 1 DIFERENTE");
  const [format, setFormat] = useState(1);

  const handleFormat1 = () => {
    setFormat(1);
  };
  const handleFormat2 = () => {
    setFormat(2);
  };

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
        <div className="controls">
          <h1>Customize sua bandeira</h1>
          <label className="label">Texto</label>
          <input type="text" value={text} onChange={e => setText(e.target.value)} />
          <span className="label">Formato</span>
          <RadioButton
            label="1x1 + zoom"
            value={format === 1}
            onChange={handleFormat1}
          />
          <RadioButton
            label="Oficial"
            value={format === 2}
            onChange={handleFormat2}
          />
          <button onClick={() => exportAsImage(exportRef.current, "Bandeirola", format)}>Baixar imagem</button>
        </div>
      </section>
    </main>
  );
}

export default App;
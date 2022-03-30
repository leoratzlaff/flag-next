import { useState, useRef } from 'react';
import Header from './Header';
import Flag from './Flag';
import exportAsImage from './utils/exportAsImage';

import { Button, FormControl, FormLabel, Heading, HStack, Input, RadioGroup, Radio, Stack } from '@chakra-ui/react'

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
          <Heading mb={8} >Customize sua bandeira</Heading>
          <Stack direction='column' spacing={4} align='left'>

          <FormControl>
            <FormLabel htmlFor='texto'>Texto</FormLabel>
            <Input id="texto" value={text} onChange={e => setText(e.target.value)} placeholder='ORDEM E PROGRESSO' style={{textTransform: 'uppercase'}} />
          </FormControl>

          <RadioGroup defaultValue='1'>
            <FormLabel htmlFor='texto'>Estilo</FormLabel>
            <HStack spacing='24px'>
              <Radio value='1'>1x1 + zoom</Radio>
              <Radio value='2'>Oficial (10x7)</Radio>
            </HStack>
          </RadioGroup>
          <Button onClick={() => exportAsImage(exportRef.current, "Bandeirola")} colorScheme='green'>Baixar imagem</Button>
          </Stack>

        </div>
      </section>
    </main>
  );
}

export default App;
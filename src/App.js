import React from 'react';
import Bulma from "./components/all";

import './styles/main.scss';

function App() {
  return (
      <Bulma.Container>
        <Bulma.Image url={'./Buffalo.jpg'} alt={"Buffalo Bill Cody"} rounded/>
      </Bulma.Container>
  );
}

export default App;

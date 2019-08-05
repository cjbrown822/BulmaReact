import React from 'react';
import Bulma from "./components/all";

import './styles/main.scss';

function App() {
  return (
      <Bulma.Container>
        <Bulma.Level>
          <Bulma.LeftLevelItem>
            <p>Inside Left</p>
            <p>Another Left</p>
          </Bulma.LeftLevelItem>
          <Bulma.LevelItem>
            Middle
          </Bulma.LevelItem>
          <Bulma.RightLevelItem>
            Right
          </Bulma.RightLevelItem>
        </Bulma.Level>
      </Bulma.Container>
  );
}

export default App;

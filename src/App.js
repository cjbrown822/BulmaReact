import React from 'react';
import Bulma from "./components/all";

import './styles/main.scss';

function App() {
  return (
      <Bulma.Container>
        <Bulma.Level display={""}>
          <Bulma.LeftLevelItem>
            Inside Left
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

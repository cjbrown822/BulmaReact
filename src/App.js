import React from 'react';
import Bulma from "./components/all";

import './styles/main.scss';

function App() {
  return (
    <Bulma.Hero danger>
        <Bulma.HeroHeader>
            <p className={"title"}>Header</p>
        </Bulma.HeroHeader>
        <Bulma.HeroBody>
            <Bulma.Container>
                <p className={"title"}>I know I am cool</p>
            </Bulma.Container>
        </Bulma.HeroBody>
        <Bulma.HeroFooter>
            <p className={"title"}>Footer</p>
        </Bulma.HeroFooter>
    </Bulma.Hero>
  );
}

export default App;

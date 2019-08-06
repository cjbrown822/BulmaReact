import React from 'react';
import Bulma from "./components/all";

import './styles/main.scss';

function App() {
  return (
    <Bulma.Hero danger is={"fullheight"}>
        <Bulma.HeroHeader>
            <p className={"title"}>Header</p>
        </Bulma.HeroHeader>
        <Bulma.HeroBody>
            <Bulma.Container>
                <Bulma.Section>
                    <p className={"title"}>I know I am cool</p>
                </Bulma.Section>
                <Bulma.Section is={"medium"}>
                    <p className={"subtitle"}>Subtitle</p>
                </Bulma.Section>
            </Bulma.Container>
        </Bulma.HeroBody>
        <Bulma.HeroFooter>
            <p>Footer</p>
        </Bulma.HeroFooter>
    </Bulma.Hero>
  );
}

export default App;

import React from 'react';
import Bulma from "./components/all";

import './styles/main.scss';

function App() {
  return (
    <Bulma.Hero is={"fullheight"}>
        <Bulma.HeroHeader>
            <p className={"title"}>Header</p>
        </Bulma.HeroHeader>
        <Bulma.HeroBody>
            <Bulma.Container>
                <Bulma.Section>
                    <Bulma.Form style={{maxWidth:'800px'}}>
                        <Bulma.Field horizontal>
                            <Bulma.Input name={"FirstName"} placeholder={"First name"} required/>
                            <Bulma.Input name={"LastName"} placeholder={"Last name"} required/>
                        </Bulma.Field>
                        <Bulma.Field>
                            <Bulma.Input name={"Email"} placeholder={"Email"} type={"email"} required/>
                            <Bulma.Input name={"Password"} placeholder={"Password"} type={"password"} required/>
                        </Bulma.Field>
                    </Bulma.Form>
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

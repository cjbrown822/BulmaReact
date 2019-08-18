import React from 'react';
import Bulma from "./components/all";

import './styles/main.scss';
import Select from "./components/forms/select";

const EnvelopeInputIcon = (direction, hasError) => <Bulma.Icon icon={"envelope"} direction={direction} danger={hasError}/>;
const LockInputIcon = (direction, hasError) => <Bulma.Icon icon={"lock"} direction={direction} danger={hasError}/>;
const AstrickInputIcon = (direction, hasError) => <Bulma.Icon icon={"asterisk"} direction={direction} danger={hasError} is={"small"}/>;
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
                            <Bulma.Input name={"FirstName"} placeholder={"First name"} required rightIcon={AstrickInputIcon}/>
                            <Bulma.Input name={"LastName"} placeholder={"Last name"} required rightIcon={AstrickInputIcon}/>
                        </Bulma.Field>
                        <Bulma.Field hasIcons={"left"}>
                            <Bulma.Input name={"Email"} placeholder={"Email"} type={"email"} required leftIcon={EnvelopeInputIcon} rightIcon={AstrickInputIcon}/>
                        </Bulma.Field>
                        <Bulma.Field>
                            <Bulma.Input name={"Password"} placeholder={"Password"} type={"password"} required leftIcon={LockInputIcon} rightIcon={AstrickInputIcon}/>
                        </Bulma.Field>
                        <Bulma.Field loading>
                            <Bulma.TextArea placeholder={"Some text goes here"}/>
                        </Bulma.Field>
                        <Bulma.Field hasIcons={"left"}>
                            <Select icon={EnvelopeInputIcon}>
                                <option value={1}>First</option>
                                <option value={2}>Second</option>
                            </Select>
                        </Bulma.Field>
                    </Bulma.Form>
                </Bulma.Section>
                <Bulma.Section is={"medium"}>

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

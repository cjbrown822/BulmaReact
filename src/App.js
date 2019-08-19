import React from 'react';
import Bulma from "./components/all";

import './styles/main.scss';
import Button, {SubmitButton} from "./components/elements/button";

const EnvelopeInputIcon = (direction, hasError) => <Bulma.Icon icon={"envelope"} direction={direction} danger={hasError}/>;
const GlobeInputIcon = (direction, hasError) => <Bulma.Icon icon={"globe"} direction={direction} danger={hasError}/>;
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
                            <Bulma.Input name={"Email"} placeholder={"Email"} type={"email"} required leftIcon={EnvelopeInputIcon}
                                         rightIcon={AstrickInputIcon}
                                         validation={[
                                             {regex: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                                                 message:"Email is not valid"}]}/>
                        </Bulma.Field>
                        <Bulma.Field>
                            <Bulma.Input name={"Password"} placeholder={"Password"} type={"password"} required leftIcon={LockInputIcon} rightIcon={AstrickInputIcon}/>
                        </Bulma.Field>
                        <Bulma.Field >
                            <Bulma.TextArea required placeholder={"Some text goes here"} name={"SomeText"}/>
                        </Bulma.Field>
                        <Bulma.Field hasIcons={"left"}>
                            <Bulma.Select icon={GlobeInputIcon} name={"Select"}>
                                <option value={1}>First</option>
                                <option value={2}>Second</option>
                            </Bulma.Select>
                        </Bulma.Field>
                        <Bulma.Field>
                            <Bulma.Checkbox name={"Checkbox"}>
                                I Agree to the Terms and Conditions
                            </Bulma.Checkbox>
                        </Bulma.Field>
                        <Bulma.Field singleControl>
                            <Bulma.Radio checked name={"Accept"}>
                                Yes
                            </Bulma.Radio>
                            <Bulma.Radio name={"Accept"}>
                                No
                            </Bulma.Radio>
                        </Bulma.Field>
                        <Bulma.Field  is={"expanded"} grouped>
                            <SubmitButton is={"fullwidth"} primary>Submit</SubmitButton>
                            <Button is={"fullwidth"} danger>Cancel</Button>
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

import React from 'react';
import Bulma from "./components/all";

import './styles/main.scss';
import Button, {SubmitButton} from "./components/elements/button";
import Constants from "./utils/constants";

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
                    <Bulma.Columns>
                        <Bulma.Column columnSizeModifier={[{size: Constants.Columns.Sizes.Half}]}>
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
                        </Bulma.Column>
                        <Bulma.Column>
                            Lucas ipsum dolor sit amet polis rotta artaru crynyd zekk tarkin darth haako kwi ken. Ralter darpa sio sesswenna crynyd endocott bail borsk. Bothan sabé kushiban whaladon terrik organa terentatek cracken. Mod hutt dressellian utapaun. Kir zekk paaerduag marek sykes felucia lars teevan kendal. Djo wilhuff arkanis rishii raioballo wesell utai. Dug melodie toydarian anakin bothan biggs calamari. Neimoidia garm darth vivenda phlog zeltron. Muzzer ferroans khai clawdite kobok letaki. Motti elrood isard ruurian gwurran nadon dooku.

                            San jade kohl sifo-dyas gonk hapan mandalorians. Skywalker tenel skywalker sly elrood derlin wedge darth til. Hissa antonio sio tion tiin firrerreo zam habassa gado. Cerean nar hapan rahn moddell vau ogemite sola kurtzen. Nagai cassio weequay calrissian logray meridian r4-p17. Ubb jek tharin naboo klivian whill. Paploo gavyn nar skakoan tion. Monkey-lizard biggs iv melodie aurra. Kel jettster fey'lya falleen nautolan hoojib caamasi skywalker. Yowza iv fett iktotchi zabrak yoda kubaz til. Galen terrik gamorr skywalker aleena gotal.

                            Gorax kiffar jeremoch plo jawa aqualish gorith. Sebulba ysanne jabba iridonian lowbacca dug x1 gand. Kamino r2-d2 kowakian darth tenel. Tib caamasi rieekan t88 c-3po. Naboo ablajeck antonio veers wirutid iktotchi y'bith bane darklighter. Lah y'bith alderaan vima-da-boda felth nilgaard chommell nautolan leia. Auril porkins soontir zekk lepi b'omarr. Vor fett ailyn mandell allana. Gamorrean alderaan ti meridian gungan. Quinlan kit kyle ventress trandoshan abrion even darth amidala. Terrik skywalker chewbacca lars boz qui-gon wuher airen.

                            Calrissian biggs isard ponda. Lars kurtzen melodie gizka soontir calamari kel gunray. Ssi-ruuk yowza meridian solo clawdite thisspiasian. Jettster maximilian r4-p17 roonan reach skywalker. Lars darth kaminoan sulorine. Ryn jamillia raynar antemeridian kel. Pellaeon wuher amanin irek dodonna duro mod. Tof kamino ferroans toydarian. Thakwaash yoda gilad illum rex vao kamino. Defel adi davin altyr durron fey'lya. Gungan vader kit zam darklighter besalisk. Moff ree-yees hissa mirialan beru billaba anakin amidala aruzan.

                            Bertroff yaddle anx quarren su tarasin derlin ackbar dagobah. Fett jek carondian lahara kota. Triclops klatooinian sal-solo hapan vaathkree raymus trioculus. Wicket iv wyl sulorine sneevel dantari frozarns. Mygeeto marek senex bib braxant ki-adi-mundi darth piell. Cal tiin yoda tagge vao greeata nadd. Psadan lando anx kal kalee fode. Rieekan iridonian gunray gerb dulok gunray lowbacca. Joruus ithorian amidala calamari nal chiss ahsoka kasan. Bren naberrie fel ziro jeremoch. Kobok wicket durron luuke falleen jubnuk kashyyyk soontir colton.
                        </Bulma.Column>
                    </Bulma.Columns>
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

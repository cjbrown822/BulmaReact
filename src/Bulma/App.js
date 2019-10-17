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
            <Bulma.Container>
                <Bulma.Title.h1 is={"3"}>
                    My Title
                </Bulma.Title.h1>
                <Bulma.Subtitle.h3 is={"5"}>
                    My subtitle
                </Bulma.Subtitle.h3>
            </Bulma.Container>
        </Bulma.HeroHeader>
        <Bulma.HeroBody>
            <Bulma.Container>
                <Bulma.BreadCrumb  >
                    <Bulma.BreadCrumbItem>
                        Home
                    </Bulma.BreadCrumbItem>
                    <Bulma.BreadCrumbItem>
                        Next
                    </Bulma.BreadCrumbItem>
                    <Bulma.BreadCrumbItem active>
                        Mine
                    </Bulma.BreadCrumbItem>
                </Bulma.BreadCrumb>
                <Bulma.Notification warning>
                    <Bulma.Tag primary is={["large","rounded"]}>Hot stuff<Bulma.Delete/></Bulma.Tag>
                    <Bulma.Delete/>
                    <Bulma.OrderedList is={"lower-roman"}>
                        <span>Make friends</span>
                        <span>Make money</span>
                    </Bulma.OrderedList>
                    <Bulma.ProgressBar max={100} info is={"large"} value={15}/>
                </Bulma.Notification>
                <Bulma.Section>
                    <Bulma.Table is={["fullwidth","hoverable", "striped"]}>
                        <Bulma.TableHeader>
                            <Bulma.TableRow>
                                <Bulma.TableCellHeading>1</Bulma.TableCellHeading>
                                <Bulma.TableCellHeading>2</Bulma.TableCellHeading>
                                <Bulma.TableCellHeading>3</Bulma.TableCellHeading>
                            </Bulma.TableRow>
                        </Bulma.TableHeader>
                        <Bulma.TableFooter>
                            <Bulma.TableRow>
                                <Bulma.TableCellHeading>1</Bulma.TableCellHeading>
                                <Bulma.TableCellHeading>2</Bulma.TableCellHeading>
                                <Bulma.TableCellHeading>3</Bulma.TableCellHeading>
                            </Bulma.TableRow>
                        </Bulma.TableFooter>
                        <Bulma.TableBody>
                            <Bulma.TableRow>
                                <Bulma.TableCell>1</Bulma.TableCell>
                                <Bulma.TableCell>2</Bulma.TableCell>
                                <Bulma.TableCell>3</Bulma.TableCell>
                            </Bulma.TableRow>
                            <Bulma.TableRow>
                                <Bulma.TableCell>1</Bulma.TableCell>
                                <Bulma.TableCell>2</Bulma.TableCell>
                                <Bulma.TableCell>3</Bulma.TableCell>
                            </Bulma.TableRow>
                            <Bulma.TableRow>
                                <Bulma.TableCell>1</Bulma.TableCell>
                                <Bulma.TableCell>2</Bulma.TableCell>
                                <Bulma.TableCell>3</Bulma.TableCell>
                            </Bulma.TableRow>
                        </Bulma.TableBody>
                    </Bulma.Table>
                </Bulma.Section>
                <Bulma.Section>
                    <Bulma.Columns>
                        <Bulma.Column columnSizeModifier={[{size: Constants.Columns.Sizes.OneQuarter}]}>
                            <Bulma.Form style={{maxWidth:'800px'}}>
                                <Bulma.Field horizontal>
                                    <Bulma.Input name={"FirstName"} placeholder={"First name"} required rightIcon={AstrickInputIcon}/>
                                    <Bulma.Input name={"LastName"} placeholder={"Last name"} rightIcon={AstrickInputIcon}/>
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
                            <Bulma.Tile ancestor>
                                <Bulma.Tile parent>
                                    <Bulma.Tile parent>
                                        <Bulma.Tile child notification primary>
                                            <h1 className={"title"}>Star Wars</h1>
                                            <h5 className={"subtitle"}>Insum</h5>
                                            Gorax kiffar jeremoch plo jawa aqualish gorith. Sebulba ysanne jabba iridonian lowbacca dug x1 gand. Kamino r2-d2 kowakian darth tenel. Tib caamasi rieekan t88 c-3po. Naboo ablajeck antonio veers wirutid iktotchi y'bith bane darklighter. Lah y'bith alderaan vima-da-boda felth nilgaard chommell nautolan leia. Auril porkins soontir zekk lepi b'omarr. Vor fett ailyn mandell allana. Gamorrean alderaan ti meridian gungan. Quinlan kit kyle ventress trandoshan abrion even darth amidala. Terrik skywalker chewbacca lars boz qui-gon wuher airen.
                                            Calrissian biggs isard ponda. Lars kurtzen melodie gizka soontir calamari kel gunray. Ssi-ruuk yowza meridian solo clawdite thisspiasian. Jettster maximilian r4-p17 roonan reach skywalker. Lars darth kaminoan sulorine. Ryn jamillia raynar antemeridian kel. Pellaeon wuher amanin irek dodonna duro mod. Tof kamino ferroans toydarian. Thakwaash yoda gilad illum rex vao kamino. Defel adi davin altyr durron fey'lya. Gungan vader kit zam darklighter besalisk. Moff ree-yees hissa mirialan beru billaba anakin amidala aruzan.
                                            Bertroff yaddle anx quarren su tarasin derlin ackbar dagobah. Fett jek carondian lahara kota. Triclops klatooinian sal-solo hapan vaathkree raymus trioculus. Wicket iv wyl sulorine sneevel dantari frozarns. Mygeeto marek senex bib braxant ki-adi-mundi darth piell. Cal tiin yoda tagge vao greeata nadd. Psadan lando anx kal kalee fode. Rieekan iridonian gunray gerb dulok gunray lowbacca. Joruus ithorian amidala calamari nal chiss ahsoka kasan. Bren naberrie fel ziro jeremoch. Kobok wicket durron luuke falleen jubnuk kashyyyk soontir colton.
                                        </Bulma.Tile>
                                    </Bulma.Tile>
                                    <Bulma.Tile parent size={4}>
                                        <Bulma.Tile child>
                                            <Bulma.Card>
                                                <Bulma.CardContent>
                                                    <Bulma.Title.h2>
                                                        “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                                                    </Bulma.Title.h2>
                                                    <Bulma.Subtitle.h3>
                                                        Jeff Atwood
                                                    </Bulma.Subtitle.h3>
                                                </Bulma.CardContent>
                                                <Bulma.CardFooter>
                                                    <Bulma.CardFooterItem>
                                                        <span>
                                                                View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
                                                        </span>
                                                    </Bulma.CardFooterItem>
                                                    <Bulma.CardFooterItem>
                                                        <span>
                                                                Share on <a href="#">Facebook</a>
                                                        </span>
                                                    </Bulma.CardFooterItem>
                                                </Bulma.CardFooter>
                                            </Bulma.Card>
                                        </Bulma.Tile>
                                    </Bulma.Tile>
                                </Bulma.Tile>
                            </Bulma.Tile>
                        </Bulma.Column>
                    </Bulma.Columns>
                </Bulma.Section>
            </Bulma.Container>
        </Bulma.HeroBody>
        <Bulma.HeroFooter>

        </Bulma.HeroFooter>
    </Bulma.Hero>
  );
}

export default App;

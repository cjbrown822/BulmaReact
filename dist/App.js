import React from 'react';
import Bulma from "./components/all";
import './styles/main.scss';
import Button, { SubmitButton } from "./components/elements/button";
import Constants from "./utils/constants";

const EnvelopeInputIcon = (direction, hasError) => React.createElement(Bulma.Icon, {
  icon: "envelope",
  direction: direction,
  danger: hasError
});

const GlobeInputIcon = (direction, hasError) => React.createElement(Bulma.Icon, {
  icon: "globe",
  direction: direction,
  danger: hasError
});

const LockInputIcon = (direction, hasError) => React.createElement(Bulma.Icon, {
  icon: "lock",
  direction: direction,
  danger: hasError
});

const AstrickInputIcon = (direction, hasError) => React.createElement(Bulma.Icon, {
  icon: "asterisk",
  direction: direction,
  danger: hasError,
  is: "small"
});

function App() {
  return React.createElement(Bulma.Hero, {
    is: "fullheight"
  }, React.createElement(Bulma.HeroHeader, null, React.createElement(Bulma.Container, null, React.createElement(Bulma.Title.h1, {
    is: "3"
  }, "My Title"), React.createElement(Bulma.Subtitle.h3, {
    is: "5"
  }, "My subtitle"))), React.createElement(Bulma.HeroBody, null, React.createElement(Bulma.Container, null, React.createElement(Bulma.BreadCrumb, null, React.createElement(Bulma.BreadCrumbItem, null, "Home"), React.createElement(Bulma.BreadCrumbItem, null, "Next"), React.createElement(Bulma.BreadCrumbItem, {
    active: true
  }, "Mine")), React.createElement(Bulma.Notification, {
    warning: true
  }, React.createElement(Bulma.Tag, {
    primary: true,
    is: ["large", "rounded"]
  }, "Hot stuff", React.createElement(Bulma.Delete, null)), React.createElement(Bulma.Delete, null), React.createElement(Bulma.OrderedList, {
    is: "lower-roman"
  }, React.createElement("span", null, "Make friends"), React.createElement("span", null, "Make money")), React.createElement(Bulma.ProgressBar, {
    max: 100,
    info: true,
    is: "large",
    value: 15
  })), React.createElement(Bulma.Section, null, React.createElement(Bulma.Table, {
    is: ["fullwidth", "hoverable", "striped"]
  }, React.createElement(Bulma.TableHeader, null, React.createElement(Bulma.TableRow, null, React.createElement(Bulma.TableCellHeading, null, "1"), React.createElement(Bulma.TableCellHeading, null, "2"), React.createElement(Bulma.TableCellHeading, null, "3"))), React.createElement(Bulma.TableFooter, null, React.createElement(Bulma.TableRow, null, React.createElement(Bulma.TableCellHeading, null, "1"), React.createElement(Bulma.TableCellHeading, null, "2"), React.createElement(Bulma.TableCellHeading, null, "3"))), React.createElement(Bulma.TableBody, null, React.createElement(Bulma.TableRow, null, React.createElement(Bulma.TableCell, null, "1"), React.createElement(Bulma.TableCell, null, "2"), React.createElement(Bulma.TableCell, null, "3")), React.createElement(Bulma.TableRow, null, React.createElement(Bulma.TableCell, null, "1"), React.createElement(Bulma.TableCell, null, "2"), React.createElement(Bulma.TableCell, null, "3")), React.createElement(Bulma.TableRow, null, React.createElement(Bulma.TableCell, null, "1"), React.createElement(Bulma.TableCell, null, "2"), React.createElement(Bulma.TableCell, null, "3"))))), React.createElement(Bulma.Section, null, React.createElement(Bulma.Columns, null, React.createElement(Bulma.Column, {
    columnSizeModifier: [{
      size: Constants.Columns.Sizes.OneQuarter
    }]
  }, React.createElement(Bulma.Form, {
    style: {
      maxWidth: '800px'
    }
  }, React.createElement(Bulma.Field, {
    horizontal: true
  }, React.createElement(Bulma.Input, {
    name: "FirstName",
    placeholder: "First name",
    required: true,
    rightIcon: AstrickInputIcon
  }), React.createElement(Bulma.Input, {
    name: "LastName",
    placeholder: "Last name",
    rightIcon: AstrickInputIcon
  })), React.createElement(Bulma.Field, {
    hasIcons: "left"
  }, React.createElement(Bulma.Input, {
    name: "Email",
    placeholder: "Email",
    type: "email",
    required: true,
    leftIcon: EnvelopeInputIcon,
    rightIcon: AstrickInputIcon,
    validation: [{
      regex: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      message: "Email is not valid"
    }]
  })), React.createElement(Bulma.Field, null, React.createElement(Bulma.Input, {
    name: "Password",
    placeholder: "Password",
    type: "password",
    required: true,
    leftIcon: LockInputIcon,
    rightIcon: AstrickInputIcon
  })), React.createElement(Bulma.Field, null, React.createElement(Bulma.TextArea, {
    required: true,
    placeholder: "Some text goes here",
    name: "SomeText"
  })), React.createElement(Bulma.Field, {
    hasIcons: "left"
  }, React.createElement(Bulma.Select, {
    icon: GlobeInputIcon,
    name: "Select"
  }, React.createElement("option", {
    value: 1
  }, "First"), React.createElement("option", {
    value: 2
  }, "Second"))), React.createElement(Bulma.Field, null, React.createElement(Bulma.Checkbox, {
    name: "Checkbox"
  }, "I Agree to the Terms and Conditions")), React.createElement(Bulma.Field, {
    singleControl: true
  }, React.createElement(Bulma.Radio, {
    checked: true,
    name: "Accept"
  }, "Yes"), React.createElement(Bulma.Radio, {
    name: "Accept"
  }, "No")), React.createElement(Bulma.Field, {
    is: "expanded",
    grouped: true
  }, React.createElement(SubmitButton, {
    is: "fullwidth",
    primary: true
  }, "Submit"), React.createElement(Button, {
    is: "fullwidth",
    danger: true
  }, "Cancel")))), React.createElement(Bulma.Column, null, React.createElement(Bulma.Tile, {
    ancestor: true
  }, React.createElement(Bulma.Tile, {
    parent: true
  }, React.createElement(Bulma.Tile, {
    parent: true
  }, React.createElement(Bulma.Tile, {
    child: true,
    notification: true,
    primary: true
  }, React.createElement("h1", {
    className: "title"
  }, "Star Wars"), React.createElement("h5", {
    className: "subtitle"
  }, "Insum"), "Gorax kiffar jeremoch plo jawa aqualish gorith. Sebulba ysanne jabba iridonian lowbacca dug x1 gand. Kamino r2-d2 kowakian darth tenel. Tib caamasi rieekan t88 c-3po. Naboo ablajeck antonio veers wirutid iktotchi y'bith bane darklighter. Lah y'bith alderaan vima-da-boda felth nilgaard chommell nautolan leia. Auril porkins soontir zekk lepi b'omarr. Vor fett ailyn mandell allana. Gamorrean alderaan ti meridian gungan. Quinlan kit kyle ventress trandoshan abrion even darth amidala. Terrik skywalker chewbacca lars boz qui-gon wuher airen. Calrissian biggs isard ponda. Lars kurtzen melodie gizka soontir calamari kel gunray. Ssi-ruuk yowza meridian solo clawdite thisspiasian. Jettster maximilian r4-p17 roonan reach skywalker. Lars darth kaminoan sulorine. Ryn jamillia raynar antemeridian kel. Pellaeon wuher amanin irek dodonna duro mod. Tof kamino ferroans toydarian. Thakwaash yoda gilad illum rex vao kamino. Defel adi davin altyr durron fey'lya. Gungan vader kit zam darklighter besalisk. Moff ree-yees hissa mirialan beru billaba anakin amidala aruzan. Bertroff yaddle anx quarren su tarasin derlin ackbar dagobah. Fett jek carondian lahara kota. Triclops klatooinian sal-solo hapan vaathkree raymus trioculus. Wicket iv wyl sulorine sneevel dantari frozarns. Mygeeto marek senex bib braxant ki-adi-mundi darth piell. Cal tiin yoda tagge vao greeata nadd. Psadan lando anx kal kalee fode. Rieekan iridonian gunray gerb dulok gunray lowbacca. Joruus ithorian amidala calamari nal chiss ahsoka kasan. Bren naberrie fel ziro jeremoch. Kobok wicket durron luuke falleen jubnuk kashyyyk soontir colton.")), React.createElement(Bulma.Tile, {
    parent: true,
    size: 4
  }, React.createElement(Bulma.Tile, {
    child: true
  }, React.createElement(Bulma.Card, null, React.createElement(Bulma.CardContent, null, React.createElement(Bulma.Title.h2, null, "\u201CThere are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.\u201D"), React.createElement(Bulma.Subtitle.h3, null, "Jeff Atwood")), React.createElement(Bulma.CardFooter, null, React.createElement(Bulma.CardFooterItem, null, React.createElement("span", null, "View on ", React.createElement("a", {
    href: "https://twitter.com/codinghorror/status/506010907021828096"
  }, "Twitter"))), React.createElement(Bulma.CardFooterItem, null, React.createElement("span", null, "Share on ", React.createElement("a", {
    href: "#"
  }, "Facebook")))))))))))))), React.createElement(Bulma.HeroFooter, null));
}

export default App;
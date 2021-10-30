import { Route, Switch } from "react-router";
import Nav from "./components/Nav";
import IframePage from "./pages/IframePage";
import TestUILook from "./pages/TestUILook";
import AFrameVR from "./pages/AFrameVR";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <IframePage src="./vr.html" />
        </Route>
        <Route exact path="/ar">
          <IframePage src="./ar.html" />
        </Route>
        <Route exact path="/ar_no_marker">
          <IframePage src="./ar_no_marker.html" />
        </Route>
        <Route exact path="/test_ui_look">
          <TestUILook />
        </Route>
        <Route exact path="/aframe_vr">
          <AFrameVR />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

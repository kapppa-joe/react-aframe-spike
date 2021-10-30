import { useState } from "react";
import { Route, Switch } from "react-router";
import Nav from "./components/Nav";
import IframePage from "./pages/IframePage";
import TestUILook from "./pages/TestUILook";
import AFrameVR from "./pages/AFrameVR";

import "./App.css";

function App() {
  const [modelName, setModelName] = useState("mars");

  return (
    <div className="App">
      <Nav setModelName={setModelName} />
      <Switch>
        <Route exact path={["/", "/vr"]}>
          <IframePage src="./vr.html" modelName={modelName} />
        </Route>
        <Route exact path="/ar">
          <IframePage src="./ar.html" modelName={modelName} />
        </Route>
        <Route exact path="/ar_no_marker">
          <IframePage src="./ar_no_marker.html" modelName={modelName} />
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

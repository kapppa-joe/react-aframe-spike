import { Route, Switch } from "react-router";
import Nav from "./components/Nav";
import IframePage from "./pages/IframePage";

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
      </Switch>
    </div>
  );
}

export default App;

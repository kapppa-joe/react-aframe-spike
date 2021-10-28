import { Route, Switch } from "react-router";
import Nav from "./components/Nav";
import Planet from "./pages/Planet";
import IframePage from "./pages/IframePage";

import { Demo } from "./pages/Demo";
// import Planet2 from "./pages/Planet2";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <IframePage />
          {/* <Demo /> */}
          {/* <Planet /> */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;

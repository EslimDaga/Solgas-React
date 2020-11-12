import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Views/Auth/index";
import Dashboard from "./Views/Dashboard/index";
import Events from "./Views/Events/index";
import History from "./Views/History/index";
import Checkpoint from "./Views/Checkpoint/index";
import Drivers from "./Views/Driver/index";
import Units from "./Views/Unit/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/history" component={History} />
        <Route exact path="/checkpoint" component={Checkpoint} />
        <Route exact path="/drivers" component={Drivers} />
        <Route exact path="/units" component={Units} />
      </Switch>
    </Router>
  );
}

export default App;

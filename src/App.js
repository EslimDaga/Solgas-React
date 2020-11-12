import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Views/Auth/index";
import Dashboard from "./Views/Dashboard/index";
import Events from "./Views/Events/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/events" component={Events} />
      </Switch>
    </Router>
  );
}

export default App;

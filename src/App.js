import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dashboard from "./Views/Dashboard/index";
import Login from "./Views/Auth/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route />
      </Switch>
    </Router>
  );
}

export default App;

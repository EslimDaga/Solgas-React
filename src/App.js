import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "./Context/auth";
import PublicRoute from "./Components/PublicRoute";
import PrivateRoute from "./Components/PublicRoute";
import Login from "./Views/Auth/index";
import Dashboard from "./Views/Dashboard/index";
import Events from "./Views/Events/index";
import History from "./Views/History/index";
import Checkpoint from "./Views/Checkpoint/index";
import Drivers from "./Views/Driver/index";
import Units from "./Views/Unit/index";
import Logout from "./Views/Logout";

const App = () => {

  const { isAuthed } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <PrivateRoute
          exact
          path="/dashboard"
          component={Dashboard}
          isAuthed={isAuthed}
        />
        <PublicRoute
          exact
          path="/"
          component={Login}
          isAuthed={isAuthed}
        />
        <PrivateRoute
          exact
          path="/events"
          component={Events}
        />
        <Route
          exact
          path="/history"
          component={History}
          isAuthed={isAuthed}
        />
        <Route
          exact
          path="/checkpoint"
          component={Checkpoint}
          isAuthed={isAuthed}
        />
        <Route
          exact
          path="/drivers"
          component={Drivers}
          isAuthed={isAuthed}
        />
        <Route
          exact
          path="/units"
          component={Units}
          isAuthed={isAuthed}
        />
        <Route
          exact
          path="/logout"
          component={Logout}
        />
      </Switch>
    </Router>
  );
}

export default App;

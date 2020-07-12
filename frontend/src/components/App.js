import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

//this imports all of the pages that I created in different folders
import Header from "./Header.js";
import Home from "./pages/Home";
import Alerts from "./Alerts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Graphs from "./pages/Graphs";
import Challenges from "./pages/Challenges";
import Statistics from "./pages/Statistics";
import Profile from "./pages/Profile";
import LogHabits from "./pages/LogHabits";
import PrivateRoute from "./PrivateRoute";
import Members from "./pages/Members";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

//Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center",
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div className="container">
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <PrivateRoute exact path="/loghabits" component={LogHabits} />
                  <PrivateRoute exact path="/members" component={Members} />
                  <PrivateRoute
                    exact
                    path="/challenges"
                    component={Challenges}
                  />
                  <PrivateRoute
                    exact
                    path="/statistics"
                    component={Statistics}
                  />
                  <PrivateRoute exact path="/graphs" component={Graphs} />
                  <PrivateRoute exact path="/profile" component={Profile} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

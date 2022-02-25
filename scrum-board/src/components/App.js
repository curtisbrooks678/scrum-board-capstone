import React from "react";
import Header from "./Header";
import TaskControl from "./TaskControl";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(){
  return ( 
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <TaskControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

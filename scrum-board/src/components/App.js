import React from "react";
import Header from "./Header";
import TaskControl from "./TaskControl";
import Signin from "./Signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
  return ( 
    <Router>
      <Header />
      <Routes>
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/" element={<TaskControl />} />
      </Routes>
    </Router>
  );
}

export default App;

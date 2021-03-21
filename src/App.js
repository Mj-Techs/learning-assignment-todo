import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Components/Login";
import TodoContainer from "./Components/TodoContainer";
const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/:name/Todos" component={TodoContainer} />
    </Router>
  );
};

export default App;

import React,{useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { AuthContext, firebaseContext } from "./store/Context";
import Create from "./Pages/Create";
import View from "./Pages/ViewPost";
import Post from "./store/PostContext";

import Home from "./Pages/Home";

function App() {
  const { user, setUser } = useContext(AuthContext);
  const { firebase } = useContext(firebaseContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    console.log(user);
  });

  return (
    <div>
      <Post>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>

            <Route path="/login">
              <Login />
            </ Route>

            <Route path="/create">
              <Create />
            </Route>

            <Route path="/view">
              <View />
            </Route>
          </Switch>
        </Router>
      </Post>
    </div>
  );
}

export default App;

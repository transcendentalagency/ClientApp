// src/App.js

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import configureOAuth from "./oauthConfig"
import Login from "./components/Login"
import ProtectedRoute from "./components/ProtectedRoute"
import Home from "./components/Home"

configureOAuth()

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/home" component={Home} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  )
}

export default App

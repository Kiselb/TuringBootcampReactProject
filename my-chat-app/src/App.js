import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import Main from './components/Main/Main'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'

import UsersList from './components/UsersList/UsersList'

function App() {


  return (
    <Router>
      <h1>My Chat App</h1>
      <nav>
          <Link to="/signin">SignIn</Link>
          <Link to="/signup">SignUp</Link>
          <Link to="/">main</Link>
          <Link to="/signout">SignOut</Link>
      </nav>
      <Switch>
          <Route path="/signin"><SignIn /></Route>
          <Route path="/signup"><SignUp /></Route>
          <Route path="/signout"><SignIn /></Route>
          <Route path="/"><Main /></Route>
      </Switch>
      <UsersList></UsersList>
    </Router>
  );
}

export default App;

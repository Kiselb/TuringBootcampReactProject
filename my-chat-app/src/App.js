import React from 'react'
import { useSelector } from 'react-redux'

import Main from './components/Main/Main'
import SignIn from './components/SignIn/SignIn'

function App() {

  const isSignedIn = useSelector(state => state.user.signedIn)

  return (
    <div className="container">
      { (!isSignedIn)? <SignIn />: <Main />}
    </div>
  )
}

export default App;

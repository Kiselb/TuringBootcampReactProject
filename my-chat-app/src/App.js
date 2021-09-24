import React from 'react'
import { useSelector } from 'react-redux'

import Main from './components/Main/Main'
import SignIn from './components/SignIn/SignIn'

function App() {
  const [signedIn, setSignedIn] = React.useState(false)
  //const signedIn = false //useSelector(state => state.user.signedIn)
  const user = useSelector(state => state.user)
  const cbSignedIn =() => {
    setSignedIn(true)
  }
  return (
    <div className="container">
      { (!signedIn)? <SignIn cbSignedIn={cbSignedIn} />: <Main user={user}/>}
    </div>
  )
}

export default App;

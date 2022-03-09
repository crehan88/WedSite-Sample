import React, { useState, useEffect } from 'react'
import { SignedOutPage } from './Pages/SignedOutPage'
import SignedInPage from "./Pages/SignedInPage";

function App() {
  const [signedIn, setSignedIn] = useState(false)
  const [auth, setAuth] = useState('')
  const [response, setResponse] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] =useState('')

  useEffect(() => {
    if (auth !== '') setSignedIn(true)
  }, [auth])

  if (!signedIn) {
    return (
      <SignedOutPage
        setName={setName}
        setEmail={setEmail}
        setAuth={setAuth}
        setResponse={setResponse}
      />
    )
  } else { 
    return (
      <SignedInPage
        name={name}
        auth={auth}
        response={response}
        email={email}
        setEmail={setEmail}
        setResponse={setResponse}
      />
    )
  }
}

export default App

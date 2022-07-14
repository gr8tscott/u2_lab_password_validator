import { useState } from 'react'
import Validator from './components/Validator'

const App = () => {
  let [valid, setValid] = useState(false)
  let [password, setPassword] = useState()
  let [passwordConfirm, setPasswordConfirm] = useState()

  const comparePasswords = () => {
    if (password === passwordConfirm) {
      setValid(true)
    }
  }

  return <Validator comparePasswords={comparePasswords} />
}

export default App

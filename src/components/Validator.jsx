import '../styles/Validator.css'
import { useState } from 'react'

const Validator = () => {
  let [username, setUsername] = useState()
  let [password, setPassword] = useState()
  let [passwordConfirm, setPasswordConfirm] = useState()
  let [valid, setValid] = useState(false)
  // ^move this up to app.js

const comparePasswords = (e) => {
  e.preventDefault()
  if (password === passwordConfirm){
    setValid(true)
  }
}
// const passwordLength = (length) =>{
// if (password.length<7){
//   length='Password must be at least 7 characters.'
// }
// }

// handleChange use e.preventDefault()

// const handleSubmit(event){
//   alert('clicked the submit button')
//   event.preventDefault()
// }
function refreshPage() { //I feel some shame using this function but I'm so tired
  window.location.reload(false);
}

  return (
    <div className="form">
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="Username" id="username"
        onChange={(event) => setUsername(event.target.value)} />
        <label htmlFor="username">Username</label>

        <input type="password" placeholder="Password" id="password" 
        onChange={(event) => setPassword(event.target.value)} />
        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="Confirm password"
          id="passwordConfirm"
          onChange={(event) => setPasswordConfirm(event.target.value)}
          
        />
        
        <label htmlFor="passwordConfirm">Confirm password</label>

        <button type="submit" onClick={comparePasswords}>Sign Up</button>
        <button type="button" className='cancel' onClick={refreshPage}>Reset</button>
        {/* // turnary */}
        {/* {comparePasswords} */}
        {valid ? <p className='valid'>Passwords match!</p> : <p className='invalid'>Passwords don't match.</p>}
        
      </form>
    </div>
  )
}

export default Validator

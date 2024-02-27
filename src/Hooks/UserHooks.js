import React from 'react'
import { useState } from 'react'

// we're calling a function that returns our useState values
const UserHooks = () => {
    // declaring user as a state variable & setUser as the setter function w/ the initial value of object
  const [user, setUser] = useState({});
  return {user, setUser}
}

export default UserHooks
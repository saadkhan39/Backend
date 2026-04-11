import { useContext } from 'react'
import { AuthDataContext } from '../context/AuthContext'

const UseAuth = () => {
  return useContext(AuthDataContext)
}

export default UseAuth
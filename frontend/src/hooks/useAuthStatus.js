import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(true)
  const [checkingStatus, setCheckingStatus] = useState(true)

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      setLoggedIn(false)
    }

    setCheckingStatus(false)
  }, [user])

  return { loggedIn, checkingStatus }
}

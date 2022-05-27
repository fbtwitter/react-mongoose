import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'
import Spinner from './Spinner'

export const PrivateRoute = () => {
  const { loggedIn, checkingstatus } = useAuthStatus()

  if (checkingstatus) {
    return <Spinner />
  }

  return loggedIn ? <Outlet /> : <Navigate to="/login" />
}

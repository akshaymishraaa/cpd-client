import { Navigate, Outlet, useLocation } from 'react-router-dom'

// Dummy auth and role check
const useAuth = () => {
  // Example: get auth state from context or localStorage
  const user = JSON.parse(localStorage.getItem('user') || 'null')
  return { isAuthenticated: !!user, role: user?.role }
}

const ProtectedRoute = ({ allowedRoles }: { allowedRoles: string[] }) => {
  const { isAuthenticated, role } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/auth/login" replace />
  }

  return <Outlet />
}

export default ProtectedRoute
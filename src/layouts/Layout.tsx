import { Outlet, useLocation } from 'react-router-dom'

function getRoleFromPath(path: string) {
  if (path.startsWith('/patient')) return 'patient'
  if (path.startsWith('/doctor')) return 'doctor'
  if (path.startsWith('/clinic')) return 'clinic'
  if (path.startsWith('/admin')) return 'admin'
  if (path.startsWith('/lab')) return 'lab'
  return 'guest'
}

const roleMenus: Record<string, Array<{ label: string, path: string }>> = {
  patient: [
    { label: 'Dashboard', path: '/patient/dashboard' },
    { label: 'Find Clinic', path: '/patient/find-clinic' },
    { label: 'Appointments', path: '/patient/appointments' },
    { label: 'Medical Records', path: '/patient/medical-records' },
    { label: 'Profile', path: '/patient/profile' },
    { label: 'AI Assistant', path: '/patient/ai' },
  ],
  doctor: [
    { label: 'Dashboard', path: '/doctor/dashboard' },
    { label: 'Appointments', path: '/doctor/appointments' },
    { label: 'Patient Records', path: '/doctor/patient-records' },
    { label: 'Profile', path: '/doctor/profile' },
    { label: 'AI Review', path: '/doctor/ai-review' },
  ],
  clinic: [
    { label: 'Dashboard', path: '/clinic/dashboard' },
    { label: 'Doctor Management', path: '/clinic/doctor-management' },
    { label: 'Appointment Management', path: '/clinic/appointment-management' },
    { label: 'Profile', path: '/clinic/profile' },
    { label: 'Reports', path: '/clinic/reports' },
  ],
  admin: [
    { label: 'User Management', path: '/admin/user-management' },
    { label: 'Monitoring', path: '/admin/monitoring' },
    { label: 'Reports', path: '/admin/reports' },
    { label: 'Analytics', path: '/admin/analytics' },
  ],
  lab: [
    { label: 'Dashboard', path: '/lab/dashboard' },
    { label: 'Patient Management', path: '/lab/patient-management' },
    { label: 'Report Upload', path: '/lab/report-upload' },
    { label: 'Profile', path: '/lab/profile' },
  ],
  guest: [
    { label: 'Login', path: '/auth/login' },
    { label: 'Register', path: '/auth/register' },
  ],
}

function Layout() {
  const location = useLocation()
  const role = getRoleFromPath(location.pathname)
  const menus = roleMenus[role]

  return (
    <div>
      <nav>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }}>
          {menus.map(menu => (
            <li key={menu.path}>
              <a href={menu.path}>{menu.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Notifications, user info, etc. can go here */}
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
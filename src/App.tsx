import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './layouts/Layout'
import ProtectedRoute from './routes/ProtectedRoute'

// Patient pages
import PatientDashboard from './pages/patient/Dashboard'
import FindClinic from './pages/patient/FindClinic'
import PatientAppointments from './pages/patient/Appointments'
import MedicalRecords from './pages/patient/MedicalRecords'
import PatientProfile from './pages/patient/Profile'

// Doctor pages
import DoctorDashboard from './pages/doctor/Dashboard'
import DoctorAppointments from './pages/doctor/Appointments'
import PatientRecords from './pages/doctor/PatientRecords'
import DoctorProfile from './pages/doctor/Profile'


// Clinic pages
import ClinicDashboard from './pages/clinic/Dashboard'
import DoctorManagement from './pages/clinic/DoctorManagement'
import AppointmentManagement from './pages/clinic/AppointmentManagement'
import ClinicProfile from './pages/clinic/Profile'
import ClinicReports from './pages/clinic/Report'

// Admin pages
import UserManagement from './pages/admin/UserManagement'
import Monitoring from './pages/admin/Monitoring'
import AdminReports from './pages/admin/Report'
import Analytics from './pages/admin/Analytics'

// Lab pages
import LabDashboard from './pages/lab/Dashboard'
import PatientManagement from './pages/lab/PatientManagement'
import ReportUpload from './pages/lab/ReportUpload'
import LabProfile from './pages/lab/Profile'

// Auth pages
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ForgotPassword from './pages/auth/ForgotPassword'

import './App.css'

function App() {
  return (
   <div className='container-fluid p-0 w-100 h-100'>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />

        {/* Public Auth routes */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />

        {/* Protected Patient routes */}
        <Route element={<ProtectedRoute allowedRoles={['patient']} />}>
          <Route element={<Layout />}>
            <Route path="patient/dashboard" element={<PatientDashboard />} />
            <Route path="patient/find-clinic" element={<FindClinic />} />
            <Route path="patient/appointments" element={<PatientAppointments />} />
            <Route path="patient/medical-records" element={<MedicalRecords />} />
            <Route path="patient/profile" element={<PatientProfile />} />
          </Route>
        </Route>

        {/* Protected Doctor routes */}
        <Route element={<ProtectedRoute allowedRoles={['doctor']} />}>
          <Route element={<Layout />}>
            <Route path="doctor/dashboard" element={<DoctorDashboard />} />
            <Route path="doctor/appointments" element={<DoctorAppointments />} />
            <Route path="doctor/patient-records" element={<PatientRecords />} />
            <Route path="doctor/profile" element={<DoctorProfile />} />
          </Route>
        </Route>

        {/* Protected Clinic routes */}
        <Route element={<ProtectedRoute allowedRoles={['clinic']} />}>
          <Route element={<Layout />}>
            <Route path="clinic/dashboard" element={<ClinicDashboard />} />
            <Route path="clinic/doctor-management" element={<DoctorManagement />} />
            <Route path="clinic/appointment-management" element={<AppointmentManagement />} />
            <Route path="clinic/profile" element={<ClinicProfile />} />
            <Route path="clinic/reports" element={<ClinicReports />} />
          </Route>
        </Route>

        {/* Protected Admin routes */}
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route element={<Layout />}>
            <Route path="admin/user-management" element={<UserManagement />} />
            <Route path="admin/monitoring" element={<Monitoring />} />
            <Route path="admin/reports" element={<AdminReports />} />
            <Route path="admin/analytics" element={<Analytics />} />
          </Route>
        </Route>

        {/* Protected Lab routes */}
        <Route element={<ProtectedRoute allowedRoles={['lab']} />}>
          <Route element={<Layout />}>
            <Route path="lab/dashboard" element={<LabDashboard />} />
            <Route path="lab/patient-management" element={<PatientManagement />} />
            <Route path="lab/report-upload" element={<ReportUpload />} />
            <Route path="lab/profile" element={<LabProfile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App

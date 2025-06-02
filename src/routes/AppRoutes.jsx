import React from 'react'
import { Route, Routes } from 'react-router-dom'
let Home = React.lazy(() => import('../pages/Home'))
let Dashboard = React.lazy(() => import('../pages/Dashboard'))
let About = React.lazy(() => import('../pages/About'))
let Contact = React.lazy(() => import('../pages/Contact'))
let Layout = React.lazy(() => import('../pages/Layout'))
let Profile = React.lazy(() => import('../pages/Profile'))
let Login = React.lazy(() => import('../pages/Login'))
let Register = React.lazy(() => import('../pages/Register'))
let PageNotFound = React.lazy(() => import('../pages/PageNotFound'))
let ForgotPassword = React.lazy(() => import('../pages/ForgotPassword'))
let AuthWatcher = React.lazy(() => import('../components/auth/authWatcher'))
let PublicRoute = React.lazy(() => import('./PublicRoute'))
let ProtectedRoute = React.lazy(() => import('./ProtectedRoute'))



const AppRoutes = () => {
  return (
    <>
      <AuthWatcher />
      <Routes>
        {/**Public routes start */}
        <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />
        <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
        <Route path='/forgotpassword' element={<PublicRoute><ForgotPassword /></PublicRoute>} />
        <Route path='/home' element={<PublicRoute><Home /></PublicRoute>} />
        {/** Public routes end */}

        {/** Protected routes start */}
        <Route path='/dashboard' element={<ProtectedRoute><Layout /></ProtectedRoute>} >
          {/** Child elements inside the dashboard */}
          <Route index element={<Dashboard />} />
          <Route path='home' element={<Dashboard />} />
          <Route path='profile' element={<Dashboard />} />
        </Route>

        {/** Protected routes end */}


        {/** default fallback UI for all type of routes */}
        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </>
  )
}

export default AppRoutes

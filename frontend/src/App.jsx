import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

import {
  // eslint-disable-next-line no-unused-vars
  createBrowserRouter,
  // eslint-disable-next-line no-unused-vars
  RouterProvider
}from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login/></div>
  },
  {
    path: '/register',
    element: <div><Register/></div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard/></div>
  }
])
function App() {
  return (
   <div>
    <RouterProvider router={router}/>
   </div>
  )
}

export default App
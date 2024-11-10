import { Route, Routes } from 'react-router-dom'
import Users from '../users/Users'
import ErrorPage from '../Pages/ErrorPage'
import Login from '../Pages/Login'

export default function AppRouter() {
  return (
   <Routes>
    <Route path='/' element={<h1>Welcome to the app</h1>}/>
    <Route path='/users/*' element={<Users/>}/>
    <Route path='*' element={<ErrorPage/>}/>
    <Route path='/login' element={<Login/>}/>
   </Routes>
  )
}

import { NavLink } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className='error'>
      <h1>Error 404 Not Faoned</h1>
      <NavLink to={"/users"}>חזרה לדף הבית </NavLink>
    </div>
  )
}

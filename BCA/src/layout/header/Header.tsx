import { NavLink } from "react-router-dom";



export default function Header() {
  return (
    <>
      <header >
        <h1>Business card app</h1>
    <div className="NavLink">    
        <NavLink to="/users">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="About">About</NavLink>
        <NavLink to="login">Login</NavLink>
    </div>

      </header>
    </>
  )
}

import { useState } from "react"

import { NavLink } from "react-router-dom";

interface User{
    id?:string
    username:string,
    email:string,
    age:number,
    img:string,
}
interface Props{
    users:User[];
    deleteUser:(id:string)=>void;
    updateUser:(user:User)=>void;
    AddStar:(star:User)=>void;
}

export default function DisplayUsers(props:Props) {
    const [flag,setFlag]=useState(false)


  return (
    <>
<button><NavLink to={"/users/adduser"}>addusers</NavLink></button>
<br />
    {props.users.map(user=>
        <div className='card' key={user.id}>
            <h3> {user.username}</h3>
            <p> {user.email}</p>
            <p> {user.age}</p>
            <img 
            src={user.img} 
            alt="error" 
            style={{maxWidth:"150px"}}
            />
            <button onClick={()=>{props.deleteUser(user.id!)}}>Delete</button>
            <button onClick={()=>{props.updateUser(user)}}><NavLink to={"/users/edit"}>edit</NavLink></button>
            <button onClick={()=>{props.AddStar(user)}}>AddStar</button>
        </div>
    )}
    </>
  )
}

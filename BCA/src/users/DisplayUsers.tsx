import { useState } from "react"
import EditUser from "./EditUser"

interface User{
    id?:string
    username:string,
    email:string,
    age:number,
    img:string,
}
interface Props{
    users:User[],
    deleteUser:(id:string)=>void
    updateUser:(user:User)=>void
}

export default function DisplayUsers(props:Props) {
    const [flag,setFlag]=useState(false)

  return (
    <>
    {props.users.map(user=>
        <div className='card' key={user.id}>
            <h3>userName: {user.username}</h3>
            <p>email: {user.email}</p>
            <p>age: {user.age}</p>
            <img 
            src={user.img} 
            alt="error" 
            style={{maxWidth:"150px"}}
            />
            <p>id:{user.id}</p>
            <button onClick={()=>{props.deleteUser(user.id!)}}>Delete</button>
            <button onClick={()=>setFlag(true)}>Edit</button>
            {flag && <EditUser editUser={props.updateUser} user={user} />}
        </div>
    )}
    </>
  )
}

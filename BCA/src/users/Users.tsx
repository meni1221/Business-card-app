import  { useState } from 'react'
import NewUser from './NewUser'
import{v4} from 'uuid'
import DisplayUsers from './DisplayUsers'

interface User{
    id?:string
    username:string,
    email:string,
    age:number,
    img:string,
}

export default function Users() {
    const [users, setUsers] = useState <User[]>([])

    const addNewUser = (newUser:User) =>{
        newUser.id=v4()
        setUsers([...users,newUser])
    }
    
    const DeleteUser = (id:string) =>{
        setUsers(users=>{
        return users.filter((user=>user.id !== id))
}
  
  
  )
    }
    const UpdateUser = (user:User) =>{
       return setUsers(users.map((itemUser) => (itemUser.id === user.id ? user : itemUser)));
        };
      

  return (
    <div>
      <NewUser addUser={addNewUser}/>
     <DisplayUsers users={users} deleteUser = {DeleteUser} updateUser={UpdateUser}/>      
    </div>
  )
}
 
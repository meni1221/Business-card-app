import  { useEffect, useState } from 'react'
import NewUser from './NewUser'
import{v4} from 'uuid'
import DisplayUsers from './DisplayUsers'
import StarUsers from './StarUsers'
import {  Route, Routes } from 'react-router-dom'
import EditUser from './EditUser'

interface User{
    id?:string
    username:string,
    email:string,
    age:number,
    img:string,
}


const ser : User = {
  id:"string",
  username:"string",
  email:"string",
  age:4,
  img:"string",
}

export default function Users() {


    const [users, setUsers] = useState <User[]>([])
    const [stars, setStar] = useState <User[]>([])
    const [user, setUser] = useState <User>(ser)

    useEffect(()=>{
      fetch("/data.json")
      .then((response)=>response.json())
      .then((data)=> setUsers(data))
      .catch((error)=> console.error("Error data:", error))
    },[])

    const addNewUser = (newUser:User) =>{
        newUser.id=v4()
        setUsers([...users,newUser])
    }

        const AddStar =(star:User)=>{
        setStar([...stars,star])
    }
    
    const DeleteUser = (id:string) =>{
        setUsers(users=>{
        return users.filter((user=>user.id !== id))
}
  
  
  )

  
}
const UpdateSetUser = (user:User) =>{
  setUser(user)
}
    const UpdateUser = (user:User) =>{
       return setUsers(users.map((itemUser) => (itemUser.id === user.id ? user :itemUser)));
      };
      

  return (
    <>
    <Routes>  
      <Route
          path="/"
          element={
            <DisplayUsers
              users={users}
              deleteUser={DeleteUser}
              updateUser={UpdateSetUser}
              AddStar={AddStar}
            />
          }
        />
      <Route path={"/adduser"} element={ <NewUser addUser={addNewUser}/>}/>
      <Route
          path="/edit"
          element={<EditUser user={user} editUser={UpdateUser} />}
        />
    </Routes>

      <StarUsers stars={stars}/>
    </>
  )
}
 
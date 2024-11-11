import  { useContext, useEffect, useState } from 'react'
import NewUser from './NewUser'
import{v4} from 'uuid'
import DisplayUsers from './DisplayUsers'
import StarUsers from './StarUsers'
import {  Route, Routes } from 'react-router-dom'
import EditUser from './EditUser'
import { UserContext } from '../Providers/UserProvider'

interface User{
    id?:string
    username:string,
    email:string,
    age:number,
    img:string,
}

export default function Users() {


    const { users, setUsers } = useContext(UserContext);
    const [stars, setStar] = useState <User[]>([])

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

      

  return (
    <>
    <Routes>  
      <Route
          path="/"
          element={
            <DisplayUsers
              deleteUser={DeleteUser}
              AddStar={AddStar}
            />
          }
        />
      <Route path={"/adduser"} element={ <NewUser addUser={addNewUser}/>}/>
      <Route
          path="/edit/:id"
          element={<EditUser/>}
        />
    </Routes>

      <StarUsers stars={stars}/>
    </>
  )
}
 
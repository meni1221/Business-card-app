import { useState } from 'react'

interface User{
  username:string,
  email:string,
  age:number,
  img:string,
}

interface Props{
  addUser:(newUser:User)=>void
}

export default function NewUser(props:Props) {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState(0)
  const [img, setImg] = useState("")


  const handeleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    props.addUser({
      username,
      email,
      age,
      img
    })
    setUsername("")
    setEmail("")
    setAge(0)
    setImg("")
  }
  return (
    <>
      <form onSubmit={handeleSubmit}>

      <label htmlFor="userName">user Name</label>
      <input
       id='userName'
       type="text"
       value={username}
       placeholder='userName'
       onChange={(event)=>
        setUsername(event.target.value)
      }/>

      <label htmlFor="Email">Email</label>
      <input
      id='Email'
       type="Email"
       value={email}
       placeholder='Email'
       onChange={(event)=>
        setEmail(event.target.value)
      }/>

      <label htmlFor="age">age</label>
      <input
       id='age'
       type="number" 
       value={age}
       placeholder='age' 
       min={0}
       max={120}
       onChange={(event)=>
        setAge(Number(event.target.value))
      }/>
      
      <label htmlFor="img">img</label>
      <input
      id='img'
       type="text"
       value={img}
       placeholder='img'
       onChange={(event)=>
        setImg(event.target.value)
       }/>

       <button type='submit'>Add New User</button>

      </form>
    </>
  )
}

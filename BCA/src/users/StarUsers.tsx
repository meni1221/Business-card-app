import React, { useEffect, useState } from 'react'
 interface User{
    id?:string,
    username:string,
    email:string,
    age:number,
    img:string
 }
 interface Props{
    stars:User[]
  }

export default function StarUsers({stars}:Props) {


  return (
    <>
    {stars.map(user=>
        <div className='card-list' key={user.id}>
            <h3> {user.username}</h3>
            <p> {user.email}</p>
            <p> {user.age}</p>
            <img 
            src={user.img} 
            alt="error" 
            style={{maxWidth:"150px"}}
            />
        </div>
    )}
    </>
  )
}

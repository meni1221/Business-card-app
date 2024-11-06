import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'
import { useState } from 'react'

export default function Layout() {


  const [name, setName] = useState("Nimrod")
  
  return (
    <>
    <div className='app-container'>
    {/* קריאה לקומפננטות */}
      <Header/>
      {/* השמה לפרטי השם של האבא אצל הבן  */}
      {/* <BrederOfMain name = {name} /> */}
      {/* הכנסת הקונבציה של השם של האבא אצל הבן */}
      <Main />
      <Footer/>
      </div>
    </>
  )
}

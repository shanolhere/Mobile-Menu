import React from 'react'
import './styles.css'
import Mobiledata from './mobileApi.js'
import MobileCard from './mobileCard.js'



const Mobile = () => {
     
  return (
    <>
      {/* <h1>hello</h1> */}
      <MobileCard mobileData = {Mobiledata}/>
      
    </>
  )
}

export default Mobile;
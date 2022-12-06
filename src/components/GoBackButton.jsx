import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { LeftArrow } from '../assets/icons';

export const GoBackButton = () => {
  const history = useHistory();
  
  const handleClick = ()=>{
    console.log(history)
  }
  return (
    <Link to={"/home/page/1"} className='goBack' onClick={handleClick}><LeftArrow/></Link>
  )
}

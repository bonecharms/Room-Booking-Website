import React from 'react'

const Button = ({text,func,wid,className}) => {
  return (
    <button className={className} onClick={func} width={wid} >{text}  </button>
  )
}

export default Button 
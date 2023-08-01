import React, { useState } from 'react'

const Information = (props) => {
    
  return (
    <div>
        <img src={props.img} alt="" />
        <h1>{props.name}</h1>
        <p>{props.role}</p>
    </div>
  )
}

export default Information
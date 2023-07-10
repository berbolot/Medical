import React from 'react'
import med from '../../images/med.png'

const Galery = () => {
  return (
    <div style={{marginTop: '130px'}}>
        <h1 style={{textAlign: 'center'}}>Galery</h1>
        <img style={{width: '350px'}} src={med} alt="" />
    </div>
  )
}

export default Galery
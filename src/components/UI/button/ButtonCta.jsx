import React from 'react'
import './buttonCta.scss'

const ButtonCta = ({text,...props}) => {
  return (
    <div className='buttonCta'>
<button>
    {text}
</button>

    </div>
  )
}

export default ButtonCta
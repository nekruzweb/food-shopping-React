import React from 'react'
import Classes from './Card.module.css'

const Card = (props) => {
  const Stillar = `${props.className} ${Classes.card}`
  return (
    <div className={Stillar}>
      {
        props.children
      }
    </div>
  )
}

export default Card

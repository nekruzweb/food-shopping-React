import React, { useContext } from 'react'
import Classes from '../Layout/HeaderButton.module.css'
import { FaShoppingCart } from "react-icons/fa";
import Context from '../Context/Context';

const Button = (props) => {

  const {items} = useContext(Context)
  const Miqdori = items.reduce((prev, current)=>{
    return prev + ( + current.amount)
  },0)

  return (
    <button onClick={props.onClick} className={Classes.button}>
      <span className={Classes.icon}> <FaShoppingCart/> </span>
      <span>Your Cart</span>
      <span className={Classes.badge }>
        {Miqdori}
      </span>
    </button>
  )
}

export default Button

import React from 'react'
import Classes from './CartItems.module.css'

const CartItems = (props) => {
  return (
    <li className={Classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={Classes.summary}>
            <span className={Classes.price}> ${props.price} </span>
            <span className={Classes.amount}> x{props.amount} </span>
        </div>
      </div>
      <div className={Classes.actions}>
        <button onClick={props.FunINC}> + </button>
        <button onClick={props.FunDEC}> - </button>
      </div>
    </li>
  )
}

export default CartItems

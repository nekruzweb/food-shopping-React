import React from 'react'
import Classes from "../Layout/Header.module.css"
import img from "../Assets/meals.jpg"
import Button from './Button'

const Header = (props) => {
  return (
    <header>
      <div className={Classes.header}>
        <h1>ReactMeals</h1>
        <Button onClick={props.SetBooL} />
      </div>
      <div className={Classes["main-image"]}>
        <img src={img} alt='reactmeals' />
      </div>
    </header>
  )
}

export default Header

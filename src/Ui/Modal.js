import React from 'react'
import Classes from './Modal.module.css'
import ReactDOM from 'react-dom'

const Modal = (props) => {

    const BackDrop = (props)=>{
        return <div onClick={()=> props.FFF(false)} className={Classes.Backdrop}> {props.children} </div>
    }

    const ModalOverlay = ()=>{
        return <div className={Classes.modal}> {props.children} </div>
    }

  return (
    <>
      {ReactDOM.createPortal(<BackDrop FFF={props.FunShow} />, document.getElementById("modal"))}
      {ReactDOM.createPortal(<ModalOverlay />, document.getElementById("modal"))}
    </>
  )
}

export default Modal

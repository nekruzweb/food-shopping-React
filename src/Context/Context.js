import React from 'react'

const Context = React.createContext({
    items:[],
    TotalAmount:0,
    AddItems:()=>{},
    RemoveItems:()=>{},
})

export default Context

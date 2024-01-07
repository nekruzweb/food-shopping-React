import React, { useState } from "react";
import "./App.css";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";
import ContextProvider from "./Context/ContextProvider";

function App() {

  const [show, setShow] = useState(false)

  const ChangeShow = ()=>{
    setShow(true)
  }

  return (
    <ContextProvider>
      <Header SetBooL={ChangeShow} />
      <main>
        <Meals />
      </main>
      <Cart BooL={show} SetBooL={setShow} />
    </ContextProvider>
  );
}

export default App;

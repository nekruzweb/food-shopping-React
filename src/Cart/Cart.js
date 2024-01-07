import React, { useContext } from "react";
import Classes from "./Cart.module.css";
import Modal from "../Ui/Modal";
import Context from "../Context/Context";
import CartItems from "./CartItems";

const Cart = (props) => {
  const { items, AddItems, RemoveItems, TotalAmount } = useContext(Context);

  const Incriment = (aaa) => {
    AddItems({
      ...aaa,
      amount:1
    })
  };
  const Decriment = (bbb) => {
    RemoveItems(bbb)
  };

  return (
    <>
      {props.BooL && (
        <Modal FunShow={props.SetBooL}>
          <div>
            <ul className={Classes["cart-items"]}>
              {items.map((item) => {
                return (
                  <CartItems
                    FunINC={Incriment.bind(null, item)}
                    FunDEC={Decriment.bind(null, item.id)}
                    key={item.id}
                    id={item.id}
                    amount={item.amount}
                    name={item.name}
                    price={item.price}
                  />
                );
              })}
            </ul>
            <div className={Classes.total}>
              <span>Total Amount</span>
              <span> ${Math.abs(TotalAmount.toFixed(2))} </span>
            </div>
            <div className={Classes.actions}>
              <button
                onClick={() => props.SetBooL(false)}
                className={Classes["button--alt"]}
              >
                {" "}
                Close{" "}
              </button>
              <button className={Classes.button}> Order </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Cart;

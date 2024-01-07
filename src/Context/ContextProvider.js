import React, { useReducer } from "react";
import Context from "./Context";
import Reduce from "./Reduce";

    const DefaultItems = {
        items: [],
        TotalAmount: 0,
    }

const ContextProvider = (props) => {

    const [state, dispatchFN] = useReducer(Reduce, DefaultItems )


    const AddItemsProvider = (element) => {
        dispatchFN({
            type:"ADD",
            Malumot:element
        })
    };

    const RemoveItemsProvider = (id) => {
      dispatchFN({
        type:"Remove",
        id:id
      })
    };

  return (
    <Context.Provider
      value={{
        items: state.items,
        TotalAmount: state.TotalAmount,
        AddItems: AddItemsProvider,
        RemoveItems: RemoveItemsProvider
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;

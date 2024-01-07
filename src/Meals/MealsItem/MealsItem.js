import React, { useContext } from "react";
import Classes from "./Mealsitem.module.css";
import MealsForm from "./MealsForm";
import Context from "../../Context/Context";

const MealsItem = (props) => {
  const { id, name, description, price } = props;

  const {AddItems} = useContext(Context)

  const GetAmount = (amount)=>{
    AddItems({
      ...props,
      amount
    })
  }

  return (
    <div className={Classes.meal}>
      <div>
        <h3> {name} </h3>
        <div className={Classes.description}> {description} </div>
        <div className={Classes.price}> $ {price} </div>
      </div>
      <div>
        <MealsForm FunAmount={GetAmount} />
      </div>
    </div>
  );
};

export default MealsItem;

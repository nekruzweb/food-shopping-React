import React, { useRef } from "react";
import Classes from "./MealsForm.module.css";
import Input from "../../Ui/Input";

const MealsForm = (props) => {

  const amount = useRef()

  const SubmitForm = (e)=>{
    e.preventDefault()

    props.FunAmount(+amount.current.value)
  }

  return (
    <form onSubmit={SubmitForm} className={Classes.form}>
      <Input ref={amount} input={{
          min: "1",
          max: "10",
          type: "number",
          id: "amount",
          defaultValue: "1",
          label: "Amount",
        }}
      />
      <button> + Add </button>
    </form>
  );
};

export default MealsForm;

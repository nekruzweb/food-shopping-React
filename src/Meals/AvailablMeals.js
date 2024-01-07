import React from "react";
import Classes from "./AvailablMeals.module.css";
import Card from "../Ui/Card";
import MealsItem from "./MealsItem/MealsItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailablMeals = () => {
  const mealsitem = DUMMY_MEALS.map((item) => {
    return <li> {item.name} </li>;
  });
  return (
    <Card className={Classes.meals}>
      <ul>
        {DUMMY_MEALS.map((item) => {
          return (
            <MealsItem
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default AvailablMeals;

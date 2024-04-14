import { useState } from "react";
import "./ShoppingList.css";
import ShoppingListItem from "./ShoppingListItem";

const ShoppingList = (props) => {
  const [shoppingList, setShoppingList] = useState("");
  const onButtonClickHandler = () => {
    const map = new Map();
    let i = 0;
    while (i < props.list.length) {
      let j = 0;
      while (j < props.list[i].recipe.ingredients.length) {
        var total = 0;
        if (map.has(props.list[i].recipe.ingredients[j].ingredient)) {
          total =
            parseFloat(
              map.get(props.list[i].recipe.ingredients[j].ingredient)
            ) + parseFloat(props.list[i].recipe.ingredients[j].amount);
        } else {
          total = parseFloat(props.list[i].recipe.ingredients[j].amount);
        }
        if (total > 0) {
          map.set(
            props.list[i].recipe.ingredients[j].ingredient,
            total + " " + props.list[i].recipe.ingredients[j].unit
          );
        }
        j++;
      }
      i++;
    }

    var shoppingList = "";
    map.forEach(function (value, key) {
      shoppingList += key + " " + value + "\n";
    });
    setShoppingList(shoppingList);
    window.alert("copied to clipboard");
    console.log(shoppingList);
    navigator.clipboard.writeText(shoppingList);
  };

  return (
    <>
      <div className="shoppinglist">
        <h3>Shopping List</h3>
        {props.list.map((item) => (
          <ShoppingListItem entry={item} />
        ))}
        <button onClick={onButtonClickHandler}>Copy List</button>
      </div>
    </>
  );
};

export default ShoppingList;

import { useState } from "react";
import "./ShoppingList.css";
import ShoppingListItem from "./ShoppingListItem";

const ShoppingList = (props) => {
  const [shoppingList, setShoppingList] = useState("");
  const onButtonClickHandler = () => {
    const map = new Map();
    console.log(props);
    let i = 0;
    while (i < props.list.length) {
      let j = 0;
      while (j < props.list[i].recipe.ingredients.length) {
        console.log(props.list[i].recipe.ingredients);
        var total = 0;
        if (map.has(props.list[i].recipe.ingredients[j].ingredient)) {
          total =
            parseFloat(map.get(props.list[i].recipe.ingredients[j].amount)) +
            parseFloat(props.list[i].recipe.ingredients[j].ingredient);
        } else {
          total = parseFloat(props.list[i].recipe.ingredients[j].ingredient);
        }
        if (total > 0) {
          map.set(
            props.list[i].recipe.ingredients[j].unit,
            total + " " + props.list[i].recipe.ingredients[j].amount
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
    if (shoppingList != "") {
      window.alert("copied to clipboard");
      navigator.clipboard.writeText(shoppingList);
    }
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

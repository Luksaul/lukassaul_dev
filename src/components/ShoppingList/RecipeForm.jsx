import { useState } from "react";
import IngredientSelect from "./IngredientSelect/IngredientSelect";
import "./RecipeForm.css";

const RecipeForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    var recipe = {
      id: crypto.randomUUID(),
      title: event.target.elements[0].value,
      ingredients: [],
      recipeLink: event.target.elements[55].value,
    };

    let i = 1;
    while (i < event.target.elements.length - 2) {
      var ingredient = {
        ingredient: event.target.elements[i].value,
        amount: event.target.elements[i + 1].value,
        unit: event.target.elements[i + 2].value,
      };
      if (ingredient.ingredient !== "") {
        recipe.ingredients.push(ingredient);
      }
      i += 3;
    }
    props.onAddRecipe(recipe);

    document.getElementById("recipeForm").reset();
  };

  return (
    <>
      <div className="recipeform">
        <h3>Recipes</h3>
        <form onSubmit={submitHandler} id="recipeForm">
          <div className="titleInput">
            <label>Title</label>
            <input type="text" />
          </div>
          <div className="ingredients">
            <div className="ingredientGroup">
              <div className="ingredientAmount">
                <label>Amount</label>
                <input type="text" />
              </div>
              <div className="amountUnit">
                <label>Unit</label>
                <IngredientSelect />
              </div>
              <div className="ingredientName">
                <label>Ingredient</label>
                <input type="text" />
              </div>
            </div>
            <div className="ingredientGroup">
              <div className="ingredientAmount">
                <label>Amount</label>
                <input type="text" />
              </div>
              <div className="amountUnit">
                <label>Unit</label>
                <IngredientSelect />
              </div>
              <div className="ingredientName">
                <label>Ingredient</label>
                <input type="text" />
              </div>
            </div>
            <div className="ingredientGroup">
              <div className="ingredientAmount">
                <label>Amount</label>
                <input type="text" />
              </div>
              <div className="amountUnit">
                <label>Unit</label>
                <IngredientSelect />
              </div>
              <div className="ingredientName">
                <label>Ingredient</label>
                <input type="text" />
              </div>
            </div>
            <div className="ingredientGroup">
              <div className="ingredientAmount">
                <label>Amount</label>
                <input type="text" />
              </div>
              <div className="amountUnit">
                <label>Unit</label>
                <IngredientSelect />
              </div>
              <div className="ingredientName">
                <label>Ingredient</label>
                <input type="text" />
              </div>
            </div>
            <div className="ingredientGroup">
              <div className="ingredientAmount">
                <label>Amount</label>
                <input type="text" />
              </div>
              <div className="amountUnit">
                <label>Unit</label>
                <IngredientSelect />
              </div>
              <div className="ingredientName">
                <label>Ingredient</label>
                <input type="text" />
              </div>
            </div>
            <div className="ingredientGroup">
              <div className="ingredientAmount">
                <label>Amount</label>
                <input type="text" />
              </div>
              <div className="amountUnit">
                <label>Unit</label>
                <IngredientSelect />
              </div>
              <div className="ingredientName">
                <label>Ingredient</label>
                <input type="text" />
              </div>
            </div>
            <div className="ingredientGroup">
              <div className="ingredientAmount">
                <label>Amount</label>
                <input type="text" />
              </div>
              <div className="amountUnit">
                <label>Unit</label>
                <IngredientSelect />
              </div>
              <div className="ingredientName">
                <label>Ingredient</label>
                <input type="text" />
              </div>
            </div>
            <div className="ingredientGroup">
              <div className="ingredientAmount">
                <label>Amount</label>
                <input type="text" />
              </div>
              <div className="amountUnit">
                <label>Unit</label>
                <IngredientSelect />
              </div>
              <div className="ingredientName">
                <label>Ingredient</label>
                <input type="text" />
              </div>
            </div>
            <div className="ingredientGroup">
              <div className="ingredientAmount">
                <label>Amount</label>
                <input type="text" />
              </div>
              <div className="amountUnit">
                <label>Unit</label>
                <IngredientSelect />
              </div>
              <div className="ingredientName">
                <label>Ingredient</label>
                <input type="text" />
              </div>
            </div>
            <div className="ingredientGroup">
              <div className="ingredientAmount">
                <label>Amount</label>
                <input type="text" />
              </div>
              <div className="amountUnit">
                <label>Unit</label>
                <IngredientSelect />
              </div>
              <div className="ingredientName">
                <label>Ingredient</label>
                <input type="text" />
              </div>
            </div>
            <div className="ingredientGroup">
              <div className="ingredientAmount">
                <label>Amount</label>
                <input type="text" />
              </div>
              <div className="amountUnit">
                <label>Unit</label>
                <IngredientSelect />
              </div>
              <div className="ingredientName">
                <label>Ingredient</label>
                <input type="text" />
              </div>
            </div>
            <div className="ingredientGroup">
              <div className="ingredientAmount">
                <label>Amount</label>
                <input type="text" />
              </div>
              <div className="amountUnit">
                <label>Unit</label>
                <IngredientSelect />
              </div>
              <div className="ingredientName">
                <label>Ingredient</label>
                <input type="text" />
              </div>
            </div>
            <div className="ingredientGroup">
              <div className="ingredientAmount">
                <label>Amount</label>
                <input type="text" />
              </div>
              <div className="amountUnit">
                <label>Unit</label>
                <IngredientSelect />
              </div>
              <div className="ingredientName">
                <label>Ingredient</label>
                <input type="text" />
              </div>
            </div>
            <div className="ingredientGroup">
              <div className="ingredientAmount">
                <label>Amount</label>
                <input type="text" />
              </div>
              <div className="amountUnit">
                <label>Unit</label>
                <IngredientSelect />
              </div>
              <div className="ingredientName">
                <label>Ingredient</label>
                <input type="text" />
              </div>
            </div>
            <div className="ingredientGroup">
              <div className="ingredientAmount">
                <label>Amount</label>
                <input type="text" />
              </div>
              <div className="amountUnit">
                <label>Unit</label>
                <IngredientSelect />
              </div>
              <div className="ingredientName">
                <label>Ingredient</label>
                <input type="text" />
              </div>
            </div>
            <div className="ingredientGroup">
              <div className="ingredientAmount">
                <label>Amount</label>
                <input type="text" />
              </div>
              <div className="amountUnit">
                <label>Unit</label>
                <IngredientSelect />
              </div>
              <div className="ingredientName">
                <label>Ingredient</label>
                <input type="text" />
              </div>
            </div>
            <div className="ingredientGroup">
              <div className="ingredientAmount">
                <label>Amount</label>
                <input type="text" />
              </div>
              <div className="amountUnit">
                <label>Unit</label>
                <IngredientSelect />
              </div>
              <div className="ingredientName">
                <label>Ingredient</label>
                <input type="text" />
              </div>
            </div>
            <div className="ingredientGroup">
              <div className="ingredientAmount">
                <label>Amount</label>
                <input type="text" />
              </div>
              <div className="amountUnit">
                <label>Unit</label>
                <IngredientSelect />
              </div>
              <div className="ingredientName">
                <label>Ingredient</label>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="recipeLink">
            <label>Recipe Link</label>
            <input type="text" />
          </div>
          <button className="recipeFormButton" type="submit">
            Add to Cookbook
          </button>
        </form>
      </div>
    </>
  );
};

export default RecipeForm;

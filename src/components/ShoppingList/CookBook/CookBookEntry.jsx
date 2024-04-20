import "./CookBookEntry.css";

const CookBookEntry = (props) => {
  const onAddToListHandler = () => {
    props.shoppingList(props.entry);
  };
  const onRemoveFromCookbookHandler = () => {
    props.removeRecipe(props.entry.id);
  };

  function RecipeLink({ link }) {
    if (link !== undefined) {
      return (
        <a href={link} target="_blank">
          Recipe
        </a>
      );
    } else {
      return <a></a>;
    }
  }

  return (
    <>
      <div className="cookbookentry" id={props.entry.recipe.id}>
        <h4>{props.entry.recipe.title}</h4>
        {props.entry.recipe.ingredients.map((ingredient) => (
          <p className={props.entry.recipe.title}>
            {ingredient.ingredient} - {ingredient.amount} {ingredient.unit}
          </p>
        ))}
        <RecipeLink link={props.entry.recipe.recipeLink} />
        <div className="cookbook_button_group">
          <button onClick={onAddToListHandler}>Add to Shopping List</button>
          <button onClick={onRemoveFromCookbookHandler}>
            Remove from Cookbook
          </button>
        </div>
      </div>
    </>
  );
};

export default CookBookEntry;

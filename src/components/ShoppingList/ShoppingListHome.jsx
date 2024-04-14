import "./ShoppingListHome.css";
import Header from "./Header.jsx";
import RecipeForm from "./RecipeForm.jsx";
import CookBook from "./CookBook/CookBook.jsx";
import ShoppingList from "./ShoppingList/ShoppingList.jsx";
import { useState, useEffect, forceUpdate } from "react";
import {
  collection,
  addDoc,
  QuerySnapshot,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase.js";

function ShoppingListHome() {
  const [enteredRecipes, setEnteredRecipes] = useState([]);
  const [recipes, setRecipes] = useState({});
  const [enteredShopList, setEnteredShopList] = useState([]);

  const saveRecipeHandler = (enteredRecipe) => {
    setEnteredRecipes((arr) => [...arr, enteredRecipe]);
  };

  const saveShopListHandler = (shoppingListItem) => {
    setEnteredShopList((arr) => [...arr, shoppingListItem]);
  };

  // const removeRecipeHandler = (id) => {
  //   const newRecipeList = enteredRecipes.filter(
  //     (enteredRecipe) => enteredRecipe.id !== id
  //   );
  //   setEnteredRecipes(newRecipeList);
  // };

  const addRecipe = async (recipe) => {
    try {
      const docRef = await addDoc(collection(db, "recipes"), {
        recipe: recipe,
      });
      fetchPost();
    } catch {
      console.error("Error adding recipe: ", recipe);
    }
  };

  const fetchPost = async () => {
    await getDocs(collection(db, "recipes")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setEnteredRecipes(newData);
    });
  };

  const deleteRecipe = async (RecipeID) => {
    const docRef = doc(db, "recipes", RecipeID);
    try {
      await deleteDoc(docRef);
      fetchPost();
    } catch (ex) {
      console.error(ex);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <div className="ShoppingListHome">
        <Header></Header>
        <div className="container">
          <div className="main">
            <RecipeForm onAddRecipe={addRecipe}></RecipeForm>
            <CookBook
              enteredRecipes={enteredRecipes}
              onSaveShoppingList={saveShopListHandler}
              onRemoveRecipe={deleteRecipe}
            ></CookBook>
          </div>
          <div className="sidebar">
            <ShoppingList list={enteredShopList}></ShoppingList>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingListHome;

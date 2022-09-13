import { useState, useEffect } from 'react'

function RecipeList() {
  const [recipes, setRecipes] = useState()

  console.log({ recipes })

  useEffect(() => {
    fetch("/recipes").then((res) => {
      if (res.ok) {
      res.json().then((res) => {
        setRecipes(res)
      });
    } else {
      res.json().then((err) => {
          alert(`${err.errors}`)
    })
    }});
  }, []);


  return (
    <div>
      <h1>RecipeList</h1>
    </div>
  );
}

export default RecipeList;

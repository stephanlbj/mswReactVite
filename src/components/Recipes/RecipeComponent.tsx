import { Recipe } from "."


const RecipeComponent = ({recipe}:{recipe: Recipe}) => {
  return (
    <div>
      <p>{recipe.name}</p>
    </div>
  )
}

export default RecipeComponent
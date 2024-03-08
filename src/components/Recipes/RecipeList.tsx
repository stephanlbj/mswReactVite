import { Recipe } from "."
import RecipeComponent from "./RecipeComponent"

 
type recipeType ={
    recipes:Recipe[]
}

const RecipeList = ({recipes}:recipeType) => {


  return (
    <div>
        {
            recipes.map((recipe)=>{
                return <RecipeComponent key={recipe.id} recipe={recipe}/>
            })
        }
    </div>
  )
}

export default RecipeList
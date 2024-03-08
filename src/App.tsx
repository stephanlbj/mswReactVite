import './App.css'
import RecipeList from './components/Recipes/RecipeList'
import Wrapper from './components/Wrapper'
import { useFetchProducts } from './hooks/useFetchProducts'


function App() {
 

  const {data, error, isLoading}  = useFetchProducts() 

  if(isLoading)
  return <Wrapper label='Loading...'/>

  // if(error)
  // return <Wrapper label={`Sorry, an error occured.`}/>


  return (
   <main>
   <RecipeList recipes={data}/>
   </main>
  )
}

export default App

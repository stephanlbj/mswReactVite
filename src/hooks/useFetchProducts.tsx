import { recipesUrl } from '../Constant/constant'
import { useEffect, useRef, useState } from 'react'
import {  Recipe } from '../components/Recipes'



export const useFetchProducts = ()  => {

    
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [data , setData] = useState<Recipe[]>([])

  const abortControl = useRef<AbortController | null>(null)


  useEffect(()=>{

    
    abortControl.current = new AbortController()

    const fetchData = async ()=>{
      setError(null)
      setLoading(true)

       try {
        const request = await fetch(`${recipesUrl}`, {
          signal:abortControl.current?.signal
        })


        const response = await request.json()
         setData(response.recipes) 
       } catch (error) {
         if(error instanceof Error){
          setError(error.message)
          throw new Error(error.message)
         }
       } finally{
        setLoading(false)
       }
    }

    fetchData()

    return ()=>{
      abortControl.current?.abort()
    }

  },[])

  return {isLoading, error, data}
  
}


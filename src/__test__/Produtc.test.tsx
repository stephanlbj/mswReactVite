import {   HttpResponse, http } from "msw"
import { dummyData } from "../mocks/data"
import { server } from "../mocks/server"
import { recipesUrl } from "../Constant/constant"
 

describe('Testing API Response for Recipe Data Retrieval', ()=>{


    test('Testing Successful Retrieval of Data Recipes from API', async ()=>{
        const response = await fetch(`${recipesUrl}`)
      
        expect(response.status).toBe(200)
  
        expect(await response.json()).toEqual(dummyData)
    })



    test('handles errors when fetching the recipes', async () => {
      
       server.use(
          http.get(`${recipesUrl}`,  () => {

          return HttpResponse.json(null, { status: 500 })
 })
        )

        const response = await fetch(`${recipesUrl}`)
         expect(response.status).toBe(500)
        
      })
})

 
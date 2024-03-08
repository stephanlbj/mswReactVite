import { http,  HttpResponse } from 'msw'
import { dummyData } from './data'
import { recipesUrl } from '../Constant/constant'

export const handlers = [
  http.get(`${recipesUrl}`, () => {
    return HttpResponse.json( dummyData, { status: 200 })
  }),

]
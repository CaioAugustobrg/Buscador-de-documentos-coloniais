/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
// import { SearchBookController } from '../controller/searchBookController'
import { searchBookController } from '../factory/searchBook'
// import search from '../controllers/search'
const router = express.Router()
router.post('/search', async (request, response) => {
  return await searchBookController.handle(request, response)
})
export default router

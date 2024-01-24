/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { searchBookController } from '../factory/searchBook'
const router = express.Router()
router.post('/search', async (request, response) => {
  return await searchBookController.handle(request, response)
})
export default router

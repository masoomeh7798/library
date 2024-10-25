import express from 'express'
import isAdmin from '../Middleware/isAdmin.js'
import { create, getAll, getOne, update } from '../Controllers/CategoryCn.js'

const categoryRouter=express.Router()
categoryRouter.route('/').post(isAdmin,create).get(getAll)
categoryRouter.route('/:id').get(getOne).patch(update)

export default categoryRouter
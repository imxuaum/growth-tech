import express from 'express'

import PostsController from './controllers/PostsController'
import UsersController from './controllers/UsersController'

const routes = express.Router()
const postsController = new PostsController()
const usersController = new UsersController()

routes.get('/posts', postsController.show)
routes.get('/users', usersController.show)

export default routes

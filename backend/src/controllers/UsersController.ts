import api from '../services/api'

class UsersController {
  async show (request, response) {
    const apiResponse = await api.get('users')

    const users = apiResponse.data

    return response.json(users)
  }
}

export default UsersController

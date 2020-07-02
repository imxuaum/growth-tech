import api from '../services/api'

class PostsController {
  async show (request, response) {
    const apiPostResponse = await api.get('posts')
    const apiUserResponse = await api.get('users')

    const postResponse = apiPostResponse.data
    const userResponse = apiUserResponse.data

    function getNameForUser (userId: number) {
      let name = ''

      userResponse.forEach(users => {
        if (users.id === userId) {
          name = users.name
        }
      })

      return name
    }

    function getCompanyForUser (userId: number) {
      let company = ''

      userResponse.forEach(users => {
        if (users.id === userId) {
          company = users.company.name
        }
      })

      return company
    }

    const posts = postResponse.map((post) => {
      const getCompany = getCompanyForUser(post.userId)
      const name = getNameForUser(post.userId)

      return {
        id: post.id,
        userId: post.userId,
        name: name,
        company: getCompany,
        title: post.title,
        body: post.body
      }
    })

    return response.json(posts)
  }
}

export default PostsController

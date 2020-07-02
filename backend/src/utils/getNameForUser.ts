function getNameForUser (id: number) {
  let name = ''

  users.forEach(users => {
    if (users.id === id) {
      name = users.name
    }
  })

  return name
}

export default getNameForUser

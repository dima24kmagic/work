let initialState = {
  users: [
  {
    name: 'Pavel',
    gender: true,
    age: 18,
    education: 'College',
    job: 'Schooler',
    havekids: false
  },
  {
    name: "Dima",
    gender: true,
    age: 18,
    job: 'Schooler',
    education: 'Elementary School',
    havekids: false
  }
  ]
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      let newUser = Object.assign({}, action.data);
      return Object.assign({}, state, state.users.push(newUser))
    case 'TEST':
      console.log('Hell yeah, test work!')
    default:
      return state
  }
}

export default users;

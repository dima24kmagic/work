let initialState = {
  users: [
  {
    name: 'Pavel',
    gender: true,
    age: 18,
    education: 'College',
    havekids: false
  },
  {
    name: "Dima",
    gender: true,
    age: 18,
    education: 'Elementary School',
    havekids: false
  }
  ]
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      let newUser = Object.assign({}, action.data);
      return Object.assign({}, state, newUser)
    default:
      return state
  }
}

export default user;

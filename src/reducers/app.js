let initialState = {
  users: [
  {
    name: 'Pavel',
    gender: true,
    age: 18,
    education: 'College',
    job: 'Schooler',
    havekids: false,
    isEditing: false
  },
  {
    name: "Dima",
    gender: true,
    age: 18,
    job: 'Schooler',
    education: 'Elementary School',
    havekids: false,
    isEditing: false
  }
  ]
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      let newUser = Object.assign({}, action.data);
      return Object.assign({}, state, state.users.push(newUser))
    case 'EDIT_USER':
      console.log('u changign useredit?');
      return Object.assign({}, state, state.users[action.data].isEditing = !state.users.isEditing)
    default:
      return state
  }
}

export default users;

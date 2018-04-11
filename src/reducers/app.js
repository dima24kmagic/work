//__img
import pic1 from '../img/drake.jpg';
import pic2 from '../img/kendrik.jpg';

let initialState = {
  users: [
  {
    name: 'Pavel',
    gender: true,
    age: 18,
    education: 'College',
    job: 'Schooler',
    havekids: false,
    isEditing: false,
    pic: pic1
  },
  {
    name: "Dima",
    gender: true,
    age: 18,
    job: 'Schooler',
    education: 'Elementary School',
    havekids: false,
    isEditing: false,
    pic: pic2
  }
  ]
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      let newUser = Object.assign({}, action.data);
      return Object.assign({}, state, state.users.push(newUser))
    case 'EDIT_USER':
      console.log(state.users[action.data].isEditing);
      return Object.assign({}, state, state.users[action.data].isEditing = !state.users[action.data].isEditing)
    default:
      return state
  }
}

export default users;

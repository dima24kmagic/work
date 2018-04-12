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
  ],
  images: []
}

export const users = (state = initialState.users, action) => {
  switch (action.type) {
    case 'ADD_USER':
      let newUser = Object.assign({}, action.data);
      return Object.assign({}, state, state.push(newUser))
    case 'EDIT_USER':
      console.log(state[action.data].isEditing);
      return Object.assign([], state, state[action.data].isEditing = !state[action.data].isEditing)
    case 'SAVE_USER':
      let savedUser = Object.assign({}, action.data);
      console.log(action.data);
      state[action.data.index] = action.data;
      return /*Object.assign([], state, state.push(savedUser));*/ state
    default:
      return state
  }
}

export const images = (state = initialState.images, action) => {
  switch (action.type) {
    case 'SET_IMAGES':
      let images = [];
      for(let i = 0; i< action.data.length; i+=1){
        images[i] = {
          url: action.data[i].images.fixed_height.url,
          title: action.data[i].title
        };
      }
      return Object.assign([], state, images)
    default:
      return state
  }
}

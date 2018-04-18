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
  images: [{url: "nourl"}],
  //isLoading: true/false
  isLoading: false,
  imagesToShow: 3
}

export const users = (state = initialState.users, action) => {
  switch (action.type) {
    case 'ADD_USER':
      let newUser = Object.assign({}, action.data);
      return Object.assign([], state, state.push(newUser))
    case 'EDIT_USER':
      console.log(state[action.data].isEditing);
      return Object.assign([], state, state[action.data].isEditing = !state[action.data].isEditing)
    case 'SAVE_USER':
      console.log(action.data);
      state[action.data.index] = action.data;
      state[action.data.index].isEditing = true;
      return state
    default:
      return state
  }
}

export const images = (state = initialState.images, action, testState = initialState.isLoading) => {
  switch (action.type) {
    case 'SET_IMAGES':
      let newState = action.data;
      state = newState
      return newState
    default:
      return state
  }
}

export const isLoading = (state = initialState.isLoading, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return state = true
    case 'STOP_LOADING':
      return state = false
    case 'ON_LOAD':
      return state = action.data

    default:
      return state
  }
}

export const imagesToShow = (state = initialState.imagesToShow, action) => {
  switch (action.type) {
    case 'CHANGE_IMG_COUNT':
      return state + action.data
    case 'SET_IMG_COUNTER':
      return action.data
    default:
      return state
  }
}

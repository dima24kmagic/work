export const addUser = (data) => {
  return {
    type: 'ADD_USER',
    data: data
  }
}

export const editUser = (data) => {
  return{
    type: 'EDIT_USER',
    data: data
  }
}

export const saveUser = (data) => {
  return{
    type: 'SAVE_USER',
    data: data
  }
}

export const setImages = (data) => {
  return{
    type: 'SET_IMAGES',
    data: data
  }
}

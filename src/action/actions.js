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

export const startLoading = () => {
  return{
    type: 'START_LOADING'
  }
}

export const stopLoading = () => {
  return{
    type: 'STOP_LOADING'
  }
}

export const check = (data) => {
  return{
    type: 'CHECK',
    data: data
  }
}

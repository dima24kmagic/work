const initialState = {
  page: '/'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SWITCH_PAGE":
      console.log('page switched');
      return Object.assign({}, state, {
        page: '/users'
      })
    default:

  }
}

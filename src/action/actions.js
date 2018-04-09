{
  type: 'CHANGE_PATH',
  payload: { path: "/"}
}

switchPage(data){
  return{
    type: 'CHANGE_PATH',
    path: "/" + data;
  }
}

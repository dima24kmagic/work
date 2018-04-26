import axios from 'axios'
export const request = () => {
      axios({
        url: "http://localhost:3000/peoples"
      }).then((res) => {
        console.log(res);
        return res.data
      })
  }
export const deleteUser = (id) => {
    console.log(id);
    fetch(`http://localhost:3000/peoples/${id}`, {
      withCredentials: true,
      method: 'DELETE'
    })
  }
export const updateUser = (id, body) => {
    console.log(id);
    axios({
      method:'PUT',
      url: `http://localhost:3000/peoples/${id}`,
      data: body
    }).then((res) => {
      console.log(body);
    })
  }
export const addUserFetch = (data) => {
    axios({
      method:'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      url: "http://localhost:3000/peoples",
      data: data
    }).then((res) => {
      console.log(res);
      return res.data
    })
  }

  /* TEST USER Obj
  {
    name: 'Json',
    gender: true,
    age: 39,
    education: "Internet",
    job: "Not your deal",
    haveKids: true,
    pic: "https://wallpaperbrowse.com/media/images/750814.jpg"
  }
  */

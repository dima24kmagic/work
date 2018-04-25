
export const request = () => {
    fetch("http://localhost:3000/peoples")
      .then((res) => {
        console.log(res);
        return res.json()
      }).then((resData) => {
        console.log(resData);
        this.setState({users: resData})
        return resData
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
    fetch(`http://localhost:3000/peoples/${id}`, {
      withCredentials: true,
      method: 'PUT',
      body: JSON.stringify(body),
    })
  }
export const addUserFetch = (data) => {
    fetch('http://localhost:3000/peoples', {
      mode: "no-cors",
      withCredentials: true,
      method: 'POST',
      headers: {
          Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log();
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

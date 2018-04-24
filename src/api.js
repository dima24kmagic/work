
  request = () => {
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
  deleteUser = (id) => {
    console.log(id);
    fetch(`http://localhost:3000/peoples/${id}`, {
      withCredentials: true,
      method: 'DELETE'
    })
  }
  updateUser = (id) => {
    console.log(id);
    fetch(`http://localhost:3000/peoples/${id}`, {
      withCredentials: true,
      method: 'PUT',
      body: JSON.stringify({
        firstname: 'New Name',
        secondParam: 'New Second Name',
      }),
    })
  }
  addUser = () => {
    fetch('http://localhost:3000/peoples', {
      mode: "no-cors",
      withCredentials: true,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Json',
        gender: true,
        age: 39,
        education: "Internet",
        job: "Not your deal",
        haveKids: true,
        pic: "https://wallpaperbrowse.com/media/images/750814.jpg"
      }),
    });
    this.setState({});
  }

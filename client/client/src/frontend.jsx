import { Button } from 'bootstrap'
import axios from 'axios'
import React, { useState } from 'react'

const Frontend = () => {

  const [data, setData] = useState({
    Name: "",
    Email: ""
  })

  let API = 'http://localhost:5000/routes/'

  const postData = async () => {
    console.log("postData SUCCESS");

    setData({
      Name: "",
      Email: ""
    })

    try {
      const response = await axios.post(`${API}postData`, data)
      console.log(response, "response of postData");


    } catch (error) {
      console.log(error, "postData ERROR");
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    // console.log(name);
    // console.log(value);

    setData((prevData) => ({
      ...prevData, [name]: value
    }))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      postData()
    }
  }

  console.log(data);

  return (
    <div className="container mt-4">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text"
          className="form-control"
          name='Name'
          value={data.Name}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          autoFocus />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email"
          className="form-control"
          name='Email'
          value={data.Email}
          onKeyDown={handleKeyDown}
          onChange={handleChange} />
        <button className="btn btn-primary" onClick={postData}>Save</button>
      </div>
    </div>
  )
}

export default Frontend
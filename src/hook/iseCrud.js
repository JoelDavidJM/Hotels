import axios from "axios"
import { useState } from "react"
import getConfigToken from "../services/getConfigToken"

const iseCrud = () => {
  const [respose, setRespose] = useState()

  const baseUrl = 'https://booking-hotel-api-gkqe.onrender.com'

  const getApi = (path) => {
    const url = `${baseUrl}${path}`
    axios.get(url, getConfigToken())
    .then(res => setRespose(res.data))
    .catch(err => 
      console.log(err)
      
    )
  }

  const postApi = (path, data) => {
    const url = `${baseUrl}${path}`
    axios.post(url, data, getConfigToken())
    .then(res => console.log(res.data))
    .catch(err => {
      console.log(err)
      if(err.response.status === 403) {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
      }
    })
  }

  const deleteApi = (path, id) => {
    const url = `${baseUrl}${path}/${id}`
    axios.delete(url, getConfigToken())
    .then(res => {
      console.log(res.data)
      setRespose(respose.filter(elem => elem.id !== id))
    })
    .catch(err => {
      console.log(err)
      if(err.response.status === 403) {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
      }
    })
  }

  const updateApi = (path, id, data) => {
    const url = `${baseUrl}${path}/${id}`
    axios.patch(url, data, getConfigToken())
    .then(res => console.log(res.data))
    .catch(err => {
      console.log(err)
      if(err.response.status === 403) {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
      }
    })
  }
  return [respose, getApi, postApi, deleteApi, updateApi]
}

export default iseCrud
import axios from 'axios'
const baseUrl = 'https://backend-stories.onrender.com/api/stories'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAll
}
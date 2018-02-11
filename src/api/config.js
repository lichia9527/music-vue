import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 3000
})

instance.interceptors.request.use(function (config) {
  return config
}, function (error) {
  Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  const data = response.data
  if (data.code === 200) {
    return data
  }
}, function (error) {
  Promise.reject(error)
})

export default instance

import axios from 'axios'

const fetch = axios.create({
  baseUrl: '',
  timeout: 10000,
  headers: {}
})

// 请求拦截器
fetch.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  if (config.method === 'post') {
    config.headers['Content-Type'] = 'application/json'
  }
  return config
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 响应拦截器
fetch.interceptors.response.use(response => {
  // 对响应数据做些什么
  const { ret } = response.data
  if (ret === 0) {
    return response.data
  } else {
    return Promise.reject('服务器错误')
  }
}, error => {
  return Promise.reject(error)
})

export {
  fetch
}

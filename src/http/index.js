import axios from 'axios'

// const fetch = axios.create({
//   baseUrl: '',
//   timeout: 10000,
//   headers: {}
// })

// 请求拦截器
axios.interceptors.request.use(config => {
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
axios.interceptors.response.use(response => {
  // 对响应数据做些什么
  // const { ret } = response.data
  // if (ret === 0) {
  //   return response.data
  // } else {
  //   return Promise.reject(new Error('服务器错误'))
  // }
  return response.data
}, error => {
  return Promise.reject(error)
})

// export {
//   fetch
// }

export default (options, params) => {
  console.log(options, 'options')
  console.log(params, 'params')
  let httpOptions = {
    baseUrl: '',
    timeout: 10000,
    headers: {},
    url: options.url,
    method: options.method
  }
  return new Promise((resolve, reject) => {
    axios(httpOptions).then(res => {
      console.log(res, 'res')
      res && resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

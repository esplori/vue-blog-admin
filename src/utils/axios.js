/**
 * Created by QUDONGDONG901 on 2018/4/27.
 */
import axios from 'axios'
import {Loading} from 'element-ui'

let needLoadingRequestCount = 0
let loading = null

function startLoading () {
  loading = Loading.service({
    lock: true,
    text: '加载中……',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}

function endLoading () {
  loading.close()
}

axios.defaults.timeout = 15000
axios.defaults.headers.post['Content-Type'] = 'application/json'

export function showFullScreenLoading () {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

export function tryHideFullScreenLoading () {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}

// 在请求或响应被 then 或 catch 处理前拦截它们。
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  debugger
  let userinfo = localStorage.getItem('userInfo')
  if (userinfo) {
    userinfo = JSON.parse(userinfo)
    config.headers.common['Authorization'] = userinfo.token
  }
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  tryHideFullScreenLoading()
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  tryHideFullScreenLoading()
  handleAuthenticated(error)
  return Promise.reject(error)
})

/*
 *  axios 别名请求
 *  get
 *  post
 * */

// get请求
export function get (url, params, options) {
  if (options.showLoading) {
    showFullScreenLoading()
  }
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: url, // 在使用别名方法时， url、method、data 这些属性都不必在配置中指定。
      params: params // params是要与请求一起发送的URL参数
    }).then(res => {
      handleData(res, resolve, reject)
    }).catch(() => console.log('promise catch err')) // 捕获异常
  })
}

// post请求
export function post (url, param, options) {
  if (options.showLoading) {
    showFullScreenLoading()
  }
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: url,
      data: param // data是要作为请求主体发送的数据,仅适用于请求方法“PUT”，“POST”和“PATCH”
    }).then(res => {
      handleData(res, resolve, reject)
    }).catch(() => console.log('promise catch err')) // 捕获异常
  })
}

function handleData (res, resolve, reject) {
  tryHideFullScreenLoading()
  if (res.data.code === 0) {
    resolve(res.data.data)
  } else {
    reject(res)
  }
}
function handleAuthenticated (res) {
  switch (res.response.status) {
    case 401:
      location.href = '/#/login'
      localStorage.clear()
  }
}

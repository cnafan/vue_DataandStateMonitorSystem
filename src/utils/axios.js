// $axios({
//   url: 'findIrregularByTime',
//   method: 'post',
//   data: formData
//   // data: JSON.stringify(this.$store.state.SearchItem, this.$store.state.SearchInput)
//   // data: JSON.stringify(this.settingFormItems)
// }).then(response => {
//   console.log(response)
//   if (response.status === 200) {
//     this.NavSatIrregularMonitor = response.data
//   }
// }).catch(error => {
//   console.log(error, 'error')
// })
import axios from 'axios'
import {NOTIFICATION_OFFSET} from '@/config/display'

axios.defaults.timeout = 8000
axios.defaults.retry = 0
axios.defaults.retryDelay = 1000 // 重试延时
axios.defaults.baseURL = process.env.VUE_APP_BASEURL
console.log('process.env.BASEURL', process.env.VUE_APP_BASEURL)
axios.defaults.headers.post['Content-Type'] = 'application/json'

// //http request 拦截器
// axios.interceptors.request.use(
//   config => {
//     // const token = getCookie('名称');
//     config.data = JSON.stringify(config.data)
//     config.headers = {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     }
//     // if(token){
//     //   config.params = {'token':token}
//     // }
//     return config
//   },
//   error => {
//     return Promise.reject(err)
//   }
// )

// //http response 拦截器
// axios.interceptors.response.use(
//   response => {
//     if (response.data.errCode == 2) {
//       router.push({
//         path: '/login',
//         query: {redirect: router.currentRoute.fullPath}//从哪个页面跳转
//       })
//     }
//     return response
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )

/**
 * 封装get方法
 * @param url 地址
 * @param params 参数
 * @returns {Promise}
 */

export function fetch (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function postStandard (url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
  })
}

export function post (url, data, title = '', show = true) {
  return new Promise((resolve) => {
    axios.post(url, data)
      .then(response => {
        resolve(response)
      }).catch(error => {
        if (error.response) {
          this.$notify.error({
            title: '异常',
            message: '服务器后台出现异常！',
            // message: error.response.data,
            offset: NOTIFICATION_OFFSET
          })
        // console.log(error.response.data)
        // console.log(error.response.status)
        // console.log(error.response.headers)
        } else if (error.request) {
          console.log(error.request)
          if (show) {
            this.$notify.error({
              title: '异常',
              message: title + '请求错误',
              // message: error.request,
              offset: NOTIFICATION_OFFSET
            })
          }
        // console.log(error.request)
        } else {
          if (show) {
            this.$notify.error({
              title: '异常',
              message: title + '请求错误',
              // message: error.message,
              offset: NOTIFICATION_OFFSET
            })
          }
        // console.log('Error', error.message)
        }

      // reject(err)

      })
  })
}

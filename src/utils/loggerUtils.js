// // import {MAX_LOG_COUNT} from '../../config/log'
//
// export default {
//   saveLog2 (data) {
//     window.localStorage.setItem('logger', JSON.stringify(data))
//   },
//   saveLog (data, software) {
//     let logs = JSON.parse(window.localStorage.getItem('logger'))
//     if (logs === null) {
//       logs = []
//     }
//     if (logs.length > MAX_LOG_COUNT) {
//       logs = logs.slice(0, MAX_LOG_COUNT)
//     }
//
//     logs.unshift({
//       // 'timestamp': new Date().toJSON().substr(0, 19).replace('T', ' '),
//       'timestamp': new Date().toJSON().substring(0, 19).replace('T', ' '),
//       'software': software,
//       'content': data
//     })
//     window.localStorage.setItem('logger', JSON.stringify(logs))
//   },
//
//   getLog () {
//     let logs = JSON.parse(window.localStorage.getItem('logger'))
//     if (logs === null) {
//       logs = []
//     }
//     console.log(logs)
//     return logs
//   }
//
// }

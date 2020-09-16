import {LIST_COUNT} from '../../config/display'

export default {
  /*
   * 读取数据
   * key：数据对象的key
   */
  readData (key) {
    // return JSON.parse(JSON.parse(window.localStorage.getItem(key) || '[]'));
    return JSON.parse(window.localStorage.getItem(key) || '[]')
  },
  /*
   * 保存数据
   * key：数据对象的key
   * data：要保存的数据（对象数组）
   */
  saveData (key, data) {
    window.localStorage.setItem(key, JSON.stringify(data))
  },
  saveData2 (software, insertdata) {
    let data = JSON.parse(window.localStorage.getItem(software) || '[]')
    if (data === null) {
      data = []
    }
    if (data.length > LIST_COUNT) {
      data = data.slice(0, LIST_COUNT)
    }
    data.unshift(insertdata)
    window.localStorage.setItem(software, JSON.stringify(data))
  },
  /**
   * 控制存储&显示个数
   * @param software 数据类型
   * @param insertdata 数据值
   * @param listCount 个数
   */
  saveData3 (software, insertdata, listCount) {
    let data = JSON.parse(window.localStorage.getItem(software) || '[]')
    if (data === null) {
      data = []
    }
    if (data.length > listCount - 1) {
      data = data.slice(0, listCount - 1)
    }
    data.unshift(insertdata)
    window.localStorage.setItem(software, JSON.stringify(data))
  },
  saveNetConfig (data) {
    window.localStorage.setItem('netConfig', JSON.stringify(data))
  },
  readNetConfig () {
    let netconfig = JSON.parse(window.localStorage.getItem('netConfig'))
    if (netconfig === null) {
      netconfig = [
        {
          name: '系统管理控制软件',
          ip: '',
          port: ''
        },
        {
          name: 'GNSS时差数据综合处理软件',
          ip: '',
          port: ''
        },
        {
          name: '卫星综合管理软件',
          ip: '',
          port: ''
        },
        {
          name: '原子钟信号监测与自主切换软件',
          ip: '',
          port: ''
        },
        {
          name: 'VLBI站控软件',
          ip: '',
          port: ''
        }
      ]
    }
    return netconfig
  }
}

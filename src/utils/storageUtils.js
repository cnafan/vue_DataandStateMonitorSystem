import {LIST_COUNT} from "../../config/display";

export default {
  /*
   * 读取数据
   * key：数据对象的key
   */
  readData(key) {
    // return JSON.parse(JSON.parse(window.localStorage.getItem(key) || '[]'));
    return JSON.parse(window.localStorage.getItem(key) || '[]');
  },
  /*
   * 保存数据
   * key：数据对象的key
   * data：要保存的数据（对象数组）
   */
  saveData(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data))
  },
  saveData2(software,insertdata){
    let data=JSON.parse(window.localStorage.getItem(software) || '[]');
    if (data === null) {
      data = [];
    }
    if (data.length > LIST_COUNT) {
      data = data.slice(0, LIST_COUNT);
    }
    data.unshift(insertdata);
    window.localStorage.setItem(software, JSON.stringify(data));

  }
}

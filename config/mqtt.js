export const MQTT_SERVICE = 'ws://localhost:15674/ws' // mqtt服务地址
export const MQTT_USERNAME = 'guest' // mqtt连接用户名
export const MQTT_PASSWORD = 'guest' // mqtt连接密码
export const MQTT_HOST = '/'
export const HEADERS={
  "login": MQTT_USERNAME,
  "passcode": MQTT_PASSWORD,
  //虚拟主机，默认“/”
  "host": MQTT_HOST,
  "heart-beat": "0,0"
}
// export const EXCHANGE_PUSH="/exchange/amq.fanout/"
export const EXCHANGE_PUSH="/exchange/amq.direct/"
export const QUEUE_PUSH="/queue/"

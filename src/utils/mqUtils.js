import {EXCHANGE_PUSH, HEADERS, MQTT_SERVICE} from "../../config/mqtt";

let client = Stomp.client(MQTT_SERVICE);

export default {
  launch(routingkey, callback) {
    client.connect(HEADERS, (frame) => {
      console.log("进入连接回调")
      console.log(frame)
      client.subscribe(EXCHANGE_PUSH + routingkey, callback(JSON.parse(frame.body)), (frame) => {
        //     console.log("Failed: " + frame);
        //   });
      }, (frame) => {
        console.log("Failed: " + frame);
      });
    });
  }
}

import axios from 'axios'
import {Message} from 'element-ui';

function request(url, parameters, method) {
  method = (method || 'POST').toUpperCase();
  return new Promise((resolve, reject) => {
    const httpRequest = function () {
      axios.request({
        method: method,
        url: url,
        params: ('GET' == method || 'DELETE' == method) ? parameters : {},
        data: parameters,
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        responseType: 'json',
        // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
        timeout: 10000,
        validateStatus: function (status) {
          if (status == 500) {
            throw new Error('服务器内部错误');
          }
          if (status == 503) {
            throw new Error('网络连接超时，请检查网络环境');
          }
          return status >= 200 && status < 500; // 默认的
        },
      }).then(res => {
        if (res.status == 200) {
          resolve(res.data);
        }else{
          reject(res.data);
        }
      }).catch(err => {
        console.log(err);
        Message.error("请求超时，请检查网络");
      });
    };
    httpRequest();
  });
}
export const http = {request};

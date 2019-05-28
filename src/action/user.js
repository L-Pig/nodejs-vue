import {store} from '@/store/index';
import {http} from '@/http/index';
import {Message} from 'element-ui';

export default {
  query() {
    http.request('/apis/user', {}, 'get').then(res => {
      store.commit('user/query', res);
    }).catch(err => {
      Message.error(err.msg);
    })
  },
  visible(status, entity) {
    store.commit('user/visible', {status, entity});
  },
  add(params) {
    const that = this;
    http.request('/apis/user', params, 'post').then(() => {
      Message.success("添加成功");
      that.visible(false);
      that.query();
    }).catch(err => {
      Message.error(err.msg);
    })
  },
  delete(id) {
    const that = this;
    http.request(`/apis/user/${id}`, {}, 'delete').then(() => {
      Message.success("删除成功");
      that.query();
    }).catch(err => {
      Message.error(err.msg);
    })
  }
};

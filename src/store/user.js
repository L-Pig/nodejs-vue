export default {
  namespaced: true,
  state: {
    tree: [],
    data: [],
    filter: {
      username: '',
      page: 1,
      size: 10
    },
    visible: false,
    roleVisible: false,
    entity: {},
    defaultCheckedKeys: []
  },
  mutations: {
    query(state, data) {
      state.data = data;
    },
    pageChange(state, data) {
      state.filter.page = data;
    },
    filterChange(state, data) {
      state.filter = data;
    },
    sizeChange(state, data){
      state.filter.size = data;
    },
    visible(state, data) {
      let entity;
      if (data.entity) {
        entity = data.entity;
      } else {
        entity = {
          id: '',
          username: ''
        }
      }
      state.visible = data.status;
      state.entity = entity;
    },
    roleVisible(state, data) {
      if (data.entity) {
        state.entity = data.entity;
      } else {
        state.entity = {};
      }
      state.roleVisible = data.status;
    },
    role(state, data) {
      state.tree = data.tree;
      state.defaultCheckedKeys = data.defaultCheckedKeys;
    }
  }
}

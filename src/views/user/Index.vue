<template>
  <el-card shadow="never" class="card layout">
    <el-card shadow="never">
      <div slot="header" class="clearfix">
        <span>用户管理</span>
        <el-button style="float: right;" type="primary" size="small" @click="onAdd">添加用户</el-button>
      </div>
      <el-table
        :data="data"
        style="width: 100%">
        <el-table-column
          prop="id"
          label="ID">
        </el-table-column>
        <el-table-column
          prop="username"
          label="用户名">
        </el-table-column>
        <el-table-column
          prop="password"
          label="密码">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作">
          <template slot-scope="scope">
            <el-tag type="danger" size="small" @click="onDelete(scope.row)">删除</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <Edit />
  </el-card>
</template>

<script>
  import UserAction from '@/action/user';
  import Edit from './Edit'

  export default {
    name: "index",
    components: {
      Edit
    },
    data() {
      return {

      }
    },
    methods: {
      onAdd(){
        UserAction.visible(true);
      },
      onDelete(obj) {
        UserAction.delete(obj.id);
      }
    },
    computed: {
      data(){
        return this.$store.state.user.data;
      }
    },
    created(){
      UserAction.query();
    }
  }
</script>

<style scoped>
  .layout{
    min-width: 80vw;
    min-height: 80vh;
    margin-top: 10vh;
  }
</style>

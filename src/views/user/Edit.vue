<template>
  <el-dialog :title="ruleForm.id=='' ? '添加用户' : '编辑用户'" :visible.sync="visible" width="400px">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item style="display: none;" label="ID" prop="id">
        <el-input v-model="ruleForm.id"></el-input>
      </el-form-item>

      <el-form-item label="用户名" prop="username" :label-width="formLabelWidth">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" :label-width="formLabelWidth">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>

      <el-form-item style="text-align: center" label-width='0px'>
        <el-button size="small" @click="onCancel">取 消</el-button>
        <el-button type="primary" size="small" @click="submitForm('ruleForm')">保存</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
  import UserAction from '@/action/user';

  export default {
    name: "edit",
    data() {
      return {
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 0, max: 20, message: '长度在 0 到 20 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 0, max: 20, message: '长度在 0 到 20 个字符', trigger: 'blur'}
          ]
        },
        formLabelWidth: '80px'
      }
    },
    methods: {
      onCancel() {
        UserAction.visible(false);
      },
      submitForm(formName) {
        const that = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const entity = that.$store.state.user.entity;
            if (entity.id == '') {
              UserAction.add(entity);
            } else {
              UserAction.update(entity);
            }
          } else {
            return false;
          }
        });
      }
    },
    computed: {
      visible: {
        get() {
          return this.$store.state.user.visible;
        },
        set(value) {
          UserAction.visible(value);
        }
      },
      ruleForm() {
        return this.$store.state.user.entity;
      }
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    text-align: center;
  }

  .el-select {
    width: 100%;
  }
</style>

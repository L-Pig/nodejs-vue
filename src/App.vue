<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .card{
    min-height: calc(100vh - 148px);
  }
  .query{
    margin-bottom: 20px;
  }
  .table-pagination {
    width: 100%;
    text-align: right;
    margin-top: 20px;
  }
</style>

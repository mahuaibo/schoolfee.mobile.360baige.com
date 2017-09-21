<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    font-weight: 300;
  }

  .header-gradient {
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 5;
    color: #fff;
    height: 44px;
    line-height: 44px;
    font-size: 18px;
    background: -webkit-linear-gradient(left, #0cb4fb, #0696ea, #007bda); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #0cb4fb, #0696ea, #007bda); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #0cb4fb, #0696ea, #007bda); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #0cb4fb, #0696ea, #007bda); /* 标准的语法（必须放在最后） */
  }

  .header-icon-left {
    padding-left: 15px;
    padding-top: 2px;
  }

  .header-icon-title {
    text-align: center;
    font-size: 18px;
  }

  .header-icon-right {
    text-align: right;
    padding-right: 15px;
    padding-top: 3px;
  }

  .main-content {
    text-align: center;
    padding: 14px 15px 0px 15px;
  }

  input[type=text]::-webkit-input-placeholder {
    color: #9e9e9e;
    font-weight: 300;
  }

  input[type=text]::-moz-placeholder {
    color: #9e9e9e;
    font-weight: 300;
  }

  input[type=text]:-ms-input-placeholder {
    color: #9e9e9e;
    font-weight: 300;
  }

  .el-button--primary {
    font-weight: 300;
  }
</style>

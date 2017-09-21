<template xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
  <div class="index">
    <div class="expense-head header-gradient">
      <el-row>
        <el-col :span="8" class="header-icon-left">
          <img src="../assets/back.png" height="16" width="10" @click="backFunction"/>
        </el-col>
        <el-col :span="8" class="header-icon-title">
          <div>{{ projectDetailData.name }}</div>
        </el-col>
        <el-col :span="8" class="header-icon-right"></el-col>
      </el-row>
    </div>
    <div class="expense-content" v-if="projectDetailData.name">
      <div class="expense-content-data">
        <div class="expense-content-data-desc"></div><!-- .mobile-header-container{border: red;} -->
        <div class="expense-content-data-frame">
          <iframe :src="projectDetailData.link"></iframe>
        </div>
      </div>
    </div>
    <div class="expense-content" v-else="">暂无数据...</div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    created () {
      this.initProjectDetailData(this.detailData)
    },
    computed: {
      ...mapGetters([
        'projectDetailData',
        'publicParameters'
      ])
    },
    data () {
      return {
        detailData: {
          id: this.$route.query.id,
          searchKey: this.$route.query.searchKey
        }
      }
    },
    methods: {
      ...mapActions([
        'handleClick',
        'initProjectDetailData'
      ]),
      backFunction () {
        if (this.publicParameters.backPath === '/project' || this.publicParameters.backPath === '/history') {
          this.handleClick(this.publicParameters.backPath + '?searchKey=' + this.detailData.searchKey)
        } else {
          this.handleClick(this.publicParameters.backPath)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .mobile-header-container {
    border: red;
  }
</style>
<style lang="scss" scoped>
  .expense-content {
    margin-top: 44px;
    color: #6e6e6e;
    font-size: 15px;
    text-align: center;
    border: none;
    .expense-content-data {
      .expense-content-data-desc {
        height: 44px;
        margin-top: -44px;
        text-align: left;
        position: relative;
        background: #f4f4f4;
        border: none;
        z-index: 3;
      }
      .expense-content-data-frame iframe {
        padding-top: 66px;
        width: 100vw !important;
        margin: 0px !important;
        padding: 0px !important;
        position: relative;
        z-index: 2;
        border: none;
        top: -70px;
      }
    }
  }
</style>

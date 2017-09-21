<template xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
  <div class="index">
    <div class="home-head header-gradient">
      <el-row>
        <el-col :span="8" class="header-icon-left">
          <img src="../assets/quit.png" width="18" height="18">
        </el-col>
        <el-col :span="8" class="header-icon-title">
          <div>首页</div>
        </el-col>
        <el-col :span="8" class="header-icon-right"></el-col>
      </el-row>
    </div>
    <div class="home-content">
      <div class="home-content-item-input">
        <div class="demo-ruleForm" id="demo-ruleForm">
          <div class="home-content-inputImg">
            <img src="../assets/ID.png" height="24" width="28"/>
          </div>
          <div class="home-content-input">
            <el-input placeholder="请输入身份证号/编号" v-model="searchForm.searchKey" style="color: red"></el-input>
          </div>
          <el-button type="primary" @click="getProject" class="query-button">查询</el-button>
        </div>
      </div>
      <div class="home-content-remark-message">备注：输入身份证号/编号,所需缴费项目</div>
      <div class="home-content-project">
        <div class="home-content-project-item" v-for="val in feeData.list">
          <div class="project-item-title">{{ val.name }}</div>
          <div class="project-item-content">{{ val.desc }}</div>
          <div class="project-item-button">
            <div class="project-item-button-payFees" @click="handleClick('/payCostProject?id='+val.id)">
              <img src="../assets/pay.png" height="18" width="18" class="list-item-footer-item-img"/>
              <span class="project-item-button-payFees-text">缴费</span>
            </div>
            <div class="project-item-button-detail" @click="projectDetail(val)">
              <img src="../assets/detail.png" height="18" width="18" class="list-item-footer-item-img"/>
              <span class="project-item-button-detail-text">详情</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //  import axios from 'axios'
  import {mapGetters, mapActions} from 'vuex'
  export default {
    created () {
      this.initFeeData()
    },
    computed: {
      ...mapGetters([
        'feeData',
        'detailData',
        'publicParameters'
      ])
    },
    data () {
      return {
        searchForm: {
          searchKey: null
        }
      }
    },
    methods: {
      ...mapActions([
        'initFeeData',
        'handleClick'
      ]),
      getProject () {
        isNaN(this.searchForm.searchKey)
        if (this.searchForm.searchKey === null || this.searchForm.searchKey === '' || isNaN(this.searchForm.searchKey)) {
          document.getElementById('demo-ruleForm').style.border = '1px solid red'
          return
        }
        this.handleClick('project?searchKey=' + this.searchForm.searchKey)
      },
      projectDetail (value) {
        this.publicParameters.backPath = '/'
        this.handleClick('/projectDetail?id=' + value.id)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .el-input__inner {
    height: 44px;
    border: 0px solid red;
    font-size: 15px;
    color: #333333;
    padding: 3px 0px;
  }
</style>

<style lang="scss" scoped>
  .home-content {
    overflow: auto;
    margin: 66px 15px 0px 15px;
    .home-content-item-input {
      height: 106px;
      margin-bottom: 10px;
      .demo-ruleForm {
        height: 44px;
        line-height: 44px;
        border: 1px solid #e6e6e6;
        border-radius: 4px;
        background-color: #ffffff;
        .home-content-inputImg {
          height: 24px;
          display: inline-block;
          padding: 8px 10px;
          float: left;
        }
        .home-content-input {
          width: calc(100vw - 81px);
          float: right;
          padding-bottom: 14px;
        }
        .query-button {
          width: calc(100% + 1px);
          height: 44px;
          background-color: #09a4f2;
          color: #fff;
          font-size: 16px;
        }
      }
    }
    .home-content-remark-message {
      text-align: left;
      font-size: 14px;
      color: #9e9e9e;
      margin-bottom: 28px;
    }
    .home-content-project {
      /*height: calc(100vh - 305px);*/
      /*overflow: auto;*/
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      background-color: #ffffff;
      .home-content-project-item {
        padding-top: 12px;
        text-align: left;
        margin: 0px 15px;
        border-bottom: 1px solid #e6e6e6;
        .project-item-title {
          font-size: 15px;
          color: #0495e0;
          padding-top: 16px;
          padding-bottom: 6px;
          text-overflow: ellipsis;
        }
        .project-item-content {
          color: #333333;
          font-size: 13px;
          line-height: 23px;
          overflow: hidden; //超出隐藏
          text-overflow: ellipsis; //超出文本设置为...
          display: -webkit-box; //将div1转换为盒子模型
          -webkit-line-clamp: 2; //设置div1的文本为2行
          -webkit-box-orient: vertical; //从顶部向底部垂直布置子元素
        }
        .project-item-button {
          text-align: right;
          font-size: 13px;
          padding: 10px 0px;
          padding-right: 8px;
          height: 18px;
          line-height: 18px;
          .project-item-button-payFees {
            color: #ff5f27;
            margin-right: 10px;
            display: inline-block;
          }
          .project-item-button-detail {
            color: #0495e0;
            display: inline-block;
          }
          span {
            padding-left: 6px;
          }
          img {
            float: left;
          }
        }
      }
      .home-content-project-item:last-child {
        border-bottom: 0px solid #e6e6e6;
      }
    }
  }
</style>

<template xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
  <div class="index">
    <div class="project-head header-gradient">
      <el-row>
        <el-col :span="8" class="header-icon-left">
          <img src="../assets/back.png" height="16" width="10" @click="handleClick('/')"/>
        </el-col>
        <el-col :span="8" class="header-icon-title">
          <div>缴费项目</div>
        </el-col>
        <el-col :span="8" class="header-icon-right">
          <img src="../assets/history.png" height="18" width="18"
               @click="handleClick('/history?searchKey='+projectSearch.searchKey)"/>
        </el-col>
      </el-row>
    </div>
    <div class="project-content main-content" v-if="projectData.list">
      <div class="project-content-data">
        <div class="project-content-head">
          <div class="project-content-head-img">
            <img src="../assets/ID.png" height="24" width="28"/>
          </div>
          <div class="project-content-head-content">{{ projectSearch.searchKey }}</div>
        </div>
        <div class="project-content-content" v-for="val in projectData.list">
          <div class="project-content-content-title">
            <div>
              <el-checkbox checked @change="handleCheckedCitiesChange(val)"></el-checkbox>
              <span>{{ val.project.name }}</span>
              <span class="project-content-content-title-price">
                <span style="font-size: 12px;">￥</span>{{ money(val.price) }}
              </span>
            </div>
          </div>
          <div class="project-content-content-detail">
            <span>{{ val.name }}/{{ val.className }}/{{ val.phone}}</span>
            <span class="project-content-content-detail-button" @click="projectDetail(val)">查看</span>
          </div>
        </div>
        <div class="project-content-bottom">
          <span class="project-content-bottom-longString"></span>
          <span>共计：</span>
          <span class="project-content-bottom-totalPrice">
            <span style="font-size: 12px;">￥</span>{{ money(projectData.totalPrice) }}</span>
        </div>
      </div>
      <div class="project-content-button">
        <el-button type="primary" class="project-content-button-pay">支付</el-button>
      </div>
    </div>
    <div class="project-content main-content notProject" v-else="">
      <div class="project-content-nopay-icon" align="center">
        <img src="../assets/nofee.png" height="27" width="27"/></div>
      <div class="project-content-nopay" align="center">您当前不需要进行缴费，谢谢！</div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    created () {
      this.initProjectData(this.projectSearch)
    },
    computed: {
      ...mapGetters([
        'projectData',
        'publicParameters'
      ])
    },
    data () {
      return {
        projectSearch: {
          searchKey: this.$route.query.searchKey
        },
        rules: {}
      }
    },
    methods: {
      ...mapActions([
        'handleClick',
        'initProjectData'
      ]),
      money (amount) {
        if (amount === 0) {
          return '0.00'
        } else {
          amount = amount / 100
          return amount.toFixed(2)
        }
      },
      handleCheckedCitiesChange (val) {
        var totalPrice = this.projectData.totalPrice
        var price = parseFloat(val.price)
        if (event.target.checked) {
          this.projectData.totalPrice = totalPrice + price
        } else {
          this.projectData.totalPrice = totalPrice - price
        }
      },
      projectDetail (value) {
        this.publicParameters.backPath = '/project'
        this.handleClick('/projectDetail?id=' + value.id + '&searchKey=' + this.projectSearch.searchKey)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .el-checkbox__inner {
    border-radius: 10px;
    background-color: #fff;
  }

  .el-checkbox__inner::after {
    border: 4px solid #fff;
    border-radius: 10px;
    height: 8px;
    left: 0px;
    top: 0px;
    width: 8px;
  }
</style>
<style lang="scss" scoped>
  .el-checkbox__inner {
    border-radius: 10px;
  }

  .project-content-data {
    overflow: auto;
    background-color: #ffffff;
    margin: 0px -15px;
    margin-top: 52px;
    .project-content-head {
      text-align: left;
      height: 24px;
      padding: 16px 15px;
      border-bottom: 1px solid #f1f1f1;
      .project-content-head-img {
        width: 38px;
        float: left;
      }
      .project-content-head-content {
        height: 24px;
        line-height: 24px;
        font-size: 15px;
        color: #333333;
        width: calc(100vw - 70px);
        float: right;
      }
    }
    .project-content-content {
      text-align: left;
      padding-right: 15px;
      padding-top: 15px;
      padding-bottom: 16px;
      border-bottom: 1px solid #f1f1f1;
      margin-left: 15px;
      .project-content-content-title {
        color: #333333;
        font-size: 15px;
        margin-bottom: 8px;
        span {
          margin-left: 10px;
        }
        .project-content-content-title-price {
          float: right;
          font-size: 15px;
          color: #ff2727;
        }
      }
      .project-content-content-detail {
        color: #9e9e9e;
        font-size: 13px;
        margin-left: 34px;
        .project-content-content-detail-button {
          color: #00b3ff;
          font-size: 13px;
          float: right;
        }
      }
    }
    .project-content-bottom {
      color: #00b3ff;
      padding: 19px 15px;
      text-align: left;
      .project-content-bottom-longString {
        border-left: 3px solid #09a4f2;
        height: 18px;
        float: left;
        margin-top: 2px;
        padding-right: 4px;
      }
      .project-content-bottom-totalPrice {
        float: right;
        font-weight: 700;
        color: #ff2727;
        font-size: 15px;
      }
    }
  }

  .project-content-button {
    position: fixed;
    bottom: 0;
    .project-content-button-pay {
      background-color: #09a4f2;
      border-radius: 0px;
      color: #fff;
      height: 49px;
      font-size: 18px;
      width: 100vw;
      margin-left: -15px;
      margin-right: -15px;
    }
  }

  .notProject {
    margin-top: 124px;
    project-content-nopay-icon {
      color: #333333;
      font-size: 15px;
      margin: auto;
    }

    .project-content-nopay {
      color: #333;
      font-size: 15px;
      margin-top: 13px;
    }
  }

</style>

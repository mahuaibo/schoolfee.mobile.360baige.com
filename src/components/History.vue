<template xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
  <div class="index">
    <div class="history-head header-gradient">
      <el-row>
        <el-col :span="8" class="header-icon-left">
          <img src="../assets/back.png" height="16" width="10" @click="project"/>
        </el-col>
        <el-col :span="8" class="header-icon-title">
          <div>缴费历史</div>
        </el-col>
        <el-col :span="8" class="header-icon-right"></el-col>
      </el-row>
    </div>
    <div class="history-content">
      <div class="history-content-list" v-for="val in historyData.list">
        <div class="history-content-list-data">
          <div class="history-content-list-data-time">
            缴费时间：<span>{{ formatDate(val.feeTime) }}</span>
          </div>
          <div class="history-content-list-data-name">
            项目名称：
            <div class="history-content-list-data-name-content">{{ val.project.name }}</div>
          </div>
          <div class="history-content-list-data-price">
            缴费金额：<span>{{ money(val.price) }}元</span>
          </div>
        </div>
        <div class="history-content-list-button">
          <div>
            <span class="history-content-list-button-check" @click="projectDetail(val)">查看</span>
            <span class="history-content-list-button-img">
              <img src="../assets/enter2.png" height="13" width="7" @click="projectDetail(val)"/>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from '../store/date.js'
  import {mapGetters, mapActions} from 'vuex'
  export default {
    created () {
      this.initHistoryData(this.historyForm)
    },
    computed: {
      ...mapGetters([
        'historyData',
        'publicParameters'
      ])
    },
    data () {
      return {
        historyForm: {
          searchKey: this.$route.query.searchKey
        }
      }
    },
    methods: {
      ...mapActions([
        'handleClick',
        'initHistoryData'
      ]),
      money (amount) {
        if (amount === 0) {
          return '0.00'
        } else {
          amount = amount / 100
          return amount.toFixed(2)
        }
      },
      formatDate (time) {
        let date = new Date(time)
        return formatDate(date, 'yyyy-MM-dd')
      },
      project () {
        this.publicParameters.backPath = '/project'
        this.handleClick('/project?searchKey=' + this.historyForm.searchKey)
      },
      projectDetail (value) {
        this.publicParameters.backPath = '/history?searchKey=' + this.historyForm.searchKey
        this.handleClick('/projectDetail?id=' + value.id + '&searchKey=' + this.historyForm.searchKey)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .history-content {
    height: calc(100vh - 60px);
    overflow: auto;
    margin: 0px 15px;
    margin-top: 66px;
    .history-content-list {
      padding: 0px 15px;
      margin-bottom: 20px;
      background-color: #ffffff;
      .history-content-list-data {
        font-size: 15px;
        color: #333333;
        border-bottom: 1px solid #e6e6e6;
        .history-content-list-data-time {
          padding-top: 18px;
          span {
            color: #6e6e6e;
          }
        }
        .history-content-list-data-name {
          display: inline-block;
          margin: 12px 0px;
          .history-content-list-data-name-content {
            float: right;
            width: calc(100vw - 138px);
            color: #6e6e6e;
            overflow: hidden; //超出隐藏
            text-overflow: ellipsis; //超出文本设置为...
            display: -webkit-box; //将div1转换为盒子模型
            -webkit-line-clamp: 2; //设置div1的文本为2行
            -webkit-box-orient: vertical; //从顶部向底部垂直布置子元素
          }
        }
        .history-content-list-data-price {
          margin-bottom: 18px;
          span {
            color: #ff2a2a;
          }
        }
      }
      .history-content-list-button {
        div {
          padding-top: 12px;
          padding-bottom: 14px;
        }
        .history-content-list-button-check {
          color: #00b3ff;
          font-size: 14px;
        }
        .history-content-list-button-img {
          float: right;
        }
      }
    }
  }
</style>

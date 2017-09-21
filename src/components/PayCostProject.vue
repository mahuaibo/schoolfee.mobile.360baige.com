<template>
  <div class="index">
    <div class="payCost-head header-gradient">
      <el-row>
        <el-col :span="8" class="header-icon-left">
          <img src="../assets/back.png" height="16" width="10" @click="handleClick('/')"/>
        </el-col>
        <el-col :span="8" class="header-icon-title">
          <div>缴费项目</div>
        </el-col>
        <el-col :span="8" class="header-icon-right"></el-col>
      </el-row>
    </div>
    <div class="payCost-content">
      <div class="payCost-content-item-input">
        <el-form :model="payCostForm" :rules="payCostFormRules" ref="ruleForm">
          <el-form-item label="" prop="name" class="payCostForm-item">
            <div class="payCost-content-inputImg">
              <img src="../assets/name.png" height="24" width="24"/>
            </div>
            <div class="payCost-content-input">
              <el-input placeholder="请输入姓名" v-model="payCostForm.name"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="" prop="phone" class="payCostForm-item">
            <div class="payCost-content-inputImg">
              <img src="../assets/phone.png" height="24" width="24"/>
            </div>
            <div class="payCost-content-input">
              <el-input placeholder="请输入手机号码" v-model="payCostForm.phone"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="" prop="number" class="payCostForm-item">
            <div class="payCost-content-inputImg">
              <img src="../assets/form-id.png" height="24" width="24"/>
            </div>
            <div class="payCost-content-input">
              <el-input placeholder="请输入身份证号/编码" v-model="payCostForm.number"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="" prop="price" class="payCostForm-item">
            <div class="payCost-content-inputImg">
              <img src="../assets/money.png" height="24" width="24"/>
            </div>
            <div class="payCost-content-input">
              <el-input placeholder="请输入应交金额" v-model="payCostForm.price"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="" prop="remark" class="payCostForm-item">
            <div class="payCost-content-inputImg">
              <img src="../assets/note.png" height="24" width="24"/>
            </div>
            <div class="payCost-content-input">
              <el-input placeholder="备注" v-model="payCostForm.remark"></el-input>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="payCost-content-button">
      <div class="payCost-content-button-pay">支付</div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    computed: {
      ...mapGetters([])
    },
    data () {
      return {
        payCostForm: {
          name: null,
          phone: null,
          number: null,
          remark: null,
          price: null
        },
        payCostFormRules: {}
      }
    },
    methods: {
      ...mapActions([
        'handleClick'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .el-form-item {
    margin-bottom: 14px;
    .el-input__inner {
      height: 44px;
      border: 0px solid red;
      font-size: 15px;
      color: #333333;
      padding: 3px 0px;
    }
  }
</style>
<style lang="scss" scoped>
  .payCost-content {
    height: calc(100vh - 78px);
    overflow: auto;
    margin: 0px 15px;
    margin-top: 66px;
    color: #9e9e9e;
    .payCost-content-item-input {
      height: 106px;
      margin-bottom: 25px;
      .payCostForm-item {
        height: 44px;
        line-height: 44px;
        border: 1px solid #e6e6e6;
        border-radius: 4px;
        background-color: #ffffff;
        .payCost-content-inputImg {
          display: inline-block;
          margin: 10px 10px 0px 10px;
          float: left;
        }
        .payCost-content-input {
          width: calc(100vw - 80px);
          float: right;
        }
      }
    }
  }

  .payCost-content-button {
    position: fixed;
    bottom: 0;
    width: 100%;
    .payCost-content-button-pay {
      text-align: center;
      background-color: #09a4f2;
      border-radius: 0px;
      color: #fff;
      height: 49px;
      line-height: 49px;
      font-size: 18px;
    }
  }
</style>

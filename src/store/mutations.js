import axios from 'axios'
import router from '.././router'

// /////////////////////////////跳转页面/////////////////////////////
export const handleClick = (state, index, row) => {
  console.log('handleClick')
  if (typeof index === 'string') {
    router.push(index)
  } else {
    router.push(index.name)
  }
}

// ///////////////////////收费首页(不限制收费)数据//////////////////////////////
export const initFeeData = (state, index, row) => {
  state.feeData.list = []
  axios({
    method: 'post',
    url: state.publicParameters.domain + '/project/noLimitList',
    params: {
      accessToken: state.publicParameters.localAccessToken
    }
  }).then(function (response) {
    console.log(response.data)
    if (response.data.code === '200') {
      state.feeData.list = response.data.data.list
    } else {

    }
  }).catch(function (error) {
    console.log(error)
  })
}

// ///////////////////////项目详情数据///////////////////////////////////
export const initProjectDetailData = (state, index, row) => {
  axios({
    method: 'post',
    url: state.publicParameters.domain + '/project/detail',
    params: {
      accessToken: state.publicParameters.localAccessToken,
      id: index.id
    }
  }).then(function (response) {
    console.log(response.data)
    if (response.data.code === '200') {
      state.projectDetailData.name = response.data.data.name
      state.projectDetailData.desc = response.data.data.desc
      state.projectDetailData.link = response.data.data.link
    }
  }).catch(function (error) {
    console.log(error)
  })
}

// ///////////////////////缴费项目(限制收费)数据//////////////////////////////
export const initProjectData = (state, index, row) => {
  state.projectData.list = []
  axios({
    method: 'post',
    url: state.publicParameters.domain + '/project/search',
    params: {
      accessToken: state.publicParameters.localAccessToken,
      searchKey: index.searchKey
    }
  }).then(function (response) {
    console.log(response.data)
    if (response.data.code === '200') {
      state.projectData.list = response.data.data.list
      state.projectData.totalPrice = 0
      for (var i = 0; i < state.projectData.list.length; i++) {
        state.projectData.totalPrice += state.projectData.list[i].price
      }
    }
  }).catch(function (error) {
    console.log(error)
  })
}

// ///////////////////////缴费项目历史数据//////////////////////////////
export const initHistoryData = (state, index, row) => {
  state.historyData.list = []
  state.historyData.total = 0
  axios({
    method: 'post',
    url: state.publicParameters.domain + '/record/history',
    params: {
      accessToken: state.publicParameters.localAccessToken,
      searchKey: index.searchKey,
      pageSize: index.pageSize,
      current: index.current
    }
  }).then(function (response) {
    console.log(response.data)
    if (response.data.code === '200') {
      state.historyData.list = response.data.data.list
      state.historyData.total = response.data.data.total
    }
  }).catch(function (error) {
    console.log(error)
  })
}

// 跳转页面
export const handleClick = ({commit}, index, row) => commit('handleClick', index, row)
// 收费首页(不限制收费)
export const initFeeData = ({commit}, index, row) => commit('initFeeData', index, row)
// 费用说明
export const initProjectDetailData = ({commit}, index, row) => commit('initProjectDetailData', index, row)
// 缴费项目(限制收费)
export const initProjectData = ({commit}, index, row) => commit('initProjectData', index, row)

// 收费项目历史
export const initHistoryData = ({commit}, index, row) => commit('initHistoryData', index, row)
// 收费项目历史
export const initMoreHistoryData = ({commit}, index, row) => commit('initMoreHistoryData', index, row)

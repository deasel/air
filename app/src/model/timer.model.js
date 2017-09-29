export default{
  namespace: 'timer',

  //是否显示日期
  isShowDate: false,

  //是否显示星期
  isShowWeek: false,

  //是否开始24小时模式
  is24Hours: false,

  //时间格式字符串
  formatStr: 'HH:mm:ss',

  //当前时间结果
  now: '',

  onChangeMode: function(param){
    let model = this
    Object.assign(model, param)

    model.formatStr = (model.isShowDate ? 'yyyy-MM-dd ' : '') + (model.isShowWeek ? 'EEE ' : '') + (model.is24Hours ? 'HH' : 'hh') + ':mm:ss'
  }
}
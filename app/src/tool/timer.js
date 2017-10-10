/**
 * 【mini工具集】  时间工具
 */
import m from '../extend/mithril.extend'
import '../asset/style/timer.css'

import Model from '../model/timer.model'

/**       
 * 对Date的扩展，将 Date 转化为指定格式的String       
 * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符       
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)       
 * eg:       
 * format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423       
 * format("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04       
 * format("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04       
 * format("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04       
 * format("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18       
 */ 
let dateFormat = function (fmt) {
  let now = new Date
  let o = {
    "M+": now.getMonth() + 1, //月份           
    "d+": now.getDate(), //日           
    "h+": now.getHours() % 12 == 0 ? 12 : now.getHours() % 12, //小时           
    "H+": now.getHours(), //小时           
    "m+": now.getMinutes(), //分           
    "s+": now.getSeconds(), //秒           
    "q+": Math.floor((now.getMonth() + 3) / 3), //季度           
    "S": now.getMilliseconds() //毫秒           
  }
  let week = {
    "1": "一",
    "2": "二",
    "3": "三",
    "4": "四",
    "5": "五",
    "6": "六",
    "7": "日"
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (now.getFullYear() + "").substr(4 - RegExp.$1.length))
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "星期" : "周") : "") + week[now.getDay() + ""])
  }
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
    }
  }
  return fmt
}

export default m.component(Model, {
  oninit: (vnode, model) => {
    model.now = dateFormat(model.formatStr)

    setInterval(() => {
      model.now = dateFormat(model.formatStr)
      m.redraw()
    }, 1000);
  },

  view: (vnode, model) => {

    return m('span.timer', [

      m('span.timer-view', model.now),

      m('span.timer-menu', 
        [
          {text: '显示年月日',name: 'isShowDate'},
          {text: '显示星期',name: 'isShowWeek'},
          {text: '使用24小时模式',name: 'is24Hours'}
        ].map(

          (item, index) => {
            let param = {};
            param[item.name] = !model[item.name]
            return m('span.timer-menu-item', {
              onclick: model.onChangeMode.bind(model, param)
            }, [
              m('i.fa.fa-check', {
                style: 'visibility:' + (model[item.name] ? 'visible' : 'hidden')
              }),
              m('span', item.text)
            ])

          }

        )
      )

    ])
  }
})
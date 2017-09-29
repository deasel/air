import m from '../extend/mithril.extend'
import '../asset/style/toolbar.css'
import Timer from '../tool/timer'

import Model from '../model/toolbar.model'

export default m.component(Model, {
  view: (vnode, model) => {
    return m('div.toolbar', [
      
      //logo
      m('span.toolbar-avatar', {
        style: 'background-image:url(' + model.avatar + ')'
      }),

      //app选项区域
      m('span.toolbar-app-menu'),

      //小工具
      m('span.toolbar-mini-col', [
        m(Timer)
      ])
    ])
  }
})
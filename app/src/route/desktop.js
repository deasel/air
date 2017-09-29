import m from '../extend/mithril.extend'

import '../asset/style/desktop.css'

import Docker from '../system/docker'
import Toolbar from '../system/toolbar'
import PanelFactory from '../system/panel'

import desktopModel from '../model/desktop.model'

const Panel = PanelFactory()

export default m.component([desktopModel], {
  view: (vnode, model) => {
    return m('div.desktop', [
      m(Toolbar),
      m('div.desktop-wrap', [
        m('div.desktop-view', [
          //这里为实际的可操作区域 
        ]),
        m(Docker)
      ])
    ])
  },
})

import m from '../extend/mithril.extend'

import '../asset/style/desktop.css'

import Toolbar from '../system/toolbar'
import desktopModel from '../model/desktop.model'

import PanelFactory from '../system/panel'
const Panel = PanelFactory()

export default m.component([desktopModel], {
  view: (vnode, model) => {
    return m('div.desktop', [
      m(Panel, {width:10}),
      m(Toolbar)
    ])
  },
})

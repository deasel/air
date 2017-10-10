import m from '../extend/mithril.extend'
import PanelFactory from '../system/panel'

import Model from '../model/safari.model'

let Panel = PanelFactory()

export default m.component(Model, {
  view: (vnode, model) => {
    return m('div.safari', [
      m(Panel)
    ])
  }
})

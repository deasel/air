import m from '../extend/mithril.extend'

import Model from '../model/safari.model'

export default m.component(Model, {
  view: (vnode, model) => {
    return m('div.safari')
  }
})

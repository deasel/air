import m from '../extend/mithril.extend'
import '../asset/style/toolbar.css'

import Model from '../model/toolbar.model'
import Shortcut from '../system/shortcut'

export default m.component(Model, {
  view: (vnode, model) => {
    const {position, width, height, shortcuts} = model

    return m('div.toolbar.toolbar-position-' + model.position,
      {
        style: 'width:' + width + 'rem;height:' + height + 'rem;'
      },
      m('span.toolbar-wrap',
        shortcuts.map((opts) => {
          return m(Shortcut, opts)
        })
      )
    )
  }
})

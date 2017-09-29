import m from '../extend/mithril.extend'
import '../asset/style/docker.css'

import Model from '../model/docker.model'
import Shortcut from '../system/shortcut'

export default m.component(Model, {
  view: (vnode, model) => {
    const {position, width, height, shortcuts} = model

    return m('div.docker.docker-position-' + model.position,
      {
        style: 'width:' + width + 'rem;height:' + height + 'rem;'
      },
      m('span.docker-wrap',
        shortcuts.map((opts) => {
          return m(Shortcut, opts)
        })
      )
    )
  }
})

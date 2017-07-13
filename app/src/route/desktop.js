import m from '../extend/mithril.extend'

import style from '../asset/style/desktop.css'

import Toolbar from '../system/toolbar'
import desktopModel from '../model/desktop.model'


export default m.component([desktopModel], {
  view: (vnode, model) => {
    return (
      <div class="desktop">
        <Toolbar></Toolbar>
      </div>
    )
  },
})

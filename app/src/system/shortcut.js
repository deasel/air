import m from '../extend/mithril.extend'
import '../asset/style/shortcut.css'

import {IMAGE_PATH} from '../util/constant'
import Model from '../model/shortcut.model'

const {assign} = Object

export default m.component([Model], {
  view: (vnode, model) => {

    return m('span.shortcut', {
      style: 'background-image:url(' + IMAGE_PATH + model.icon + ')',
      title: model.name,
      onclick: model.onClick.bind(model)
    }, m('span.shortcut-active' + (model.isActive === true ? '' : '.hide')))

  }

})

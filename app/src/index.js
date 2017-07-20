import m from './extend/mithril.extend'

import Desktop from './route/desktop'

import 'bulma/css/bulma.css'
import './asset/style/base.css'

m._debug = true

m.route(document.getElementById('main'), '/', {
  '/': Desktop,
})

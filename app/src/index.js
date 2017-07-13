import m from 'mithril'

import Desktop from './route/desktop'

import 'bulma/css/bulma.css'
import './asset/style/base.css'

m.route(document.getElementById('main'), '/', {
  '/': Desktop,
})

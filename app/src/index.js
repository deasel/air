import m from 'mithril'

import Desktop from './route/desktop'

m.route(document.getElementById('main'), '/', {
  '/': Desktop,
})

import m from '../extend/mithril.extend'

import desktopModel from '../model/desktop.model'

export default m.component({
  view: (vnode, model) => {
    return (
      <div>
        <h1>{model.text}</h1>
        <button onclick={model.changeText.bind(model)}>Change</button>
      </div>
    )
  }
}, desktopModel)

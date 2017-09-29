import m from '../extend/mithril.extend'
import {isString, isFunction} from '../util/type'

const Store = {}

const {assign} = Object

const dispatch = function(action, args) {

	if (!isString(action) && action.indexOf('/') <= 0) return

	const namespace = action.split('/')[0]
  const handleName = action.split('/')[1]
	const model = Store[namespace]
	if (model) {
		const handle = model[handleName]

		if (isFunction(handle)) {
			handle.call(model, args)
		} else {
      model[handleName] = args
		}
	}

}

export default function(model) {
	const namespace = isString(model.namespace) ? model.namespace : ''

  if(namespace){
    if(Store[namespace]) {
      m.error('extend/model.extend', 'model重名', model)
      return
    }

    //当namespace无效时，则表示无需提供跨组件状态修改，仅为单一显示组件，不挂载在全局Store中
    model = assign({dispatch}, model)
    Store[namespace] = model
  }


  return model
}

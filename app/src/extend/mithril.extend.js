import m from 'mithril'

import {isObject} from '../util/type'
// import Model from '../extend/model.extend'


const {assign} = Object
const handleList = ['oninit', 'oncreate', 'onupdate', 'onbeforeremove', 'onremove', 'onbeforeupdate', 'view']

// 将自定义的model对象视为一个功能集合，合并到继承自Model类的子类中
// 类似实现一个interface的功能
// const mixin = (opts) => {
//   class Target extends Model {}
//
//   return new Target()
// }

/**
 *
 *  @param  {Array}   originModel
 *  @param  {Object}  originComp
 */
m.component = (originModel, originComp) => {

	let model = {}
	if (isObject(originModel)) {
    originComp = originModel
  } else {
		originModel.map((item) => {
			model = assign(model, item)
		})
	}

	const comp = assign({}, originComp)

	handleList.forEach((name) => {

		if (originComp[name] !== undefined) {

			comp[name] = function(vnode){

				if(vnode.attrs) model = assign(model, vnode.attrs)
				return originComp[name].bind(null, vnode, model)()

			}

		}

	})

	return comp
}

export default m

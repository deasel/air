import m from 'mithril'

import {isArray, isObject, isFunction} from '../util/type'
import ModelFactory from '../extend/model.extend'

const NOOP = function(){}
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
 *
 * 	@return {Component}
 */
m.component = (originModel, originComp) => {

	let model = isArray(originModel) ? originModel[0] : originModel

	if(!originComp){
		originComp = originModel
		model = {}
	}

	model = ModelFactory(model)

	// if (isObject(originModel)) {
  //   originComp = originModel
  // } else {
	// 	originModel.map((item) => {
	// 		model = assign(model, item)
	// 	})
	// }

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

/**
 * 用于构造无数据模型的纯模板组件工厂，每次使用该组件需要通过返回的函数进行创建
 * ps: 这类组件与m.component产出的组件最大差异在于：
 * 1.该组件的model仅与自身状态有关，不会出现组件之间的横向值传递，因此相对独立，适合包装在组件自身中，无需独立出来管理或挂载到Store中
 * 2.全局中可能出现多个同级的组件（例如：窗口组件），但是本身的数据模型又是互相独立的，每个组件都类似一个类的子对象
 *
 * @param  {} target [description]
 *
 * @return {Function}       component factory
 */
m.factory = (opts) => {

	return () => {
		let target = {}

		for(let key in opts){
			if(key && key != 'state' && opts[key]){
				target[key] = opts[key]
			}
		}

		if(opts.state) {
			target.oninit = function(vnode){
				assign(vnode.state, opts.state, vnode.attrs)
				if(opts.oninit)	opts.oninit(vnode)
			}
		}

		if(!target.view) target.view = NOOP

		return target
	}

}

/**
 * debug模式开关开关
 * 开启debug模式将会在控制台输出error和warn信息
 *
 * @type {Boolean}
 */
m._debug = false
const debugHandle = ['error', 'log', 'warn']
debugHandle.forEach((name) => {
	return m._debug ? console[name] : NOOP
})

//debug模式开启式，启用console等调试方法，否则直接返回空函数


export default m

import m from 'mithril'

// import Model from '../extend/model.extend'


const { assign } = Object
const handleList = ['oninit', 'oncreate', 'onupdate', 'onbeforeremove', 'onremove', 'onbeforeupdate', 'view']

// 将自定义的model对象视为一个功能集合，合并到继承自Model类的子类中
// 类似实现一个interface的功能
// const mixin = (opts) => {
//   class Target extends Model {}
//
//   return new Target()
// }

m.component = (originComp = {}, originModel = {}) => {
  const comp = assign({}, originComp)

  // const model = mixin(originModel)
  handleList.forEach((name) => {
    if (originComp[name] !== undefined) {
      comp[name] = vnode => originComp[name].bind(null, vnode, originModel)()
    }
  })

  return comp
}

export default m

import m from '../extend/mithril.extend'

export default {
  namespace: 'desktop',

  /**
   * 当前桌面内包含的app,
   * 元素格式：
   * {
   *   id: '',
   *   attrs: {},
   *   comp: component
   * }
   * @type {Array}
   */
  container: [],

  // onCreate: function(opts){
  //   if(!opts.id){
  //     m.error('model/desktop.model', 'ID缺失')
  //     return
  //   }
  //   this.container.push(opts)
  // }
}

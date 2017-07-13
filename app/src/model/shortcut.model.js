export default {
  /**
   * 图标
   * @type {String}   图片路径
   */
  icon: '',

  /**
   * app名称
   * @type {String}
   */
  name: '',

  /**
   * 当前是否被激活
   * @type {Boolean}
   */
  isActive: false,

  /**
   * 是否常驻工具栏
   * @type {Boolean}
   */
  isLock: false,

  /**
   * 点击操作
   * @return {[type]} [description]
   */
  onClick: function(){
    const _this = this

    if(!_this.isActive) _this.isActive = true
  }
}

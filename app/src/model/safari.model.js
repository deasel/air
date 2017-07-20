export default {
  namespace: 'safari',
  /**
   * 是否初始化
   * @type {Boolean}
   */
  isInit: false,
  /**
   * 是否显示
   * @type {Boolean}
   */
  isShow: true,

  /**
   * 关闭app
   * @return {[type]} [description]
   */
  onClose: function(){
    this.isShow = false
  },

  onMiniSize: function(){
    this.width = 0
    this.height = 0
  },

  onMaxSize: function(){
    this.width = -1
    this.height = -1
  }
}

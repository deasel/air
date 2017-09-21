 import m from '../extend/mithril.extend'

import '../asset/style/panel.css'

const parseStyle = (state) => {
	return ['width', 'height', 'left', 'top'].map((name) => {
		return state[name] ? name + ':' + state[name] + 'rem' : ''
	}).join(';')
}

export default m.factory({
	state: {
		width: 0,
		height: 0,
		left: 0,
		top: 0,
		mode: '',
		content: '',
		onResize: function(mark) {

			this.state.mode = mark
		}
	},

	view: (vnode) => {
		const {mode, onResize, title, content, onClick} = vnode.state

		return m('div.panel' + (mode ? '.panel-' + mode : ''), {
			style: parseStyle(vnode.state)
		}, [
			m('div.panel-header',[
				m('span.panel-button-bar', ['close', 'mini', 'max'].map((mark) => {
					return m('span.panel-button.panel-button-' + mark, {
						onclick: onResize.bind(vnode, mark)
					})
				})),
				title ? m('span.panel-title', title) : ''
			]),
			m('div.panel-body', content)
		])
	}
})

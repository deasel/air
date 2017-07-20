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
		mode: 'normal',
		content: '',
		color: '',
		onResize: function() {

		},
		onClick: function(){
			this.state.color = '#' + '012345'.split('').map(()=>{
				return (Math.random()*9)>>>0
			}).join('')
		}
	},

	view: (vnode) => {
		// const {attrs, state} = vnode
		// vnode.state = Object.assign(state, attrs)
		const {mode, onResize, title, content, color, onClick} = vnode.state

		return m('div.panel' + (mode === 'max' || mode === 'mini' ? '.panel-' + mode : ''), {
			style: parseStyle(vnode.state),
			onclick: onClick.bind(vnode)
		}, [
			m('div.panel-header', {
				style: 'background:' + color
			}, [
				m('span.panel-handlebar', ['close', 'mini', 'max'].map((mark) => {
					return m('span.panel-button.panel-button-' + mark, {
						onclick: onResize.bind(vnode)
					})
				})),
				title ? m('span.panel-title', title) : ''
			]),
			m('div.panel-body', content)
		])
	}
})

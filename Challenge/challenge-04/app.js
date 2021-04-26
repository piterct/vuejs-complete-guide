new Vue({
	el: '#challenge04',
	data: {
		class1: 'highlight',
		danger: true,
		class3: '',
		class4: '',
		color5: '',
		style5: {
			width: '100px',
			height: '100px'
		},
		width: '0',


	},
	methods: {
		startEffect() {
			setInterval(() => {
				this.class1 = this.class1 == 'highlight' ? 'shrink' :  'highlight'
			}, 1000)
		},
		startProgress() {
			let value = 0
			const timer = setInterval(() => {
				value += 5
				this.width = `${value}%`
				if (value == 100) clearInterval(timer)
			}, 500);
		},
		setDanger(event) {
			if (event.target.value == "true") {
				this.danger = true
			}
			else if (event.target.value == "false") {
				this.danger = false
			}
		}
	}
})

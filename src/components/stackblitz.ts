export default class Stackblitz extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render()
	}

	render() {
		const iframe = document.createElement('iframe');
		iframe.src = `https://stackblitz.com/edit/${this.getAttribute('id')}?embed=1`;
		iframe.className = 'w-full h-full';
		iframe.height = '500';
		iframe.width = '100%';
		this.innerHTML = `<div style="width: 100%; min-height: 500px;">${iframe.outerHTML}</div>`;
	}
}


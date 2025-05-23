export default class Codesandbox extends HTMLElement {
	connectedCallback() {
		this.render()
	}

	render() {
		const iframe = document.createElement('iframe');
		iframe.src = `https://codesandbox.io/p/${this.getAttribute('projectType')}/${this.getAttribute('projectid')}`;
		iframe.height = '500';
		iframe.width = '100%';
		this.innerHTML = `<div style="width: 100%; min-height: 500px;">${iframe.outerHTML}</div>`;
	}
}


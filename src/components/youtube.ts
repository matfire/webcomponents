export default class Youtube extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render()
	}

	render() {
		const iframe = document.createElement('iframe');
		iframe.src = `https://www.youtube.com/embed/${this.getAttribute('id')}`;
		this.innerHTML = `<div style="width: 100%; min-height: 500px;"><iframe class="w-full min-h-[500px]" src="https://www.youtube.com/embed/${this.getAttribute('id')}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
	}
}


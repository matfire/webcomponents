export default class Callout extends HTMLElement {
	#variants: Record<string, string>;
	#titleVariants: Record<string, string>;
	#variant: string
	constructor() {
		super();
		this.#variants = {
			info: "border-left: .25em solid #3d444d; border-left-color:#1f6feb; padding: 0.5rem 1rem;",
			warning: "border-left: .25em solid #3d444d; border-left-color:#9e6a03; padding: 0.5rem 1rem;",
			success: "border-left: .25em solid #3d444d; border-left-color:#238636; padding: 0.5rem 1rem;",
			error: "border-left: .25em solid #3d444d; border-left-color:#da3633; padding: 0.5rem 1rem;"
		}
		this.#titleVariants = {
			info: "color: #4493f8;",
			warning: "color: #d29922",
			success: "color: #3fb950",
			error: "color: #f85149"
		}
		this.#variant = this.getAttribute('type') ?? "info"
	}

	get variant() {
		return this.#variant
	}

	set variant(value) {
		this.#variant = value
	}

	connectedCallback() {
		this.render()
	}

	renderTitle() {
		let title = "";
		switch (this.#variant) {
			case "info":
				title = "Note"
				break
			case "warning":
				title = "Warning"
				break
			case "success":
				title = "Tip"
				break
			case "error":
				title = "Caution"
				break;
		}
		return `
            <div >
                <p style="${this.#titleVariants[this.#variant]}">${title}</p>
            </div>
        `
	}

	render() {
		const div = document.createElement('div');
		div.innerHTML = `
            <div style="${this.#variants[this.#variant]}" >
                ${this.renderTitle()}
               ${this.innerHTML}
            </div>
        `
		this.innerHTML = div.innerHTML
	}
}


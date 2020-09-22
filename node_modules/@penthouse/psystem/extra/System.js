require("./System.scss")

export class Button extends View {}

export class ButtonShell extends Button {
    class = s => `maxHeight ${super.class()}`
    onClick = () => this.children[0].onClick()
}

export class Image extends View {
	image = () => this.state.image
    style = s => ({"background-image": `url(${ this.image() })`})
}

export class Icon extends Button {
	icon = () => this.state.icon
	style = s => ({"-webkit-mask-image": `url('${ this.icon() }')`})
}
require("./utility.scss")
export class Back extends Button {
	class = () => ['row auto']
	layout = () => [ 
		[IconBack, { icon: "/images/arrow.svg" }]
    ]
    onClick = () => this.controller.controller.controller.pop()
}


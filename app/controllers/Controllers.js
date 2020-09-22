

export class Home extends Controller {
	extendState() { return {
		title: "Home",
		tabBarItem: [IconHome],
		navBar: {
			title: "Home",
			left: [Icon, { icon: "/images/dm.svg", onClick: () => print("LEFT!") }],
			right: [Icon, { icon: "/images/dm.svg", onClick: () => print("RIGHT") }]
		}
	}}

	class = () => `${super.class()} spaced`
	layout = () => [
        [Button, {onClick: () => this.controller.push([Profile])}, "matthewwwwwwww"],
		[Button, {onClick: () => this.controller.push([Profile])}, "banjohead"],
        [Button, {onClick: () => this.controller.push([Profile])}, "janethbarragan"],
        [Button, {onClick: () => this.controller.push([Profile])}, "matthewwwwwwww"],
        [Button, {onClick: () => this.controller.push([Profile])}, "banjohead"],
        [Button, {onClick: () => this.controller.push([Profile])}, "matthewwwwwwww"],
        [Button, {onClick: () => this.controller.push([Profile])}, "banjohead"],
        [Button, {onClick: () => this.controller.push([Profile])}, "matthewwwwwwww"],
        [Button, {onClick: () => this.controller.push([Profile])}, "banjohead"],
        [Button, {onClick: () => this.controller.push([Profile])}, "matthewwwwwwww"],
        [Button, {onClick: () => this.controller.push([Profile])}, "banjohead"],
        [Button, {onClick: () => this.controller.push([Profile])}, "matthewwwwwwww"],
        [Button, {onClick: () => this.controller.push([Profile])}, "banjohead"],
        [Button, {onClick: () => this.controller.push([Profile])}, "matthewwwwwwww"],
        [Button, {onClick: () => this.controller.push([Profile])}, "banjohead"],
        [Button, {onClick: () => this.controller.push([Profile])}, "matthewwwwwwww"],
        [Button, {onClick: () => this.controller.push([Profile])}, "banjohead"],
        [Button, {onClick: () => this.controller.push([Profile])}, "matthewwwwwwww"],
        [Button, {onClick: () => this.controller.push([Profile])}, "banjohead"],
        [Button, {onClick: () => this.controller.push([Profile])}, "matthewwwwwwww"],
        [Button, {onClick: () => this.controller.push([Profile])}, "banjohead"],
        [Button, {onClick: () => this.controller.push([Profile])}, "matthewwwwwwww"],
		[Button, {onClick: () => this.controller.push([Profile])}, "banjohead"],
    ]	
}

export class Explore extends Controller {
	extendState() { return {
        tabBarItem: [IconSearch]
	}}
	// title = () => "Explore"
	// tabBarItem = () => [IconSearch]
	// navBar = () => ({
	// 	title: this.title()
	// })
	class = () => "top noShrink spaced"
	layout = () => "This is the explore page"
}

export class Publish extends Controller {
	extendState() { return {
		tabBarItem: [IconPublish]
	}}
	class = () => "top noShrink spaced"
    layout = () => "This is the publish page"
    
}

export class Account extends Controller {
	extendState() { return {
		tabBarItem: [IconHome]
	}}
	class = () => "top noShrink spaced"
	layout = () => "This is the account page"
}

export class Activity extends Controller {
	extendState() { return {
		tabBarItem: [IconHeart]
	}}
	class = () => "top noShrink spaced"
	layout = () => "This is the Activity page"
}

export class DM extends Controller {
    extendState() { return {
		tabBarItem: ["Mathewwww"]
	}}


	class = () => "top noShrink spaced"
	layout = () => "This is the DM list page"
}

export class Camera extends Controller {
	title = () => "Camera"
	navBar = () => ({
		title: this.title(),
		right: [view(Icon, { icon: "/images/dm.svg", onClick: () => this.controller.controller.toggleController(1) })]
	})
	layout = () => "This is the Camera page"
}

export class Profile extends Controller {
	extendState() { return {
		navBar: {
			title: "Profile",
			left: [Back]
		}
	}}
	class = () => "top noShrink spaced"
	layout = s => "This is the profile page"
}


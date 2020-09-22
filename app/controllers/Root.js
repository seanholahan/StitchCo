require("./root.scss")
 // layout = s => [
    //     [TransitionContainer,{transition: {rotate: [90, 0, -90], opacity: [0,1,0]}, drag: "horizontal"}, [//{
    //         [Home], 
    //         [Detail],
    //         [FAQ]
    //     ]]
    // ]
export class Root extends View {
	init = () => {
		document.documentElement.classList.add("dark")
	}
    
    layout = () => [
		[TransitionContainer, {index: 1, drag: "horizontal", transition: {translateX: [100, 0, -100]}, guard: this.slideGuard}, [
			[Camera],
			[TabBarContainer, [
				[NavBarContainer, {ref: "HomeNav"}, [Home]],
				[NavBarContainer, [Explore]],
				[NavBarContainer, [Publish]],
				[NavBarContainer, [Activity]],
				[NavBarContainer, [Account]],
			]],
			[TabBarContainer, [
				[NavBarContainer, [DM]]
			]]
		]]
	]
	slideGuard = () => this.get("HomeNav").state.index == 0 && this.get("HomeNav").controller.state.index == 0
}



require("./NavBarContainer.scss")

export class NavBarContainer extends TransitionContainer {
    passthrough = () => this.getControllers()[0]

    extendState() { return {
        transition: { translateX: [100, 0, -12] },
        drag: "horizontal",
        popControllers: true
    }}

    layout = s => super.layout(s).concat([
        [NavBar, {ref: 'NavBar'}]
    ])

    refreshEnd() {
        super.refreshEnd()
        this.get("NavBar").push([NavBarInner, this.getControllers().pop().passthrough().getState("navBar")])
    }

    transitionTo(i) {
        super.transitionTo(i)
        this.get("NavBar").transitionTo(i)
    }

    push(controller) {
        super.push(controller)
        this.get("NavBar").push([NavBarInner, this.getControllers().pop().passthrough().getState("navBar")])
    }
}

class NavBar extends TransitionContainer {
    class = () => "overlay"
    extendState() { return {
        transition: { translateX: [100, 0, -12] },
        popControllers: true
    }}
}

class NavBarInner extends Controller {
    class = () => "row maxHeight"
    layout = s => [
        [NavBarItem, { class: "left" }, s.left || [Icon, { icon: "/images/dm.svg"}]],
        ['ellipsis semibold row', s.title || "undefined"],
        [NavBarItem, { class: "right" }, s.right || [Icon,{ icon: "/images/dm.svg" }]]

	]
}

class NavBarItem extends ButtonShell {}
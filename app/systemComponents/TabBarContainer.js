require("./TabBarContainer.scss")

export class TabBarContainer extends TransitionContainer {
    layout = s => super.layout(s).concat([
        [TabBar, {ref: 'TabBar'}]
    ])

    refreshEnd() {
        super.refreshEnd()
        this.get("TabBar").setState({ layout: this.getControllers().map(d => d.passthrough().getState("tabBarItem")) })
    }

    transitionTo(i) {
        super.transitionTo(i)
        this.get("TabBar").setState({ index: i })
    }
}

class TabBar extends View {
    class = () => "overlay row"
    layout = s => (s.layout || []).map((d, i) => 
        [TabBarItem, { class: s.index==i?'active':'', onClick: () => this.controller.transitionTo(i) }, d]
    )
}

class TabBarItem extends ButtonShell {}

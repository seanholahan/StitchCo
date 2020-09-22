
export class TransitionContainer extends Controller {
    extendState() { return {
        transition: { display: true },
        index: 0,
        drag: "",
        guard: () => true,
        popControllers: false
    }}
    
    getControllers = () => this.get("controllers").children.filter(d => d.dom.ontransitionend == undefined)
    
    transitionTo(index) {
        const controllers = this.getControllers()
        const lastIndex = this.state.index
        this.state.index = Math.clamp(index, 0, controllers.length-1)

        controllers.forEach((d, i) => {
            const transition = "transitionOverride" in d.state ? d.state.transitionOverride : this.state.transition
            const progress = Math.clamp(this.state.index-i, -1, 1)

            if (this.state.popControllers && i == controllers.length-1 && progress == -1 && this.state.index < lastIndex) {
                d.dom.ontransitionend = e => this.get("controllers").dom.removeChild(d.dom)
                if ("display" in transition) d.dom.ontransitionend()
            }

            let transform = ""
            Object.entries(transition).forEach(p => {
                if (p[0] == "display") {
                    if (Math.abs(progress) < 0.5) d.dom.style.removeProperty("display", "")
                    else d.dom.style.setProperty("display", "none")
                    return
                }

                let value = 0
                if (progress <= 0) value = Math.lerp(p[1][0], p[1][1], progress+1)
                else value = Math.lerp(p[1][1], p[1][2], progress)

                if (p[0] == "opacity") d.dom.style.setProperty("opacity", `${value}`)
                else if (p[0] == "boxShadow") d.dom.style.setProperty("box-shadow", `0 0 20vw rgba(0,0,0,${value})`)
                else if (p[0] == "borderRadius") d.dom.style.setProperty("border-radius", `${value}px`)
                else if (p[0] == "translateX") transform += `translateX(${value}vw) `
                else if (p[0] == "translateY") transform += `translateY(${value}vh) `
                else if (p[0] == "scale") transform += `scale(${value}) `
                else if (p[0] == "rotate") transform += `rotate(${value}deg) `
            })
            if (transform != "") d.dom.style.setProperty("transform", transform)
        })
    }

    push(controller) {
        const c = controller.viewify().dom
        this.get("controllers").dom.appendChild(c)
        this.transitionTo(this.state.index)
        setTimeout(() => this.transitionTo(this.getControllers().length-1))
    }

    pop() {
        this.transitionTo(this.getControllers().length-2)
    }

    layout(s) {
        return [['Controllers', { ref: "controllers" }, s.layout]]
    }

    refreshEnd() {
        this.transitionTo(this.state.index)
    }

    listen = () => ["horizontal", "vertical"].includes(this.state.drag) ? ({
		"touchDragStart": (pos, el) => {
            this.touchGuard = !(this.dom.contains(el) && this.state.drag == pos.direction && this.state.guard())
            if (this.touchGuard) return
            document.body.classList.add("dragging")
            
            this.state.indexStart = this.state.index
        },
		"touchDrag": pos => { 
            if (this.touchGuard) return

            let index = this.state.indexStart - (this.state.drag == "horizontal" ? pos.x / window.innerWidth : pos.y / window.innerHeight)
            this.transitionTo(index)
		},
		"touchDragEnd": pos => { 
            if (this.touchGuard) return
            document.body.classList.remove("dragging")

            let index = this.state.indexStart - (this.state.drag == "horizontal" ? pos.momentum.x / window.innerWidth : pos.momentum.y / window.innerHeight)
            index = Math.round(Math.clamp(index, Math.floor(this.state.index), Math.ceil(this.state.index)))
            this.transitionTo(index)
		}
	}) : ({})
}
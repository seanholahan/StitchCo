import "./Buttons.scss"

export class InputFileTitle extends View {
	classes = s => ["COLUMN", "MAXWIDTH", "TOP", s.landscape ? "Landscape" : ""]

	layout = s => [
		["Title", s.title],
		[InputFile, { ref: s.REF, value: s.value, upload: this.upload }],
		s.tip ? ["Tip", s.tip] : ""
	]

	upload = (file, finish) => {
		BLData.uploadImage(this.state.uploadPath, file, r => finish(r["path"]))
	}
}

export class InputFile extends View {
	classes = () => ["MAXWIDTH", "Input", this.state.showError ? "Error" : ""]

	init = s => {
		this.dom.value = s.value
	}

	layout = s => {
        const input = ["Button MAX", { tag: 'input', domAttributes: ({ type: 'file' }) }]
        console.log("ypp", input)
		// input.object.addEventListener("change", this.onChange)
		return [
			input,
			s.value ? [Image, { image: s.value }] : '',
			["Text MEDIUM", s.loading ? `Please wait` : `Click to ${ s.value?'replace':'select' } file`]
		]
	}

	onChange = e => {
		const file = e.target.files[0]
		this.state.value = URL.createObjectURL(file)
		this.state.loading = true
		this.refresh()

		this.state.upload(file, value => {
			this.dom.value = value
			this.state.loading = false
			this.refresh()
		})
	}

	listen = s => ({
		"formHasEmpties": d => {
			if (d.ref == s.ref) {
				if (d.reset) s.showError = false
				else s.showError = true
			}
		}
	})
}

// export class RadioTitle extends View {
// 	layout = s => [
// 		view(Radio, { name: s.name, value: s.value, checked: s.checked }),
// 		s.description
// 	]
// }

// export class Radio extends View {
// 	tag = () => "input"
// 	classes = () => ["Button"]
// 	domAttributes = s => {
// 		const r = { type: "radio", value: s.value, name: s.name }
// 		if (s.checked) r.checked = true
// 		return r
// 	}
// }

// export class Dropdown extends View {
// 	classes = () => ["MAXWIDTH", "COLUMN", "TOP"]
// 	layout = s => [
// 		view("Title LEFT", s.title),
// 		view("SelectArrow MAXWIDTH", [
// 			view(Select, { ref: s.REF, options: s.options, value: s.value, onChange: s.onChange })
// 		])
// 	]
// }

// export class Select extends View {
// 	tag = () => "select"
// 	classes = () => ["Input", this.state.showError ? "Error" : ""]
// 	init = s => {
// 		if (s.onChange) this.addEventListener("change", e => s.onChange(e.target.value))
// 	}
// 	getOption(o) {
// 		if (Array.isArray(o)) return o[0]
// 		return o
// 	}
// 	getValue(o, i) { 
// 		if (i == 0) return ""
// 		else if (Array.isArray(o) && o.length == 2) return o[1]
// 		else if (Array.isArray(o)) return o[0]
// 		return o
// 	}
// 	layout = s => s.options.map((o, i) => view(Option, { option: this.getOption(o), value: this.getValue(o, i), selected: s.value===this.getValue(o, i) }))
// 	listen = s => ({
// 		"formHasEmpties": d => {
// 			if (d.ref != s.ref) { return true }
// 			if (d.reset) s.showError = false
// 			else s.showError = true
// 			s.value = this.dom.value
// 		}
// 	})
// }

// export class Option extends View {
// 	tag = () => "option"
// 	domAttributes = () => { 
// 		const r = {}
// 		if (this.state.selected) r.selected = true
// 		if (this.state.disabled) r.disabled = true
// 		if (this.state.value !== undefined) r.value = this.state.value
// 		return r
// 	}
// 	layout = s => s.option
// }

// export class InputTitle extends View {
// 	classes = () => ["COLUMN", "MAXWIDTH", "TOP"]
// 	layout = s => [
// 		view("Title", s.title),
// 		view(Input, { value: s.value, "placeholder": s.placeholder, ref: s.REF }),
// 		s.tip ? view("Tip", s.tip) : ""
// 	]
// }

export class TextInput extends View {
	tag = () => "Input"
	domAttributes = s => ({ type: s.isPassword ? "password" : "text", value: s.value || "", "placeholder": s.placeholder || "" })
    classes = () => ["MAXWIDTH", this.state.showError ? "Error" : ""]
 
	listen = s => ({
		"formFailed": () => { s.showError = true },
		"formHasEmpties": d => {
			if (d.ref == s.ref) {
				if (d.reset) s.showError = false
				else s.showError = true
			}
		}
	})
}

// export class Textarea extends View {
// 	tag = () => "textarea"
// 	domAttributes = s => ({ "placeholder": s.placeholder || "", rows: 4 })
// 	classes = () => ["Input", "MAXWIDTH", this.state.showError ? "Error" : ""]
// 	layout = s => s.value || ""
// 	listen = s => ({
// 		"formFailed": () => { s.showError = true },
// 		"formHasEmpties": d => {
// 			if (d.ref == s.ref) {
// 				if (d.reset) s.showError = false
// 				else s.showError = true
// 			}
// 		}
// 	})
// }

// export class TextareaTitle extends View {
// 	classes = () => ["COLUMN", "MAXWIDTH", "TOP"]
// 	layout = s => [
// 		view("Title", s.title),
// 		view(Textarea, { "value": s.value, "placeholder": s.placeholder, ref: s.REF }),
// 		s.tip ? view("Tip", s.tip) : ""
// 	]
// }

export class Submit extends Button {f
	classes = () => [this.state.disabled ? "Disabled" : this.state.destructive ? "Destructive" : this.state.warning ? "Warning" : ""]
	layout = s => s.title
	onClick = () => {
		this.refresh(this.state.loading || "Please Wait...")
		this.state.loaderClick(() => this.refresh())
	}
}

// export class Link extends Button {}

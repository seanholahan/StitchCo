require("./Icons.scss")
export class IconBack extends Icon { icon = () => "/images/arrow.svg" }
export class IconHome extends Icon { icon = () => "/images/home.svg" }
export class IconSearch extends Icon { icon = () => "/images/search.svg" }
export class IconPublish extends Icon { 
    icon = () => "/images/publish.svg" 
}
export class IconHeart extends Icon { 
    icon = () => this.parent && this.parent.state.active ? "/images/heart-filled.svg" : "/images/heart.svg"
}
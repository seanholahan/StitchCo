require("./Detail.scss")
var Airtable = require('airtable');
var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}


export class Detail extends Controller {
    static server = 'http://localhost:5000/';
    init (s) {
        var client = new HttpClient();
    }

	extendState() { return {
		title: "Home",
		tabBarItem: [IconHome],
		navBar: {
			title: [Image, {image: "/images/stitchoLogo.jpg", class: "maxHeight"}],
			left: [Icon, { icon: "/images/dm.svg", onClick: () => print("LEFT!") }],
			right: [Icon, { icon: "/images/dm.svg", onClick: () => print("RIGHT") }]
		}
    }}
    
	class = () => `${super.class()} spaced`
    layout = (s) => {
        return [
            [Icon, { icon: "/images/icons/arrowBack.svg", onClick: () => print("RIGHT") }],
            ["hello", {onClick: () => {this.controller.pop()}} ,s.item.Name],
            [Image, {image: s.item.PosterImage[0].url, class: "Image"}],
        ]

    }	
}
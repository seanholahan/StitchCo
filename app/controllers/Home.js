require("./Home.scss")
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

export class Home extends Controller {
    static server = 'http://localhost:5000/';
    init (s) {
        var client = new HttpClient();
        client.get( 'http://localhost:5000/view', function(response) {
            s.feed = response;
            console.log("response", JSON.parse(response).records)
            localStorage.setItem('feed', JSON.stringify(JSON.parse(response).records))
        });
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

        let feed = JSON.parse(localStorage.getItem("feed"))
        return [
            // [InputFile],
            // [TextInput,{isPassword: false, placeholder: "Size"}],
            // [TextInput,{isPassword: false, placeholder: "Name"}],
            // [TextInput,{isPassword: false, placeholder: "Price"}],
            // [TextInput,{isPassword: false, placeholder: "Description"}],
            // [Submit, {title: "Post Item"}],



            ["wrapper", feed.map(d => 
                ["", [
                    [ItemCard, {text: d.fields.Name, image: d.fields.PosterImage[0].url, onClick: () => {
                        CData.getItem(d.id, r => {
                            let result = JSON.parse(r)
                            if (result.error !="NOT_FOUND") {
                                this.controller.push([Detail, {item:result.fields}])
                            } 

                        })
                        
                    }}],
                ]]
            )]
        ]

    }	
}

export class Input extends View {
    tag = () => "input"
}

export class NativeImage extends View {
    tag = () => "image"
    src = () => "url(https://dl.airtable.com/.attachments/0613ecbf4781a8cbf1ce1e5648192966/402dfbc4/d2.1.jpg)"
}

export class ItemCard extends View{
    class = () => 'AUTOWIDTH'
    layout = s => [
        [Image, {image: s.image, class: "maxHeight"}],
        ["Title",s.text]
    ]
}


export class Grid extends View {
	classes = () => ['WRAP', 'SPREAD', 'MAXWIDTH', 'TOP']
	didAppear = () => {
		const frag = window.document.createDocumentFragment()
		for (let i = 0; i < 8; i++) frag.appendChild(view('Filler'))
        this.dom.appendChild(frag)
	}
}
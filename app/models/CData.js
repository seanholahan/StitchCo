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
var client = new HttpClient();
export class CData extends Model {
    
    static getItem(itemId, callback) {
        client.get( `http://localhost:5000/viewItem/${itemId}`,(response) =>{
            // do something with response
            // s.item = JSON.parse(response).fields;
            // s.name = s.item.Name;
            // console.log("state", s.item.Name)
            // s.feed = response;
            // localStorage.setItem('feed', response)
            callback(response)
        });
        // if (r.success) {
        //     console.log("token refreshed")
            
        // }
        
    }
}

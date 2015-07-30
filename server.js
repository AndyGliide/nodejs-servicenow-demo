//Lets require/import the HTTP module
var http = require('http');
var dispatcher = require('httpdispatcher');

//Lets define a port we want to listen to
const PORT=80; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    dispatcher.dispatch(request, response);
}

//A sample GET request    
dispatcher.onGet("/valid", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Success');
});    

//A sample POST request
dispatcher.onPost("/error", function(req, res) {
    process.exit(1);
});

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});

var http = require("http");
var url  = require("url");

function start(route, handle){
	function onRequest(request, response){
		var path = url.parse(request.url).pathname;

		console.log("Request for "+path+" received");

		route(path, handle, response);
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server started");
}

exports.start = start;


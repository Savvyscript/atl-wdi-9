var http = require('http');
var urlParser = require('url'); // Adds urlParser
var server = http.createServer().listen(3001);
console.log('I\'m listening on port: 3001');
server.on('request', function(request, response) {
    var urlObj  = urlParser.parse( request.url ); //
    var pathname = urlObj.pathname; // parsing our the important info in the url
    response.writeHead(200, {'Content-Type': 'text/html'});
    console.log("requested: " + pathname);
    console.log(pathname === '/fun-times');
    if (pathname === "/") {
        response.write('<html>Good story, friend.');
        response.write('<script>console.log(\'Sooooooo\');</script>');
        response.write('</html>');
    }
    else if (pathname === "/fun-times") {
        response.write('<html>');
        response.write('<h1>Fun Times</h1>');
        response.write('<ul>');
        response.write('<li>Play Guitar</li>');
        response.write('<li>Bake Cookies</li>');
        response.write('<li>Take Diesel for a walk.</li>');
        response.write('<li>Read books.</li>');
        response.write('<li>Drink coffee at coffee shops.</li>');
        response.write('<li>Travel.</li>');
        response.write('</ul>');
        response.write('</html>');
    }
    else if (pathname === "/movies") {
        response.write('<html>');
        response.write('<h1>Movies</h1>');
        response.write('<ul>');
        response.write('<li>The Five Obstructions</li>');
        response.write('<li>About Time</li>');
        response.write('<li>Amelie</li>');
        response.write('</ul>');
        response.write('</html>');
    }
    else if (pathname === "/portfolio") {
        response.write('<html>');
        response.write('<h1>Coming Soon</h1>');
        response.write('</html>');
    }
    else {
        response.writeHead(404);
        response.write('<html>Page not found.</html>');
    }
    console.log(request.url);
    response.end();
});


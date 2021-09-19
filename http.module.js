const http = require("http");

http.createServer((req, res) => {
	if(req.url === "/") {
        res.write("Hello programmers.");
		res.end();
    } else if (req.url === "/about") {
        res.write("This is about page.");
		res.end();
    } else if (req.url === "/setting") {
        res.write("This is setting page.");
		res.end();
    } else {
        res.write("Not found");
		res.end();
    }
}).listen(8080);

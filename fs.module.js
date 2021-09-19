const fs = require("fs");

fs.writeFileSync("demo.txt", "Hello all,"); // create a file

fs.appendFileSync("demo.txt", " what is going on there."); // append data to the file

const data = fs.readFileSync("people.js");
console.log(data.toString()); // for reading file and transform the data bin to string (toString)

fs.readFile("demo.txt", (err, data) => {
	console.log(data.toString()); // reading file without sync way. this will not block the execution flow
});

fs.rename("demo.txt", "demo.txt", (err) => {
	if (err) throw err;
	else {
		console.log("file rename done");
	}
}); // rename the file

fs.unlinkSync("fileData.txt", (err) => {
    console.log('file removed'); // removed file
});

fs.open("fileData.txt", "w", function (err, f) {
	console.log("saved"); // create a new file
});

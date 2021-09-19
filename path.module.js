const path = require("path");
const myPath = "F:/Course/Visual studio/Node.js Learn with sumit/people.js";

console.log(path.basename(myPath)); // people.js | return the basename
console.log(path.dirname(myPath)); // return directory name
console.log(path.extname(myPath)); // return extension name
console.log(path.isAbsolute(myPath)); // return the bool if path is absolute
console.log(path.parse(myPath)); // return an object with the partition of that address
console.log(path.toNamespacedPath(myPath)); 
console.log(path.delimiter); // for window " ; "

console.log(
	path.format({
		dir: "C:\\path\\dir",
		base: "file.txt",
	})
);
console.log(path.normalize(myPath));

console.log(path.win32);

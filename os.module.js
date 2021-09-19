const os = require('os');
var versionString = require("child_process").execSync("ver").toString().trim();

console.log(os.arch()); // return device architecture
console.log(os.cpus()); // return cpus information
console.log(os.freemem()); // return free memory spaces
console.log(os.homedir()); // return home directory for windows
console.log(os.hostname()); // return hostname for the windows
console.log(os.platform()); // return the platform like win32, mac etc
console.log(os.loadavg()); // Returns an array containing the 1, 5, and 15 minute load averages.
console.log(os.networkInterfaces()) // return an object containing the network information
console.log(os.release()); // return the windows version
console.log(versionString); // getting version for windows | Microsoft Windows [Version 10.0.19042.685]
console.log(os.tmpdir()); // return the path of windows temp folder
console.log(os.totalmem()); // return total memory size
console.log(os.type()); // return os type
console.log(os.uptime()); // Returns the system uptime in number of seconds.
console.log(os.userInfo()); // return the user information
console.log(os.version()); // return the windows version

// memory information
const getMemoryInfo = () => {
	const mem = {
		free: os.freemem(),
		total: os.totalmem(),
	};
	mem.percent = (mem.free * 100) / mem.total + " %";

	return mem;
};

console.log(getMemoryInfo());
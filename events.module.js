const School = require("./event_listener");
const school = new School();

// register a event listener
school.on("bellRing", ({ period, text }) => {
	// event lister
	console.log("Got the time and date. " + period + " " + text);
});

school.startPeriod();

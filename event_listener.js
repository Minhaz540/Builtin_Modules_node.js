const EventEmitter = require("events");

class School extends EventEmitter {
	startPeriod() {
		console.log("Class started");
		// raise an event when bell rang
		// raise an event
		setTimeout(() => {
			this.emit("bellRing", {
				period: "Second",
				text: "Period ended",
			});
		}, 2000);
	}
}

module.exports = School;
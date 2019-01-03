const os = require("os");
const colors = require("colors");
const changeTimeFormat = require("./changeTimeFormat");

function writeOsInfo() {
	console.log("Platform: ".grey + os.platform());
	console.log("Relase: ".red + os.release());
	console.log("CPU: ".blue + os.cpus()[0].model);

	let time = changeTimeFormat.change(os.uptime());

	console.log("Uptime: ".green + time);
	console.log("Username: ".yellow + os.userInfo().username);
	console.log("User home dir: " + os.userInfo().homedir);
}

exports.print = writeOsInfo;
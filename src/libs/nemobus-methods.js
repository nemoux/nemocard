const net = require('net');

var client;

export function connect(domain) {
	client = net.connect(domain);
}

export function advertise(type, path) {
	var msg = {};
	
	msg.to = '/nemobusd';
	msg.advertise = {};
	msg.advertise.type = type;
	msg.advertise.path = path;
	
	client.write(JSON.stringify(msg));
}

export function execute(action, x, y, r) {
	var msg = {};
	
	msg.from = '/nemocard';
	msg.to = '/nemoshell';
	msg.command = {};
	msg.command.type = action.type;
	msg.command.args = '';
	msg.command.envp = '';
	msg.command.states = '';
	
	if (action.path) {
		msg.command.path = action.path;
	} else if (action.pkgname) {
		if (process.env.NEMOUX_INSTALL_PACKAGES) {
			msg.command.path = process.env.NEMOUX_INSTALL_PACKAGES + '/' + action.pkgname + '/exec';
		} else {
			msg.command.path = '/opt/pkgs/' + action.pkgname + '/exec';
		}
	}
	
	for (var key in action.param) {
		if (key === '#optind') {
			msg.command.args += action.param[key] + ';';
		} else if (action.param[key] === '#novalue') {
			msg.command.args += '--' + key + ';';
		} else {
			msg.command.args += '--' + key + ';' + action.param[key] + ';';
		}
	}

	for (var key in action.environ) {
		msg.command.envp += key + '=' + action.environ[key] + ';';
	}
	
	msg.command.states += 'x;' + x + ';';
  msg.command.states += 'y;' + y + ';';
  msg.command.states += 'r;' + (r * 180.0 / Math.PI) + ';';
  msg.command.states += 'coordination;local;';
  
  for (var key in action.state) {
		msg.command.states += key + ';' + action.state[key] + ';';
	}
	
	client.write(JSON.stringify(msg));
}

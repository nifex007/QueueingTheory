const queue = require('./core');
const yargs = require('yargs')

// Mapping Operations code to functions
const operations = {
	'ti': {
		name: 'Traffic intensity',
		fn: 'findTrafficIntensity'
	},
	'aiis': {
		name: 'Average number of items in the system',
		fn: 'avgNumOfItemInSys'
	}, 
	'aeqi': {
		name: 'Average number of elements with no queue',
		fn: 'avgNumOfElementsQueueExists'
	},
	'aenq': {
		name: 'Average number of elements with queue',
		fn: 'avgNumOfElementsQueueNotExist'
	},
	'atiq': {
		name: 'Average time in queue',
		fn: 'avgTimeInQueue'
	},
	'atis': {
		name: 'Average time in the system',
		fn: 'avgTimeInSys'
	},
	'pqoa': {
		name: 'Probability of queueing on arrival',
		fn: 'probOfQueueingOnArrival'
	},
	'pnqa': {
		name: 'Probability of not queueing on arrival',
		fn: 'probOfNotQueueingOnArrival'
	},
	'pnsat': {
		name: 'Probability of n elements in the system at any time',
		fn: 'findProbOfNEelementsInSysAnyTime'
	},
	'pnoms': {
		name: 'Probability of n or more items in the system ',
		fn: 'findProbOfNOrMoreElementsInSys'
	}
}

const argv = yargs
	.option('ar', {																
		alias: 'arrival_rate',
		demandOption: true,
		type: 'number',
		describe: 'the arrival rate parameter used for calculations'	
	})
	.option('sr', {
		alias: 'service_rate',
		demandOption: true,
		type: 'number',
		describe: 'the service rate parameter used for calculations'
	})
	.option('cl', {
		alias: 'calculate',
		demandOption: true,
		choices: Object.keys(operations).concat('all'),
		hidden: false,
		describe: 'What calculation to perform on parameters'
	})
	.array("calculate")
	.argv

// Compute
var queueInstance = new queue(argv.ar, argv.sr);
var command = argv.cl;

function compute(code) {
	let op = operations[code];
	process.stdout.write(`${op.name} = ${queueInstance[op.fn]()} \n`);
}

if(command.length == 1 && command[0] === "all") {	
	command = Object.keys(operations)
}

command.forEach(compute)
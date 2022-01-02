const c = {
	red: '\x1b[31m',
	green: '\x1b[32m',
	yellow: '\x1b[33m',
	blue: '\x1b[34m',
	magenta: '\x1b[35m',
	cyan: '\x1b[36m',
	reset: '\x1b[0m',
}

console.useEmoji = true

console.oldError = console.error
console.error = function () {
	if (console.useEmoji) {
		console.oldError('❌', c.red, ...arguments, c.reset)
	} else {
		console.oldError(c.red + '[ERROR]', ...arguments, c.reset)
	}
}

console.oldWarn = console.warn
console.warn = function () {
	if (console.useEmoji) {
		console.oldWarn('⚠️', c.yellow, ...arguments, c.reset)
	} else {
		console.oldWarn(c.yellow + '[WARN]', ...arguments, c.reset)
	}
}

console.oldInfo = console.info
console.info = function () {
	if (console.useEmoji) {
		console.oldInfo('ℹ️', c.green, ...arguments, c.reset)
	} else {
		console.oldInfo(c.green + '[INFO]', ...arguments, c.reset)
	}
}

console.oldDebug = console.debug
console.debug = function () {
	if (console.useEmoji) {
		console.oldDebug('🐞', c.blue, ...arguments, c.reset)
	} else {
		console.oldDebug(c.blue + '[DEBUG]', ...arguments, c.reset)
	}
}

console.oldTrace = console.trace
console.trace = function () {
	// console.trace internally uses console.error,
	// so we're temporarily replacing the latter.

	const tempError = console.error
	console.error = function () {
		const args = [...arguments]
		if (args[0].startsWith('Trace: ')) {
			args[0] = args[0].substr(7)
		}

		if (console.useEmoji) {
			console.oldError('👣', c.magenta, ...args, c.reset)
		} else {
			console.oldError(c.magenta + '[TRACE]', ...args, c.reset)
		}
	}
	console.oldTrace(...arguments)
	console.error = tempError
}

console.oldTime = console.time
console.time = function (label) {
	if (console.useEmoji) {
		console.oldTime('⏱  ' + c.cyan + label + c.reset)
	} else {
		console.oldTime(c.cyan + '[TIME] ' + label + c.reset)
	}
}

console.oldTimeEnd = console.timeEnd
console.timeEnd = function (label) {
	if (console.useEmoji) {
		console.oldTimeEnd('⏱  ' + c.cyan + label + c.reset)
	} else {
		console.oldTimeEnd(c.cyan + '[TIME] ' + label + c.reset)
	}
}

module.exports = console

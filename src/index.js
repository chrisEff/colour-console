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
		console.oldWarn('ℹ️️', c.green, ...arguments, c.reset)
	} else {
		console.oldWarn(c.green + '[INFO]', ...arguments, c.reset)
	}
}

console.oldDebug = console.debug
console.debug = function () {
	if (console.useEmoji) {
		console.oldDebug('ℹ️️', c.green, ...arguments, c.reset)
	} else {
		console.oldDebug(c.green + '[DEBUG]', ...arguments, c.reset)
	}
}

module.exports = console

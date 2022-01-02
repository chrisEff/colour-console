require('../src/index')

describe('console.error', () => {
	console.oldError = jest.fn()

	it('should call console.oldError() once with the right parameters', () => {
		console.error('this is an error')
		expect(console.oldError.mock.calls.length).toBe(1)
		expect(console.oldError.mock.calls[0]).toEqual(['❌', '\x1b[31m', 'this is an error', '\x1b[0m'])
	})
})

describe('console.warn', () => {
	console.oldWarn = jest.fn()

	it('should call console.oldWarn() once with the right parameters', () => {
		console.warn('this is a warning')
		expect(console.oldWarn.mock.calls.length).toBe(1)
		expect(console.oldWarn.mock.calls[0]).toEqual(['⚠️', '\x1b[33m', 'this is a warning', '\x1b[0m'])
	})
})

describe('console.info', () => {
	console.oldInfo = jest.fn()

	it('should call console.oldInfo() once with the right parameters', () => {
		console.info('this is an info')
		expect(console.oldInfo.mock.calls.length).toBe(1)
		expect(console.oldInfo.mock.calls[0]).toEqual(['ℹ️', '\x1b[32m', 'this is an info', '\x1b[0m'])
	})
})

describe('console.debug', () => {
	console.oldDebug = jest.fn()

	it('should call console.oldDebug() once with the right parameters', () => {
		console.debug('this is an debug')
		expect(console.oldDebug.mock.calls.length).toBe(1)
		expect(console.oldDebug.mock.calls[0]).toEqual(['🐞', '\x1b[34m', 'this is an debug', '\x1b[0m'])
	})
})

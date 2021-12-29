module.exports = {
	branches: [
		'main',
		{ name: 'alpha', prerelease: true },
		{ name: 'beta', prerelease: true },
	],
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		'@semantic-release/changelog',
		'@semantic-release/npm',
		'@semantic-release/git',
		'@semantic-release/github',
	],
}

exports.config = {
    runner: 'local',
    specs: [
        './features/**/*.feature' // Path to your feature files
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome',
        browserVersion: 'stable', // also possible: "insiders" or a specific version e.g. "1.80.0"
        'wdio:vscodeOptions': {
            // points to directory where extension package.json is located
            extensionPath: __dirname,
            // optional VS Code settings
            userSettings: {
                "editor.fontSize": 14
            }
        }
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['vscode'],
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        require: ['./features/step-definitions/*.js'], // Path to your step definitions
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
};
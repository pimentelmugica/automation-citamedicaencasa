const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber.json',
    output: 'reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        'Project Version':'1.0.0',
        'Test Environment': 'Staging',
        'Browser': 'Google Chrome  80.0.3987.16',
        'OS': 'MacOS Catalina',
        'Executed': 'Locally'
    }
};

reporter.generate(options);
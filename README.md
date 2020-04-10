# e2e Automation for @CitaMedicaCasa

# Installation steps

1. Clone this repository -> [this website](https://github.com/pimentelmugica/automation-citamedicacasa) 
2. Type `npm install` and wait for it to finish

# Run Tests

1. To run all the features -> `npm run test`
2. To run a specific feature -> `npm run test -- Test/features/<my_feature>.feature`

## Reports

If you don't want to get immediate reports in a new HTML tab, you can deactivate the option on the `html_report.js` file by setting `launchReport` to `false`

## Headless Mode

You can also deactivate the headless mode by removing the `--headless` line on the `nightwatch.conf.js` file.

### Get feature file syntax highlighting in visual studio code

To get gherkin syntax highlighting install the [Cucumber gherkin extension](https://marketplace.visualstudio.com/items?itemName=stevejpurves.cucumber)

#### Resources 

- [Documentation](http://nightwatchjs.org/api/)
    - [Expects](http://nightwatchjs.org/api/#expect-api) let you define what you expect to see/happen/etc
    - [Asserts](http://nightwatchjs.org/api#assertions) assert that a situation is as it is described 
    - [General commands](http://nightwatchjs.org/api#commands) to navigate a page.
    - [WebDriver Protocol commands](http://nightwatchjs.org/api#protocol) are mapped to selenium commands. 

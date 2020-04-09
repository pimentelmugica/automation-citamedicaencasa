const seleniumServer = require('selenium-server');

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require', 'Test/features/step_definitions',
    '--format', 'node_modules/cucumber-pretty',
    'Test/features']
});

module.exports = {
  output_folder: '',
  custom_assertions_path: '',
  live_output: false,
  disable_colors: false,
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    port: 4444
  },
  test_settings: {
    default: {
      launch_url: 'https://dev--musing-shaw-70225c.netlify.com',
      selenium_port: 4444,
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        args:[
          "--no-sandbox, --headless"
       ]
      }
    },
  }
};

export.config = {seleniumAddress: 'http://localhost:4444/wd/hub',multiCapabilities: [{browserName: ‘firefox’},{browserName: ‘chrome’}],baseUrl: 'http://localhost.9000',framework: 'jasmine',specs: ['protractor/*.js']};
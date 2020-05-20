var HtmlReporter = require('protractor-beautiful-reporter');
var fs = require('fs-extra');

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./specifications/*.js'],

    capabilities: {
        browserName: 'chrome'
    
    },

    onPrepare: function () {
        browser.manage().window().maximize();

        jasmine.getEnv().addReporter({
            specDone: function (result) {
                if (result.status == 'failed') {
                    browser.getCapabilities().then(function (caps) {
                        var browserName = caps.get('browserName');

                        browser.takeScreenshot().then(function (png) {
                            var stream = fs.createWriteStream('./Reports/screenshots/' + browserName + '-' + result.fullName + '.png');
                            stream.write(new Buffer(png, 'base64'));
                            stream.end();
                        });
                    });
                }
            }
        });
      
    
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: './Reports'
         }).getJasmine2Reporter());        
      
    },

   
}
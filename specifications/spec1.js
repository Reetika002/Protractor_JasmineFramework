
describe('Demo test suite', function () {

    var using = require('jasmine-data-provider');
    var testData = require('../testData');
    var homePage = require('../pages/homePage');


    beforeEach(function () {
        browser.get('https://juliemr.github.io/protractor-demo/');
    });



    it('should verify the title of page', async function () {
        await expect(browser.getTitle()).toEqual('Super Calculator');
    });


    using(testData.spec1Data, async function (data) {
        it('should select operators - parametrization', async function () {

            if (data.addOperator == '+') {
                homePage.add(data.num1, data.num2);
                await expect(homePage.actualResult.getText()).toEqual(data.expResultAdd);
                browser.sleep(2000);
            }

             else if (data.subOperator == '-') {
                homePage.sub(data.num1, data.num2);
                await expect(homePage.actualResult.getText()).toEqual(data.expResultSub);
                browser.sleep(2000);

            }

            else if (data.multOperator == '*') {
                homePage.mult(data.num1, data.num2);
                await expect(homePage.actualResult.getText()).toEqual(data.expResultMult);
                browser.sleep(2000);

            }

            else if (data.divOperator == '/') {
                homePage.div(data.num1, data.num2);
                await expect(homePage.actualResult.getText()).toEqual(data.expResultDiv);
                browser.sleep(2000);

            }

            else if (data.modOperator == '%') {
                homePage.mod(data.num1, data.num2);
                await expect(homePage.actualResult.getText()).toEqual(data.expResultMod);
                browser.sleep(2000);

            }

        });

    });

});

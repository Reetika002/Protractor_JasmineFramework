var homePage = function () {

    this.firstNo = element(by.model('first'));
    this.secondNo = element(by.model('second'));
    this.doOperation = element(by.css('#gobutton'));
    this.actualResult = element(by.tagName('h2'));
    this.addOperation = element(by.xpath("//option[@value='ADDITION']"));
    this.subOperation = element(by.xpath("//option[@value='SUBTRACTION']"));
    this.multOperation = element(by.xpath("//option[@value='MULTIPLICATION']"));
    this.divOperation = element(by.xpath("//option[@value='DIVISION']"));
    this.modOperation = element(by.xpath("//option[@value='MODULO']"));

    
    this.add = function (num1, num2) {

        this.firstNo.sendKeys(num1);
        this.secondNo.sendKeys(num2);
        this.addOperation.click();
        this.doOperation.click();

    }

    this.sub = function(num1, num2){
        this.firstNo.sendKeys(num1);
        this.secondNo.sendKeys(num2);
        this.subOperation.click();
        this.doOperation.click();

    }

    this.mult = function(num1, num2){
        this.firstNo.sendKeys(num1);
        this.secondNo.sendKeys(num2);
        this.multOperation.click();
        this.doOperation.click();

    }

    this.div = function(num1, num2){
        this.firstNo.sendKeys(num1);
        this.secondNo.sendKeys(num2);
        this.divOperation.click();
        this.doOperation.click();

    }
   
    
    this.mod = function(num1, num2){
        this.firstNo.sendKeys(num1);
        this.secondNo.sendKeys(num2);
        this.modOperation.click();
        this.doOperation.click();

    }
   

}


module.exports = new homePage();
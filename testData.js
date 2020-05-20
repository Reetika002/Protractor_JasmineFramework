var testData = function () {
    this.spec1Data = function () {
        return [
            {
                'num1': 5,
                'num2': 3,
                'addOperator': '+',
                'expResultAdd': '8',
               
            },

            {
                'num1': 5,
                'num2': 3,
                'subOperator': '-',
                'expResultSub': '2'
            },

            {
                'num1': 5,
                'num2': 3,
                'multOperator': '*',
                'expResultMult': '15'
            },

            {
                'num1': 5,
                'num2': 3,
                'divOperator': '/',
                'expResultDiv': '1.6666666666666667'
            },

            {
                'num1': 5,
                'num2': 3,
                'modOperator': '%',
                'expResultMod': '2'
            }
        ]
    }
}

module.exports = new testData();
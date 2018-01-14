var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')


//to test :
// -calculator.add()
// - calculator.subtract()
// - calculator.multiply()
// - calculator.divide()
// - calculator.numberClick()
// - calculator.operatorClick()
// - calculator.clearClick()

describe('calculator', function () {


  let calculator;
  beforeEach(function () {
    calculator = new Calculator();

  });


  it('should start at 0', function(){
    assert.strictEqual(calculator.runningTotal, 0);
  });

  it('should change total to 5 when adding 1 plus 4', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+')
    calculator.numberClick(4);
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 5);
  });


  it('should change total to 3 when subtracting 4 from 7', function(){

    calculator.numberClick(7);
    calculator.operatorClick('-')
    calculator.numberClick(4);
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 3);
  });

  it('should change total to 15 when multiplying 3 times 5', function(){

    calculator.numberClick(3);
    calculator.operatorClick('*')
    calculator.numberClick(5);
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 15);
  });

  it('should change total to 3 when dividing 21 by 7 and pressing operator =', function(){

    calculator.numberClick(2);
    calculator.numberClick(1);
    calculator.operatorClick('/')
    calculator.numberClick(7);
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 3);
  });

  it('changes to 2, when 2 is pressed ', function(){

    calculator.numberClick(2);
    assert.strictEqual(calculator.runningTotal, 2);
  });

  it('changes to 230, when pressing numbers 2, 3, 0 consecutively  ', function(){

    calculator.numberClick(2);
    calculator.numberClick(3);
    calculator.numberClick(0);
    assert.strictEqual(calculator.runningTotal, 230);
  });

  it('should change total to 2 when dividing 8 by 4 then pressing operator *', function(){

    calculator.numberClick(8);
    calculator.operatorClick('/')
    calculator.numberClick(4);
    calculator.operatorClick('*')
    assert.strictEqual(calculator.runningTotal, 2);
  });

  it('should change total to 6 when dividing 8 by 4 then pressing operator * then number 3 then operator =', function(){

    calculator.numberClick(8);
    calculator.operatorClick('/');
    calculator.numberClick(4);
    calculator.operatorClick('*');
    calculator.numberClick(3);
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 6);
  });

  it('should change runningTotal to 0 after clearClick after a calculation ', function(){

    calculator.numberClick(8);
    calculator.operatorClick('/');
    calculator.numberClick(4);
    calculator.operatorClick('*');
    calculator.numberClick(3);
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 6);
    calculator.clearClick();
    assert.strictEqual(calculator.runningTotal, 0);
  });


});

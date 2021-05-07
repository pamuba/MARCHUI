//test suite-group of related tests
describe('calculator.js', function () {

    let calculator;
    let calculator2
    
    beforeAll(function () {

    });

    beforeEach(function () {
        calculator = new Calculator(); //total  = 0
        calculator2 = new Calculator(); //total  = 0
    })

    it('should add numbers to total', function(){
        calculator.add(5);
        expect(calculator.total).toBe(5);

    });

    xit('should subtract numbers to total', function(){
        calculator.subtract(5);
        expect(calculator.total).toBe(-5);
    });
    it('should multiply numbers to total', function(){
        calculator.total = 50;
        calculator.multiply(5);

        expect(calculator.total).toBe(250);
    });
    xit('should divide numbers to total', function(){
        calculator.divide(5);

        expect(calculator.total).toBe(0);
    });

    xit('has constructor', function (){
       
        calculator.total = 100;

        expect(calculator).toEqual(calculator2)
    });
    it('can be instantiated' , function(){

        expect(calculator).toBeTruthy();
        expect(calculator2).toBeTruthy();
    })
    it('instantiates unique onjects', function(){

        expect(calculator).not.toBe(calculator2)
        expect(calculator2.constructor.name).toContain("Calc")
    });
    it('has common operations', function(){
        expect(calculator.add).toBeDefined();

        expect(calculator.add).not.toBeUndefined();

    });
    it('can overwrite total', function(){
        calculator.total = null;
        expect(calculator.total).toBeNull();
    });
    it('does not handle NaN', function(){
        calculator.total = 20;
        calculator.multiply('a')
        expect(calculator.total).toBeNaN()
    })
    it('handles divide by zero', function(){
        expect(function(){calculator.divide(0)}).toThrow();
        expect(function(){calculator.divide(0)}).toThrowError('Cannot divide by zero');
        expect(function(){calculator.divide(0)}).toThrowError(Error, 'Cannot divide by zero');
    });
    it('returns total', function(){
        calculator.total = 22;

        // expect(calculator.add(50)).toBe(0);
        expect(calculator.total).toMatch(/-?\d+/)
        expect(typeof calculator.total).toMatch('number')
    })
    afterEach(function(){
        calculator = null //total  = 0
        calculator2 = null //total  = 0
    })


})
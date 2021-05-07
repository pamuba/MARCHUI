describe('test.js', function(){
    xit('validates expression when the first number is invalid', function(){
        spyOn(window, 'updateResult').and.stub();
        calculate('a+3')
        expect(window.updateResult).toHaveBeenCalled();
    })
    it('validates expression when the second number is invalid', function(){
        // spyOn(window, 'updateResult').and.stub();
        // spyOn(window, 'updateResult').and.callThrough();
        spyOn(window, 'updateResult').and.stub();

        spyOn(Calculator.prototype, 'multiply').and.callFake(function(number){
            //
            ///
            return 'my own fake implementation'
        })
        calculate('4*5')
        expect(window.updateResult).toHaveBeenCalled();
        expect(window.updateResult).toHaveBeenCalledWith('my own fake implementation');
        // expect(window.updateResult).toHaveBeenCalledTimes(1);
    });
    it('validates expression', function(){
        // spyOn(window, 'updateResult').and.stub();
        // spyOn(window, 'updateResult').and.callThrough();
        spyOn(window, 'updateResult').and.stub();

        spyOn(Calculator.prototype, 'multiply').and.returnValue('my own fake implementation')
        calculate('4*5')
        expect(window.updateResult).toHaveBeenCalled();
        expect(window.updateResult).toHaveBeenCalledWith('my own fake implementation');
        // expect(window.updateResult).toHaveBeenCalledTimes(1);
    });

})
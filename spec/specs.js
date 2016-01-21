describe ('countUpTo', function(){
	it ("returns true for a number", function(){
		expect(countUpTo(30)).to.equal(true);
	});
});

describe('counter', function(){
	it ("returns false if countUpTo is less than countUpBy", function() {
		expect(counter(2,3)).to.equal("Invalid Input");
	});
	it ("expect false if either input is a negative number", function() {
		expect(counter(-3, -4)).to.equal ("Numbers need to be positive")
	});
});

describe ('indexOutput', function(){
	it ("returns array if countUpBy is less than or equal to countUpTo", function(){
		expect(indexOutput(6,3)).to.eql([3,6]);
	});
	it ("counts up to the number that the user inputs", function(){
		expect(indexOutput(10, 5)).to.eql([5, 10]);
	});
});






// 	describe ('countUpTo' && 'countUpBy', function() {
// 		it("is false if countUpBy is greater than countUpTo", function() {
// 				expect(countUpBy, countUpTo(32, 30)).to.equal(false);
// 			});
// 		it("is true if countUpBy is less than or equal to countUpTo", function() {
// 			expect(countUpBy, countUpTo(3, 3)).to.equal(true)
// 		});
// });










// describe ('leapYear', function() {
// 	it("is false for a year that is not divisible by 4, 100, or 400", function() {
// 		expect(leapYear(1993)).to.equal(false);
// 	});
//
// 	it ("is true for years divisible by 4", function() {
// 		expect(leapYear(2004)).to.equal(true);
// 	});
//
// 	it ("is false for years divisible by 100", function() {
// 		expect (leapYear(1900)).to.equal(false);
// 	});
//
// 	it ("is true for years divisible by 400", function() {
// 		expect (leapYear(2000)).to.equal(true);
// 	});
//
// 	it ("is false for blank input", function() {
// 		expect (leapYear(NaN)).to.equal(false);
// 	});
//
// 	it ("is false for negavtive integers", function() {
// 		expect (leapYear(-400)).to.equal(false);
// 	});
// });

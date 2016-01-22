describe ('countUpTo', function(){
	it ("returns true for a number", function(){
		expect(countUpTo(30)).to.equal(alert);
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

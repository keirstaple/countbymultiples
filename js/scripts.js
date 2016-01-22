//Business Logic

var countUpTo =function(number) {
	return true;
};

var wrongInput = function(countUpTo, countUpBy) {
  if (countUpBy <= 0 || countUpTo <= 0) {
		if(alert('Numbers need to be positive!')){}
		else window.location.reload();
	} else if (countUpTo < countUpBy) {
		if(alert('Invalid Entry!')){}
		else window.location.reload();
	} else if (countUpBy <= countUpTo) {
		return indexOutput(countUpTo, countUpBy);
	} else {
		return "You screwed up";
	}
};

var indexOutput = function(countUpTo, countUpBy) {
	var multiples = [];
	for (var i = countUpBy; i <= countUpTo; i += countUpBy) {
	  if (i % 5 === 0 && i % 3 === 0) {
			multiples.push('divisble-by-both');
		} else if (i % 5 === 0){
			multiples.push('divisible-by-5');
		} else if (i % 3 === 0){
			multiples.push('divisible-by-3');
		} else {
			multiples.push(i);
		}
	}
	return multiples;
};


//UI Logic

$(document).ready(function() {
  $("form#count").submit(function(event) {
     var countUpTo = parseInt($("input#UpTo").val());
		 var countUpBy = parseInt($("input#UpBy").val());

		 var invalid = wrongInput(countUpTo, countUpBy);

		 var result = indexOutput(countUpTo, countUpBy);
		 	result.forEach(function(number) {
				$(".listofresults").append("<li>" + number + "</li>");
			});


			$("#result").show();
    event.preventDefault();
  });
});

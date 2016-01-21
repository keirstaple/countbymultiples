//Business Logic

var countUpTo =function(number) {
	return true;
};

var counter = function(countUpTo, countUpBy) {
  if (countUpTo < countUpBy) {
	return ("Invalid Input");
} else if (countUpBy <= 0 || countUpTo <= 0) {
	return ("Numbers need to be positive")
} else if (countUpBy <= countUpTo) {
	return indexOutput(countUpTo, countUpBy);
} else {
	return "You screwed up"
	};
};

var indexOutput = function(countUpTo, countUpBy) {
	var multiples = [];
	for (var i = countUpBy; i <= countUpTo; i += countUpBy) {
		multiples.push(" " + i);
	}
	return multiples;
};


//UI Logic

$(document).ready(function() {
  $("form#count").submit(function(event) {
     var countUpTo = parseInt($("input#UpTo").val());
		 var countUpBy = parseInt($("input#UpBy").val());
		 var result = indexOutput(countUpTo, countUpBy);

		 $(".listofresults").append("<li>" + result + "</li>");
     $("#result").show();

    event.preventDefault();
  });
});

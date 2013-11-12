(function() {
	$('#map').load('assets/ga_counties.svg', null, function(data) {
		$.ajax({
			type: "GET",
			url: "data/districts.json",
			dataType: "json",
			success: setUp
		});

	});//$map.load
}());
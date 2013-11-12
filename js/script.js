(function() {
	$('#map').load('assets/ga_counties.svg', null, function(data) {
		$.ajax({
			type: "GET",
			url: "data/districts.json",
			dataType: "json",
			success: setUp
		});

		function setUp(json){
			json.forEach(function(county){
				$("#"+county.cID).hover(function () {
					$(this).css({'stroke-width':3});
				}, function(){
					$(this).css({'stroke-width':0.75});
				});
			});
		}//setUp
	});//$map.load
}());
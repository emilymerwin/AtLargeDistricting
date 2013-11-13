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
				var me = $("#"+county.cID);
				var alpha = Math.abs(county.representation/20);
				if(county.representation <= -10){ //placeholder value, need better buckets from Jeff
					me.css({'fill':'#d62728', 'fill-opacity': alpha});
				} else if (county.representation >= 10){
					me.css({'fill':'#2ca02c', 'fill-opacity': alpha});
				}

				me.popover({
					trigger: "hover",
					title: county.county,
					html: true,
					content: "<p>Share black voters: "+county.blkvoters+"%</p><p>Share black officials: "+county.blkofficials+"%</p><p>Under/over representation: "+county.representation+"%</p>",
					container: $("#tip")
				}).hover(function () {
					$(this).css({'stroke-width':3});
				}, function(){
					$(this).css({'stroke-width':0.75});
				});
			});
		}//setUp
	});//$map.load
}());
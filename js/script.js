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
				me.attr("class", "county "+county.category);
				var alpha = Math.abs(county.representation/20);
				if(county.representation <= -10){ //placeholder value, need better buckets from Jeff
					me.css({'fill':'#d62728', 'fill-opacity': alpha});
				} else if (county.representation >= 10){
					me.css({'fill':'#2ca02c', 'fill-opacity': alpha});
				} else {
					me.css({'fill':'#F0F0F0', 'fill-opacity': 1});
				}

				me.popover({
					trigger: "hover",
					title: county.county,
					html: true,
					content: "<p>Share black voters: "+county.blkvoters+"%</p><p>Share black officials: "+county.blkofficials+"%</p><p>Under/over representation: "+county.representation+"%</p>",
					container: $("#tip")
				}).hover(function () {
					this.classList.add("hover");
					//SVG does not support Z-index, so in order to get this element on top it needs to be moved up in the DOM
					var tmp = $(this).detach();
					$("svg").append(tmp);
				}, function(){
					this.classList.remove("hover");
				});
			}); //json.forEach

			$(".btn").on("click", function(e){
				var btn = $(e.target);
				if(btn.hasClass("btn-primary")){ //button was already selected, restore defaults
					btn.removeClass("btn-primary");
					$(".county").each(function(){
						if(this.classList.contains("selected")){
							this.classList.remove("selected");
						} else {
							this.classList.remove("muted");
							$(this).css({ 'fill-opacity': this.op });
						}
					});
				} else {
					btn.addClass("btn-primary");
					$(".county").each(function(){
						if(!this.op){
							this.op = $(this).css('fill-opacity'); //so we can reset it later
						}
						if(this.classList.contains(e.target.id)){
							if(this.classList.contains("muted")){
								this.classList.remove("muted");
							}
							this.classList.add("selected");
							$(this).css({ 'fill-opacity': this.op });
							var tmp = $(this).detach();
							$("svg").append(tmp);
						} else {
							if(this.classList.contains("selected")){
								this.classList.remove("selected");
							}
							this.classList.add("muted");
							$(this).css({ 'fill-opacity': (this.op * .25) });
						}
					});
				}

				$(".btn").each(function(){ //deselect other buttons
					if(this.id != e.target.id && $(this).hasClass("btn-primary")){
						$(this).removeClass("btn-primary");
					}
				});
			});//btn.on
		}//setUp
	});//$map.load
}());

			$("input.fo").focus(function(){
				$(this).closest("li").addClass("on")
			});
			$("input.fo").blur( function(){
				$(this).closest("li").removeClass("on")
			});
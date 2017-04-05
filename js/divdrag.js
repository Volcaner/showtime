(function($){
	$.DivDrag = function(){
		var self = this;

		// obj cache
		this.objCache = undefined;

		// flag
		this.bIsMoveFlag = false;

		// distance between mouse and div's base point
		this.distance = {
			distanceX: null,
			distanceY: null
		};
		
		this.init = function(obj){
			// cache
			self.objCache = obj;

			$("#" + self.objCache.targetDivId).bind({
				mousedown: function(ev){
					self.mousedown(ev);
				},
				mouseup: function(ev){
					self.mouseup(ev);
				},
				mousemove: function(ev){
					self.mousemove(ev);
				},
				mouseover: function(){
					self.mouseover();
				}
			});

			

		};

		this.mousemove = function(ev){
			if(self.bIsMoveFlag){
				var targetX = MouseCoords.getMouseCoords(ev).x - self.distance.distanceX;
				var targetY = MouseCoords.getMouseCoords(ev).y - self.distance.distanceY;
				$("#" + self.objCache.targetDivId).css("left", targetX);
				$("#" + self.objCache.targetDivId).css("top", targetY);
			}
		};

		this.mousedown = function(ev){
			$("." + self.objCache.targetDivId).css("cursor", "url('images/stonehand.ico'),auto");
			self.bIsMoveFlag = true;

			self.distance.distanceX = MouseCoords.getMouseCoords(ev).x - $("#" + self.objCache.targetDivId).position().left;
			self.distance.distanceY = MouseCoords.getMouseCoords(ev).y - $("#" + self.objCache.targetDivId).position().top;

			if($("#" + self.objCache.targetDivId).setCapture){ 
				$("#" + self.objCache.targetDivId).setCapture(); 
			}
		};

		this.mouseup = function(ev){
			$("." + self.objCache.targetDivId).css("cursor", "url('images/clothhand.ico'),auto");
			self.bIsMoveFlag = false;

			if($("#" + self.objCache.targetDivId).releaseCapture){ 
				$("#" + self.objCache.targetDivId).releaseCapture(); 
			}
		};

		this.mouseover = function(){
			$("." + self.objCache.targetDivId).css("cursor", "url('images/clothhand.ico'),auto");
		};
	};
})(jQuery);
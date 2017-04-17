(function($){
	$.DivDrag = function(){
		var self = this;

		// var MouseCoords = new $.MouseCoords();

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

			// add moveMe
			$("#" + self.objCache.targetDivId).append('<div id="moveMe" class="moveMe">move</div>');

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
				},
				mouseout: function(){
					self.mouseout();
				}
			});
		};

		this.mousemove = function(ev){
			if(self.bIsMoveFlag){
				var targetX = MouseCoords.getMouseCoords(ev).x - self.distance.distanceX;
				var targetY = MouseCoords.getMouseCoords(ev).y - self.distance.distanceY;
				$("#" + self.objCache.targetDivId).css("left", targetX);
				$("#" + self.objCache.targetDivId).css("top", targetY);

				// set position to window's localstorage
				window.localStorage.setItem(self.objCache.targetDivId + "targetX", targetX);
				window.localStorage.setItem(self.objCache.targetDivId + "targetY", targetY);
			}
		};

		this.mousedown = function(ev){
			// begin move
			self.bIsMoveFlag = true;

			$("#" + self.objCache.targetDivId + ">#moveMe").css("cursor", "url('images/stonehand.ico'),auto");
			$("#" + self.objCache.targetDivId).css("z-index", "99");
			
			self.distance.distanceX = MouseCoords.getMouseCoords(ev).x - $("#" + self.objCache.targetDivId).position().left;
			self.distance.distanceY = MouseCoords.getMouseCoords(ev).y - $("#" + self.objCache.targetDivId).position().top;
		};

		this.mouseup = function(ev){
			// stop move
			self.bIsMoveFlag = false;

			$("#" + self.objCache.targetDivId + ">#moveMe").css("cursor", "url('images/clothhand.ico'),auto");
			$("#" + self.objCache.targetDivId).css("z-index", "1");
		};

		this.mouseover = function(){
			$("#" + self.objCache.targetDivId + ">#moveMe").css("cursor", "url('images/clothhand.ico'),auto");
			$("#" + self.objCache.targetDivId + ">#moveMe").addClass("visibled");
		};

		this.mouseout = function(){
			$("#" + self.objCache.targetDivId + ">#moveMe").removeClass("visibled");
		};
	};
})(jQuery);
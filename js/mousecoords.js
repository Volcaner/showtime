(function($) {
	$.MouseCoords = function(){
		var self = this;

		this.getMouseCoords = function(ev){
			if(ev.pageX || ev.pageY){ 
				return {x:ev.pageX, y:ev.pageY}; 
			} 
			return { 
				x:ev.clientX + document.body.scrollLeft - document.body.clientLeft, 
				y:ev.clientY + document.body.scrollTop - document.body.clientTop 
			}; 
		};
	};
})(jQuery);
// console.log(new $.MouseCoords());
window.MouseCoords = new $.MouseCoords();
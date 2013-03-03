$(function () {
	function blenderAni(event) {
		var $this = $(this);
		$this.unbind('mouseenter');
		$this.unbind('mouseleave');
		if($this.hasClass('active')) {
			return false;
		}
		var $li = $this.parent();
		var $blender = null;
		var bw = $this.width();
		var bh = $this.height();

		$blender = $('<div>')
		.addClass('TH-blender')
		.css({
			top: -bh,
			width: bw,
			height : bh
		}).appendTo( $li );

		$blender.animate({
			top: bh + 11
		}, 333, 'linear', function(){
			$li.find('.TH-blender').remove();
			$this.mouseleave(function(event){
				event.preventDefault();
				event.stopPropagation();
				$this.mouseenter(blenderAni);
			});

		}).click(function(){
			// forward click event
			$this.click();
		});
	}

	$('#TH-main-navi .button').mousedown(function(event){
		var $this = $(this);
		event.stopPropagation();
		event.preventDefault();
		if($this.hasClass('active')){
			return false;
		}
		var anidur = 222;

		$this.animate( {
			'padding-top' : 55
		}, anidur, 'linear', function(){
			$this.unbind("click");
			$this.trigger("click");
		});

		$('#TH-main-navi .active').animate({
			'padding-top' : 85
		}, anidur);

	}).mouseup(function(event){
		event.stopPropagation();
		event.preventDefault();
		$(this).addClass('active');
	}).mouseenter(blenderAni).click(function(event){
		event.stopPropagation();
		event.preventDefault();
	});




	$('.f-dropdown').mouseleave(function(event){
		event.preventDefault();
		event.stopPropagation();
		$(this).removeClass('open').css({left: -99999});
	});
});

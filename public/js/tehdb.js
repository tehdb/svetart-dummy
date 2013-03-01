$(function () {

	function blenderAni(event) {
		var $this = $(this);
		$this.unbind();
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

		});
	}

	$('#TH-main-navi .button').mouseenter(blenderAni);


	$('.f-dropdown').mouseleave(function(event){
		event.preventDefault();
		event.stopPropagation();
		$(this).removeClass('open').css({left: -99999});
	});
});

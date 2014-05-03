//Classes dos posts ._4-u2.mbm._5jmm

(function(){
	$('._4-u2.mbm._5jmm ._5pcq').each(function(){
		var $this = $(this);
		if($this.attr('class') === "_5pcq" && $this.attr('rel') === undefined){
			console.log(this);
		}
	});

	console.log("Facebook post buttons");
	// cada post 
	$('._4-u2.mbm._5jmm').each(function(){
		var $this = $(this);
		// contem os botões Like, Comment, Share.
		$this.find("._5pcp._5vsi.lfloat._ohe").each(function(){
			var a = $(this);
			// vai incluir o Collect depois do botão de Comment
			a.find(".uiLinkButton.comment_link").each(function(){
				var e = $("<a class=\"collect_button\"href=\"#\">Collect</a>"); 
				$(this).after(e);
				$(this).after(" · ");
				console.log($(this));
			});
		
		})
	});

})();
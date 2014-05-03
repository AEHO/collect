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
				//console.log($(this));
			});

			// contador de likes, comments, shares
			a.find(".UFIBlingBox.uiBlingBox.feedbackBling").each(function(){
				var b = $(this);
				console.log(b);
				var e = $("<span><img class=\"Collect_Counter_Icon\" src=\"" + chrome.extension.getURL("img/botao_collect_vA1.png") + "\">"
					+"<span class=\"UFIBlingBoxText\">666</span>" // setar o numero de collects aqui
					+"</span>");
				b.append(e);
			});

			
		})
	});

})();
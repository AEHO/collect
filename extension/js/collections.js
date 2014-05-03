//Classes dos posts ._4-u2.mbm._5jmm

(function(){
	var sendCollect = function(e){
		e.preventDefault();
		var data = {
				userid: myId.toString(),
				postid: $(this).attr('data-postid')
			};

		$.ajax({
			type: 'POST',
			contentType: 'application/json; charset=utf-8',
			dataType: 'json',
			data: JSON.stringify(data),
			url: 'https://fb-collect.appspot.com/_ah/api/collectapi/v1/entity'
		});
	};

	var setIcons = function(){
		$('._4-u2.mbm._5jmm').each(function(){
			var $this = $(this);
			var postId;
			$this.find('._5pcq').each(function(){
				var $this = $(this);
				if($this.attr('class') === "_5pcq"){
					//https://www.facebook.com/groups/angularjsbrasil/permalink/396544877153305/?stream_ref=1
					var postIdFiler = /\.com(.*[0-9]*)/;
					var id = $this.attr('href').match(postIdFiler);
					if(id !== null){
						postId = id[1];
						console.log(postId);
					}
				}
			});

			// contem os botões Like, Comment, Share.
			$this.find("._5pcp._5vsi.lfloat._ohe").each(function(){
				var a = $(this);
				if(!$this.attr('data-addedCollect')){
					$this.attr('data-addedCollect', true);
					// vai incluir o Collect depois do botão de Comment
					a.find(".uiLinkButton.comment_link").each(function(){
						var e = $("<a class=\"collect_button\" href=\"#\">Collect</a>"); 
						e.attr('data-postid', postId);
						e.on('click', sendCollect);
						$(this).after(e);
						$(this).after(" · ");
					});
				}
			})
		});
	};


	var getMyId = function(){
		var myIdFilter = /profile_pic_header_([0-9]*)/;
		var img_id = $("._s0.headerTinymanPhoto._rw.img").attr('id');
		var myId = img_id.match(myIdFilter)[1];
		return myId;
	}

	var myId = getMyId();

	setInterval(setIcons, 1000);

})();
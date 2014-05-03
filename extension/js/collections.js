//Classes dos posts ._4-u2.mbm._5jmm

(function(){
	var setIcons = function(){
		$('._4-u2.mbm._5jmm ._5pcq').each(function(){
			var $this = $(this);
			if($this.attr('class') === "_5pcq"){
				var postIdFiler = /posts\/([0-9]*)/;
				var id = $this.attr('href').match(postIdFiler);
				if(id){
					console.log(id[1]);
				}
			}
		});
	};

	var getMyId = function(){
		var myIdFilter = /profile_pic_header_([0-9]*)/;
		var img_id = $("._s0.headerTinymanPhoto._rw.img").attr('id');
		var myId = img_id.match(myIdFilter)[1];
		return myId;
	}

	$('.collect_button').on('click', function(e){
		e.preventDefault();
		var data = {
				userid: myId,
				postid: $(this).attr('data-postid')
			};

		$.ajax({
			type: 'POST',
			data: data,
			url: 'https://fb-collect.appspot.com/_ah/api/collectapi/v1/entities'
		});
	});

	var myId = getMyId();

	setInterval(setIcons, 1000);
})();
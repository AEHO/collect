//Classes dos posts ._4-u2.mbm._5jmm

(function(){

    var myId;

    $('._4-u2.mbm._5jmm ._5pcq').each(function(){
        var $this = $(this);
        if($this.attr('class') === "_5pcq" && $this.attr('rel') === undefined){
            console.log(this);
        }
    });

    function addCollectionSectionToSidebar () {
        $('#pagelet_pinned_nav')
            .append('<div class="homeSideNav collectionsNav">' +
                      '<h4 class="navHeader">COLLECTIONS</h4>' +
                      '<ul class="uiSideNav">' +

                        '<li class="sideNavItem stat_elem">' +
                          '<a>' +
                            '<div class="rfloat">' +
                                '<span class="count">' +
                                    '<span class="countValue">20</span>' +
                                '</span>' +
                            '</div>' +
                            '<div>' +
                              '<span class="imgWrap"></span>' +
                              '<div class="linkWrap hasCount">AlgoDahora</div>' +
                            '</div>' +
                          '</a>' +
                        '</li>' +

                        '<li class="sideNavItem stat_elem">' +
                          '<a>' +
                            '<div class="rfloat"><span class="count"><span class="countValue">20</span></span></div>' +
                            '<div>' +
                              '<span class="imgWrap"></span>' +
                              '<div class="linkWrap hasCount">AlgoDahora</div>' +
                            '</div>' +
                          '</a>' +
                        '</li>' +

                      '</ul>' +
                    '</div>');
    }




    function toggleContentArea (show) {
        if (toggle) {
            $('#contentArea').show();
        } else {
            $('#contentArea').hide();
        }
    }

    function handleCollectionsNavClick () {
        var $collectionsNav = $('.collectionsNav');
        $('a', $collectionsNav).click(function () {
            var collection = $('.linkWrap', $(this)).html();
        });
    }

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

    function main () {
        myId = getMyId();
        setInterval(setIcons, 1000);
    }

    main();

})();

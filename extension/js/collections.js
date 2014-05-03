//Classes dos posts ._4-u2.mbm._5jmm


      // var data = {
     //            userid: myId.toString(),
     //            postid: $(this).attr('data-postid')
     //        };

     //    $.ajax({
     //        type: 'POST',
     //        contentType: 'application/json; charset=utf-8',
     //        dataType: 'json',
     //        data: JSON.stringify(data),
     //        url: 'https://fb-collect.appspot.com/_ah/api/collectapi/v1/entity'
     //    });

(function(){

    var myId;
    var $div_modal;
    var collections;

    var toggleModal = function(){
      $div_modal.fadeToggle(300);
    };

    var setModal = function(postId){

    };

    var createModal = function(){
    	var $div_modal = $('<div id="modal-container" class="_s"></div>')
    	var $modal = $('<div class="modal" id="collectModal"></div>');
      var $head_modal = $('<div class="_4-i0" id="u_9_0">'
          +'<div class="clearfix">'
          +'<div class="_52c9 lfloat _ohe">Collect This Post</div>'
          +'<div class="_51-u rfloat _ohf">'
          +'<a class="_42ft _5upp _50zy layerCancel _51-t _50-0 _50z-" role="button" href="#" title="Close" onclick="toggleModal();">Close</a></div>'
          +'</div></div>');

    	//var $content = $('<select class="collectSelect"><option>+Gostosas</option></select>');
      var $content = $('<div class="_4-i2"><div class="pam"><select class="collectSelect"><option>+Gostosas</option></select></div></div>');
      var $footer = $('<div class="_5a8u"><div class="uiOverlayFooter uiBoxGray noborder"><table class="uiGrid _51mz uiOverlayFooterGrid" cellspacing="0" cellpadding="0"><tbody><tr class="_51mx">'
          +'<td class="_51m- prs uiOverlayFooterMessage"></td>'
          +'<td class="_51m- uiOverlayFooterButtons _51mw"><button value="1" class="collectButton _42ft _4jy0 layerConfirm uiOverlayButton _4jy3 _4jy1 selected" type="submit">Collect Post</button><a class="cancelButton _42ft _4jy0 layerCancel uiOverlayButton _4jy3 _517h" role="button" href="#">Cancel</a></td>'
          +'</tr></tbody></table></div></div>');

      //var $sendButton = $('<button class="collectButton">Collect</button>');
    	//var $cancelButton = $('<button class="cancelButton">Cancel</button>');
    	var $black = $('<div class="black"></div>');

    	$modal.append($head_modal);
    	$modal.append($content);
    	$modal.append($footer);
    	$div_modal.append($modal);
    	$div_modal.append($black);

    	$black.on('click', function(e){
    		e.preventDefault();
    		toggleModal();
    	});
    	$div_modal.hide();
      $('body').append($div_modal);
      return $div_modal;
    };

    var viewCollection = function(collection){
      $('#stream_pagelet').html("");
    
    };

    function addCounterToData (data) {
      if (!data.items) throw new Error('Data returned error');

      var counters = {};

      var items = data.items;
      for (var i in items) {
        var tags = items[i].tags;

        if (tags) {
          for (var j in tags) {
            if (counters[tags[j]]) {
              counters[tags[j]] += 1;
            } else {
              counters[tags[j]] = 1;
            }
          }
        }
      }

      data.counters = counters;

      return data;
    }


    function addCollectionSectionToSidebar () {
      var $collectionsNav = $('<div class="homeSideNav collectionsNav">' +
                            '<h4 class="navHeader">COLLECTIONS</h4>' +
                            '<ul class="uiSideNav mts mbm nonDroppableNav">' +
                              '</ul>' +
                          '</div>');
        var $collectionItem = $('<li class="sideNavItem stat_elem">' +
                              '<a class="item clearfix sortableItem" data-collect="Gostosas">' +
                                '<div class="rfloat">' +
                                    '<span class="count">' +
                                        '<span class="countValue">20</span>' +
                                    '</span>' +
                                '</div>' +
                                '<div>' +
                                  '<span class="imgWrap"></span>' +
                                  '<div class="linkWrap hasCount">+Gostosas</div>' +
                                '</div>' +
                              '</a>' +
                            '</li>');

      
      $collectionsNav.find('ul').append($collectionItem);

        $('#pagelet_pinned_nav')
            .append($collectionsNav);
    };




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
        var postId = $(e).attr('data-postid');
        setModal(postId);
        toggleModal();
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
                    }
                }
            });

            // contem os botões Like ·  Comment · Collect ·  Share.
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

                      // contador de likes, comments, shares
                      a.find(".UFIBlingBox.uiBlingBox.feedbackBling").each(function(){
                        var b = $(this);
                        var e = $("<span><img class=\"Collect_Counter_Icon\" src=\"" + chrome.extension.getURL("img/botao_collect_vA1.png") + "\">"
                          +"<span class=\"UFIBlingBoxText\">666</span>" // setar o numero de collects aqui
                          +"</span>");
                        b.append(e);
                      });
                }
            });

          // likes e shares acima dos comentários.
          $this.find(".UFIList").each(function(){
            var a = $(this);
            //a.css("list-style","none");
                    if(!$this.attr('data-addedCollect2')){
                        $this.attr('data-addedCollect2', true);
              
                    var e = $("<li class=\"UFIRow UFILikeSentence UFIFirstComponent\">"
              //+"<div class=\"clearfix\">"
              //+"<div class=\"_ohe lfloat\">"
              //+"<a class=\"img _8o _8r UFIImageBlockImage UFILikeThumb\" href=\"#\" title=\"Like thiz\" role=\"button\" ><img</a>"
              +"<a href=\"#\" title=\"Collect this\" role=\"button\"><img class=\"Collect_Counter_Icon\" src=\"" + chrome.extension.getURL("img/botao_collect_vA1.png") + "\"></a>"
              //+"<div>"
              //+"<div class=\"UFIImageBlockContent _42ef _8u\">"
              //+"<div class=\"UFILikeSentenceText\">"
              +"<span>"
              +"<a href=\"#\">" // link para ver pessoas que deram Collect
              +"747 people" // contador de pessoas
              +"</a>"
              +"<span> collected this.</span>"
              +"</span>"
              //+"</div>"
              //+"</div>"
              //+"</div>"
              //+"</div>"
              //+"</div>"
              +"</li>");

              //var x = $("<span>VISH</span>");
              //e.insertBefore(a.first());
              a.prepend(e);
              //console.log(x);
                    }
            /*
            var b = $(this);
            
            */
          });

        });

        // botões Like ·  Comment · Collect ·  Share em fotos e videos 
        $('.UIActionLinks.UIActionLinks_bottom').each(function(){
            var a = $(this);
            if(!a.attr('data-addedCollect')){
                a.attr('data-addedCollect', true);
                // vai incluir o Collect depois do botão de Comment
                a.find(".uiLinkButton.comment_link").each(function(){
                    var e = $("<a class=\"collect_button\" href=\"#\">Collect</a>");
                    //e.attr('data-postid', postId);
                    e.on('click', sendCollect);
                    a.after(e);
                    a.after(" · ");
                });
            }
        });
    };

    function getData (userid) {
      return $.ajax({
        type: 'GET',
        url: 'https://fb-collect.appspot.com/_ah/api/collectapi/v1/entities?userid=' + userid
      });
    }


    var getMyId = function(){
        var myIdFilter = /profile_pic_header_([0-9]*)/;
        var img_id = $("._s0.headerTinymanPhoto._rw.img").attr('id');
        var myId = img_id.match(myIdFilter)[1];
        return myId;
    }

    function main () {
        myId = getMyId();
        $div_modal = createModal();
        getData(myId).done(function(data){
          collections = addCounterToData(data);
          //addCollectionSectionToSidebar();
        });
        addCollectionSectionToSidebar();
        setInterval(setIcons, 1000);
    }

    main();

})();

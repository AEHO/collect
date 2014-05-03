//Classes dos posts ._4-u2.mbm._5jmm

(function(){
    $('._4-u2.mbm._5jmm ._5pcq').each(function(){
        var $this = $(this);
        if($this.attr('class') === "_5pcq" && $this.attr('rel') === undefined){
            console.log(this);
        }
    });

    /**
     * THIS ONLY HAPPENS IN HACKATHONS
     */

    $('#pagelet_pinned_nav').append('<div class="homeSideNav collectionsNav">' +
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

    var $collectionsNav = $('.collectionsNav');

    function toggleContentArea (show) {
        if (toggle) {
            $('#contentArea').show();
        } else {
            $('#contentArea').hide();
        }
    }

    $('a', $collectionsNav).click(function () {
        var collection = $('.linkWrap', $(this)).html();
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

function GoTo(e) {
    window.open(e.replace("_", "http://"))
}
function base64_decode(e) {
    if ("undefined" == typeof window)
        return new Buffer(e,"base64").toString("utf-8");
    if (void 0 !== window.atob)
        return decodeURIComponent(escape(window.atob(e)));
    var t, n, i, o, a, s, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", d = 0, l = 0, c = "", u = [];
    if (!e)
        return e;
    for (e += ""; t = (s = r.indexOf(e.charAt(d++)) << 18 | r.indexOf(e.charAt(d++)) << 12 | (o = r.indexOf(e.charAt(d++))) << 6 | (a = r.indexOf(e.charAt(d++)))) >> 16 & 255,
        n = s >> 8 & 255,
        i = 255 & s,
        u[l++] = 64 === o ? String.fromCharCode(t) : 64 === a ? String.fromCharCode(t, n) : String.fromCharCode(t, n, i),
    d < e.length; )
        ;
    return c = u.join(""),
        decodeURIComponent(escape(c.replace(/\0+$/, "")))
}
function createCookie(e, t, n) {
    var i;
    if (n) {
        var o = new Date;
        o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3),
            i = "; expires=" + o.toGMTString()
    } else
        i = "";
    document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + i + "; path=/"
}
function readCookie(e) {
    for (var t = encodeURIComponent(e) + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
        for (var o = n[i]; " " === o.charAt(0); )
            o = o.substring(1, o.length);
        if (0 === o.indexOf(t))
            return decodeURIComponent(o.substring(t.length, o.length))
    }
    return null
}
function eraseCookie(e) {
    createCookie(e, "", -1)
}
jQuery(function(c) {
    "use strict";
    if (c(document).on("click", ".js-table-of-contents-hide", function() {
        var e = c(this).parents(".table-of-contents");
        e.toggleClass("open"),
            e.hasClass("open") ? (eraseCookie("wpshop_toc_hide"),
                c(".js-table-of-contents-list").slideDown()) : (createCookie("wpshop_toc_hide", "hide"),
                c(".js-table-of-contents-list").slideUp())
    }),
        c(document).on("click", '.table-of-contents a[href*="#"]', function(e) {
            c("html,body").stop().animate({
                scrollTop: c(this.hash).offset().top - 100
            }, 500),
                e.preventDefault()
        }),
        c(".js-social-link").click(function() {
            var e = jQuery(this).data("uri");
            window.open(e, "_blank")
        }),
        c("body").hasClass("single-paged")) {
        var e = c("#main").offset().top;
        c("html,body").animate({
            scrollTop: e
        }, 800)
    }
    var t = c(".mob-hamburger")
        , n = c("#site-navigation")
        , i = c("#header_menu")
        , o = c("#top_menu")
        , a = c(".widget-mobile-menu ul")
        , s = o.clone()
        , r = a.clone();
    s.find("li").addClass("only-hamburger"),
        r.find("li").addClass("only-hamburger"),
        t.on("click", function() {
            t.toggleClass("active"),
                n.slideToggle()
        }),
        "undefined" != typeof top_menu_mobile_position && "bottom" == top_menu_mobile_position ? i.append(s.html()) : i.prepend(s.html()),
        i.append(r.html()),
    "undefined" != typeof fixed_main_menu && "yes" == fixed_main_menu && (c("#site-navigation").clone().attr("id", "").addClass("site-navigation-fixed").appendTo("body"),
        c(".site-navigation-fixed").hide(),
        c(window).scroll(function() {
            c(this).scrollTop() > c(".site-header").outerHeight() && 974 < c(window).width() ? (c(".site-navigation-fixed").show(),
                c(".site-navigation-fixed").css("width", c("#site-navigation").outerWidth()),
                c(".site-navigation-fixed").css("left", c("#site-navigation").offset().left)) : c(".site-navigation-fixed").hide()
        }),
        c(window).resize(function() {
            c(".site-navigation-fixed").is(":visible") && (c(".site-navigation-fixed").css("width", c("#site-navigation").outerWidth()),
                c(".site-navigation-fixed").css("left", c("#site-navigation").offset().left))
        })),
        jQuery(document).on("click", ".js-link", function(e) {
            var t = jQuery(this).data("href");
            if ("http" != t.substring(0, 4)) {
                var n = base64_decode(t);
                "http" == n.substring(0, 4) && (t = n)
            }
            var i = "self";
            "blank" != jQuery(this).data("target") && "_blank" != jQuery(this).data("target") && "blank" != jQuery(this).attr("target") && "_blank" != jQuery(this).attr("target") || (i = "blank"),
                "blank" == i ? window.open(t) : document.location.href = t
        });
    var d, l = c(window).width(), u = c(".js-scrolltop");
    function h() {
        jQuery(".main-navigation .menu-item .sub-menu, .sidebar-navigation .menu-item .sub-menu").slideUp(200)
    }
    function f() {
        c(".entry-content iframe, .responsive-iframe iframe").each(function() {
            if (!(c(this).parents(".not-responsive").length || c(this).width() <= c(this).parent().width())) {
                var e = c(this).width()
                    , t = c(this).height()
                    , n = c(this).parent().width()
                    , i = n / e
                    , o = Math.round(t * i);
                c(this).css({
                    width: n,
                    height: o
                })
            }
        })
    }
    u.click(function() {
        return c("body,html").animate({
            scrollTop: 0
        }, 500)
    }),
        c(window).scroll(function() {
            100 < c(this).scrollTop() ? l < 991 ? "on" == u.data("mob") && u.fadeIn() : u.fadeIn() : u.fadeOut()
        }),
    991 < l && (jQuery(".main-navigation .menu-item a, .main-navigation .menu-item .removed-link").on("mouseenter", function() {
        jQuery(this).parent().parent().find(".sub-menu:visible").hide(),
            jQuery(this).parent().find(".sub-menu:first").show(),
            clearTimeout(d)
    }),
        jQuery(".main-navigation").on({
            mouseenter: function() {
                clearTimeout(d)
            },
            mouseleave: function() {
                d = setTimeout(h, 400)
            }
        })),
    l <= 991 && (c("#site-navigation").on("click", ".menu-item-has-children", function(e) {
        "A" != e.target.nodeName && "a" != e.target.nodeName && (e.stopPropagation(),
            c(this).toggleClass("open"),
            c(this).find(".sub-menu:first").slideToggle())
    }),
        c("#footer_menu").on("click", ".menu-item-has-children", function(e) {
            "A" != e.target.nodeName && "a" != e.target.nodeName && (e.stopPropagation(),
                c(this).toggleClass("open"),
                c(this).find(".sub-menu:first").slideToggle())
        })),
        c(".sidebar-navigation").on("click", ".menu-item-has-children", function(e) {
            "A" != e.target.nodeName && "a" != e.target.nodeName && (e.stopPropagation(),
                c(this).toggleClass("open"),
                c(this).find(".sub-menu:first").slideToggle())
        }),
        c(".ps-link").click(function() {
            var e = base64_decode(c(this).data("uri"));
            window.open(e)
        }),
        c(document).on("click", ".js-star-rating-item", function() {
            var o = c(this)
                , a = o.parent()
                , s = o.data("score")
                , e = a.data("post-id")
                , r = a.data("rating-count")
                , d = a.data("rating-sum")
                , l = a.data("rating-value");
            if (!a.hasClass("disabled")) {
                a.addClass("disabled process");
                var t = {
                    action: "wpshop_star_rating_submit",
                    nonce: wps_ajax.nonce,
                    post_id: e,
                    score: s,
                    rating_count: r,
                    rating_sum: d,
                    rating_value: l
                };
                jQuery.post(wps_ajax.url, t, function(e) {
                    if (e.success) {
                        var t;
                        l = ((d += s) / ++r).toFixed(2);
                        var n = c("html").attr("lang");
                        "en-US" == n && (t = "assessment"),
                        "ru-RU" == n && (t = ["оценка", "оценки", "оценок"][4 < (i = r) % 100 && i % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][i % 10 < 5 ? i % 10 : 5]]),
                            o.parent().parent().find(".star-rating-text").html("<em>( <strong>" + r + "</strong> " + t + ", " + lang_array.text1 + " <strong>" + l + "</strong> " + lang_array.text2 + " <strong>5</strong> )</em></div>")
                    } else
                        e.data,
                            console.log(e);
                    var i;
                    a.removeClass("process")
                })
            }
        }),
        c(".js-star-rating-item").on({
            mouseenter: function() {
                c(this).parent().hasClass("disabled") || (c(this).parent().addClass("hover"),
                    c(this).addClass("hover").prevAll().addClass("hover"))
            },
            mouseleave: function() {
                c(this).parent().hasClass("disabled") || (c(this).parent().removeClass("hover"),
                    c(".js-star-rating-item").removeClass("hover"))
            }
        }),
        c(".js-share-link").click(function() {
            c(this).hasClass("js-share-link-no-window") ? window.location.href = c(this).data("uri") : function(e) {
                var t, n = (screen.height - 436) / 2, i = (screen.width - 626) / 2;
                n < 0 && (n = 0);
                i < 0 && (i = 0);
                t = "top=" + n + ",left=" + i,
                    t += ",height=436,width=626,resizable=no",
                    open(e, "displayWindow", t)
            }(c(this).data("uri"))
        }),
        c(".js-spoiler-box-title").click(function() {
            c(this).toggleClass("active").next().slideToggle()
        }),
        c(".js-comment-smiles img").click(function() {
            var e = c(this);
            c("#comment").val(c("#comment").val() + " " + e.prop("alt"))
        }).on("dragstart", function(e) {
            e.preventDefault()
        }),
        f(),
        c(window).resize(function() {
            f()
        })
});
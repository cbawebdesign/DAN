function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-page5-landing-page5-module"], {
  /***/"./node_modules/raw-loader/index.js!./src/app/landing-page5/components/about-us/about-us.component.html": (
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/landing-page5/components/about-us/about-us.component.html ***!
    \*****************************************************************************************************/
  /*! no static exports found */
  /***/
  function _node_modules_rawLoader_indexJs_src_app_landingPage5_components_aboutUs_aboutUsComponentHtml(module, exports) {
    module.exports = "<section>\n    <div class=\"container\">\n        <div class=\"row \">\n            <div class=\"col-md-12\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div *ngFor=\"let list of List\" class=\"col-lg-4 col-md-4 col-sm-6 wow fadeInUp align-items-center\">\n                <div class=\"fancy_service wow fadeInUp text-center\">\n                    <div class=\"hover-effect\"></div>\n                    <div class=\"fancy-info\">\n                        <img src=\"{{ list.image }}\" alt=\"fancybox\"/>\n                        <h4 class=\"mt-4 mb-3 title\">{{ list.title }}</h4>\n                        <p class=\"\">{{ list.subtitle }}</p>\n                        <a class=\"link-btn\" href=\"#\">\n                            <span class=\"btn-effect\"> Read More<i class=\"ion-ios-arrow-right\"></i></span>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>";

    /***/
  }),
  /***/"./node_modules/raw-loader/index.js!./src/app/landing-page5/components/features/features.component.html": (
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/landing-page5/components/features/features.component.html ***!
    \*****************************************************************************************************/
  /*! no static exports found */
  /***/
  function _node_modules_rawLoader_indexJs_src_app_landingPage5_components_features_featuresComponentHtml(module, exports) {
    module.exports = "<!-- <section class=\"iq-bg-over\">\n    <div class=\"container\">\n        <div class=\"row \">\n            <div class=\"col-md-12\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div *ngFor=\"let list of List1\" class=\"xamin-analytics wow fadeInUp  text-left\" >\n                    <div class=\"analytics-icon\">\n                    </div>\n                    <div class=\"analytics-detail\">\n                        <h4 class=\"mb-1\">{{ list.title }}</h4>\n                        <p class=\"mb-0\">{{ list.subtitle }}</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div *ngFor=\"let list of List2\" class=\"xamin-analytics wow fadeInUp  text-left\" >\n                    <div class=\"analytics-icon\">\n                        <img src=\"{{ list.image }}\" alt=\"fancybox\">\n                    </div>\n                    <div class=\"analytics-detail\">\n                        <h4 class=\"mb-1\">{{ list.title }}</h4>\n                        <p class=\"mb-0\">{{ list.subtitle }}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section> -->\n<section class=\"bg-with-image-home2\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 wow fadeInUp\">\n        <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n      </div>\n    </div>\n    <app-testimonials [List]=\"List\"></app-testimonials>\n  </div>\n</section>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/index.js!./src/app/landing-page5/components/our-blog/our-blog.component.html": (
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/landing-page5/components/our-blog/our-blog.component.html ***!
    \*****************************************************************************************************/
  /*! no static exports found */
  /***/
  function _node_modules_rawLoader_indexJs_src_app_landingPage5_components_ourBlog_ourBlogComponentHtml(module, exports) {
    module.exports = "<section class=\"iq-bg-over iq-pb-70\">\n    <div class=\"container\">\n        <div class=\"row \">\n            <div class=\"col-md-12\">\n                <div class=\"title-box wow fadeInUp text-center\">\n                    <h3>Digital Alpha</h3>\n                    <h3>Announces Acquisition of WG2 by Cisco Systems</h3>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div *ngFor=\"let list of List\" class=\"col-md-12\">\n                <div class=\"xamin-client wow fadeInUp text-center\">\n                    <div class=\"client-icon\">\n                        <img style=height:100px; src=\"{{ list.image }}\" alt=\"fancybox\">\n                    </div>\n                    <div class=\"client-detail\">\n                        <h5>{{list.exit}}</h5>\n                        <h6 class=\"mb-1\">{{ list.title }}</h6>\n                        <!-- <p class=\"mb-0\">{{ list.subtitle }}</p> -->\n                       \n                        <a href=\"{{list.subtitle}}\">{{list.info}}</a>\n                        <br>\n                        <a href=\"{{list.subtitle2}}\">{{list.info2}}</a>\n\n                    </div>\n                </div>  \n            </div>\n        </div>\n    </div>\n</section>";

    /***/
  }),
  /***/"./node_modules/raw-loader/index.js!./src/app/landing-page5/components/our-client/our-client.component.html": (
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/landing-page5/components/our-client/our-client.component.html ***!
    \*********************************************************************************************************/
  /*! no static exports found */
  /***/
  function _node_modules_rawLoader_indexJs_src_app_landingPage5_components_ourClient_ourClientComponentHtml(module, exports) {
    module.exports = "<section class=\"pt-0\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <app-customers [List]=\"List\" [hover]=\"hover\"></app-customers>\n            </div>\n        </div>\n    </div>\n</section>";

    /***/
  }),
  /***/"./node_modules/raw-loader/index.js!./src/app/landing-page5/components/our-counter/our-counter.component.html": (
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/landing-page5/components/our-counter/our-counter.component.html ***!
    \***********************************************************************************************************/
  /*! no static exports found */
  /***/
  function _node_modules_rawLoader_indexJs_src_app_landingPage5_components_ourCounter_ourCounterComponentHtml(module, exports) {
    module.exports = "<section class=\"pt-0 \">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div *ngFor=\"let list of List\" class=\"col-md-4 col-sm-6\">\n                <div class=\"iq-timer style2 mb-5 mb-md-0 mb-lg-0 text-center\">\n                    <div class=\"iq-img\">  <img src=\"{{list.image}}\" alt=\"fancybox\"> </div>\n                    <div class=\"timer-details \">\n                        <span class=\"timer dark-timer\" [attr.data-to]=\"list.number\" data-speed=\"2000\">{{list.number}}</span><span class=\"timer_postfix dark-timer\"></span><i class=\"fa fa-percent\" aria-hidden=\"true\"></i>\n                        <p class=\"dark-timer\">{{ list.title }}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/index.js!./src/app/landing-page5/components/partner/partner.component.html": (
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/landing-page5/components/partner/partner.component.html ***!
    \***************************************************************************************************/
  /*! no static exports found */
  /***/
  function _node_modules_rawLoader_indexJs_src_app_landingPage5_components_partner_partnerComponentHtml(module, exports) {
    module.exports = "<section class=\"iq-bg-over iq-pb-70\">\n    <div class=\"container\">\n        <div class=\"row \">\n            <div class=\"col-md-12\">\n                <div class=\"title-box wow fadeInUp text-center\">\n                    <span class=\"title-design\">Portfolio</span>\n                    <h2>Investing in the future</h2>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div *ngFor=\"let list of List\" class=\"col-md-3\">\n                <div class=\"xamin-client wow fadeInUp text-center\">\n                    <div class=\"client-icon\">\n                        <img src=\"{{ list.image }}\" alt=\"fancybox\">\n                    </div>\n                    <div class=\"client-detail\">\n                        <!-- <h6 class=\"mb-1\">{{ list.title }}</h6> -->\n                        <!-- <p class=\"mb-0\">{{ list.subtitle }}</p> -->\n                        <!-- <a href=\"{{list.subtitle}}\">test</a> -->\n                    </div>\n                </div>  \n            </div>\n        </div>\n    </div>\n</section>";

    /***/
  }),
  /***/"./node_modules/raw-loader/index.js!./src/app/landing-page5/components/revolution-slider5/revolution-slider5.component.html": (
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/landing-page5/components/revolution-slider5/revolution-slider5.component.html ***!
    \*************************************************************************************************************************/
  /*! no static exports found */
  /***/
  function _node_modules_rawLoader_indexJs_src_app_landingPage5_components_revolutionSlider5_revolutionSlider5ComponentHtml(module, exports) {
    module.exports = "<div class=\"iq-banner\">\n    <!-- START xamin 1 REVOLUTION SLIDER 6.1.0 -->\n    <p class=\"rs-p-wp-fix\"></p>\n    <rs-module-wrap id=\"rev_slider_1_1_wrapper\" data-alias=\"xamin-1\" data-source=\"gallery\" style=\"background:transparent;padding:0;margin:0px auto;margin-top:0;margin-bottom:0;\">\n        <rs-module id=\"rev_slider_1_1\" class=\" rs-ov-hidden\" style=\"display:none;\" data-version=\"6.1.0\">\n            <rs-slides>\n                <rs-slide data-key=\"rs-1\" data-title=\"Slide\" data-anim=\"ei:d;eo:d;s:1000;r:0;t:fade;sl:0;\" data-firstanim=\"t:fade;sl:12;\">\n                    <img src=\"./assets/revslider/assets_slider2/dummy.png\" alt=\"transparent\" data-lazyload=\"./assets/revslider/assets_slider2/transparent.png\" data-parallax=\"off\" class=\"rev-slidebg\" data-no-retina>\n                    <rs-bgvideo\n                        data-video=\"w:80%;h:80%;nse:false;l:true;ptimer:true;\"\n                        data-mp4=\"./assets/revslider/assets_slider2/Final.mp4\"></rs-bgvideo>\n                    <h2\n                        id=\"slider-1-slide-1-layer-1\"\n                        class=\"rs-layer\"\n                        data-type=\"text\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:70px,70px,70px,33px;y:m;yo:-50px,-50px,-50px,-137px;\"\n                        data-text=\"w:normal;s:60,60,60,40;l:70,70,70,50;fw:700;\"\n                        data-frame_0=\"y:100%;\"\n                        data-frame_0_mask=\"u:t;\"\n                        data-frame_1=\"st:300;sp:1200;sR:300;\"\n                        data-frame_1_mask=\"u:t;\"\n                        data-frame_999=\"o:0;st:w;sR:7500;\"\n                        style=\"z-index:8;font-family:Lato;\"\n                        >Digital Alpha Advisors<br>\n                    </h2>\n                    <rs-layer\n                        id=\"slider-1-slide-1-layer-2\"\n                        data-type=\"text\"\n                        data-color=\"#4bd9ec\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:70px,70px,70px,33px;y:m;yo:61px,61px,61px,-43px;\"\n                        data-text=\"w:normal;s:16;l:30,30,30,24;\"\n                        data-frame_0=\"y:100%;\"\n                        data-frame_0_mask=\"u:t;\"\n                        data-frame_1=\"st:600;sp:1200;sR:600;\"\n                        data-frame_1_mask=\"u:t;\"\n                        data-frame_999=\"o:0;st:w;sR:7200;\"\n                        style=\"z-index:9;font-family:Karla;\"\n                        >\n                    </rs-layer>\n                    <!-- <rs-layer\n                        id=\"slider-1-slide-1-layer-3\"\n                        class=\"blue-btn button rev-btn\"\n                        data-type=\"button\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:60px,60px,60px,19px;y:m;yo:153px,153px,153px,40px;\"\n                        data-text=\"w:normal;s:16,16,16,14;l:24,24,24,14;\"\n                        data-dim=\"minh:0px,0px,0px,none;\"\n                        data-padding=\"t:15,15,15,20;r:30;b:15,15,15,20;l:30;\"\n                        data-border=\"bor:90px,90px,90px,90px;\"\n                        data-frame_0=\"y:100%;\"\n                        data-frame_0_mask=\"u:t;\"\n                        data-frame_1=\"st:940;sp:1200;sR:940;\"\n                        data-frame_1_mask=\"u:t;\"\n                        data-frame_999=\"o:0;st:w;sR:6860;\"\n                        data-frame_hover=\"c:#fff;bgc:#313e5b;bor:90px,90px,90px,90px;\"\n                        style=\"z-index:10;background-color:#437eeb;font-family:Karla;\"\n                        >About Us\n                    </rs-layer> -->\n                    <rs-layer\n                        id=\"slider-1-slide-1-layer-7\"\n                        data-type=\"text\"\n                        data-color=\"#4bd9ec\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:655px,655px,655px,34px;y:m;yo:236px,236px,236px,145px;\"\n                        data-text=\"w:normal;s:16,16,16,14;l:30,30,30,20;\"\n                        data-frame_0=\"y:100%;\"\n                        data-frame_0_mask=\"u:t;\"\n                        data-frame_1=\"st:1780;sp:1200;sR:1780;\"\n                        data-frame_1_mask=\"u:t;\"\n                        data-frame_999=\"o:0;st:w;sR:6020;\"\n                        style=\"z-index:11;font-family:Lato;\"\n                        >\n                    </rs-layer>\n                    <rs-layer\n                        id=\"slider-1-slide-1-layer-8\"\n                        data-type=\"text\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:654px,654px,654px,35px;yo:611px,611px,611px,460px;\"\n                        data-text=\"w:normal;s:36,36,36,18;l:40,40,40,26;fw:700;\"\n                        data-frame_0=\"y:100%;\"\n                        data-frame_0_mask=\"u:t;\"\n                        data-frame_1=\"st:1790;sp:1200;sR:1790;\"\n                        data-frame_1_mask=\"u:t;\"\n                        data-frame_999=\"o:0;st:w;sR:6010;\"\n                        style=\"z-index:12;font-family:Lato;\"\n                        >\n                    </rs-layer>\n                    <rs-layer\n                        id=\"slider-1-slide-1-layer-9\"\n                        data-type=\"text\"\n                        data-color=\"#4bd9ec\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:980px,980px,980px,227px;y:m;yo:236px,236px,236px,144px;\"\n                        data-text=\"w:normal;s:16,16,16,14;l:30,30,30,20;\"\n                        data-frame_0=\"y:100%;\"\n                        data-frame_0_mask=\"u:t;\"\n                        data-frame_1=\"st:2140;sp:1200;sR:2140;\"\n                        data-frame_1_mask=\"u:t;\"\n                        data-frame_999=\"o:0;st:w;sR:5660;\"\n                        style=\"z-index:13;font-family:Lato;\"\n                        >\n                    </rs-layer>\n                    <rs-layer\n                        id=\"slider-1-slide-1-layer-10\"\n                        data-type=\"text\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:974px,974px,974px,226px;yo:611px,611px,611px,462px;\"\n                        data-text=\"w:normal;s:36,36,36,18;l:40,40,40,26;fw:700;\"\n                        data-frame_0=\"y:100%;\"\n                        data-frame_0_mask=\"u:t;\"\n                        data-frame_1=\"st:2140;sp:1200;sR:2140;\"\n                        data-frame_1_mask=\"u:t;\"\n                        data-frame_999=\"o:0;st:w;sR:5660;\"\n                        style=\"z-index:14;font-family:Lato;\"\n                        >\n                    </rs-layer>\n                    <rs-layer\n                        id=\"slider-1-slide-1-layer-11\"\n                        data-type=\"text\"\n                        data-color=\"#4bd9ec\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:1220px,1220px,1220px,366px;y:m;yo:236px,236px,236px,147px;\"\n                        data-text=\"w:normal;s:16,16,16,14;l:30,30,30,20;\"\n                        data-frame_0=\"y:100%;\"\n                        data-frame_0_mask=\"u:t;\"\n                        data-frame_1=\"st:2550;sp:1200;sR:2550;\"\n                        data-frame_1_mask=\"u:t;\"\n                        data-frame_999=\"o:0;st:w;sR:5250;\"\n                        style=\"z-index:15;font-family:Lato;\"\n                        >\n                    </rs-layer>\n                    <rs-layer\n                        id=\"slider-1-slide-1-layer-12\"\n                        data-type=\"text\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:1214px,1214px,1214px,366px;yo:611px,611px,611px,463px;\"\n                        data-text=\"w:normal;s:36,36,36,18;l:40,40,40,26;fw:700;\"\n                        data-frame_0=\"y:100%;\"\n                        data-frame_0_mask=\"u:t;\"\n                        data-frame_1=\"st:2540;sp:1200;sR:2540;\"\n                        data-frame_1_mask=\"u:t;\"\n                        data-frame_999=\"o:0;st:w;sR:5260;\"\n                        style=\"z-index:16;font-family:Lato;\"\n                        >\n                    </rs-layer>\n                </rs-slide>\n            </rs-slides>\n            <rs-static-layers>\n            </rs-static-layers>\n            <rs-progress class=\"rs-bottom\" style=\"visibility: hidden !important;\"></rs-progress>\n        </rs-module>\n    </rs-module-wrap>\n    <!-- END REVOLUTION SLIDER -->\n</div>";

    /***/
  }),
  /***/"./node_modules/raw-loader/index.js!./src/app/landing-page5/components/solutions/solutions.component.html": (
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/landing-page5/components/solutions/solutions.component.html ***!
    \*******************************************************************************************************/
  /*! no static exports found */
  /***/
  function _node_modules_rawLoader_indexJs_src_app_landingPage5_components_solutions_solutionsComponentHtml(module, exports) {
    module.exports = "<section >\n    <div class=\"container\">\n        <div class=\"row \">  \n            <div class=\"col-md-6\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n\n                <div class=\"custom-tab text-left  \">\n                    <ul class=\"nav nav-pills mb-5\" id=\"pills-tab\" role=\"tablist\">\n                       <li  class=\"nav-item\" *ngFor=\"let list of List\">\n                            <a class=\"nav-link {{ list.active !== undefined && list.active ? 'active show' : '' }}\" data-toggle=\"pill\" (click)=\"tabActive(list.id)\"  href=\"{{ '#' + list.id }}\" role=\"tab\" [attr.aria-selected]=\" list.active !== undefined ? true : false \">\n                                <h6 class=\"tab-title\">{{ list.title }}</h6>\n                            </a>\n                       </li>\n                    </ul>\n                </div>\n                <div class=\"tab-content\">\n                    <div *ngFor=\"let list of List\" id=\"{{ list.id }}\" class=\"tab-pane fade {{ list.active !== undefined && list.active ? 'show active' : '' }}\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                <p *ngFor=\"let text of list.desc\">{{ text }}</p>\n                                <div class=\"text-left\"><a class=\"button button-icon\" href=\"responsibility\"><span class=\"btn-effect\"> Read More</span></a></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <img src=\"./assets/images/social.jpg\" alt=\"fancybox\">\n            </div>\n        </div>\n    </div>\n</section>";

    /***/
  }),
  /***/"./node_modules/raw-loader/index.js!./src/app/landing-page5/components/tips-trick/tips-trick.component.html": (
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/landing-page5/components/tips-trick/tips-trick.component.html ***!
    \*********************************************************************************************************/
  /*! no static exports found */
  /***/
  function _node_modules_rawLoader_indexJs_src_app_landingPage5_components_tipsTrick_tipsTrickComponentHtml(module, exports) {
    module.exports = "<section>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 wow fadeInUp align-items-center\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp1\"></app-title-section>\n                <div class=\"text-left column-2 mb-5 \">\n                    <app-check-list [lists]=\"List1\"></app-check-list>\n                 </div>\n                <div class=\" text-left mt-5 \">\n                    <a class=\"button button-icon\" routerLink=\"/strategy\"> <span class=\"btn-effect\">Read More</span> </a>\n                </div>\n            </div>\n            <div class=\"col-lg-6  wow fadeInUp xamin-right-img\">\n                <img src=\"./assets/images/SlideNew.jpg\" alt=\"about\">\n            </div>\n        </div>\n        <!-- <div class=\"row\">\n            <div class=\"col-lg-6  wow fadeInUp xamin-left-img\">\n                <img src=\"./assets/images/about-us/17.png\" alt=\"about-2\">\n                <div class=\"scroll-effect top blue \"><div class=\"main-video\"><div class=\"video-img\"><div class=\"consult-video video-btn\"><div class=\"btn-waves\">\n                    <div class=\"waves wave-1\"></div>\n                    <div class=\"waves wave-2\"></div>\n                    <div class=\"waves wave-3\"></div>\n                </div><a href=\"#\" class=\"iq-video popup-youtube\"><i class=\"fa fa-play\"></i></a></div></div></div></div>\n            </div>\n            <div class=\"col-lg-6 wow fadeInUp align-items-center\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp2\"></app-title-section>\n                \n                <div class=\"text-left column-2 mb-5 \">\n                    <app-check-list [lists]=\"List2\"></app-check-list>\n                 </div>\n                <div class=\" text-left mt-5 \">\n                    <a class=\"button button-icon\" routerLink=\"/about-us\"> <span class=\"btn-effect\">View Details</span> </a>\n                </div>\n            </div>\n        </div>-->\n    </div> \n</section> ";

    /***/
  }),
  /***/"./node_modules/raw-loader/index.js!./src/app/landing-page5/index/index.component.html": (
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader!./src/app/landing-page5/index/index.component.html ***!
    \************************************************************************************/
  /*! no static exports found */
  /***/
  function _node_modules_rawLoader_indexJs_src_app_landingPage5_index_indexComponentHtml(module, exports) {
    module.exports = "<!-- Header component start-->\n<app-header [logoImg]=\"logoImage\" [headeClass]=\"headeClass\" [navItemList]=\"navItems\" [contactInfo]=\"contactInfo\"></app-header>\n<!-- Header component end-->\n<!-- START REVOLUTION SLIDER -->\n<app-revolution-slider5></app-revolution-slider5>\n<!-- END REVOLUTION SLIDER -->\n<!-- MainContent -->\n<div class=\"main-content\">\n    <!-- <app-our-client></app-our-client> -->\n<app-our-blog></app-our-blog>\n    <app-about-us></app-about-us>\n    <app-our-client></app-our-client>\n    <!-- <app-tips-trick></app-tips-trick> -->\n    <!-- <app-our-counter></app-our-counter> -->\n    <app-tips-trick></app-tips-trick>\n    <!-- <app-our-counter></app-our-counter> -->\n\n    <app-features></app-features>\n    <app-our-counter></app-our-counter>\n\n    <app-solutions></app-solutions>\n    <app-partner></app-partner>\n    <!-- <app-our-blog></app-our-blog> -->\n</div>\n<!-- Footer start -->\n<app-footer-style1 [footerProp]=\"footerProp\" [contactInfo]=\"contactInfo\"></app-footer-style1>\n<!-- Footer end -->";

    /***/
  }),
  /***/"./src/app/landing-page5/components/about-us/about-us.component.ts": (
  /*!*************************************************************************!*\
    !*** ./src/app/landing-page5/components/about-us/about-us.component.ts ***!
    \*************************************************************************/
  /*! exports provided: AboutUsComponent */
  /***/
  function _src_app_landingPage5_components_aboutUs_aboutUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () {
      return AboutUsComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AboutUsComponent = /*#__PURE__*/function () {
      function AboutUsComponent() {
        _classCallCheck(this, AboutUsComponent);
        this.titleSectionProp = {
          "class": 'text-center',
          title: 'Digital Alpha',
          subTitle: 'Investing in the digital future'
        };
        this.List = [{
          title: 'Next Gen Networks',
          subtitle: 'Next Generation Broadband Networks, delivering programmability, automation, and new services to businesses and governments worldwide.',
          image: './assets/images/image.jpg'
        }, {
          title: 'Cloud',
          subtitle: 'Cloud based data management platforms focused on security, privacy, and sovereignty delivered through innovative core and edge infrastructure.                                                   ',
          image: './assets/images/image.jpg'
        }, {
          title: 'Internet of Things',
          subtitle: 'IoT platforms for urban infrastructure and smart city solutions partnering closely with utilities and municipalities worldwide. ',
          image: './assets/images/image.jpg'
        }];
      }
      return _createClass(AboutUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about-us',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.component.html */"./node_modules/raw-loader/index.js!./src/app/landing-page5/components/about-us/about-us.component.html"))["default"]
    })], AboutUsComponent);

    /***/
  }),
  /***/"./src/app/landing-page5/components/features/features.component.ts": (
  /*!*************************************************************************!*\
    !*** ./src/app/landing-page5/components/features/features.component.ts ***!
    \*************************************************************************/
  /*! exports provided: FeaturesComponent */
  /***/
  function _src_app_landingPage5_components_features_featuresComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function () {
      return FeaturesComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var FeaturesComponent = /*#__PURE__*/function () {
      function FeaturesComponent() {
        _classCallCheck(this, FeaturesComponent);
        this.titleSectionProp = {
          "class": 'text-center',
          title: 'Our Team',
          subTitle: ''
        };
        this.List = [{
          image: './assets/images/testimonials/logo.png',
          name: "Rick Shrotri",
          designation: "Founder and Managing Partner",
          desc: "Mr. Shrotri has been a technology and telecommunications investor for over two decades, managing industry shaping investments."
        }, {
          image: './assets/images/logo.png',
          name: "Karl Meyer",
          designation: "Partner",
          desc: "Mr. Meyer has been a business development and operational leader in Silicon Valley at both growth stage and large companies for over two decades, during which he and Mr. Shrotri have worked together twice before."
        }, {
          name: "Vasa Babic",
          designation: "Deal Partner",
          desc: "Mr. Babic has partnered with Mr. Shrotri for nearly 10 years in developing the Digital Alpha concept"
        }];
      }
      return _createClass(FeaturesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();
    FeaturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-features',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./features.component.html */"./node_modules/raw-loader/index.js!./src/app/landing-page5/components/features/features.component.html"))["default"]
    })], FeaturesComponent);

    /***/
  }),
  /***/"./src/app/landing-page5/components/our-blog/our-blog.component.ts": (
  /*!*************************************************************************!*\
    !*** ./src/app/landing-page5/components/our-blog/our-blog.component.ts ***!
    \*************************************************************************/
  /*! exports provided: OurBlogComponent */
  /***/
  function _src_app_landingPage5_components_ourBlog_ourBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "OurBlogComponent", function () {
      return OurBlogComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var OurBlogComponent = /*#__PURE__*/function () {
      function OurBlogComponent() {
        _classCallCheck(this, OurBlogComponent);
        this.List = [{
          image: './assets/images/partners/10.png',
          name: 'Unitas Global',
          // time: 'September 26, 2019 ',
          title: 'Exit announced 2023',
          info: 'Click here for more information',
          subtitle: "https://blogs.cisco.com/news/cisco-announces-intent-to-acquire-working-group-two"
          // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
        }];
      }
      return _createClass(OurBlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();
    OurBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-our-blog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-blog.component.html */"./node_modules/raw-loader/index.js!./src/app/landing-page5/components/our-blog/our-blog.component.html"))["default"]
    })], OurBlogComponent);

    /***/
  }),
  /***/"./src/app/landing-page5/components/our-client/our-client.component.ts": (
  /*!*****************************************************************************!*\
    !*** ./src/app/landing-page5/components/our-client/our-client.component.ts ***!
    \*****************************************************************************/
  /*! exports provided: OurClientComponent */
  /***/
  function _src_app_landingPage5_components_ourClient_ourClientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "OurClientComponent", function () {
      return OurClientComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var OurClientComponent = /*#__PURE__*/function () {
      function OurClientComponent() {
        _classCallCheck(this, OurClientComponent);
        this.List = [{
          img: '1.png'
        }, {
          img: '27.png'
        }, {
          img: '9.png'
        }, {
          img: '24.png'
        }, {
          img: '26.png'
        }, {
          img: '25.png'
        }, {
          img: '4.png'
        }, {
          img: '6.png'
        }, {
          img: '7.png'
        }, {
          img: '10.png'
        }, {
          img: '11.png'
        }, {
          img: 'p.png'
        }];
        this.hover = false;
      }
      return _createClass(OurClientComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();
    OurClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-our-client',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-client.component.html */"./node_modules/raw-loader/index.js!./src/app/landing-page5/components/our-client/our-client.component.html"))["default"]
    })], OurClientComponent);

    /***/
  }),
  /***/"./src/app/landing-page5/components/our-counter/our-counter.component.ts": (
  /*!*******************************************************************************!*\
    !*** ./src/app/landing-page5/components/our-counter/our-counter.component.ts ***!
    \*******************************************************************************/
  /*! exports provided: OurCounterComponent */
  /***/
  function _src_app_landingPage5_components_ourCounter_ourCounterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "OurCounterComponent", function () {
      return OurCounterComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var OurCounterComponent = /*#__PURE__*/function () {
      function OurCounterComponent() {
        _classCallCheck(this, OurCounterComponent);
        this.List = [{
          number: 1.5,
          title: '+ Billion AUM',
          image: './assets/images/logo.png'
        }, {
          number: 15,
          title: 'Portfolio Companies',
          image: './assets/images/logo.png'
        }, {
          number: 6,
          title: 'Minority Founder Investments',
          image: './assets/images/logo.png'
        }];
      }
      return _createClass(OurCounterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();
    OurCounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-our-counter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-counter.component.html */"./node_modules/raw-loader/index.js!./src/app/landing-page5/components/our-counter/our-counter.component.html"))["default"]
    })], OurCounterComponent);

    /***/
  }),
  /***/"./src/app/landing-page5/components/partner/partner.component.ts": (
  /*!***********************************************************************!*\
    !*** ./src/app/landing-page5/components/partner/partner.component.ts ***!
    \***********************************************************************/
  /*! exports provided: PartnerComponent */
  /***/
  function _src_app_landingPage5_components_partner_partnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PartnerComponent", function () {
      return PartnerComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var PartnerComponent = /*#__PURE__*/function () {
      function PartnerComponent() {
        _classCallCheck(this, PartnerComponent);
        this.List = [{
          image: './assets/images/partners/25.png',
          name: 'Unitas Global',
          // time: 'September 26, 2019 ',
          title: 'Press',
          info: 'Unitas Global',
          subtitle: "https://www.businesswire.com/news/home/20220418005166/en/Digital-Alpha-Completes-the-Asset-Acquisition-of-Unitas-Globals-Connectivity-Business-a-Next-Generation-Networking-Platform"
          // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
        }, {
          image: './assets/images/partners/9.png',
          name: 'Welink',
          // time: 'September 26, 2019 ',
          title: 'Press'
        },
        // {
        //   img: './assets/images/partners/1.png',
        //   name:  'British Telecom',
        //   // time: 'September 26, 2019 ',
        //   title: 'Press',
        //   // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
        // },
        {
          image: './assets/images/partners/26.png',
          name: 'SHARE CARE',
          info: 'Tim Brazil',
          subtitle: "https://www.fiercevideo.com/tech/cisco-qwilt-and-digital-alpha-bring-open-caching-to-brazil-via-tim-partnership",
          // time: 'September 26, 2019 ',
          title: 'Press'
        }, {
          image: './assets/images/partners/27.png',
          name: 'SHARE CARE',
          // time: 'September 26, 2019 ',
          title: 'Press'
        }];
      }
      return _createClass(PartnerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();
    PartnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-partner',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./partner.component.html */"./node_modules/raw-loader/index.js!./src/app/landing-page5/components/partner/partner.component.html"))["default"]
    })], PartnerComponent);

    /***/
  }),
  /***/"./src/app/landing-page5/components/revolution-slider5/revolution-slider5.component.ts": (
  /*!*********************************************************************************************!*\
    !*** ./src/app/landing-page5/components/revolution-slider5/revolution-slider5.component.ts ***!
    \*********************************************************************************************/
  /*! exports provided: RevolutionSlider5Component */
  /***/
  function _src_app_landingPage5_components_revolutionSlider5_revolutionSlider5ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RevolutionSlider5Component", function () {
      return RevolutionSlider5Component;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var RevolutionSlider5Component = /*#__PURE__*/function () {
      function RevolutionSlider5Component() {
        _classCallCheck(this, RevolutionSlider5Component);
      }
      return _createClass(RevolutionSlider5Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();
    RevolutionSlider5Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-revolution-slider5',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./revolution-slider5.component.html */"./node_modules/raw-loader/index.js!./src/app/landing-page5/components/revolution-slider5/revolution-slider5.component.html"))["default"]
    })], RevolutionSlider5Component);

    /***/
  }),
  /***/"./src/app/landing-page5/components/revolution-slider5/revolution-slider5.module.ts": (
  /*!******************************************************************************************!*\
    !*** ./src/app/landing-page5/components/revolution-slider5/revolution-slider5.module.ts ***!
    \******************************************************************************************/
  /*! exports provided: RevolutionSlider5Module */
  /***/
  function _src_app_landingPage5_components_revolutionSlider5_revolutionSlider5ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RevolutionSlider5Module", function () {
      return RevolutionSlider5Module;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _revolution_slider5_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./revolution-slider5.component */"./src/app/landing-page5/components/revolution-slider5/revolution-slider5.component.ts");
    var RevolutionSlider5Module = /*#__PURE__*/_createClass(function RevolutionSlider5Module() {
      _classCallCheck(this, RevolutionSlider5Module);
    });
    RevolutionSlider5Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_revolution_slider5_component__WEBPACK_IMPORTED_MODULE_3__["RevolutionSlider5Component"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_revolution_slider5_component__WEBPACK_IMPORTED_MODULE_3__["RevolutionSlider5Component"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], RevolutionSlider5Module);

    /***/
  }),
  /***/"./src/app/landing-page5/components/solutions/solutions.component.ts": (
  /*!***************************************************************************!*\
    !*** ./src/app/landing-page5/components/solutions/solutions.component.ts ***!
    \***************************************************************************/
  /*! exports provided: SolutionsComponent */
  /***/
  function _src_app_landingPage5_components_solutions_solutionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SolutionsComponent", function () {
      return SolutionsComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var SolutionsComponent = /*#__PURE__*/function () {
      function SolutionsComponent() {
        _classCallCheck(this, SolutionsComponent);
        this.titleSectionProp = {
          "class": 'text-left',
          title: 'Responsibility',
          subTitle: 'Social Responsibility'
        };
        this.List = [{
          id: 'tab-one-platform',
          title: 'Impact ',
          desc: ['Sustainability has been a priority for Digital Alpha since inception, as Digital Infrastructure is intrinsically green, provides social benefit, and fosters a more inclusive society.'],
          active: true
        }];
      }
      return _createClass(SolutionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "tabActive",
        value: function tabActive(id) {
          // @ts-ignore
          var jquery = window.$;
          jquery('.tab-content').find('.active').removeClass('active show');
          jquery('#' + id).addClass('active show');
        }
      }]);
    }();
    SolutionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-solutions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./solutions.component.html */"./node_modules/raw-loader/index.js!./src/app/landing-page5/components/solutions/solutions.component.html"))["default"]
    })], SolutionsComponent);

    /***/
  }),
  /***/"./src/app/landing-page5/components/tips-trick/tips-trick.component.ts": (
  /*!*****************************************************************************!*\
    !*** ./src/app/landing-page5/components/tips-trick/tips-trick.component.ts ***!
    \*****************************************************************************/
  /*! exports provided: TipsTrickComponent */
  /***/
  function _src_app_landingPage5_components_tipsTrick_tipsTrickComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TipsTrickComponent", function () {
      return TipsTrickComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var TipsTrickComponent = /*#__PURE__*/function () {
      function TipsTrickComponent() {
        _classCallCheck(this, TipsTrickComponent);
        this.titleSectionProp1 = {
          "class": 'text-left',
          subTitle: 'Our Strategy',
          description: 'We invest in the digital infratructure of the future '
        };
        this.titleSectionProp2 = {
          "class": 'text-left',
          subTitle: 'Get tips & tricks on how to skyrocket your sales.',
          description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.! '
        };
        this.List1 = ['Internet of Things', 'Next Generation Networks', 'Cloud', 'Commodity Layers'];
        this.List2 = ['Boost SEO ranking', 'Social Sharing', 'Marketing', 'Retention', 'Visual Reviews', 'Reviews Generation'];
      }
      return _createClass(TipsTrickComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();
    TipsTrickComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tips-trick',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tips-trick.component.html */"./node_modules/raw-loader/index.js!./src/app/landing-page5/components/tips-trick/tips-trick.component.html"))["default"]
    })], TipsTrickComponent);

    /***/
  }),
  /***/"./src/app/landing-page5/index/index.component.ts": (
  /*!********************************************************!*\
    !*** ./src/app/landing-page5/index/index.component.ts ***!
    \********************************************************/
  /*! exports provided: IndexComponent */
  /***/
  function _src_app_landingPage5_index_indexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "IndexComponent", function () {
      return IndexComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _xamin_plugins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../xamin/plugins.service */"./src/app/xamin/plugins.service.ts");
    /* harmony import */
    var _constants_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/menu */"./src/constants/menu.js");
    var IndexComponent = /*#__PURE__*/function () {
      function IndexComponent(plugins) {
        _classCallCheck(this, IndexComponent);
        this.plugins = plugins;
        // headeClass = 'style-two';
        this.logoImage = './assets/images/logo.png';
        this.contactInfo = {
          contactNumber: '+0123456789',
          email: 'support@iqnonicthemes.com',
          address: '1234 North Avenue Luke Lane, South Bend, IN 360001'
        };
        this.footerProp = {
          "class": 'iq-over-dark-90',
          logoImg: './assets/images/logo.png',
          email: 'support@iqnonicthemes.com',
          description: 'It is a long established fact that a reader will be distracted by the readable content.'
        };
        this.navItems = _constants_menu__WEBPACK_IMPORTED_MODULE_3__["topMenuBarItems"];
      }
      return _createClass(IndexComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Init all plugins...
          var current = this;
          current.plugins.revolutionSlider();
          // tslint:disable-next-line:only-arrow-functions
          setTimeout(function () {
            current.plugins.index();
          }, 200);
        }
      }]);
    }();
    IndexComponent.ctorParameters = function () {
      return [{
        type: _xamin_plugins_service__WEBPACK_IMPORTED_MODULE_2__["PluginsService"]
      }];
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-index',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.component.html */"./node_modules/raw-loader/index.js!./src/app/landing-page5/index/index.component.html"))["default"]
    })], IndexComponent);

    /***/
  }),
  /***/"./src/app/landing-page5/landing-page5.module.ts": (
  /*!*******************************************************!*\
    !*** ./src/app/landing-page5/landing-page5.module.ts ***!
    \*******************************************************/
  /*! exports provided: LandingPage5Module */
  /***/
  function _src_app_landingPage5_landingPage5ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LandingPage5Module", function () {
      return LandingPage5Module;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../xamin/xamin.module */"./src/app/xamin/xamin.module.ts");
    /* harmony import */
    var _index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index/index.component */"./src/app/landing-page5/index/index.component.ts");
    /* harmony import */
    var _components_revolution_slider5_revolution_slider5_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/revolution-slider5/revolution-slider5.module */"./src/app/landing-page5/components/revolution-slider5/revolution-slider5.module.ts");
    /* harmony import */
    var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about-us/about-us.component */"./src/app/landing-page5/components/about-us/about-us.component.ts");
    /* harmony import */
    var _components_our_client_our_client_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/our-client/our-client.component */"./src/app/landing-page5/components/our-client/our-client.component.ts");
    /* harmony import */
    var _components_tips_trick_tips_trick_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tips-trick/tips-trick.component */"./src/app/landing-page5/components/tips-trick/tips-trick.component.ts");
    /* harmony import */
    var _components_our_counter_our_counter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/our-counter/our-counter.component */"./src/app/landing-page5/components/our-counter/our-counter.component.ts");
    /* harmony import */
    var _components_features_features_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/features/features.component */"./src/app/landing-page5/components/features/features.component.ts");
    /* harmony import */
    var _components_solutions_solutions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/solutions/solutions.component */"./src/app/landing-page5/components/solutions/solutions.component.ts");
    /* harmony import */
    var _components_partner_partner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/partner/partner.component */"./src/app/landing-page5/components/partner/partner.component.ts");
    /* harmony import */
    var _components_our_blog_our_blog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/our-blog/our-blog.component */"./src/app/landing-page5/components/our-blog/our-blog.component.ts");
    var routes = [{
      path: '',
      component: _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"],
      children: []
    }];
    var LandingPage5Module = /*#__PURE__*/_createClass(function LandingPage5Module() {
      _classCallCheck(this, LandingPage5Module);
    });
    LandingPage5Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"], _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"], _components_our_client_our_client_component__WEBPACK_IMPORTED_MODULE_8__["OurClientComponent"], _components_tips_trick_tips_trick_component__WEBPACK_IMPORTED_MODULE_9__["TipsTrickComponent"], _components_our_counter_our_counter_component__WEBPACK_IMPORTED_MODULE_10__["OurCounterComponent"], _components_features_features_component__WEBPACK_IMPORTED_MODULE_11__["FeaturesComponent"], _components_solutions_solutions_component__WEBPACK_IMPORTED_MODULE_12__["SolutionsComponent"], _components_partner_partner_component__WEBPACK_IMPORTED_MODULE_13__["PartnerComponent"], _components_our_blog_our_blog_component__WEBPACK_IMPORTED_MODULE_14__["OurBlogComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_4__["XaminModule"], _components_revolution_slider5_revolution_slider5_module__WEBPACK_IMPORTED_MODULE_6__["RevolutionSlider5Module"]]
    })], LandingPage5Module);

    /***/
  })
}]);
//# sourceMappingURL=landing-page5-landing-page5-module-es5.js.map
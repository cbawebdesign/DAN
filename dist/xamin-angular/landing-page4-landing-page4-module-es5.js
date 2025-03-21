(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-page4-landing-page4-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/components/about-us/about-us.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/components/about-us/about-us.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"iq-pb-55\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 wow fadeInUp align-items-center\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp1\"></app-title-section>\n\n                <div class=\"text-left\">\n                    <app-check-list [lists]=\"checkList1\"></app-check-list>\n                </div>\n                <div class=\" text-left mt-5 \">\n                    <a class=\"button button-icon\" href=\"about-us.html\"> <span class=\"btn-effect\"> Read More</span> </a>\n                </div>\n            </div>\n            <div class=\"col-lg-6  wow fadeInUp \">\n                <img  src=\"./assets/images/about-us/SlideNew.jpg\" class=\"attachment-full\" alt=\"\" sizes=\"100vw\">\n            </div>\n        </div>\n        <div class=\"row mt-5\">\n            <div class=\"col-lg-6  wow fadeInUp \">\n                <img  src=\"./assets/images/about-us/13.png\" class=\"attachment-full\" alt=\"\" sizes=\"100vw\">\n            </div>\n            <div class=\"col-lg-6 wow fadeInUp align-items-center\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp2\"></app-title-section>\n                <div class=\"text-left\">\n                    <app-check-list [lists]=\"checkList1\"></app-check-list>\n                </div>\n                <div class=\" text-left mt-5 \">\n                    <a class=\"button button-icon\" href=\"#\"> <span class=\"btn-effect\"> Read More</span> </a>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/components/about-us1/about-us1.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/components/about-us1/about-us1.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"position-relative\">\n    <img src=\"./assets/images/about-us/SlideNew.jpg\" class=\"about-box-img\" alt=\"\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-6\"></div>\n        <div class=\"col-lg-6 wow fadeInUp align-items-center\">\n          <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n          <br>\n          <br>\n          <br>\n          <app-check-list [lists]=\"lists\"></app-check-list>\n          <br>\n          <br>\n          <div class=\"text-left mt-5\">\n            <!-- <a class=\"button button-icon\" href=\"about-us.html\"><span class=\"btn-effect\">Read More</span></a> -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/components/our-blog/our-blog.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/components/our-blog/our-blog.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"pt-0\">\n    <div class=\"container\">\n        <div class=\"row layer-fly-one \">\n            <div class=\"col-md-12\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n\n                <div class=\"xamin-recentblog v1\">\n                    <app-blog-owl [List]=\"List\"></app-blog-owl>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n                ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/components/our-client/our-client.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/components/our-client/our-client.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"pt-0\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12 wow fadeInUp title-box text-center\">\n                <span class=\"title-design\">Awards</span>\n                <h2>Awards &amp; Accreditations</h2>\n                <p class=\"mb-0\">It is a long established fact that a reader will be distracted by the readable</p>\n            </div>\n        </div>\n        <div class=\"row wow fadeInUp mb-5\">\n            <div *ngFor=\"let list of List1\" class=\"col-md-3\">\n                <div class=\"xamin-award wow fadeInUp  text-center\">\n                    <div class=\"award-img\"> <img src=\"{{ list.image}}\" alt=\"fancybox\"> </div>\n                    <h5 class=\"mt-3\">{{ list.title }}</h5>\n                </div>\n            </div>\n        </div>\n        <div class=\"row wow fadeInUp justify-content-center\">\n            <div *ngFor=\"let list of List2\" class=\"col-lg-3 col-md-3\">\n                <div class=\"xamin-award wow fadeInUp  text-center\">\n                    <div class=\"award-img\"> <img src=\"{{ list.image}}\" alt=\"fancybox\"> </div>\n                    <h5 class=\"mt-3\">{{ list.title }}</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/components/our-counter/our-counter.component.html": 
        /*!***********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/components/our-counter/our-counter.component.html ***!
          \***********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"bg-img\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6   wow fadeInUp align-self-center\">\n                <div class=\"iq-video-relative\">\n                    <div class=\"scroll-effect  \">\n                        <div class=\"main-video\">\n                            <div class=\"video-img\">\n                                <div class=\"consult-video video-btn\">\n                                    <div class=\"btn-waves\">\n                                        <div class=\"waves wave-1\"></div>\n                                        <div class=\"waves wave-2\"></div>\n                                        <div class=\"waves wave-3\"></div>\n                                    </div>\n                                    <a href=\"https://www.youtube.com/watch?v=0O2aH4XLbto\" class=\"iq-video popup-youtube\"><i class=\"fa fa-play\"></i></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n                <div class=\"iq-timer style1text-left float-left text-left\">\n                    <div class=\"timer-details\">\n                        <span class=\"timer\" data-to=\"50\" data-speed=\"5000\">50</span>\n                        <i class=\"fa fa-plus\" aria-hidden=\"true\" style=\"color: #c0bbb7;\"></i>\n                        <p> customer Buildwe love to developed as you think for business.</p>\n                    </div>\n                </div>\n                <div class=\"iq-timer style1text-left float-left text-left\">\n                    <div class=\"timer-details\">\n                        <span class=\"timer\" data-to=\"10\" data-speed=\"5000\">10</span><i class=\"fa fa-percent\" aria-hidden=\"true\" style=\"color: #c0bbb7;\"></i>\n                        <p> customer Satisfaction<br>\n                            we believe as you believe in your business\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/components/our-partner/our-partner.component.html": 
        /*!***********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/components/our-partner/our-partner.component.html ***!
          \***********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\" iq-bg-over\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"owl-carousel owl-loaded owl-drag\" data-dots=\"false\" data-nav=\"false\" data-items=\"6\" data-items-laptop=\"4\" data-items-tab=\"3\" data-items-mobile=\"2\" data-items-mobile-sm=\"1\" data-autoplay=\"true\" data-loop=\"true\" data-margin=\"30\" >\n                    <div *ngFor=\"let lists of List\" class=\"item\">\n                        <div class=\"clients-box\">\n                            <img class=\"img-fluid client-img\" src=\"./assets/images/partners/{{ lists.img }}\" alt=\"image0\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n            ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/components/our-services/our-services.component.html": 
        /*!*************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/components/our-services/our-services.component.html ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-services [navList]=\"navList\" [titleSectionProp]=\"titleSectionProp\"></app-services>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/components/our-testimonial/our-testimonial.component.html": 
        /*!*******************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/components/our-testimonial/our-testimonial.component.html ***!
          \*******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"bg-with-image-home2\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 wow fadeInUp\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n            </div>\n        </div>\n        <app-testimonials [List]=\"List\"></app-testimonials>   \n    </div>\n</section>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/components/revolution-slider4/revolution-slider4.component.html": 
        /*!*************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/components/revolution-slider4/revolution-slider4.component.html ***!
          \*************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"iq-banner\">\n    <!-- START xamin41 REVOLUTION SLIDER 6.1.0 -->\n    <p class=\"rs-p-wp-fix\"></p>\n    <rs-module-wrap id=\"rev_slider_4_1_wrapper\" data-alias=\"xamin41\" data-source=\"gallery\" style=\"background:transparent;padding:0;margin:0px auto;margin-top:0;margin-bottom:0;\">\n        <rs-module id=\"rev_slider_4_1\" class=\" rs-ov-hidden\" style=\"display:none;\" data-version=\"6.1.0\">\n            <rs-slides>\n                <rs-slide data-key=\"rs-4\" data-title=\"Slide\" data-anim=\"ei:d;eo:d;s:1000;r:0;t:fade;sl:0;\" data-firstanim=\"t:fade;sl:12;\">\n                    <img src=\"./assets/revslider/assets_silder4/dummy.png\" data-lazyload=\"./assets/revslider/assets_silder4/transparent.png\" data-bg=\"c:#f9f9fe;\" data-parallax=\"off\" class=\"rev-slidebg\" data-no-retina>\n                    <rs-layer\n                        id=\"slider-4-slide-4-layer-13\" \n                        class=\"rs-pxl-2\"\n                        data-type=\"text\"\n                        data-color=\"#263c5c\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:55px,40px,25px,41px;yo:110px,80px,153px,208px;\"\n                        data-text=\"w:normal;s:150,109,82,50;l:250,182,138,84;fw:900;\"\n                        data-frame_1=\"e:Power4.easeInOut;st:600;sp:1000;sR:600;\"\n                        data-frame_1_sfx=\"se:blocktoright;\"\n                        data-frame_999=\"o:0;st:w;sR:7400;\"\n                        style=\"z-index:9;font-family:Lato;text-transform:uppercase;\"\n                    >Our \n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-4-slide-4-layer-14\" \n                        class=\"rs-pxl-3\"\n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:c;xo:-25px,-18px,2px,11px;y:m;yo:-31px,-22px,7px,13px;\"\n                        data-text=\"w:normal;s:20,14,10,6;l:0,18,13,8;\"\n                        data-dim=\"w:837px,612px,464px,285px;h:474px,346px,262px,161px;\"\n                        data-frame_0=\"sX:0.9;sY:0.9;\"\n                        data-frame_1=\"st:1000;sp:1000;sR:1000;\"\n                        data-frame_999=\"o:0;st:w;sR:7000;\"\n                        data-loop_0=\"y:-10px;\"\n                        data-loop_999=\"y:10px;sp:5000;e:Sine.easeInOut;yym:t;\"\n                        style=\"z-index:10;font-family:Roboto;\"\n                    ><img src=\"./assets/revslider/assets_silder4/dummy.png\" width=\"911\" height=\"516\" data-lazyload=\"./assets/revslider/assets_silder4//bannershap.png\" data-no-retina> \n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-4-slide-4-layer-15\" \n                        class=\"rs-pxl-5\"\n                        data-type=\"text\"\n                        data-color=\"#263c5c\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:r;xo:52px,29px,32px,31px;y:b;yo:142px,194px,128px,163px;\"\n                        data-text=\"w:normal;s:150,109,82,50;l:250,182,138,84;fw:900;a:right;\"\n                        data-frame_1=\"e:Power4.easeInOut;st:600;sp:1000;sR:600;\"\n                        data-frame_1_sfx=\"se:blocktoright;\"\n                        data-frame_999=\"o:0;st:w;sR:7400;\"\n                        style=\"z-index:11;font-family:Lato;text-transform:uppercase;\"\n                    >Strategy\n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-4-slide-4-layer-16\" \n                        data-type=\"text\"\n                        data-color=\"#263c5c\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:66px,48px,40px,27px;yo:372px,272px,312px,324px;\"\n                        data-text=\"w:normal;s:16,11,16,16;l:25,18,13,20;ls:3px,2px,1px,0px;fw:700;\"\n                        data-frame_1=\"st:1700;sR:1700;\"\n                        data-frame_999=\"o:0;st:w;sR:7000;\"\n                        style=\"z-index:12;font-family:Karla;\"\n                    >\n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-4-slide-4-layer-17\" \n                        class=\"rs-pxl-3\"\n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:1002px,736px,532px,213px;yo:203px,244px,199px,119px;\"\n                        data-text=\"w:normal;s:20,14,10,6;l:0,18,13,8;\"\n                        data-dim=\"w:61px,44px,33px,20px;h:61px,44px,33px,20px;\"\n                        data-frame_0=\"sX:0.9;sY:0.9;\"\n                        data-frame_1=\"st:2000;sp:1000;sR:2000;\"\n                        data-frame_999=\"o:0;st:w;sR:6000;\"\n                        style=\"z-index:13;font-family:Roboto;\"\n                    >\n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-4-slide-4-layer-18\" \n                        class=\"rs-pxl-1\"\n                        data-type=\"text\"\n                        data-color=\"#263c5c\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:1089px,794px,537px,220px;yo:209px,238px,122px,149px;\"\n                        data-text=\"w:normal;s:18,13,16,16;l:30,21,15,20;ls:3px,2px,1px,0px;fw:900;\"\n                        data-frame_0=\"sX:0.9;sY:0.9;\"\n                        data-frame_1=\"st:2300;sp:1000;sR:2300;\"\n                        data-frame_999=\"o:0;st:w;sR:5700;\"\n                        style=\"z-index:14;font-family:Lato;\"\n                    >\n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-4-slide-4-layer-19\" \n                        class=\"rs-pxl-1\"\n                        data-type=\"text\"\n                        data-color=\"#263c5c\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:1095px,796px,533px,220px;yo:247px,269px,146px,177px;\"\n                        data-text=\"w:normal;s:16,11,12,14;l:25,18,16,20;fw:700;\"\n                        data-frame_0=\"sX:0.9;sY:0.9;\"\n                        data-frame_1=\"st:2300;sp:1000;sR:2300;\"\n                        data-frame_999=\"o:0;st:w;sR:5700;\"\n                        style=\"z-index:15;font-family:Karla;\"\n                    > \n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-4-slide-4-layer-20\" \n                        class=\"rs-pxl-3\"\n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:493px,369px,293px,274px;yo:531px,486px,411px,470px;\"\n                        data-text=\"w:normal;s:20,14,10,6;l:0,18,13,8;\"\n                        data-dim=\"w:61px,44px,33px,20px;h:61px,44px,33px,20px;\"\n                        data-frame_0=\"sX:0.9;sY:0.9;\"\n                        data-frame_1=\"st:2600;sp:1000;sR:2600;\"\n                        data-frame_999=\"o:0;st:w;sR:5400;\"\n                        style=\"z-index:16;font-family:Roboto;\"\n                    >\n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-4-slide-4-layer-21\" \n                        class=\"rs-pxl-1\"\n                        data-type=\"text\"\n                        data-color=\"#263c5c\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:341px,263px,139px,127px;yo:595px,536px,464px,502px;\"\n                        data-text=\"w:normal;s:18,13,16,16;l:30,21,15,20;fw:900;\"\n                        data-frame_0=\"sX:0.9;sY:0.9;\"\n                        data-frame_1=\"st:2900;sp:1000;sR:2900;\"\n                        data-frame_999=\"o:0;st:w;sR:5100;\"\n                        style=\"z-index:17;font-family:Lato;\"\n                    >\n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-4-slide-4-layer-22\" \n                        class=\"rs-pxl-1\"\n                        data-type=\"text\"\n                        data-color=\"#263c5c\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:248px,206px,98px,60px;yo:626px,561px,489px,532px;\"\n                        data-text=\"w:normal;s:16,11,12,14;l:25,18,13,20;fw:700;a:right;\"\n                        data-frame_0=\"sX:0.9;sY:0.9;\"\n                        data-frame_1=\"st:2890;sp:1000;sR:2890;\"\n                        data-frame_999=\"o:0;st:w;sR:5110;\"\n                        style=\"z-index:18;font-family:Karla;\"\n                    >\n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-4-slide-4-layer-23\" \n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:c;xo:0,0,-22px,-13px;y:m;yo:0,0,-3px,-1px;\"\n                        data-text=\"w:normal;s:20,14,10,6;l:0,18,13,8;\"\n                        data-dim=\"w:744px,544px,413px,254px;h:744px,544px,413px,254px;\"\n                        data-frame_0=\"sX:0.9;sY:0.9;\"\n                        data-frame_1=\"sp:1000;\"\n                        data-frame_999=\"o:0;st:w;sR:8000;\"\n                        data-loop_999=\"rZ:360;sp:30000;\"\n                        style=\"z-index:8;font-family:Roboto;\"\n                    ><img src=\"./assets/revslider/assets_silder4/dummy.png\" width=\"916\" height=\"916\" data-lazyload=\"./assets/revslider/assets_silder4/bannercircle.png\" data-no-retina> \n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-4-slide-4-layer-24\" \n                        data-type=\"text\"\n                        data-color=\"#263c5c\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:-150px,-32px,-24px,-16px;yo:150px,69px,52px,116px;\"\n                        data-text=\"w:normal;s:16,11,8,12;l:25,18,13,14;ls:3px,2px,1px,0px;fw:700;\"\n                        data-btrans=\"rZ:-90;\"\n                        data-frame_0=\"sX:0.9;sY:0.9;\"\n                        data-frame_1=\"sp:1000;\"\n                        data-frame_999=\"o:0;st:w;sR:8000;\"\n                        style=\"z-index:19;font-family:Karla;text-transform:uppercase;\"\n                    >\n                    <!-- #Next-Gen Networks  -->\n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-4-slide-4-layer-25\" \n                        data-type=\"text\"\n                        data-color=\"#263c5c\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:r;xo:-146px,-36px,-27px,-19px;y:b;yo:136px,95px,72px,84px;\"\n                        data-text=\"w:normal;s:16,11,8,12;l:25,18,13,14;ls:3px,2px,1px,0px;fw:700;\"\n                        data-dim=\"w:178px,130px,98px,132px;\"\n                        data-btrans=\"rZ:-90;\"\n                        data-frame_0=\"sX:0.9;sY:0.9;\"\n                        data-frame_1=\"sp:1000;\"\n                        data-frame_999=\"o:0;st:w;sR:8000;\"\n                        style=\"z-index:20;font-family:Karla;text-transform:uppercase;\"\n                    >\n                    <!-- #IOT  -->\n                    </rs-layer>\n                </rs-slide>\n            </rs-slides>\n            <rs-static-layers><!--\n            --></rs-static-layers>\n            <rs-progress class=\"rs-bottom\" style=\"visibility: hidden !important;\"></rs-progress>\n        </rs-module>\n    </rs-module-wrap>\n    <!-- END REVOLUTION SLIDER -->\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/index/index.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/index/index.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Header component start-->\n<app-header [logoImg]=\"logoImage\" [navItemList]=\"navItems\" [contactInfo]=\"contactInfo\"></app-header>\n<!-- Header component end-->\n<!-- START REVOLUTION SLIDER -->\n<app-revolution-slider4></app-revolution-slider4>\n<!-- END REVOLUTION SLIDER -->\n<!-- MainContent -->\n<div class=\"main-content\">\n    <!-- <app-our-partner></app-our-partner> -->\n    <!-- <app-about-us></app-about-us> -->\n    <!-- <app-our-services></app-our-services> -->\n    <!-- <app-our-counter></app-our-counter> -->\n    <app-about-us1></app-about-us1>\n    <!-- <app-our-testimonial></app-our-testimonial> -->\n    <!-- <app-our-client></app-our-client> -->\n    <!-- <app-our-blog></app-our-blog> -->\n</div>\n<!-- Footer start -->\n<app-footer-style1 [footerProp]=\"footerProp\" [contactInfo]=\"contactInfo\"></app-footer-style1>\n<!-- Footer end -->");
            /***/ 
        }),
        /***/ "./src/app/landing-page4/components/about-us/about-us.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/landing-page4/components/about-us/about-us.component.ts ***!
          \*************************************************************************/
        /*! exports provided: AboutUsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () { return AboutUsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AboutUsComponent = /** @class */ (function () {
                function AboutUsComponent() {
                    this.titleSectionProp1 = {
                        title: 'About US',
                        subTitle: 'Human Behaviour, Data Science',
                        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted many desktop.',
                        class: 'text-left'
                    };
                    this.titleSectionProp2 = {
                        title: 'About US',
                        subTitle: 'Focused on Actionable Insights',
                        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted many desktop.',
                        class: 'text-left'
                    };
                    this.checkList1 = ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations'];
                    this.checkList2 = ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations'];
                }
                AboutUsComponent.prototype.ngOnInit = function () {
                };
                return AboutUsComponent;
            }());
            AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-about-us',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/components/about-us/about-us.component.html")).default
                })
            ], AboutUsComponent);
            /***/ 
        }),
        /***/ "./src/app/landing-page4/components/about-us1/about-us1.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/landing-page4/components/about-us1/about-us1.component.ts ***!
          \***************************************************************************/
        /*! exports provided: AboutUs1Component */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUs1Component", function () { return AboutUs1Component; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AboutUs1Component = /** @class */ (function () {
                function AboutUs1Component() {
                    this.titleSectionProp = {
                        class: 'text-left',
                        title: 'Digital Alpha Advisors LLC ',
                        subTitle: 'Our Strategy',
                        description: 'A pioneering approach to enabling digital infrastructure.'
                    };
                }
                AboutUs1Component.prototype.ngOnInit = function () {
                };
                return AboutUs1Component;
            }());
            AboutUs1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-about-us1',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/components/about-us1/about-us1.component.html")).default
                })
            ], AboutUs1Component);
            /***/ 
        }),
        /***/ "./src/app/landing-page4/components/our-blog/our-blog.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/landing-page4/components/our-blog/our-blog.component.ts ***!
          \*************************************************************************/
        /*! exports provided: OurBlogComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurBlogComponent", function () { return OurBlogComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var OurBlogComponent = /** @class */ (function () {
                function OurBlogComponent() {
                    this.titleSectionProp = {
                        class: 'title-shadow  text-center',
                        title: 'Blog',
                        subTitle: 'Recent Blog'
                    };
                    this.List = [
                        {
                            img: './assets/images/about-us/02.png',
                            name: 'HTML',
                            time: 'September 26, 2019 ',
                            title: 'Build Construction',
                            desc: '“They bring to you a host of beautifully created infographics that contain the latest digital marketing ',
                        },
                        {
                            img: './assets/images/about-us/03.png',
                            name: 'Design',
                            time: 'September 26, 2019 ',
                            title: 'Life Lack Meaning',
                            desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
                        },
                        {
                            img: './assets/images/about-us/04.png',
                            name: 'HTML',
                            time: 'September 26, 2019 ',
                            title: 'Construction industry',
                            desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing',
                        },
                        {
                            img: './assets/images/about-us/05.png',
                            name: 'CSS',
                            time: 'September 26, 2019 ',
                            title: 'Content Marketing',
                            desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
                        }
                    ];
                }
                OurBlogComponent.prototype.ngOnInit = function () {
                };
                return OurBlogComponent;
            }());
            OurBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-our-blog',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-blog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/components/our-blog/our-blog.component.html")).default
                })
            ], OurBlogComponent);
            /***/ 
        }),
        /***/ "./src/app/landing-page4/components/our-client/our-client.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/landing-page4/components/our-client/our-client.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: OurClientComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurClientComponent", function () { return OurClientComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var OurClientComponent = /** @class */ (function () {
                function OurClientComponent() {
                    this.List1 = [
                        { title: 'Microsoft Partner of the Year Award', image: './assets/images/awards/1.png' },
                        { title: 'Global Sourcing Awards 2018 Finalist', image: './assets/images/awards/2.png' },
                        { title: 'Gold Winner of 2013 Horizon Awards', image: './assets/images/awards/3.png' },
                        { title: 'European Software Testing Awards Finalist', image: './assets/images/awards/4.png' }
                    ];
                    this.List2 = [
                        { title: 'Microsoft Partner of the Year Award', image: './assets/images/awards/5.png' },
                        { title: 'Global Sourcing Awards 2018 Finalist', image: './assets/images/awards/1.png' },
                        { title: 'Gold Winner of 2013 Horizon Awards', image: './assets/images/awards/2.png' }
                    ];
                }
                OurClientComponent.prototype.ngOnInit = function () {
                };
                return OurClientComponent;
            }());
            OurClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-our-client',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-client.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/components/our-client/our-client.component.html")).default
                })
            ], OurClientComponent);
            /***/ 
        }),
        /***/ "./src/app/landing-page4/components/our-counter/our-counter.component.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/landing-page4/components/our-counter/our-counter.component.ts ***!
          \*******************************************************************************/
        /*! exports provided: OurCounterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurCounterComponent", function () { return OurCounterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var OurCounterComponent = /** @class */ (function () {
                function OurCounterComponent() {
                    this.titleSectionProp = {
                        class: 'text-white  text-left',
                        title: '',
                        subTitle: 'Transform Your Business Faster Using Data Science and Analysis',
                        description: 'we keep on working till to make customer satisfaction.'
                    };
                }
                OurCounterComponent.prototype.ngOnInit = function () {
                };
                return OurCounterComponent;
            }());
            OurCounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-our-counter',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-counter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/components/our-counter/our-counter.component.html")).default
                })
            ], OurCounterComponent);
            /***/ 
        }),
        /***/ "./src/app/landing-page4/components/our-partner/our-partner.component.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/landing-page4/components/our-partner/our-partner.component.ts ***!
          \*******************************************************************************/
        /*! exports provided: OurPartnerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurPartnerComponent", function () { return OurPartnerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var OurPartnerComponent = /** @class */ (function () {
                function OurPartnerComponent() {
                    this.List = [
                        { img: '1.png' },
                        { img: '2.png' },
                        { img: '3.png' },
                        { img: '4.png' },
                        { img: '1.png' },
                        { img: '2.png' }
                    ];
                }
                OurPartnerComponent.prototype.ngOnInit = function () {
                };
                return OurPartnerComponent;
            }());
            OurPartnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-our-partner',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-partner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/components/our-partner/our-partner.component.html")).default
                })
            ], OurPartnerComponent);
            /***/ 
        }),
        /***/ "./src/app/landing-page4/components/our-services/our-services.component.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/landing-page4/components/our-services/our-services.component.ts ***!
          \*********************************************************************************/
        /*! exports provided: OurServicesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServicesComponent", function () { return OurServicesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var OurServicesComponent = /** @class */ (function () {
                function OurServicesComponent() {
                    this.titleSectionProp = {
                        class: 'text-center',
                        title: 'Our Services',
                        subTitle: 'Explore Our Data Services'
                    };
                    this.navList = [
                        {
                            id: 'tab-big-data',
                            title: 'Big Data',
                            img: '03.png',
                            link: '/services',
                            active: true,
                            subtitle: 'Choose Your Software Development Service by Category',
                            desc: 'Tame your big data through robust solutions that empower data collection, storage, processing and analysis.',
                            chkList1: ['Advance Advisory Team', 'Simply dummy text of the'],
                            chkList2: ['Professional Consulting Services', 'It is a long established fact.'],
                            chkList3: ['24/7 Support Help Center', 'will be distracted by the of readable']
                        },
                        {
                            id: 'tab-machine-learning',
                            title: 'Machine Learning',
                            img: '02.png',
                            link: '/services',
                            subtitle: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
                            subtitle2: 'Dignissimos ducimus qui blanditiis',
                            desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.',
                            chkList: ['Advance Advisory Team', 'Simply dummy text of the', 'Simply dummy text of the', 'Advance Advisory Team'],
                        },
                        {
                            id: 'tab-analytical-ai',
                            title: 'Analytical AI',
                            img: '01.png',
                            link: '/services',
                            subtitle: 'Choose Your Software Development Service by Category',
                            desc: 'Tame your big data through robust solutions that empower data collection, storage, processing and analysis.',
                            chkList1: ['Advance Advisory Team', 'Simply dummy text of the'],
                            chkList2: ['Professional Consulting Services', 'It is a long established fact.'],
                            chkList3: ['24/7 Support Help Center', 'will be distracted by the of readable']
                        },
                        {
                            id: 'tab-computer-vision',
                            title: 'Computer Vision',
                            img: '04.png',
                            link: '/services',
                            subtitle: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
                            subtitle2: 'Dignissimos ducimus qui blanditiis',
                            desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.',
                            chkList: ['Advance Advisory Team', 'Simply dummy text of the', 'Simply dummy text of the', 'Advance Advisory Team'],
                        }
                    ];
                }
                OurServicesComponent.prototype.ngOnInit = function () {
                };
                return OurServicesComponent;
            }());
            OurServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-our-services',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/components/our-services/our-services.component.html")).default
                })
            ], OurServicesComponent);
            /***/ 
        }),
        /***/ "./src/app/landing-page4/components/our-testimonial/our-testimonial.component.ts": 
        /*!***************************************************************************************!*\
          !*** ./src/app/landing-page4/components/our-testimonial/our-testimonial.component.ts ***!
          \***************************************************************************************/
        /*! exports provided: OurTestimonialComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurTestimonialComponent", function () { return OurTestimonialComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var OurTestimonialComponent = /** @class */ (function () {
                function OurTestimonialComponent() {
                    this.titleSectionProp = {
                        class: 'text-center',
                        title: 'TESTIMONIALS',
                        subTitle: 'What Our Clients Say'
                    };
                    this.List = [
                        {
                            img: "1.jpg",
                            name: "Jack White",
                            designation: "CEO",
                            desc: "Richard McClintock, a Latin professor at Hampden-Sydney consectetur adip isicing elit, sed dolore magna aliqua hampden. Latin professor at Hampden-Sydney consectetur."
                        },
                        {
                            img: "2.jpg",
                            name: "Walhan Bobe",
                            designation: "Business Advisor",
                            desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed ut perspiciatis error. Perspiciatis unde omnis iste."
                        },
                        {
                            img: "3.jpg",
                            name: "Mark McManus",
                            designation: "COO",
                            desc: "“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.”"
                        }
                    ];
                }
                OurTestimonialComponent.prototype.ngOnInit = function () {
                };
                return OurTestimonialComponent;
            }());
            OurTestimonialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-our-testimonial',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-testimonial.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/components/our-testimonial/our-testimonial.component.html")).default
                })
            ], OurTestimonialComponent);
            /***/ 
        }),
        /***/ "./src/app/landing-page4/components/revolution-slider4/revolution-slider4.component.ts": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/landing-page4/components/revolution-slider4/revolution-slider4.component.ts ***!
          \*********************************************************************************************/
        /*! exports provided: RevolutionSlider4Component */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevolutionSlider4Component", function () { return RevolutionSlider4Component; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var RevolutionSlider4Component = /** @class */ (function () {
                function RevolutionSlider4Component() {
                }
                RevolutionSlider4Component.prototype.ngOnInit = function () {
                };
                return RevolutionSlider4Component;
            }());
            RevolutionSlider4Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-revolution-slider4',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./revolution-slider4.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/components/revolution-slider4/revolution-slider4.component.html")).default
                })
            ], RevolutionSlider4Component);
            /***/ 
        }),
        /***/ "./src/app/landing-page4/components/revolution-slider4/revolution-slider4.module.ts": 
        /*!******************************************************************************************!*\
          !*** ./src/app/landing-page4/components/revolution-slider4/revolution-slider4.module.ts ***!
          \******************************************************************************************/
        /*! exports provided: RevolutionSlider4Module */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevolutionSlider4Module", function () { return RevolutionSlider4Module; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _revolution_slider4_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./revolution-slider4.component */ "./src/app/landing-page4/components/revolution-slider4/revolution-slider4.component.ts");
            var RevolutionSlider4Module = /** @class */ (function () {
                function RevolutionSlider4Module() {
                }
                return RevolutionSlider4Module;
            }());
            RevolutionSlider4Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_revolution_slider4_component__WEBPACK_IMPORTED_MODULE_3__["RevolutionSlider4Component"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ],
                    exports: [
                        _revolution_slider4_component__WEBPACK_IMPORTED_MODULE_3__["RevolutionSlider4Component"]
                    ],
                    schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
                })
            ], RevolutionSlider4Module);
            /***/ 
        }),
        /***/ "./src/app/landing-page4/index/index.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/landing-page4/index/index.component.ts ***!
          \********************************************************/
        /*! exports provided: IndexComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function () { return IndexComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _xamin_plugins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../xamin/plugins.service */ "./src/app/xamin/plugins.service.ts");
            /* harmony import */ var _constants_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/menu */ "./src/constants/menu.js");
            var IndexComponent = /** @class */ (function () {
                function IndexComponent(plugins) {
                    this.plugins = plugins;
                    this.logoImage = './assets/images/logo.png';
                    this.contactInfo = {
                        contactNumber: '+0123456789',
                        email: 'support@iqnonicthemes.com',
                        address: '1234 North Avenue Luke Lane, South Bend, IN 360001'
                    };
                    this.footerProp = {
                        class: 'iq-over-image-bg',
                        logoImg: './assets/images/logo.png',
                        email: 'support@iqnonicthemes.com',
                        description: 'It is a long established fact that a reader will be distracted by the readable content.',
                    };
                    this.navItems = _constants_menu__WEBPACK_IMPORTED_MODULE_3__["topMenuBarItems"];
                }
                IndexComponent.prototype.ngOnInit = function () {
                    // Init all plugins...
                    var current = this;
                    current.plugins.revolutionSlider();
                    // tslint:disable-next-line:only-arrow-functions
                    setTimeout(function () {
                        current.plugins.index();
                    }, 200);
                };
                return IndexComponent;
            }());
            IndexComponent.ctorParameters = function () { return [
                { type: _xamin_plugins_service__WEBPACK_IMPORTED_MODULE_2__["PluginsService"] }
            ]; };
            IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-index',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page4/index/index.component.html")).default
                })
            ], IndexComponent);
            /***/ 
        }),
        /***/ "./src/app/landing-page4/landing-page4.module.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/landing-page4/landing-page4.module.ts ***!
          \*******************************************************/
        /*! exports provided: LandingPage4Module */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage4Module", function () { return LandingPage4Module; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../xamin/xamin.module */ "./src/app/xamin/xamin.module.ts");
            /* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index/index.component */ "./src/app/landing-page4/index/index.component.ts");
            /* harmony import */ var _components_revolution_slider4_revolution_slider4_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/revolution-slider4/revolution-slider4.module */ "./src/app/landing-page4/components/revolution-slider4/revolution-slider4.module.ts");
            /* harmony import */ var _components_our_partner_our_partner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/our-partner/our-partner.component */ "./src/app/landing-page4/components/our-partner/our-partner.component.ts");
            /* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/landing-page4/components/about-us/about-us.component.ts");
            /* harmony import */ var _components_our_services_our_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/our-services/our-services.component */ "./src/app/landing-page4/components/our-services/our-services.component.ts");
            /* harmony import */ var _components_our_counter_our_counter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/our-counter/our-counter.component */ "./src/app/landing-page4/components/our-counter/our-counter.component.ts");
            /* harmony import */ var _components_about_us1_about_us1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/about-us1/about-us1.component */ "./src/app/landing-page4/components/about-us1/about-us1.component.ts");
            /* harmony import */ var _components_our_testimonial_our_testimonial_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/our-testimonial/our-testimonial.component */ "./src/app/landing-page4/components/our-testimonial/our-testimonial.component.ts");
            /* harmony import */ var _components_our_client_our_client_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/our-client/our-client.component */ "./src/app/landing-page4/components/our-client/our-client.component.ts");
            /* harmony import */ var _components_our_blog_our_blog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/our-blog/our-blog.component */ "./src/app/landing-page4/components/our-blog/our-blog.component.ts");
            var routes = [
                {
                    path: '',
                    component: _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"],
                    children: []
                }
            ];
            var LandingPage4Module = /** @class */ (function () {
                function LandingPage4Module() {
                }
                return LandingPage4Module;
            }());
            LandingPage4Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"], _components_our_partner_our_partner_component__WEBPACK_IMPORTED_MODULE_7__["OurPartnerComponent"], _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"], _components_our_services_our_services_component__WEBPACK_IMPORTED_MODULE_9__["OurServicesComponent"], _components_our_counter_our_counter_component__WEBPACK_IMPORTED_MODULE_10__["OurCounterComponent"], _components_about_us1_about_us1_component__WEBPACK_IMPORTED_MODULE_11__["AboutUs1Component"], _components_our_testimonial_our_testimonial_component__WEBPACK_IMPORTED_MODULE_12__["OurTestimonialComponent"], _components_our_client_our_client_component__WEBPACK_IMPORTED_MODULE_13__["OurClientComponent"], _components_our_blog_our_blog_component__WEBPACK_IMPORTED_MODULE_14__["OurBlogComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                        _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_4__["XaminModule"],
                        _components_revolution_slider4_revolution_slider4_module__WEBPACK_IMPORTED_MODULE_6__["RevolutionSlider4Module"]
                    ]
                })
            ], LandingPage4Module);
            /***/ 
        })
    }]);
//# sourceMappingURL=landing-page4-landing-page4-module-es2015.js.map
//# sourceMappingURL=landing-page4-landing-page4-module-es5.js.map
//# sourceMappingURL=landing-page4-landing-page4-module-es5.js.map
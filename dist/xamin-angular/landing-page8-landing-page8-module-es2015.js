(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-page8-landing-page8-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/landing-page8/components/features/features.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing-page8/components/features/features.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"xamin-custom-bg iq-pb-70\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 wow fadeInUp\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div *ngFor=\"let list of List;let i = index\" class=\"col-lg-4 col-md-3 col-sm-12\">\n                <div class=\"consult-services xamin-square wow fadeInUp text-left {{  i < List.length - 1  ? '' : 'right' }}\">\n                    <div class=\"arrow_img\" *ngIf=\"list.arrow_image\">\n                        <img class=\"arrow-img\" src=\"{{ list.arrow_image }}\" alt=\"fancybox\">\n                    </div>\n                    <div class=\"square-effect bg\">\n                        <img src=\"{{ list.image }}\" alt=\"fancybox\">\n                        <div class=\"arrowbg_img\">\n                            <img src=\"{{ list.arrowbg_img }}\" alt=\"fancybox\">\n                        </div>\n                    </div>\n                    <h5 class=\"mb-2\">{{ list.title }}</h5>\n                    <p class=\"mb-0\">{{ list.desc }}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing-page8/components/how-we-work/how-we-work.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing-page8/components/how-we-work/how-we-work.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"pt-0\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div *ngFor=\"let list of List\" class=\"col-lg-4\">\n                <div class=\"consult-services wow fadeInUp large text-center\">\n                    <div class=\"circle-effect\">\n                        <img src=\"{{ list.image }}\" alt=\"fancybox\">\n                    </div>\n                    <h4 class=\"mb-2\">{{ list.title }}</h4>\n                    <p class=\"mb-0\">{{ list.subtitle }}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing-page8/components/our-blog/our-blog.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing-page8/components/our-blog/our-blog.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"pt-0\">\n    <div class=\"container\">\n        <div class=\"row layer-fly-one\">\n            <div class=\"col-md-12\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n                <div class=\"xamin-recentblog v1\">\n                    <app-blog-owl [List]=\"List\" [navigation]=\"navigation\"></app-blog-owl>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing-page8/components/our-partner/our-partner.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing-page8/components/our-partner/our-partner.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section >\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n               <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <app-customers [List]=\"List\" [hover]=\"hover\"></app-customers>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing-page8/components/our-service/our-service.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing-page8/components/our-service/our-service.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"pt-0 iq-pb-40\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 wow fadeInUp\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div *ngFor=\"let list of List\" class=\"col-lg-6 col-md-6 col-sm-12\">\n                <div class=\"fancy_service style2 wow fadeInUp  text-left\">\n                    <div class=\"bg_img\">\n                        <img class=\"bg_img-img\" src=\"{{ list.bg_img }}\" alt=\"fancybox\">\n                    </div>\n                    <div class=\"fancy_block\">\n                        <div class=\"fancy-info\">\n                            <h4 class=\"mb-3 title\">{{ list.title }}</h4>\n                            <p class=\"text-dark\">{{ list.desc }}</p>\n                            <a class=\"button blue-btn\" href=\"{{list.href}}\">\n                                <span class=\"btn-effect\"> Find Out More</span>\n                            </a>\n                        </div>\n                        <div class=\"fancy_img\">\n                            <img src=\"{{ list.image }}\" alt=\"fancybox\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing-page8/components/our-testimonial/our-testimonial.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing-page8/components/our-testimonial/our-testimonial.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"pt-0\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 wow fadeInUp\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n            </div>\n        </div>\n        <app-testimonials [List]=\"List\"></app-testimonials>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing-page8/components/pricing/pricing.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing-page8/components/pricing/pricing.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"pt-0 iq-ptb-70\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n            </div>\n        </div>\n        <div class=\"row justify-content-center\">\n            <div *ngFor=\"let list of List\" class=\"col-lg-4 col-md-6 text-center\">\n                <div class=\"iq-pricing \">\n                    <div class=\"priceing-title \">\n                        <h2>{{ list.price }}<span>{{ list.plan_desc }}</span></h2>\n                        <p class=\"mb-0\"></p>\n                    </div>\n                    <div class=\"priceing-description \">\n                        <h4 class=\"title mb-3\">{{ list.title }}</h4>\n                        <h5 class=\"subtitle mb-3\">{{ list.subtitle }}</h5>\n                        <ul class=\"pricing-list\">\n                            <li *ngFor=\"let service of list.services\">{{ service }}</li>\n                        </ul>\n                        <a class=\"button blue-btn\" href=\"#\" role=\"button\">Sign up Free</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing-page8/components/revolution-slider8/revolution-slider8.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing-page8/components/revolution-slider8/revolution-slider8.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"iq-banner\">\n    <p class=\"rs-p-wp-fix\"></p>\n    <rs-module-wrap id=\"rev_slider_8_1_wrapper\" data-alias=\"xamin-behaviour\" data-source=\"gallery\" style=\"background:transparent;padding:0;margin:0px auto;margin-top:0;margin-bottom:0;\">\n        <rs-module id=\"rev_slider_8_1\" style=\"display:none;\" data-version=\"6.1.0\">\n            <rs-slides>\n                <rs-slide data-key=\"rs-6\" data-title=\"Slide\" data-anim=\"ei:d;eo:d;s:1000;r:0;t:fade;sl:0;\">\n                    <img src=\"./assets/revslider/assets_slider8/xamin-demo8-01.jpg\" title=\"xamin-demo8-01.jpg\" width=\"1600\" height=\"812\" class=\"rev-slidebg\" data-no-retina>\n                    <!--\n                    --><h2\n                        id=\"slider-6-slide-6-layer-3\" \n                        class=\"rs-layer\"\n                        data-type=\"text\"\n                        data-color=\"#253b5c\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:218px;y:b;yo:233px;\"\n                        data-text=\"w:normal;s:80;l:90;fw:900;\"\n                        data-frame_1=\"e:Power4.easeInOut;st:600;sp:1200;sR:600;\"\n                        data-frame_1_sfx=\"se:blocktoright;\"\n                        data-frame_999=\"o:0;st:w;sR:7200;\"\n                        style=\"z-index:8;font-family:Lato;text-transform:uppercase;\"\n                    >Our \n                    </h2><!--\n\n                    --><h1\n                        id=\"slider-6-slide-6-layer-4\" \n                        class=\"rs-layer\"\n                        data-type=\"text\"\n                        data-color=\"#253b5c\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:214px;y:b;yo:128px;\"\n                        data-text=\"w:normal;s:120;l:90;fw:900;\"\n                        data-frame_1=\"e:Power4.easeInOut;st:600;sp:1200;sR:600;\"\n                        data-frame_1_sfx=\"se:blocktoright;\"\n                        data-frame_999=\"o:0;st:w;sR:7200;\"\n                        style=\"z-index:9;font-family:Lato;text-transform:uppercase;\"\n                    >Responsibility \n                    </h1><!--\n\n                    --><h3\n                        id=\"slider-6-slide-6-layer-7\" \n                        class=\"rs-layer\"\n                        data-type=\"text\"\n                        data-color=\"#253b5c\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:769px;y:b;yo:62px;\"\n                        data-text=\"w:normal;s:30;l:50;fw:900;\"\n                        data-frame_1=\"e:Power4.easeInOut;st:600;sp:1200;sR:600;\"\n                        data-frame_1_sfx=\"se:blocktoright;\"\n                        data-frame_999=\"o:0;st:w;sR:7200;\"\n                        style=\"z-index:10;font-family:Lato;text-transform:uppercase;\"\n                    >\n                    </h3><!--\n\n                    --><rs-layer\n                        id=\"slider-6-slide-6-layer-8\" \n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:c;xo:-384px;y:c;yo:17px;\"\n                        data-text=\"w:normal;\"\n                        data-dim=\"w:28px;h:28px;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:1900;sp:1000;sR:1900;\"\n                        data-frame_999=\"o:0;st:w;sR:6100;\"\n                        data-loop_0=\"o:0;\"\n                        data-loop_999=\"sp:3000;e:Sine.easeInOut;yyf:t;\"\n                        style=\"z-index:14;font-family:Roboto;\"\n                    ><img src=\"./assets/revslider/assets_slider8/xamin-dom08-02.png\" width=\"28\" height=\"28\" data-no-retina> \n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-6-slide-6-layer-9\" \n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:c;xo:101px;y:c;yo:17px;\"\n                        data-text=\"w:normal;\"\n                        data-dim=\"w:28px;h:28px;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:1800;sp:1000;sR:1800;\"\n                        data-frame_999=\"o:0;st:w;sR:6200;\"\n                        data-loop_0=\"o:0;\"\n                        data-loop_999=\"sp:5000;e:Sine.easeInOut;yyf:t;\"\n                        style=\"z-index:13;font-family:Roboto;\"\n                    ><img src=\"./assets/revslider/assets_slider8/xamin-dom08-02.png\" width=\"28\" height=\"28\" data-no-retina> \n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-6-slide-6-layer-10\" \n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:r;xo:209px;y:b;yo:209px;\"\n                        data-text=\"w:normal;\"\n                        data-dim=\"w:28px;h:28px;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:1700;sp:1000;sR:1700;\"\n                        data-frame_999=\"o:0;st:w;sR:6300;\"\n                        data-loop_0=\"o:0;\"\n                        data-loop_999=\"sp:1500;e:Sine.easeInOut;yyf:t;\"\n                        style=\"z-index:12;font-family:Roboto;\"\n                    ><img src=\"./assets/revslider/assets_slider8/xamin-dom08-02.png\" width=\"28\" height=\"28\" data-no-retina> \n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-6-slide-6-layer-11\" \n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:c;xo:-84px;y:c;yo:121px;\"\n                        data-text=\"w:normal;\"\n                        data-dim=\"w:44px;h:44px;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:2100;sp:1000;sR:2100;\"\n                        data-frame_999=\"o:0;st:w;sR:5900;\"\n                        data-loop_0=\"o:0;\"\n                        data-loop_999=\"sp:1500;e:Sine.easeInOut;yyf:t;\"\n                        style=\"z-index:16;font-family:Roboto;\"\n                    ><img src=\"./assets/revslider/assets_slider8/xamin-d8-03.png\" width=\"44\" height=\"44\" data-no-retina> \n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-6-slide-6-layer-12\" \n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:c;xo:389px;y:c;yo:121px;\"\n                        data-text=\"w:normal;\"\n                        data-dim=\"w:44px;h:44px;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:2000;sp:1000;sR:2000;\"\n                        data-frame_999=\"o:0;st:w;sR:6000;\"\n                        data-loop_0=\"o:0;\"\n                        data-loop_999=\"sp:4000;e:Sine.easeInOut;yyf:t;\"\n                        style=\"z-index:15;font-family:Roboto;\"\n                    ><img src=\"./assets/revslider/assets_slider8/xamin-d8-03.png\" width=\"44\" height=\"44\" data-no-retina> \n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-6-slide-6-layer-13\" \n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:r;xo:107px;y:241px;\"\n                        data-text=\"w:normal;\"\n                        data-dim=\"w:28px;h:28px;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:1600;sp:1000;sR:1600;\"\n                        data-frame_999=\"o:0;st:w;sR:6400;\"\n                        data-loop_0=\"o:0;\"\n                        data-loop_999=\"sp:8000;e:Sine.easeInOut;yyf:t;\"\n                        style=\"z-index:11;font-family:Roboto;\"\n                    ><img src=\"./assets/revslider/assets_slider8/xamin-dom08-02.png\" width=\"28\" height=\"28\" data-no-retina> \n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-6-slide-6-layer-14\" \n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:c;xo:204px;y:c;yo:116px;\"\n                        data-text=\"w:normal;\"\n                        data-dim=\"w:76px;h:76px;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:2200;sp:1000;sR:2200;\"\n                        data-frame_999=\"o:0;st:w;sR:5800;\"\n                        data-loop_0=\"o:0;\"\n                        data-loop_999=\"sp:1500;e:Sine.easeInOut;yyf:t;\"\n                        style=\"z-index:17;font-family:Roboto;\"\n                    ><img src=\"./assets/revslider/assets_slider8/xamin-d8-04.png\" width=\"76\" height=\"76\" data-no-retina> \n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-6-slide-6-layer-15\" \n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:r;xo:203px;y:c;yo:121px;\"\n                        data-text=\"w:normal;\"\n                        data-dim=\"w:28px;h:28px;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:2400;sp:1000;sR:2400;\"\n                        data-frame_999=\"o:0;st:w;sR:5600;\"\n                        data-loop_0=\"o:0;\"\n                        data-loop_999=\"sp:7000;e:Sine.easeInOut;yyf:t;\"\n                        style=\"z-index:19;font-family:Roboto;\"\n                    ><img src=\"./assets/revslider/assets_slider8/xamin-d8-05.png\" width=\"28\" height=\"28\" data-no-retina> \n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-6-slide-6-layer-16\" \n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:r;xo:492px;y:c;yo:-87px;\"\n                        data-text=\"w:normal;\"\n                        data-dim=\"w:28px;h:28px;\"\n                        data-frame_0=\"sX:0.9;sY:0.9;\"\n                        data-frame_1=\"st:2300;sp:1000;sR:2300;\"\n                        data-frame_999=\"o:0;st:w;sR:5700;\"\n                        data-loop_0=\"o:0;\"\n                        data-loop_999=\"sp:2000;e:Sine.easeInOut;yyf:t;\"\n                        style=\"z-index:18;font-family:Roboto;\"\n                    ><img src=\"./assets/revslider/assets_slider8/xamin-d8-05.png\" width=\"28\" height=\"28\" data-no-retina> \n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-6-slide-6-layer-17\" \n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:1243px;y:210px;\"\n                        data-text=\"w:normal;\"\n                        data-dim=\"w:76px;h:76px;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:2500;sp:1000;sR:2500;\"\n                        data-frame_999=\"o:0;st:w;sR:5500;\"\n                        data-loop_0=\"o:0;\"\n                        data-loop_999=\"sp:10000;e:Sine.easeInOut;yyf:t;\"\n                        style=\"z-index:20;font-family:Roboto;\"\n                    ><img src=\"./assets/revslider/assets_slider8/xamin-d8-07.png\" width=\"76\" height=\"76\" data-no-retina> \n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-6-slide-6-layer-18\" \n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:r;xo:396px;y:241px;\"\n                        data-text=\"w:normal;\"\n                        data-dim=\"w:28px;h:28px;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:2600;sp:1000;sR:2600;\"\n                        data-frame_999=\"o:0;st:w;sR:5400;\"\n                        data-loop_0=\"o:0;\"\n                        data-loop_999=\"sp:5000;e:Sine.easeInOut;yyf:t;\"\n                        style=\"z-index:21;font-family:Roboto;\"\n                    ><img src=\"./assets/revslider/assets_slider8/xamin-d8-06.png\" width=\"28\" height=\"28\" data-no-retina> \n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-6-slide-6-layer-20\" \n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:c;xo:-91px;y:c;yo:11px;\"\n                        data-text=\"w:normal;\"\n                        data-dim=\"w:264px;h:264px;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:2700;sp:1000;sR:2700;\"\n                        data-frame_999=\"o:0;st:w;sR:5300;\"\n                        data-loop_999=\"rZ:360;sp:30000;\"\n                        style=\"z-index:22;font-family:Roboto;\"\n                    ><img src=\"./assets/revslider/assets_slider8/xamin-d8-08.png\" width=\"264\" height=\"264\" data-no-retina> \n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-6-slide-6-layer-21\" \n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:r;xo:-13px;y:c;yo:120px;\"\n                        data-text=\"w:normal;\"\n                        data-dim=\"w:264px;h:264px;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:2800;sp:1000;sR:2800;\"\n                        data-frame_999=\"o:0;st:w;sR:5200;\"\n                        data-loop_999=\"rZ:360;sp:30000;\"\n                        style=\"z-index:24;font-family:Roboto;\"\n                    ><img src=\"./assets/revslider/assets_slider8/xamin-d8-09.png\" width=\"264\" height=\"264\" data-no-retina> \n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-6-slide-6-layer-22\" \n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:r;xo:112px;y:c;yo:-3px;\"\n                        data-text=\"w:normal;\"\n                        data-dim=\"w:196px;h:184px;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:2900;sp:1000;sR:2900;\"\n                        data-frame_999=\"o:0;st:w;sR:5100;\"\n                        style=\"z-index:26;font-family:Roboto;\"\n                    ><img src=\"./assets/revslider/assets_slider8/xamin-d8-10.png\" width=\"196\" height=\"184\" data-no-retina> \n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-6-slide-6-layer-23\" \n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:701px;y:259px;\"\n                        data-text=\"w:normal;\"\n                        data-dim=\"w:226px;h:184px;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:3010;sp:1000;sR:3010;\"\n                        data-frame_999=\"o:0;st:w;sR:4990;\"\n                        style=\"z-index:27;font-family:Roboto;\"\n                    ><img src=\"./assets/revslider/assets_slider8/xamin-d8-12.png\" width=\"226\" height=\"184\" data-no-retina> \n                    </rs-layer><!--\n\n                    --><h4\n                        id=\"slider-6-slide-6-layer-24\" \n                        class=\"rs-layer\"\n                        data-type=\"text\"\n                        data-color=\"#253b5c\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:743px;y:271px;\"\n                        data-text=\"w:normal;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:3200;sp:1000;sR:3200;\"\n                        data-frame_999=\"o:0;st:w;sR:4800;\"\n                        style=\"z-index:29;font-family:Roboto;\"\n                    >Carbon \n                    </h4><!--\n\n                    --><rs-layer\n                        id=\"slider-6-slide-6-layer-25\" \n                        data-type=\"text\"\n                        data-color=\"#253b5c\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:r;xo:159px;y:c;yo:-71px;\"\n                        data-text=\"w:normal;\"\n                        data-frame_0=\"sX:0.9;sY:0.9;\"\n                        data-frame_1=\"st:3100;sp:1000;sR:3100;\"\n                        data-frame_999=\"o:0;st:w;sR:4900;\"\n                        style=\"z-index:30;font-family:Roboto;\"\n                    >Digital \n                    </rs-layer><!--\n\n                    --><h4\n                        id=\"slider-6-slide-6-layer-26\" \n                        class=\"rs-layer\"\n                        data-type=\"text\"\n                        data-color=\"#253b5c\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:c;xo:-9px;y:c;yo:-134px;\"\n                        data-text=\"w:normal;s:28;l:38;fw:700;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:3400;sp:1000;sR:3400;\"\n                        data-frame_999=\"o:0;st:w;sR:4600;\"\n                        style=\"z-index:30;font-family:Lato;\"\n                    >Reduction \n                    </h4><!--\n\n                    --><h4\n                        id=\"slider-6-slide-6-layer-27\" \n                        class=\"rs-layer\"\n                        data-type=\"text\"\n                        data-color=\"#253b5c\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:r;xo:157px;y:c;yo:-38px;\"\n                        data-text=\"w:normal;s:28;l:38;fw:700;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:3300;sp:1000;sR:3300;\"\n                        data-frame_999=\"o:0;st:w;sR:4700;\"\n                        style=\"z-index:30;font-family:Lato;\"\n                    >Divide \n                    </h4><!--\n\n                    --><rs-layer\n                        id=\"slider-6-slide-6-layer-31\" \n                        data-type=\"text\"\n                        data-color=\"#253b5c\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:-42px;y:245px;\"\n                        data-text=\"w:normal;\"\n                        data-btrans=\"rZ:-90;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:3600;sp:1000;sR:3600;\"\n                        data-frame_999=\"o:0;st:w;sR:4400;\"\n                        style=\"z-index:33;font-family:Roboto;text-transform:capitalize;\"\n                    > \n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-6-slide-6-layer-32\" \n                        data-type=\"text\"\n                        data-color=\"#253b5c\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:r;xo:-50px;y:b;yo:86px;\"\n                        data-text=\"w:normal;\"\n                        data-btrans=\"rZ:-90;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:3500;sp:1000;sR:3500;\"\n                        data-frame_999=\"o:0;st:w;sR:4500;\"\n                        style=\"z-index:32;font-family:Roboto;text-transform:capitalize;\"\n                    > \n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-6-slide-6-layer-33\" \n                        data-type=\"text\"\n                        data-color=\"#ffffff\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:1465px;y:554px;\"\n                        data-text=\"w:normal;s:30;l:30;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:2800;sp:1000;\"\n                        data-frame_999=\"o:0;st:w;sR:5900;\"\n                        style=\"z-index:25;font-family:Roboto;\"\n                    ><span class=\"timer\" data-to=\"49\" data-speed=\"5000\"></span> \n                    </rs-layer><!--\n\n                    --><rs-layer\n                        id=\"slider-6-slide-6-layer-34\" \n                        data-type=\"text\"\n                        data-color=\"#ffffff\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:694px;y:445px;\"\n                        data-text=\"w:normal;s:30;l:30;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:2700;sp:1000;sR:2700;\"\n                        data-frame_999=\"o:0;st:w;sR:5300;\"\n                        style=\"z-index:23;font-family:Roboto;\"\n                    ><span class=\"timer\" data-to=\"59\" data-speed=\"5000\"></span> \n                    </rs-layer><!--\n-->\t\t\t\t\t\t</rs-slide>\n                </rs-slides>\n            <rs-progress class=\"rs-bottom\" style=\"visibility: hidden !important;\"></rs-progress>\n        </rs-module>\n    </rs-module-wrap>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing-page8/components/usage/usage.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing-page8/components/usage/usage.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"pt-0 iq-pb-55\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"iq-get-data-left\" \n     [style.background-image]=\"'url(' + '/assets/images/social.jpg' + ')'\" \n     style=\"background-size: contain; background-position: center; background-repeat: no-repeat; height: 500px; width: 100%;\">\n</div>\n            </div>\n            <div class=\"col-md-6\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n                <div *ngFor=\"let list of List\" class=\"fancybox-visualization-service wow fadeInUp  text-left\">\n                    <img [src]=\"list.image\" >\n\n                    <!-- <div class=\"icon-bg\">\n                        <i aria-hidden=\"true\" class=\"{{ list.icon }}\"></i>\n                    </div> -->\n                    <!-- <div class=\"service-detail align-self-center\">\n                        <h5 class=\"mb-2 text-primary\" >{{ list.title }}</h5>\n                        <p>{{ list.desc }}</p>\n                    </div> -->\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- <section class=\"pt-0 iq-pb-55\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"custom-tab-userbehavior text-left   mt-md-5\">   \n                    <ul class=\"nav nav-pills mb-5\" id=\"pills-tab\" role=\"tablist\">\n                        <li  class=\"nav-item\" *ngFor=\"let list of List\">\n                            <span class=\"line\"></span>\n                            <a class=\"nav-link {{ list.active !== undefined && list.active ? 'active show' : '' }}\" data-toggle=\"pill\" (click)=\"tabActive(list.id)\"  href=\"{{ '#' + list.id }}\" role=\"tab\" [attr.aria-selected]=\" list.active !== undefined ? true : false \">\n                                <img src=\"{{ list.image }}\" alt=\"tab-image\" class=\"img-fluid\">\n                                <h6 class=\"tab-title\">{{ list.title }}</h6>\n                                <span class=\"dot\"></span>\n                            </a>\n                        </li>\n                    </ul>\n                    <div class=\"tab-content\">\n                        <div id=\"tab-collect-data\" class=\"tab-pane fade active show\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"title-box wow fadeInUp  text-left\">\n                                        <span class=\"title-design\">01</span>\n                                        <h2>Collect Accurate Data</h2>\n                                        <p>Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!</p>\n                                    </div>\n                                    <div class=\"text-left\">\n                                        <ul class=\"iq-list\">\n                                            <li><i class=\"fa fa-check\"></i><span>Boost Seo ranking</span></li>\n                                            <li><i class=\"fa fa-check\"></i><span>Marketing</span></li>\n                                            <li><i class=\"fa fa-check\"></i><span>Social Sharing</span></li>\n                                        </ul>\n                                    </div>\n                                    <div class=\" text-left mt-5 \">\n                                        <a class=\"button button-icon\" href=\"#\"><span class=\"btn-effect\"> View Details</span></a>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6 mt-5 mt-md-0\">         \n                                    <img width=\"562\" height=\"532\" src=\"./assets/images/about-us/13.png\" class=\"attachment-full\" alt=\"\">\n                                </div>\n                            </div>\n                        </div>\n                        <div id=\"tab-identifytrends\" class=\"tab-pane fade\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <img width=\"1260\" height=\"954\" src=\"./assets/images/usage/01-01.png\" >\n                                </div>\n                                <div class=\"col-md-6\">                                       \n                                    <div class=\"title-box wow fadeInUp  text-left \" >\n                                        <span class=\"title-design\">02</span>\n                                        <h2>Collect Accurate Data</h2>\n                                        <p>Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!</p>\n                                    </div>\n                                    <div class=\"text-left  \">\n                                        <ul class=\"iq-list\">\n                                            <li><i class=\"fa fa-check\"></i><span>Boost Seo ranking</span></li>\n                                            <li><i class=\"fa fa-check\"></i><span>Marketing</span></li>\n                                            <li><i class=\"fa fa-check\"></i><span>Social Sharing</span></li>\n                                        </ul>\n                                    </div>\n                                    <div class=\" text-left mt-5 \">\n                                        <a class=\"button button-icon\" href=\"#\"><span class=\"btn-effect\"> View Details</span></a>\n                                    </div>\n                                </div>   \n                            </div>                                  \n                        </div>\n                        <div id=\"tab-understand\" class=\"tab-pane fade\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"title-box wow fadeInUp  text-left\">\n                                        <span class=\"title-design\">03</span>\n                                        <h2>Collect Accurate Data</h2>\n                                        <p>Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!</p>\n                                    </div>\n                                    <div class=\"text-left  \">\n                                        <ul class=\"iq-list\">\n                                            <li><i class=\"fa fa-check\"></i><span>Boost Seo ranking</span></li>\n                                            <li><i class=\"fa fa-check\"></i><span>Marketing</span></li>\n                                            <li><i class=\"fa fa-check\"></i><span>Social Sharing</span></li>\n                                        </ul>\n                                    </div>\n                                    <div class=\" text-left mt-5 \">\n                                        <a class=\"button button-icon\" href=\"#\"><span class=\"btn-effect\"> View Details</span></a>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">         \n                                    <img width=\"562\" height=\"532\" src=\"./assets/images/about-us/13.png\" class=\"attachment-full\" alt=\"\">\n                                </div>\n                            </div>\n                        </div>\n                        <div id=\"tab-goals-hypotheses\" class=\"tab-pane fade\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <img width=\"1260\" height=\"954\" src=\"./assets/images/usage/01-01.png\" >\n                                </div>\n                                <div class=\"col-md-6 mt-5 mt-md-0\">                                       \n                                    <div class=\"title-box wow fadeInUp  text-left \" >\n                                        <span class=\"title-design\">04</span>\n                                        <h2>Collect Accurate Data</h2>\n                                        <p>Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!</p>\n                                    </div>\n                                    <div class=\"text-left  \">\n                                        <ul class=\"iq-list\">\n                                            <li><i class=\"fa fa-check\"></i><span>Boost Seo ranking</span></li>\n                                            <li><i class=\"fa fa-check\"></i><span>Marketing</span></li>\n                                            <li><i class=\"fa fa-check\"></i><span>Social Sharing</span></li>\n                                        </ul>\n                                    </div>\n                                    <div class=\" text-left mt-5 \">\n                                        <a class=\"button button-icon\" href=\"#\"><span class=\"btn-effect\"> View Details</span></a>\n                                    </div>\n                                </div>   \n                            </div>\n                        </div>\n                        <div id=\"tab-take-action\" class=\"tab-pane fade\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">                                       \n                                    <div class=\"title-box wow fadeInUp  text-left \" >\n                                        <span class=\"title-design\">05</span>\n                                        <h2>Collect Accurate Data</h2>\n                                        <p>Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!</p>\n                                    </div>\n                                    <div class=\"text-left  \">\n                                        <ul class=\"iq-list\">\n                                            <li><i class=\"fa fa-check\"></i><span>Boost Seo ranking</span></li>\n                                            <li><i class=\"fa fa-check\"></i><span>Marketing</span></li>\n                                            <li><i class=\"fa fa-check\"></i><span>Social Sharing</span></li>\n                                            <li><i class=\"fa fa-check\"></i><span>Retention</span></li>\n                                            <li><i class=\"fa fa-check\"></i><span>Reviews Generatib</span></li>\n                                        </ul>\n                                    </div>\n                                    <div class=\" text-left mt-5 \">\n                                        <a class=\"button button-icon\" href=\"#\"><span class=\"btn-effect\"> View Details</span></a>\n                                    </div>\n                                </div>   \n                                <div class=\"col-md-6\">\n                                    <img width=\"1260\" height=\"954\" src=\"./assets/images/usage/01-01.png\" >\n                                </div>\n                            </div>\n                        </div>                        \n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section > -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing-page8/index/index.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing-page8/index/index.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header component start-->\n<app-header [logoImg]=\"logoImage\" [navItemList]=\"navItems\" [contactInfo]=\"contactInfo\"></app-header>\n<!-- Header component end-->\n<!-- START REVOLUTION SLIDER -->\n<app-revolution-slider8></app-revolution-slider8>\n<!-- END REVOLUTION SLIDER -->\n<!-- MainContent -->\n<div class=\"main-content\">\n    <app-our-partner></app-our-partner>\n    <app-usage></app-usage>\n    <app-features></app-features>\n    <app-our-service></app-our-service>\n    <!-- <app-how-we-work></app-how-we-work> -->\n    <!-- <app-pricing></app-pricing> -->\n    <!-- <app-our-testimonial></app-our-testimonial> -->\n    <!-- <app-our-blog></app-our-blog> -->\n</div>\n<!-- Footer start -->\n<app-footer-style1 [footerProp]=\"footerProp\" [contactInfo]=\"contactInfo\"></app-footer-style1>\n<!-- Footer end -->"

/***/ }),

/***/ "./src/app/landing-page8/components/features/features.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/landing-page8/components/features/features.component.ts ***!
  \*************************************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FeaturesComponent = class FeaturesComponent {
    constructor() {
        this.titleSectionProp = {
            class: 'text-center',
            title: 'Responsibility',
            subTitle: 'Our Sustainability Strategy',
        };
        this.List = [
            {
                title: 'Holistic Sustainability',
                desc: 'DA integrates Sustainability considerations from the start of a portfolio company’s due diligence all the way through to its exit. We identify and monitor the most relevant Sustainability issues that directly reflect our portfolio companies’ unique operations. This integrated approach, in our opinion, drives the greatest Sustainability impact.',
                image: './assets/images/fancybox/25.png',
                arrow_image: './assets/images/fancybox/arrow-7.png',
                arrowbg_img: './assets/images/fancybox/bg-7-1.png',
            },
            {
                title: 'Transparency and Governance      ',
                desc: 'DA has developed a Responsible Investment Policy (RIP) which we believe incorporates industry leading practices in both the reporting and governance of our portfolio companies. DA aims to utilise independent standards-setting organization such as the “Sustainability Accounting Standards Board” and “Institutional Limited Partners Association Principals 3.0” to integrate industry specific frameworks and policies which best achieve our Sustainability goals.',
                image: './assets/images/fancybox/24.png',
                arrow_image: './assets/images/fancybox/arrow-7.png',
                arrowbg_img: './assets/images/fancybox/bg-7-1.png',
            },
            {
                title: 'The Future of Sustainability Practices      ',
                desc: 'DA will continually strive to achieve the best Sustainability reporting practices and regularly participates in responsible investment conferences. DA has incorporated sustainability considerations into its investment processes.      ',
                image: './assets/images/fancybox/26.png',
                arrow_image: './assets/images/fancybox/arrow-7.png',
                arrowbg_img: './assets/images/fancybox/bg-7-1.png',
            },
        ];
    }
    ngOnInit() {
    }
};
FeaturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-features',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./features.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page8/components/features/features.component.html")).default
    })
], FeaturesComponent);



/***/ }),

/***/ "./src/app/landing-page8/components/how-we-work/how-we-work.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/landing-page8/components/how-we-work/how-we-work.component.ts ***!
  \*******************************************************************************/
/*! exports provided: HowWeWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowWeWorkComponent", function() { return HowWeWorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HowWeWorkComponent = class HowWeWorkComponent {
    constructor() {
        this.titleSectionProp = {
            class: 'text-center',
            title: 'HOW WE WORK',
            subTitle: 'How Does Xamin Works'
        };
        this.List = [
            {
                title: 'User Behavior',
                subtitle: 'There are established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                image: './assets/images/services/07.png'
            },
            {
                title: 'Apply Algorithm',
                subtitle: 'Contrary to popular fact that a reader will be distracted by the readable when looking at its layout content of a page.',
                image: './assets/images/services/08.png'
            },
            {
                title: 'Apply Algoritham',
                subtitle: 'Many variations established fact reader will be distracted by the readable content of a page when at its layout looking.',
                image: './assets/images/services/09.png'
            }
        ];
    }
    ngOnInit() {
    }
};
HowWeWorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-how-we-work',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./how-we-work.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page8/components/how-we-work/how-we-work.component.html")).default
    })
], HowWeWorkComponent);



/***/ }),

/***/ "./src/app/landing-page8/components/our-blog/our-blog.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/landing-page8/components/our-blog/our-blog.component.ts ***!
  \*************************************************************************/
/*! exports provided: OurBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurBlogComponent", function() { return OurBlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OurBlogComponent = class OurBlogComponent {
    constructor() {
        this.titleSectionProp = {
            class: 'title-shadow text-center',
            title: 'BLOG',
            subTitle: 'Recent Blog',
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
        this.navigation = true;
    }
    ngOnInit() {
    }
};
OurBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-our-blog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-blog.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page8/components/our-blog/our-blog.component.html")).default
    })
], OurBlogComponent);



/***/ }),

/***/ "./src/app/landing-page8/components/our-partner/our-partner.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/landing-page8/components/our-partner/our-partner.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OurPartnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurPartnerComponent", function() { return OurPartnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OurPartnerComponent = class OurPartnerComponent {
    constructor() {
        this.titleSectionProp = {
            class: 'text-center',
            title: 'Sustainability',
        };
        this.List = [
            {
                img: '1.png',
            },
            {
                img: '27.png',
            },
            {
                img: '9.png',
            },
            {
                img: '24.png',
            },
            {
                img: '26.png',
            },
            {
                img: '25.png',
            },
            {
                img: '4.png',
            },
            {
                img: '6.png',
            },
            {
                img: '7.png',
            },
            {
                img: '10.png',
            },
            {
                img: '11.png',
            },
            {
                img: 'p.png',
            }
        ];
        this.hover = false;
    }
    ngOnInit() {
    }
};
OurPartnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-our-partner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-partner.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page8/components/our-partner/our-partner.component.html")).default
    })
], OurPartnerComponent);



/***/ }),

/***/ "./src/app/landing-page8/components/our-service/our-service.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/landing-page8/components/our-service/our-service.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OurServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServiceComponent", function() { return OurServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OurServiceComponent = class OurServiceComponent {
    constructor() {
        this.titleSectionProp = {
            class: 'text-center',
            title: 'Portfolio ',
            subTitle: 'Examples',
        };
        this.List = [
            {
                title: 'Welink',
                href: "https://welink.com/2022/08/24/forbes-on-the-acp-welink-founder-kevin-ross-continues-efforts-to-close-the-digital-divide/",
                desc: 'Welink provides powerful connectivity to address the digital divide in cities accross America.',
                image: './assets/images/fancybox/8.png',
                bg_img: './assets/images/fancybox/bg-7-2.png',
            },
            {
                title: 'Quantela',
                desc: 'Quantela has developed a contact tracing solution for covid-19 management for municipalities.',
                image: './assets/images/fancybox/9.png',
                bg_img: './assets/images/fancybox/bg-7-2.png',
                href: "https://www.quantela.com/",
            },
            {
                title: 'Packet Fabric',
                desc: 'PacketFabric is providing essential connectivity services across the United States as business, governments and schools move critical functions online during the pandemic.',
                image: './assets/images/fancybox/8.png',
                bg_img: './assets/images/fancybox/bg-7-2.png',
                href: "https://packetfabric.com/",
            },
        ];
    }
    ngOnInit() {
    }
};
OurServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-our-service',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-service.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page8/components/our-service/our-service.component.html")).default
    })
], OurServiceComponent);



/***/ }),

/***/ "./src/app/landing-page8/components/our-testimonial/our-testimonial.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/landing-page8/components/our-testimonial/our-testimonial.component.ts ***!
  \***************************************************************************************/
/*! exports provided: OurTestimonialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurTestimonialComponent", function() { return OurTestimonialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OurTestimonialComponent = class OurTestimonialComponent {
    constructor() {
        this.titleSectionProp = {
            class: 'text-center',
            title: 'OUR CUSTOMERS SAY',
            subTitle: 'Chosen Usage Examples',
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
    ngOnInit() {
    }
};
OurTestimonialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-our-testimonial',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-testimonial.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page8/components/our-testimonial/our-testimonial.component.html")).default
    })
], OurTestimonialComponent);



/***/ }),

/***/ "./src/app/landing-page8/components/pricing/pricing.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/landing-page8/components/pricing/pricing.component.ts ***!
  \***********************************************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PricingComponent = class PricingComponent {
    constructor() {
        this.titleSectionProp = {
            class: 'text-center',
            title: 'PRICING',
            subTitle: 'Simple and Transparent Pricing',
        };
        this.List = [
            {
                title: "Starter",
                subtitle: 'Feedback System',
                price: "29$",
                plan_desc: "/Month",
                href: "#",
                services: ["Live Chat and email", "Mobile SDK", "6000 + Intigrations", "Email, Chat and Social", 'Basic Help Center']
            },
            {
                title: "Growth",
                subtitle: 'Feedback System',
                price: "49$",
                plan_desc: "/Month",
                active: true,
                href: "#",
                services: ["Mobile SDK", "6000 + Intigrations", "Live Chat and email", "Email, Chat and Social", 'Basic Help Center']
            },
            {
                title: "Enterprise",
                subtitle: 'Feedback System',
                price: "99$",
                plan_desc: "/Month",
                href: "#",
                services: ["Live Chat and email", "Mobile SDK", "6000 + Intigrations", "Email, Chat and Social", 'Basic Help Center']
            }
        ];
    }
    ngOnInit() {
    }
};
PricingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pricing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pricing.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page8/components/pricing/pricing.component.html")).default
    })
], PricingComponent);



/***/ }),

/***/ "./src/app/landing-page8/components/revolution-slider8/revolution-slider8.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/landing-page8/components/revolution-slider8/revolution-slider8.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: RevolutionSlider8Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevolutionSlider8Component", function() { return RevolutionSlider8Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RevolutionSlider8Component = class RevolutionSlider8Component {
    constructor() { }
    ngOnInit() {
    }
};
RevolutionSlider8Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-revolution-slider8',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./revolution-slider8.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page8/components/revolution-slider8/revolution-slider8.component.html")).default
    })
], RevolutionSlider8Component);



/***/ }),

/***/ "./src/app/landing-page8/components/revolution-slider8/revolution-slider8.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/landing-page8/components/revolution-slider8/revolution-slider8.module.ts ***!
  \******************************************************************************************/
/*! exports provided: RevolutionSlider8Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevolutionSlider8Module", function() { return RevolutionSlider8Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _revolution_slider8_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./revolution-slider8.component */ "./src/app/landing-page8/components/revolution-slider8/revolution-slider8.component.ts");




let RevolutionSlider8Module = class RevolutionSlider8Module {
};
RevolutionSlider8Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_revolution_slider8_component__WEBPACK_IMPORTED_MODULE_3__["RevolutionSlider8Component"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _revolution_slider8_component__WEBPACK_IMPORTED_MODULE_3__["RevolutionSlider8Component"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], RevolutionSlider8Module);



/***/ }),

/***/ "./src/app/landing-page8/components/usage/usage.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/landing-page8/components/usage/usage.component.ts ***!
  \*******************************************************************/
/*! exports provided: UsageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsageComponent", function() { return UsageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UsageComponent = class UsageComponent {
    constructor() {
        this.titleSectionProp = {
            class: 'text-left',
            // title: 'Purpose',
            subTitle: 'Purpose',
            description: 'At Digital Alpha (“DA”) we believe that our fiduciary responsibility requires careful consideration of environmental and social factors. DA believes a tailored approach to sustainability issues for each of our portfolio companies will create value for both our LPs and other stakeholders.',
        };
        this.List = [
            {
                image: './assets/images/PRS.png'
                // title: 'Data Visualization Practices to Improve',
                // icon: 'fa fa-database',
                // desc: 'DA appreciates that tracking, collecting and reporting on Sustainability requires significant resources, however, we see that the incorporation of Sustainability is way of creating longer term sustainable growth for our portfolio companies. DA’s investments are predominantly ‘green’; developing technology and jobs related to the mission critical infrastructure needed in today’s modern world.'
            }
        ];
    }
    ngOnInit() {
    }
};
UsageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./usage.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page8/components/usage/usage.component.html")).default
    })
], UsageComponent);



/***/ }),

/***/ "./src/app/landing-page8/index/index.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page8/index/index.component.ts ***!
  \********************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _xamin_plugins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../xamin/plugins.service */ "./src/app/xamin/plugins.service.ts");
/* harmony import */ var _constants_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/menu */ "./src/constants/menu.js");




let IndexComponent = class IndexComponent {
    constructor(plugins) {
        this.plugins = plugins;
        this.logoImage = './assets/images/logo.png';
        this.contactInfo = {
            contactNumber: '+0123456789',
            email: 'support@iqnonicthemes.com',
            address: '1234 North Avenue Luke Lane, South Bend, IN 360001'
        };
        this.footerProp = {
            class: 'iq-over-dark-90',
            logoImg: './assets/images/logo.png',
            email: 'support@iqnonicthemes.com',
            description: 'It is a long established fact that a reader will be distracted by the readable content.',
        };
        this.navItems = _constants_menu__WEBPACK_IMPORTED_MODULE_3__["topMenuBarItems"];
    }
    ngOnInit() {
        // Init all plugins...
        const current = this;
        current.plugins.revolutionSlider();
        // tslint:disable-next-line:only-arrow-functions
        setTimeout(function () {
            current.plugins.index();
        }, 200);
    }
};
IndexComponent.ctorParameters = () => [
    { type: _xamin_plugins_service__WEBPACK_IMPORTED_MODULE_2__["PluginsService"] }
];
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page8/index/index.component.html")).default
    })
], IndexComponent);



/***/ }),

/***/ "./src/app/landing-page8/landing-page8.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/landing-page8/landing-page8.module.ts ***!
  \*******************************************************/
/*! exports provided: LandingPage8Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage8Module", function() { return LandingPage8Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../xamin/xamin.module */ "./src/app/xamin/xamin.module.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index/index.component */ "./src/app/landing-page8/index/index.component.ts");
/* harmony import */ var _components_revolution_slider8_revolution_slider8_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/revolution-slider8/revolution-slider8.module */ "./src/app/landing-page8/components/revolution-slider8/revolution-slider8.module.ts");
/* harmony import */ var _components_our_partner_our_partner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/our-partner/our-partner.component */ "./src/app/landing-page8/components/our-partner/our-partner.component.ts");
/* harmony import */ var _components_usage_usage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/usage/usage.component */ "./src/app/landing-page8/components/usage/usage.component.ts");
/* harmony import */ var _components_features_features_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/features/features.component */ "./src/app/landing-page8/components/features/features.component.ts");
/* harmony import */ var _components_our_service_our_service_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/our-service/our-service.component */ "./src/app/landing-page8/components/our-service/our-service.component.ts");
/* harmony import */ var _components_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/how-we-work/how-we-work.component */ "./src/app/landing-page8/components/how-we-work/how-we-work.component.ts");
/* harmony import */ var _components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pricing/pricing.component */ "./src/app/landing-page8/components/pricing/pricing.component.ts");
/* harmony import */ var _components_our_testimonial_our_testimonial_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/our-testimonial/our-testimonial.component */ "./src/app/landing-page8/components/our-testimonial/our-testimonial.component.ts");
/* harmony import */ var _components_our_blog_our_blog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/our-blog/our-blog.component */ "./src/app/landing-page8/components/our-blog/our-blog.component.ts");















const routes = [
    {
        path: '',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"],
        children: []
    }
];
let LandingPage8Module = class LandingPage8Module {
};
LandingPage8Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"], _components_our_partner_our_partner_component__WEBPACK_IMPORTED_MODULE_7__["OurPartnerComponent"], _components_usage_usage_component__WEBPACK_IMPORTED_MODULE_8__["UsageComponent"], _components_features_features_component__WEBPACK_IMPORTED_MODULE_9__["FeaturesComponent"], _components_our_service_our_service_component__WEBPACK_IMPORTED_MODULE_10__["OurServiceComponent"], _components_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_11__["HowWeWorkComponent"], _components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__["PricingComponent"], _components_our_testimonial_our_testimonial_component__WEBPACK_IMPORTED_MODULE_13__["OurTestimonialComponent"], _components_our_blog_our_blog_component__WEBPACK_IMPORTED_MODULE_14__["OurBlogComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _components_revolution_slider8_revolution_slider8_module__WEBPACK_IMPORTED_MODULE_6__["RevolutionSlider8Module"],
            _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_4__["XaminModule"]
        ]
    })
], LandingPage8Module);



/***/ })

}]);
//# sourceMappingURL=landing-page8-landing-page8-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-page3-landing-page3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/about-us/about-us.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/about-us/about-us.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-about [titleSectionProp]=\"titleSectionProp\" [List]=\"Lists\"></app-about>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/card-section/card-section.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/card-section/card-section.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"pt-0\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div  *ngFor=\"let lists of List\" class=\"col-lg-3 col-sm-12\">\n        <div class=\"xamin-services  mb-0 wow fadeInUp text-center\">\n          <div class=\"services-detail\">\n            <img src=\"./assets/images/services/{{ lists.img }}\" alt=\"img\" />\n            <h5 class=\"mb-1\">{{ lists.title }}</h5>\n            <p class=\"mb-0\">{{ lists.sub_title }}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/client-counter/client-counter.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/client-counter/client-counter.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Why Choose Us End -->\n<section class=\"pb-0\">\n  <div class=\"container\">\n    <app-counter [List]=\"list\" [style]=\"style\"></app-counter>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/nav-tabs/nav-tabs.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/nav-tabs/nav-tabs.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"iq-bg-over\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"custom-tab\">\n          <ul class=\"nav nav-pills text-center flex-column mb-5 mb-md-0\" id=\"pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\n            <li *ngFor=\"let nav of navList\" class=\"nav-item w-inherit \">\n              <a class=\"nav-link w-100\" data-toggle=\"pill\" href=\"{{ '#' + nav.id }}\" role=\"tab\" [attr.aria-selected]=\" nav.active !== undefined ? true : false \">\n                <h5 class=\"tab-title\">{{ nav.title }}</h5>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"tab-content\">\n          <div *ngFor=\"let nav of navList\" id=\"{{ nav.id }}\" class=\"tab-pane fade  {{ nav.active !== undefined && nav.active ? 'show active' : '' }}\">\n            <h3 class=\"pb-3\">{{ nav.sub_title }}</h3>\n            <p>{{ nav.desc }}</p>\n            <app-check-list [lists]=\"nav.chkList\"></app-check-list>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/our-blog/our-blog.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/our-blog/our-blog.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section >\n  <div class=\"container\">\n    <div class=\"row layer-fly-one\">\n      <div class=\"col-md-12\">\n        <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n      </div>\n    </div>\n    <div class=\"xamin-recentblog v1\">\n      <app-blog-owl [List]=\"List\"></app-blog-owl>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/our-client/our-client.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/our-client/our-client.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>our-client works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/our-partner/our-partner.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/our-partner/our-partner.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"pt-0\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <app-customers [List]=\"List\" [hover]=\"hover\"></app-customers>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/our-testimonials/our-testimonials.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/our-testimonials/our-testimonials.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"iq-bg-over\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 wow fadeInUp\">\n        <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n      </div>\n    </div>\n    <app-testimonials [List]=\"List\"></app-testimonials>\n\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/process/process.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/process/process.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- How it Works -->\n<section class=\"xamin-custom-bg\">\n  <div class=\"container\">\n    <div class=\"row \">\n      <div class=\"col-md-12\">\n        <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n      </div>\n    </div>\n    <div class=\"row \">\n      <div class=\"col-lg-4 col-md-4 col-sm-12\">\n        <app-xamin-circle [circleData]=\"circle1Data\"></app-xamin-circle>\n      </div>\n      <div class=\" col-lg-4 col-md-4 col-sm-12 mt-4 mt-md-0\">\n        <app-xamin-circle [circleData]=\"circle2Data\"></app-xamin-circle>\n      </div>\n      <div class=\"col-lg-4 col-md-4 col-sm-12 mt-4 mt-md-0\">\n        <app-xamin-circle [circleData]=\"circle3Data\"></app-xamin-circle>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- How it Works End -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/revolution-slider3/revolution-slider3.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/revolution-slider3/revolution-slider3.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"iq-banner\">\n  <!-- START xamin REVOLUTION SLIDER 6.1.0 -->\n  <p class=\"rs-p-wp-fix\"></p>\n  <rs-module-wrap id=\"rev_slider_3_1_wrapper\" data-alias=\"xamin-3\" data-source=\"gallery\" style=\"background:transparent;padding:0;margin:0px auto;margin-top:0;margin-bottom:0;\">\n    <rs-module id=\"rev_slider_3_1\" class=\" rs-ov-hidden\" style=\"display:none;\" data-version=\"6.1.0\">\n      <rs-slides>\n        <rs-slide data-key=\"rs-3\" data-title=\"Slide\" data-anim=\"ei:d,d,d,d,d,d,d,d,d;eo:d,d,d,d,d,d,d,d,d;s:1000ms,d,d,d,d,d,d,d,d;r:0,0,0,0,0,0,0,0,0;t:fade,grayscale,blurlight,blurstrong,fade,crossfade,fadethroughlight,fadethroughdark,fadethroughtransparent;sl:d,d,d,d,d,d,d,d,d;\" data-firstanim=\"t:fade;sl:12;\">\n          <img src=\"/assets/revslider/assets_slider3/dummy.png\" title=\"bg\" width=\"856\" height=\"500\" data-lazyload=\"./assets/revslider/assets_slider3/bg.png\" data-bg=\"f:100% 100%;\" data-parallax=\"2\" class=\"rev-slidebg\" data-no-retina>\n          <!--\n                                      --><h2\n          id=\"slider-3-slide-3-layer-1\"\n          class=\"rs-layer\"\n          data-type=\"text\"\n          data-color=\"#313e5b\"\n          data-rsp_ch=\"on\"\n          data-xy=\"x:l,l,l,c;xo:69px,15px,37px,-1px;yo:221px,141px,40px,30px;\"\n          data-text=\"s:48,36,42,28;l:65,65,70,55;a:inherit,inherit,inherit,center;\"\n          data-dim=\"w:auto,681px,681px,681px;\"\n          data-layeronlimit=\"on\"\n          data-frame_0=\"y:-50;\"\n          data-frame_1=\"st:600;sp:1000;sR:600;\"\n          data-frame_999=\"o:0;tp:600;st:w;sR:7400;\"\n          style=\"z-index:8;font-family:Lato;text-transform:capitalize;\"\n        >The Analytics Operating System for <br>Data-Driven Companies\n        </h2><!--\n\n\t\t\t\t\t\t\t--><p\n          id=\"slider-3-slide-3-layer-3\"\n          class=\"rs-layer\"\n          data-type=\"text\"\n          data-color=\"#525f81\"\n          data-rsp_ch=\"on\"\n          data-xy=\"x:l,l,l,c;xo:67px,15px,40px,5px;y:m;yo:56px,15px,-180px,-126px;\"\n          data-text=\"s:16,16,18,13;l:30;a:inherit,inherit,inherit,center;\"\n          data-frame_0=\"y:-50;\"\n          data-frame_1=\"st:900;sp:1000;sR:900;\"\n          data-frame_999=\"o:0;tp:600;st:w;sR:7100;\"\n          style=\"z-index:9;font-family:Karla;\"\n        >It is a long established fact that a reader will be distracted by the readable<br>content of a page when looking at its layout.\n        </p><!--\n\n\t\t\t\t\t\t\t--><rs-layer\n          id=\"slider-3-slide-3-layer-11\"\n          data-type=\"image\"\n          data-rsp_ch=\"on\"\n          data-xy=\"xo:867px,721px,226px,78px;yo:68px,82px,332px,258px;\"\n          data-text=\"w:normal;s:20,14,10,6;l:0,18,13,8;\"\n          data-dim=\"w:616px,298px,338px,350px;h:507px,245px,338px,288px;\"\n          data-frame_0=\"sX:0.9;sY:0.9;\"\n          data-frame_1=\"st:2400;sp:1000;sR:2400;\"\n          data-frame_999=\"o:0;st:w;sR:5600;\"\n          style=\"z-index:13;font-family:Roboto;\"\n        ><img src=\"./assets/revslider/assets_slider3/dummy.png\" width=\"890\" height=\"732\" data-lazyload=\"./assets/revslider/assets_slider3/1.png\" data-no-retina>\n        </rs-layer><!--\n\n\t\t\t\t\t\t\t--><rs-layer\n          id=\"slider-3-slide-3-layer-25\"\n          class=\"rs-pxl-1\"\n          data-type=\"image\"\n          data-rsp_ch=\"on\"\n          data-xy=\"xo:1309px,923px,549px,353px;yo:60px,85px,331px,280px;\"\n          data-text=\"w:normal;s:20,14,10,6;l:0,18,13,8;\"\n          data-dim=\"w:151px,110px,112px,77px;h:102px,74px,112px,77px;\"\n          data-frame_0=\"sX:0.9;sY:0.9;\"\n          data-frame_1=\"st:2100;sp:1000;sR:2100;\"\n          data-frame_999=\"o:0;st:w;sR:5900;\"\n          data-tloop=\"u:true;\"\n          data-loop_999=\"sX:0.8;sY:0.8;o:0.6;sp:2000;e:Power2.easeInOut;yys:t;yyf:t;\"\n          style=\"z-index:12;font-family:Roboto;\"\n        ><img src=\"./assets/revslider/assets_slider3/dummy.png\" width=\"364\" height=\"246\" data-lazyload=\"./assets/revslider/assets_slider3/2.png\" data-no-retina>\n        </rs-layer><!--\n\n\t\t\t\t\t\t\t--><rs-layer\n          id=\"slider-3-slide-3-layer-28\"\n          data-type=\"text\"\n          data-rsp_ch=\"on\"\n          data-xy=\"xo:72px,15px,40px,174px;yo:475px,367px,274px,231px;\"\n          data-text=\"w:normal;s:16,11,18,17;l:25,18,13,12;\"\n          data-dim=\"h:auto,auto,auto,17px;\"\n          data-frame_0=\"x:0,0,0,0px;y:-50,-36,-26,-24px;\"\n          data-frame_1=\"x:0,0,0,0px;y:0,0,0,0px;st:1200;sp:1000;sR:1200;\"\n          data-frame_999=\"o:0;st:w;sR:6800;\"\n          style=\"z-index:10;font-family:Roboto;\"\n        ><a class=\"button_link\" href=\"#\"><i class=\"fas fa fa-play\"></i>Watch Video</a>\n        </rs-layer><!--\n\n\t\t\t\t\t\t\t--><rs-layer\n          id=\"slider-3-slide-3-layer-29\"\n          data-type=\"image\"\n          data-rsp_ch=\"on\"\n          data-xy=\"xo:856px,674px,184px,36px;yo:70px,60px,362px,271px;\"\n          data-text=\"w:normal;s:20,14,10,6;l:0,18,13,8;\"\n          data-dim=\"w:738px,539px,470px,429px;h:607px,443px,387px,353px;\"\n          data-frame_0=\"sX:0.9;sY:0.9;\"\n          data-frame_1=\"st:1800;sp:930;sR:1800;\"\n          data-frame_999=\"o:0;st:w;sR:6270;\"\n          style=\"z-index:11;font-family:Roboto;\"\n        ><img src=\"./assets/revslider/assets_slider3/dummy.png\" width=\"890\" height=\"732\" data-lazyload=\"./assets/revslider/assets_slider3/7.png\" data-no-retina>\n        </rs-layer><!--\n\n\t\t\t\t\t\t\t--><rs-layer\n          id=\"slider-3-slide-3-layer-30\"\n          class=\"rs-pxl-1\"\n          data-type=\"image\"\n          data-rsp_ch=\"on\"\n          data-xy=\"xo:751px,631px,118px,0;yo:330px,217px,539px,461px;\"\n          data-text=\"w:normal;s:20,14,10,6;l:0,18,13,8;\"\n          data-dim=\"w:101px,73px,54px,69px;h:58px,42px,31px,40px;\"\n          data-frame_0=\"sX:0.9;sY:0.9;\"\n          data-frame_1=\"st:2700;sp:1000;sR:2700;\"\n          data-frame_999=\"o:0;st:w;sR:5300;\"\n          data-tloop=\"u:true;\"\n          data-loop_999=\"sX:0.8;sY:0.8;o:0.6;sp:2000;e:Power2.easeInOut;yys:t;yyf:t;\"\n          style=\"z-index:14;font-family:Roboto;\"\n        ><img src=\"./assets/revslider/assets_slider3/dummy.png\" width=\"261\" height=\"151\" data-lazyload=\"./assets/revslider/assets_slider3/6.png\" data-no-retina>\n        </rs-layer><!--\n\n\t\t\t\t\t\t\t--><rs-layer\n          id=\"slider-3-slide-3-layer-31\"\n          class=\"rs-pxl-2\"\n          data-type=\"image\"\n          data-rsp_ch=\"on\"\n          data-xy=\"xo:790px,678px,169px,81px;yo:497px,291px,649px,531px;\"\n          data-text=\"w:normal;s:20,14,10,6;l:0,18,13,8;\"\n          data-dim=\"w:131px,95px,71px,64px;h:99px,72px,53px,48px;\"\n          data-frame_0=\"sX:0.9;sY:0.9;\"\n          data-frame_1=\"st:3000;sp:1000;\"\n          data-frame_999=\"o:0;st:w;sR:5000;\"\n          data-loop_999=\"sX:1.2;sY:1.2;o:0.6;sp:2000;st:1000;e:Power0.easeInOut;yys:t;yyf:t;\"\n          style=\"z-index:15;font-family:Roboto;\"\n        ><img src=\"./assets/revslider/assets_slider3/dummy.png\" width=\"387\" height=\"292\" data-lazyload=\"./assets/revslider/assets_slider3/3.png\" data-no-retina>\n        </rs-layer><!--\n\n\t\t\t\t\t\t\t--><rs-layer\n          id=\"slider-3-slide-3-layer-32\"\n          class=\"rs-pxl-1\"\n          data-type=\"image\"\n          data-rsp_ch=\"on\"\n          data-xy=\"xo:1061px,776px,380px,245px;yo:614px,449px,703px,555px;\"\n          data-text=\"w:normal;s:20,14,10,6;l:0,18,13,8;\"\n          data-dim=\"w:87px,63px,47px,70px;h:52px,38px,28px,41px;\"\n          data-frame_0=\"y:-50,-36,-26,-16;\"\n          data-frame_1=\"st:3300;sp:1000;\"\n          data-frame_999=\"o:0;st:w;sR:4700;\"\n          data-tloop=\"u:true;\"\n          data-loop_999=\"sX:0.8;sY:0.8;o:0.6;sp:2000;e:Power2.easeInOut;yys:t;yyf:t;\"\n          style=\"z-index:16;font-family:Roboto;\"\n        ><img src=\"./assets/revslider/assets_slider3/dummy.png\" width=\"206\" height=\"122\" data-lazyload=\"./assets/revslider/assets_slider3/5.png\" data-no-retina>\n        </rs-layer><!--\n-->\t\t\t\t\t\t</rs-slide>\n      </rs-slides>\n      <rs-static-layers><!--\n\t\t\t\t\t--></rs-static-layers>\n      <rs-progress class=\"rs-bottom\" style=\"visibility: hidden !important;\"></rs-progress>\n    </rs-module>\n  </rs-module-wrap>\n  <!-- END REVOLUTION SLIDER -->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/service/service.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/service/service.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-about-two [List]=\"Lists\" [titleSectionProp]=\"titleSectionProp\"></app-about-two>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/why-choose-us/why-choose-us.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/why-choose-us/why-choose-us.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-choose-us [lists]=\"List\"></app-choose-us>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/index/index.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/index/index.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Header component start-->\n<app-header [logoImg]=\"logoImage\" [navItemList]=\"navItems\" [contactInfo]=\"contactInfo\"></app-header>\n<!-- Header component end-->\n<!-- START REVOLUTION SLIDER -->\n<app-revolution-slider3></app-revolution-slider3>\n<!-- END REVOLUTION SLIDER -->\n<!-- MainContent -->\n<div class=\"main-content\">\n  <!-- Choose-us -->\n      <app-why-choose-us></app-why-choose-us>\n  <!-- Choose-us -->\n  <!--  card-section-->\n      <app-card-section></app-card-section>\n  <!--  card-section End-->\n  <!-- About Us -->\n      <app-about-us></app-about-us>\n  <!-- About Us End-->\n    <!--Nav tab -->\n      <app-nav-tabs></app-nav-tabs>\n  <!-- Nav tab -->\n  <!-- client counter  -->\n      <app-client-counter></app-client-counter>\n  <!-- client counter End -->\n      <app-service></app-service>\n  <!-- PROCESS -->\n       <app-process></app-process>\n  <!-- PROCESS  End-->\n  <!-- Our Testimonials -->\n       <app-our-testimonials></app-our-testimonials>\n  <!-- Our Testimonials End -->\n  <!-- Blog -->\n      <app-our-blog></app-our-blog>\n  <!-- Blog End-->\n  <!--  Partner-->\n      <app-our-partner></app-our-partner>\n  <!--  Partner End-->\n</div>\n<!-- Footer start -->\n<app-footer [logoImg]=\"logoImage\" [contactInfo]=\"contactInfo\"></app-footer>\n<!-- Footer end -->\n");

/***/ }),

/***/ "./src/app/landing-page3/components/about-us/about-us.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/landing-page3/components/about-us/about-us.component.ts ***!
  \*************************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsComponent = class AboutUsComponent {
    constructor() {
        this.titleSectionProp = {
            title: 'ABOUT US',
            subTitle: 'Focused on Actionable Insights',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distractedMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'
        };
        this.Lists = {
            isOuter: false,
            img: '01.png',
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distractedMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for"
        };
    }
    ngOnInit() {
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/about-us/about-us.component.html")).default,
    })
], AboutUsComponent);



/***/ }),

/***/ "./src/app/landing-page3/components/card-section/card-section.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/landing-page3/components/card-section/card-section.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CardSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSectionComponent", function() { return CardSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardSectionComponent = class CardSectionComponent {
    constructor() {
        this.List = [
            {
                img: "01.png",
                title: "Perfect Event",
                sub_title: "big data through robust that solutions the power."
            },
            {
                img: "02.png",
                title: "Organization",
                sub_title: "big data through robust that solutions the power."
            },
            {
                img: "03.png",
                title: "Innovation",
                sub_title: "big data through robust that solutions the power."
            },
            {
                img: "04.png",
                title: "Perfect Event",
                sub_title: "big data through robust that solutions the power."
            },
        ];
    }
    ngOnInit() {
    }
};
CardSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-section',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card-section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/card-section/card-section.component.html")).default,
    })
], CardSectionComponent);



/***/ }),

/***/ "./src/app/landing-page3/components/client-counter/client-counter.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/landing-page3/components/client-counter/client-counter.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ClientCounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCounterComponent", function() { return ClientCounterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClientCounterComponent = class ClientCounterComponent {
    constructor() {
        this.list = [
            {
                value: 1520,
                icon: 'ion ion-android-sad',
                text: 'Happy Clients'
            },
            {
                value: 2000,
                icon: 'fa fa-handshake-o',
                text: 'Completed Projects'
            },
            {
                value: 150,
                icon: 'ion ion-ios-contact-outline',
                text: 'Team Members'
            },
            {
                value: 750,
                icon: 'ion ion-android-checkmark-circle',
                text: 'Questions Answered'
            }
        ];
        this.style = 'style2';
    }
    ngOnInit() {
    }
};
ClientCounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client-counter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-counter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/client-counter/client-counter.component.html")).default,
    })
], ClientCounterComponent);



/***/ }),

/***/ "./src/app/landing-page3/components/nav-tabs/nav-tabs.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/landing-page3/components/nav-tabs/nav-tabs.component.ts ***!
  \*************************************************************************/
/*! exports provided: NavTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavTabsComponent", function() { return NavTabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavTabsComponent = class NavTabsComponent {
    constructor() {
        this.titleSectionProp = {
            class: 'text-center',
            title: 'our Services',
            subTitle: 'Explore Our Data Services'
        };
        this.navList = [
            {
                id: 'tab-software-development',
                title: 'Software Development',
                sub_title: "Choose Your Software Development Service",
                desc: "Tame your big data through robust solutions that empower data collection, storage,processing and analysis.",
                active: true,
                chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations', 'There are many variations of passages.']
            },
            {
                id: 'tab-application-services',
                title: 'Application Services',
                sub_title: "Choose Your Application Service",
                desc: "Tame your big data through robust solutions that empower data collection, storage,processing and analysis.",
                chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations', 'There are many variations of passages.']
            },
            {
                id: 'tab-data-analytics',
                title: 'Data Analytics',
                sub_title: "Choose Your Data Analytics Service",
                desc: "Tame your big data through robust solutions that empower data collection, storage,processing and analysis.",
                chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations', 'There are many variations of passages.']
            },
            {
                id: 'tab-help-desk-services',
                title: 'Help Desk Services',
                sub_title: "Choose Your Help Desk Service",
                desc: "Tame your big data through robust solutions that empower data collection, storage,processing and analysis.",
                chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations', 'There are many variations of passages.']
            }
        ];
    }
    ngOnInit() {
    }
};
NavTabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-tabs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/nav-tabs/nav-tabs.component.html")).default,
    })
], NavTabsComponent);



/***/ }),

/***/ "./src/app/landing-page3/components/our-blog/our-blog.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/landing-page3/components/our-blog/our-blog.component.ts ***!
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
            class: 'text-center',
            title: 'BLOG',
            subTitle: 'Recent Blog',
            desc: 'It is a long established fact that a reader will be distracted'
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
            },
        ];
    }
    ngOnInit() {
    }
};
OurBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-our-blog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-blog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/our-blog/our-blog.component.html")).default
    })
], OurBlogComponent);



/***/ }),

/***/ "./src/app/landing-page3/components/our-client/our-client.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/landing-page3/components/our-client/our-client.component.ts ***!
  \*****************************************************************************/
/*! exports provided: OurClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurClientComponent", function() { return OurClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OurClientComponent = class OurClientComponent {
    constructor() { }
    ngOnInit() {
    }
};
OurClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-our-client',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-client.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/our-client/our-client.component.html")).default,
    })
], OurClientComponent);



/***/ }),

/***/ "./src/app/landing-page3/components/our-partner/our-partner.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/landing-page3/components/our-partner/our-partner.component.ts ***!
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
        this.List = [
            {
                img: '1.png',
            },
            {
                img: '2.png',
            },
            {
                img: '3.png',
            },
            {
                img: '4.png',
            },
            {
                img: '1.png',
            },
            {
                img: '2.png',
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-partner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/our-partner/our-partner.component.html")).default,
    })
], OurPartnerComponent);



/***/ }),

/***/ "./src/app/landing-page3/components/our-testimonials/our-testimonials.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/landing-page3/components/our-testimonials/our-testimonials.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: OurTestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurTestimonialsComponent", function() { return OurTestimonialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OurTestimonialsComponent = class OurTestimonialsComponent {
    constructor() {
        this.titleSectionProp = {
            class: 'text-center',
            title: 'Testimonials',
            subTitle: '100+ Companies are Using Xamin',
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
OurTestimonialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-our-testimonials',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-testimonials.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/our-testimonials/our-testimonials.component.html")).default,
    })
], OurTestimonialsComponent);



/***/ }),

/***/ "./src/app/landing-page3/components/process/process.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/landing-page3/components/process/process.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessComponent", function() { return ProcessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProcessComponent = class ProcessComponent {
    constructor() {
        this.titleSectionProp = {
            class: 'text-center',
            title: 'PROCESS',
            subTitle: 'Our Software Testing Process'
        };
        this.circle1Data = {
            img: '01.png',
            title: 'Data for all your people',
            description: 'It is a long established fact that a reader will be distracted by the of readable.',
            delay: '0.6s',
            positionClass: 'right',
            type: 'xamin-process'
        };
        this.circle2Data = {
            class: 'mt-4 mt-md-0',
            img: '02.png',
            title: 'A new breed of AI',
            description: 'It is a long established fact that a reader will be distracted by the of readable.',
            delay: '1s',
            positionClass: 'right',
            type: 'xamin-process'
        };
        this.circle3Data = {
            class: 'mt-4 mt-md-0',
            img: '03.png',
            title: 'Analytics business',
            description: 'It is a long established fact that a reader will be distracted by the of readable.',
            delay: '1.4s',
            type: 'xamin-process'
        };
    }
    ngOnInit() {
    }
};
ProcessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-process',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./process.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/process/process.component.html")).default,
    })
], ProcessComponent);



/***/ }),

/***/ "./src/app/landing-page3/components/revolution-slider3/revolution-slider3.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/landing-page3/components/revolution-slider3/revolution-slider3.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: RevolutionSlider3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevolutionSlider3Component", function() { return RevolutionSlider3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RevolutionSlider3Component = class RevolutionSlider3Component {
    constructor() { }
    ngOnInit() {
    }
};
RevolutionSlider3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-revolution-slider3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./revolution-slider3.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/revolution-slider3/revolution-slider3.component.html")).default
    })
], RevolutionSlider3Component);



/***/ }),

/***/ "./src/app/landing-page3/components/revolution-slider3/revolution-slider3.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/landing-page3/components/revolution-slider3/revolution-slider3.module.ts ***!
  \******************************************************************************************/
/*! exports provided: RevolutionSlider3Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevolutionSlider3Module", function() { return RevolutionSlider3Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _revolution_slider3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./revolution-slider3.component */ "./src/app/landing-page3/components/revolution-slider3/revolution-slider3.component.ts");




let RevolutionSlider3Module = class RevolutionSlider3Module {
};
RevolutionSlider3Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_revolution_slider3_component__WEBPACK_IMPORTED_MODULE_3__["RevolutionSlider3Component"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _revolution_slider3_component__WEBPACK_IMPORTED_MODULE_3__["RevolutionSlider3Component"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], RevolutionSlider3Module);



/***/ }),

/***/ "./src/app/landing-page3/components/service/service.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/landing-page3/components/service/service.component.ts ***!
  \***********************************************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServiceComponent = class ServiceComponent {
    constructor() {
        this.titleSectionProp = {
            title: 'LETS GET STARTED',
            subTitle: 'Are you ready for a better, more productive business?',
            description: ''
        };
        this.Lists = {
            isOuter: true,
            img: '11.png',
            desc: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English."
        };
    }
    ngOnInit() {
    }
};
ServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-service',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./service.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/service/service.component.html")).default,
    })
], ServiceComponent);



/***/ }),

/***/ "./src/app/landing-page3/components/why-choose-us/why-choose-us.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/landing-page3/components/why-choose-us/why-choose-us.component.ts ***!
  \***********************************************************************************/
/*! exports provided: WhyChooseUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhyChooseUsComponent", function() { return WhyChooseUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WhyChooseUsComponent = class WhyChooseUsComponent {
    constructor() {
        this.List = {
            title: "WHY CHOOSE US",
            subtitle: "Why Choose People Xamin",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution."
        };
    }
    ngOnInit() {
    }
};
WhyChooseUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-why-choose-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./why-choose-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/components/why-choose-us/why-choose-us.component.html")).default,
    })
], WhyChooseUsComponent);



/***/ }),

/***/ "./src/app/landing-page3/index/index.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page3/index/index.component.ts ***!
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
            email: 'support@iqnonicthemes.com'
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page3/index/index.component.html")).default,
    })
], IndexComponent);



/***/ }),

/***/ "./src/app/landing-page3/landing-page3.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/landing-page3/landing-page3.module.ts ***!
  \*******************************************************/
/*! exports provided: LandingPage3Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage3Module", function() { return LandingPage3Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../xamin/xamin.module */ "./src/app/xamin/xamin.module.ts");
/* harmony import */ var _components_why_choose_us_why_choose_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/why-choose-us/why-choose-us.component */ "./src/app/landing-page3/components/why-choose-us/why-choose-us.component.ts");
/* harmony import */ var _components_card_section_card_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/card-section/card-section.component */ "./src/app/landing-page3/components/card-section/card-section.component.ts");
/* harmony import */ var _components_service_service_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/service/service.component */ "./src/app/landing-page3/components/service/service.component.ts");
/* harmony import */ var _components_process_process_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/process/process.component */ "./src/app/landing-page3/components/process/process.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index/index.component */ "./src/app/landing-page3/index/index.component.ts");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/landing-page3/components/about-us/about-us.component.ts");
/* harmony import */ var _components_nav_tabs_nav_tabs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/nav-tabs/nav-tabs.component */ "./src/app/landing-page3/components/nav-tabs/nav-tabs.component.ts");
/* harmony import */ var _components_client_counter_client_counter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/client-counter/client-counter.component */ "./src/app/landing-page3/components/client-counter/client-counter.component.ts");
/* harmony import */ var _components_our_testimonials_our_testimonials_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/our-testimonials/our-testimonials.component */ "./src/app/landing-page3/components/our-testimonials/our-testimonials.component.ts");
/* harmony import */ var _components_our_blog_our_blog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/our-blog/our-blog.component */ "./src/app/landing-page3/components/our-blog/our-blog.component.ts");
/* harmony import */ var _components_our_client_our_client_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/our-client/our-client.component */ "./src/app/landing-page3/components/our-client/our-client.component.ts");
/* harmony import */ var _components_our_partner_our_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/our-partner/our-partner.component */ "./src/app/landing-page3/components/our-partner/our-partner.component.ts");
/* harmony import */ var _components_revolution_slider3_revolution_slider3_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/revolution-slider3/revolution-slider3.module */ "./src/app/landing-page3/components/revolution-slider3/revolution-slider3.module.ts");


















const routes = [
    {
        path: '',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_9__["IndexComponent"],
        children: []
    }
];
let LandingPage3Module = class LandingPage3Module {
};
LandingPage3Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_why_choose_us_why_choose_us_component__WEBPACK_IMPORTED_MODULE_5__["WhyChooseUsComponent"], _components_card_section_card_section_component__WEBPACK_IMPORTED_MODULE_6__["CardSectionComponent"], _components_service_service_component__WEBPACK_IMPORTED_MODULE_7__["ServiceComponent"], _components_process_process_component__WEBPACK_IMPORTED_MODULE_8__["ProcessComponent"], _index_index_component__WEBPACK_IMPORTED_MODULE_9__["IndexComponent"], _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__["AboutUsComponent"], _components_nav_tabs_nav_tabs_component__WEBPACK_IMPORTED_MODULE_11__["NavTabsComponent"], _components_client_counter_client_counter_component__WEBPACK_IMPORTED_MODULE_12__["ClientCounterComponent"], _components_our_testimonials_our_testimonials_component__WEBPACK_IMPORTED_MODULE_13__["OurTestimonialsComponent"], _components_our_blog_our_blog_component__WEBPACK_IMPORTED_MODULE_14__["OurBlogComponent"], _components_our_client_our_client_component__WEBPACK_IMPORTED_MODULE_15__["OurClientComponent"], _components_our_partner_our_partner_component__WEBPACK_IMPORTED_MODULE_16__["OurPartnerComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_4__["XaminModule"],
            _components_revolution_slider3_revolution_slider3_module__WEBPACK_IMPORTED_MODULE_17__["RevolutionSlider3Module"],
        ]
    })
], LandingPage3Module);



/***/ })

}]);
//# sourceMappingURL=landing-page3-landing-page3-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-page7-landing-page7-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/about-us/about-us.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/about-us/about-us.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"position-relative\">\n    <img height=\"625\" width=\"866\" src=\"./assets/images/about-us/social.jpg\"  class=\"about-box-img \" alt=\"\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6\"> </div>\n            <div class=\"col-lg-6 wow fadeInUp align-items-center\">\n                <div class=\"title-box wow fadeInUp text-left\">\n                    <span class=\"title-design\">About us</span>\n                    <h2>Purpose</h2>\n                    <p>At Digital Alpha (“DA”) we believe that our fiduciary responsibility requires careful consideration of the impact our investments can have on environmental, social and governance (“Sustainability”) matters. DA believes a tailored approach to Sustainability issues for each of our portfolio companies will create value for not only our LPs, but for many other stakeholders.\n                    </p>\n                    <p>DA appreciates that tracking, collecting and reporting on Sustainability requires significant resources, however, we see that the incorporation of Sustainability is way of creating longer term sustainable growth for our portfolio companies. DA’s investments are predominantly ‘green’; developing technology and jobs related to the mission critical infrastructure needed in today’s modern world.\n\n                    </p>\n                </div>\n                <div class=\"text-left\">\n                    <app-check-list [lists]=\"checkList1\"></app-check-list>\n                </div>\n                <div class=\" text-left mt-5 \">\n                    <a class=\"button button-icon\" routerLink=\"/about-us\"> <span class=\"btn-effect\"> View Details</span> </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/analysis-type/analysis-type.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/analysis-type/analysis-type.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"xamin-custom-bg iq-pb-70\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-md-3 col-sm-12\">\n                <div class=\"title-box wow fadeInUp  text-left\" >\n                    <span class=\"title-design\"></span>\n                    <h3>Types of Sentiment Analysis</h3>\n                    <p>It is a long established fact that a reader will be distracted by the<br>\n                        readable content of a page when .\n                    </p>\n                </div>\n            </div>\n            <div *ngFor=\"let list of List\" class=\"col-lg-3 col-md-3 col-sm-12\">\n                <div class=\"service-box style2 wow fadeInUp  text-left\" >\n                    <img class=\"fancy-list-img\" src=\"{{ list.image }}\" alt=\"fancy-list\">\n                    <div class=\"service-detail align-self-center\">\n                        <h5 class=\"mb-2\">{{ list.title }}</h5>\n                        <p>{{ list.desc }}</p>\n                        <div class=\"text-left\">\n                            <app-check-list [lists]=\"list.checklist\"></app-check-list>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/benefits/benefits.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/benefits/benefits.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"pt-0 iq-pb-40\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 wow fadeInUp\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div *ngFor=\"let list of List\" class=\"col-lg-6 col-md-6 col-sm-12\">\n                <div class=\"fancy_service style2 wow fadeInUp  text-left\">\n                    <div class=\"bg_img\">\n                        <img class=\"bg_img-img\" src=\"{{ list.bg_img }}\" alt=\"fancybox\">\n                    </div>\n                    <div class=\"fancy_block\">\n                        <div class=\"fancy-info\">\n                            <h4 class=\"mb-3 title\">{{ list.title }}</h4>\n                            <p class=\"text-dark\">{{ list.desc }}</p>\n                            <a class=\"button blue-btn\" href=\"#\">\n                                <span class=\"btn-effect\"> Find Out More</span>\n                            </a>\n                        </div>\n                        <div class=\"fancy_img\">\n                            <img src=\"{{ list.image }}\" alt=\"fancybox\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/contact-form/contact-form.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/contact-form/contact-form.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"xamin-primary-bg\">\n    <div class=\"container\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-lg-6 col-md-6 col-sm-12 \">\n                <form >\n                    <div class=\"predict-form  consultab-contact contact-form\">\n                        <div>\n                            <h4 class=\"title mb-4 text-center\">Talk With Our Expert</h4>\n                        </div>\n                        <div class=\"\"> <input type=\"text\" name=\"your-name\" class=\"form-control text \" placeholder=\"Your Name\"> </div>\n                        <div class=\"\"> <input type=\"text\" name=\"your-email\" class=\"form-control text \" placeholder=\"Your Email\"> </div>\n                        <div class=\"\"> <textarea name=\"your-message\" cols=\"40\" rows=\"5\" class=\"form-control textarea \" placeholder=\"Your Message\"></textarea> </div>\n                        <div> <button id=\"submit-4\" name=\"submit\" type=\"submit\" value=\"Send\" class=\"button d-block w-100\">Send Message</button> </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                <div class=\"contact-box d-flex  text- text-white \">\n                    <i aria-hidden=\"true\" class=\"fa fa-phone\"></i> \n                    <div class=\"service-detail\">\n                        <h2 class=\"mb-2  text-white \" >Phone Support</h2>\n                        <ul class=\"list-inline mb-0\">\n                            <li><a href=\"tel:+0123456789\"> +0123456789</a> </li>\n                            <li><a href=\"tel:+0123456789\">+0123456789</a></li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"contact-box d-flex  text- text-white \">\n                    <i aria-hidden=\"true\" class=\"fa fa-map-marker\"></i> \n                    <div class=\"service-detail\">\n                        <h2 class=\"mb-2  text-white\">Email us</h2>\n                        <ul class=\"list-inline mb-0\">\n                            <li><a href=\"mailto:support@iqnonicthemes.com\">support@iqnonicthemes.com</a>  </li>\n                            <li><a href=\"mailto:support@iqnonicthemes.com\"> support@iqnonicthemes.com</a>  </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/faq/faq.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/faq/faq.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"pt-0\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-12\">\n                <div class=\"title-box wow fadeInUp text-center\">\n                    <span class=\"title-design\">STILL HAVE QUESTIONS? </span>\n                    <h2>Relax because we always will be here for you</h2>\n                    <img width=\"600\" height=\"360\" src=\"./assets/images/fancybox/7-9.png\" alt=\"question\">\n                </div>\n            </div>\n            <div class=\"col-lg-6 col-md-12\">\n                <div class=\"iq-faq\">\n                    <div *ngFor=\"let list of List\" class=\"iq-block  {{ list.active !== undefined && list.active ? 'iq-active' : ''  }}\">\n                        <a class=\"iq-title\">{{ list.title }}</a>\n                        <div class=\"iq-details \">\n                            <p>{{ list.desc }}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/how-it-work/how-it-work.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/how-it-work/how-it-work.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"xamin-custom-bg iq-pb-70\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 wow fadeInUp\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div *ngFor=\"let list of List;let i = index\" class=\"col-lg-3 col-md-3 col-sm-12\">\n                <div class=\"consult-services xamin-square wow fadeInUp text-left {{  i < List.length - 1  ? '' : 'right' }}\">\n                    <div class=\"arrow_img\" *ngIf=\"list.arrow_image\">\n                        <img class=\"arrow-img\" src=\"{{ list.arrow_image }}\" alt=\"fancybox\">\n                    </div>\n                    <div class=\"square-effect bg\">\n                        <img src=\"{{ list.image }}\" alt=\"fancybox\">\n                        <div class=\"arrowbg_img\">\n                            <img src=\"{{ list.arrowbg_img }}\" alt=\"fancybox\">\n                        </div>\n                    </div>\n                    <h5 class=\"mb-2\">{{ list.title }}</h5>\n                    <p class=\"mb-0\">{{ list.desc }}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/our-blog/our-blog.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/our-blog/our-blog.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"pt-0\">\n    <div class=\"container\">\n        <div class=\"row layer-fly-one \">\n            <div class=\"col-md-12\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n                <div class=\"xamin-recentblog v1\">\n                    <app-blog-owl [List]=\"List\"></app-blog-owl>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/our-testimonial/our-testimonial.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/our-testimonial/our-testimonial.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"xamin-custom-bg\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 wow fadeInUp\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n            </div>\n        </div>\n        <app-testimonials [List]=\"List\" [navigation]=\"navigation\"></app-testimonials>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/pricing/pricing.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/pricing/pricing.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"pt-0 iq-pb-70\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n            </div>\n        </div>\n        <div class=\"row justify-content-center\">\n            <div *ngFor=\"let list of List\" class=\"col-lg-4 col-md-6 text-center\">\n                <div class=\"iq-pricing \">\n                    <div class=\"priceing-title \">\n                        <h2>{{ list.price }}<span>{{ list.plan_desc }}</span></h2>\n                        <p class=\"mb-0\">{{ list.description }}</p>\n                    </div>\n                    <div class=\"priceing-description \">\n                        <h4 class=\"title mb-3\">{{ list.title }}</h4>\n                        <h5 class=\"subtitle mb-3\">{{ list.subtitle }}</h5>\n                        <ul class=\"pricing-list\">\n                            <li *ngFor=\"let service of list.services\">{{ service }}</li>\n                        </ul>\n                        <a class=\"button blue-btn\" href=\"#\" role=\"button\">Sign up Free</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/revolution-slider7/revolution-slider7.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/revolution-slider7/revolution-slider7.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"iq-banner\">\n    <!-- START xamin7 REVOLUTION SLIDER 7.1.0 -->\n    <p class=\"rs-p-wp-fix\"></p>\n    <rs-module-wrap id=\"rev_slider_7_1_wrapper\" data-alias=\"xamin7\" data-source=\"gallery\" style=\"background:transparent;padding:0;margin:0px auto;margin-top:0;margin-bottom:0;\">\n        <rs-module id=\"rev_slider_7_1\" style=\"display:none;\" data-version=\"6.1.0\">\n            <rs-slides>\n                <rs-slide data-key=\"rs-4\" data-title=\"Slide\" data-anim=\"ei:d;eo:d;s:1000;r:0;t:fade;sl:0;\">\n                    <img src=\"./assets/revslider/assets_slider7/transparent.png\" class=\"rev-slidebg\" data-no-retina>\n                    <rs-bgvideo \n                        data-video=\"w:100%;h:100%;nse:false;l:true;ptimer:true;\"\n                        data-mp4=\"./assets/revslider/assets_slider7/demo7.mp4\"\n                        ></rs-bgvideo>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-4-slide-4-layer-1\" \n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:0,2px,1px,0;yo:0,-16px,-16px,-9px;\"\n                        data-text=\"w:normal;s:20,14,10,6;l:0,18,13,8;\"\n                        data-dim=\"w:1142px,835px,835px,639px;h:910px,665px,666px,509px;\"\n                        data-basealign=\"slide\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;sp:1000;\"\n                        data-frame_999=\"o:0;st:w;sR:8000;\"\n                        style=\"z-index:8;font-family:Roboto;\"\n                        ><img src=\"./assets/revslider/assets_slider7/demo7-rev-bg.png\" width=\"1198\" height=\"955\" data-no-retina> \n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-4-slide-4-layer-2\" \n                        data-type=\"text\"\n                        data-color=\"#263c5c\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:223px,93px,70px,78px;yo:168px,169px,128px,166px;\"\n                        data-text=\"w:normal;s:120,87,66,40;l:160,117,88,54;fw:900;\"\n                        data-frame_1=\"e:Power4.easeInOut;st:600;sp:1200;sR:600;\"\n                        data-frame_1_sfx=\"se:blocktoright;\"\n                        data-frame_999=\"o:0;st:w;sR:7200;\"\n                        style=\"z-index:9;font-family:Lato;\"\n                        >Sentiment \n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-4-slide-4-layer-3\" \n                        data-type=\"text\"\n                        data-color=\"#263c5c\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:223px,100px,75px,77px;yo:307px,286px,217px,216px;\"\n                        data-text=\"w:normal;s:70,51,38,23;l:90,65,49,30;fw:900;\"\n                        data-frame_1=\"e:Power4.easeInOut;st:910;sp:1000;sR:910;\"\n                        data-frame_1_sfx=\"se:blocktoright;\"\n                        data-frame_999=\"o:0;st:w;sR:7090;\"\n                        style=\"z-index:10;font-family:Lato;\"\n                        >Analytics \n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-4-slide-4-layer-8\" \n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:245px,199px,151px,106px;yo:556px,465px,353px,328px;\"\n                        data-text=\"w:normal;s:20,14,10,6;l:0,18,13,8;\"\n                        data-dim=\"w:101px,73px,55px,33px;h:100px,73px,55px,33px;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:4500;sp:1000;sR:4500;\"\n                        data-frame_999=\"o:0;st:w;sR:3500;\"\n                        style=\"z-index:17;font-family:Roboto;\"\n                        ><img src=\"./assets/revslider/assets_slider7/demo7-rev-06.png\" width=\"133\" height=\"132\" data-no-retina> \n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-4-slide-4-layer-9\" \n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:243px,237px,180px,125px;yo:548px,472px,358px,323px;\"\n                        data-text=\"w:normal;s:20,14,10,6;l:0,18,13,8;\"\n                        data-dim=\"w:396px,289px,219px,216px;h:104px,76px,57px,57px;\"\n                        data-frame_0=\"x:-50,-36,-27,-16;\"\n                        data-frame_1=\"st:1200;sp:1000;sR:1200;\"\n                        data-frame_999=\"o:0;st:w;sR:6800;\"\n                        style=\"z-index:11;font-family:Roboto;\"\n                        ><img src=\"./assets/revslider/assets_slider7/demo7-rev-05.png\" width=\"453\" height=\"119\" data-no-retina> \n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-4-slide-4-layer-10\" \n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:244px,210px,159px,111px;yo:553px,464px,352px,331px;\"\n                        data-text=\"w:normal;s:20,14,10,6;l:0,18,13,8;\"\n                        data-dim=\"w:101px,73px,55px,37px;h:100px,73px,55px,37px;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:1200;sp:1000;sR:1200;\"\n                        data-frame_999=\"o:0;st:4500;sR:2300;\"\n                        style=\"z-index:16;font-family:Roboto;\"\n                        ><img src=\"./assets/revslider/assets_slider7/demo7-rev-07.png\" width=\"127\" height=\"126\" data-no-retina> \n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-4-slide-4-layer-13\" \n                        data-type=\"text\"\n                        data-color=\"#263c5c\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:472px,373px,283px,249px;yo:553px,494px,375px,339px;\"\n                        data-text=\"w:normal;s:40,29,22,13;l:46,33,25,15;fw:900;\"\n                        data-frame_1=\"st:1600;sR:1600;\"\n                        data-frame_999=\"o:0;st:4500;sp:360;sR:2600;\"\n                        style=\"z-index:18;font-family:Lato;text-transform:uppercase;\"\n                        >40%<br>Mad \n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-4-slide-4-layer-14\" \n                        data-type=\"text\"\n                        data-color=\"#263c5c\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:473px,436px,331px,247px;yo:555px,488px,370px,339px;\"\n                        data-text=\"w:normal;s:40,29,22,13;l:46,33,25,15;fw:900;\"\n                        data-dim=\"w:auto,auto,auto,66px;\"\n                        data-frame_1=\"st:4500;sR:4500;\"\n                        data-frame_999=\"o:0;st:w;sR:4200;\"\n                        style=\"z-index:19;font-family:Lato;text-transform:uppercase;\"\n                        >80%<br>Happy \n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-4-slide-4-layer-15\" \n                        data-type=\"text\"\n                        data-color=\"#263c5c\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:-150px,-36px,-48px,-16px;yo:200px,154px,154px,134px;\"\n                        data-text=\"w:normal;s:16,11,16,9;l:20,14,8,6;ls:4px,2px,1px,0px;fw:700;\"\n                        data-btrans=\"rZ:-90;\"\n                        data-frame_1=\"st:1600;sR:1600;\"\n                        data-frame_999=\"o:0;st:w;sR:7100;\"\n                        style=\"z-index:20;font-family:Lato;\"\n                        ># Iqonic Design \n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-4-slide-4-layer-17\" \n                        data-type=\"text\"\n                        data-color=\"#263c5c\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:-160px,-37px,-55px,-46px;y:b;yo:275px,313px,260px,173px;\"\n                        data-text=\"w:normal;s:20,14,14,12;l:25,18,13,8;\"\n                        data-btrans=\"rZ:-90;\"\n                        data-frame_1=\"st:2100;sR:2100;\"\n                        data-frame_999=\"o:0;st:w;sR:6600;\"\n                        style=\"z-index:22;font-family:Lato;\"\n                        >be ready to make your design \n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-4-slide-4-layer-18\" \n                        data-type=\"text\"\n                        data-color=\"#263c5c\"\n                        data-xy=\"xo:-150px,-34px,-33px,-33px;y:b;yo:230px,283px,220px,146px;\"\n                        data-text=\"w:normal;s:24,17,14,14;l:25,18,13,8;fw:900;\"\n                        data-rsp_o=\"off\"\n                        data-rsp_bd=\"off\"\n                        data-btrans=\"rZ:-90;\"\n                        data-frame_1=\"st:2100;sR:2100;\"\n                        data-frame_999=\"o:0;st:w;sR:6600;\"\n                        style=\"z-index:21;font-family:Lato;\"\n                        >Our Video Here \n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-4-slide-4-layer-19\" \n                        data-type=\"text\"\n                        data-color=\"#263c5c\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:0,19px,14px,8px;y:b;yo:10px,131px,99px,61px;\"\n                        data-text=\"w:normal;s:20,14,10,6;l:55,40,30,18;a:center;\"\n                        data-dim=\"w:75px,54px,41px,25px;h:75px,54px,41px,25px;\"\n                        data-padding=\"t:10,7,5,3;r:10,7,5,3;b:10,7,5,3;l:10,7,5,3;\"\n                        data-border=\"bos:solid;boc:#4cd9eb;bow:1px,1px,1px,1px;bor:90px,90px,90px,90px;\"\n                        data-frame_1=\"st:2500;sR:2500;\"\n                        data-frame_999=\"o:0;st:w;sR:6200;\"\n                        style=\"z-index:23;background-color:#ffffff;font-family:Lato;\"\n                        ><a href=\"#\" class=\"iq-video popup-youtube\" ><i class=\"fa fa-play\"></i></a> \n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-4-slide-4-layer-20\" \n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:c;xo:-393px,90px,68px,59px;y:m;yo:210px,378px,287px,289px;\"\n                        data-text=\"w:normal;s:20,14,10,6;l:0,18,13,8;\"\n                        data-dim=\"w:285px,208px,158px,97px;h:285px,208px,158px,97px;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:1200;sp:1000;sR:1200;\"\n                        data-frame_999=\"o:0;st:w;sR:6800;\"\n                        data-loop_999=\"rZ:360;sp:50000;\"\n                        style=\"z-index:15;font-family:Roboto;\"\n                        ><img src=\"./assets/revslider/assets_slider7/01.png\" width=\"285\" height=\"285\" data-no-retina> \n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-4-slide-4-layer-21\" \n                        data-type=\"shape\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:-150px,-109px,-82px,-50px;y:b;yo:50px,36px,27px,16px;\"\n                        data-text=\"w:normal;s:20,14,10,6;l:0,18,13,8;\"\n                        data-dim=\"w:150px,109px,82px,50px;h:1px;\"\n                        data-frame_0=\"x:-50,-36,-27,-16;\"\n                        data-frame_1=\"st:2500;sp:1000;sR:2500;\"\n                        data-frame_999=\"o:0;st:w;sR:5500;\"\n                        style=\"z-index:24;background-color:rgba(76,217,235,0.5);font-family:Roboto;\"\n                        > \n                    </rs-layer>\n                    <!--\n                        -->\t\t\t\t\t\t\n                </rs-slide>\n            </rs-slides>\n            <rs-progress class=\"rs-bottom\" style=\"visibility: hidden !important;\"></rs-progress>\n        </rs-module>\n    </rs-module-wrap>\n    <!-- END REVOLUTION SLIDER -->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/index/index.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/index/index.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Header component start-->\n<app-header [logoImg]=\"logoImage\" [navItemList]=\"navItems\" [contactInfo]=\"contactInfo\"></app-header>\n<!-- Header component end-->\n<!-- START REVOLUTION SLIDER -->\n<app-revolution-slider7></app-revolution-slider7>\n<!-- END REVOLUTION SLIDER -->\n<!-- MainContent -->\n<div class=\"main-content\">\n    <app-about-us></app-about-us>\n    <app-analysis-type></app-analysis-type>\n    <app-how-it-work></app-how-it-work>\n    <app-benefits></app-benefits>\n    <app-pricing></app-pricing>\n    <app-faq></app-faq>\n    <app-our-testimonial></app-our-testimonial>\n    <app-our-blog></app-our-blog>\n    <app-contact-form></app-contact-form>\n</div>\n<!-- Footer start -->\n<app-footer-style1 [footerProp]=\"footerProp\" [contactInfo]=\"contactInfo\"></app-footer-style1>\n<!-- Footer end -->\n");

/***/ }),

/***/ "./src/app/landing-page7/components/about-us/about-us.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/landing-page7/components/about-us/about-us.component.ts ***!
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
        this.checkList1 = [
            'Polarity: if the speaker express a positive or negative opinion,',
            'Subject: the thing that is being talked about',
            'Opinion holder: the person, or entity that expresses the opinion.'
        ];
    }
    ngOnInit() {
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/about-us/about-us.component.html")).default
    })
], AboutUsComponent);



/***/ }),

/***/ "./src/app/landing-page7/components/analysis-type/analysis-type.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/landing-page7/components/analysis-type/analysis-type.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AnalysisTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisTypeComponent", function() { return AnalysisTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AnalysisTypeComponent = class AnalysisTypeComponent {
    constructor() {
        this.List = [
            {
                title: 'Fine-grained Analysis',
                desc: 'All types of consulting service It is a long established fact .',
                image: './assets/images/services/03.png',
                checklist: ['Positive', 'Neutral', 'Negative']
            },
            {
                title: 'Emotion detection',
                desc: 'All types of consulting service It is a long established fact .',
                image: './assets/images/services/15.png',
                checklist: ['Positive', 'Neutral', 'Negative']
            },
            {
                title: 'Multilingual analysis',
                desc: 'All types of consulting service It is a long established fact .',
                image: './assets/images/services/03.png',
                checklist: ['Positive', 'Neutral', 'Negative']
            }
        ];
    }
    ngOnInit() {
    }
};
AnalysisTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-analysis-type',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./analysis-type.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/analysis-type/analysis-type.component.html")).default
    })
], AnalysisTypeComponent);



/***/ }),

/***/ "./src/app/landing-page7/components/benefits/benefits.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/landing-page7/components/benefits/benefits.component.ts ***!
  \*************************************************************************/
/*! exports provided: BenefitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitsComponent", function() { return BenefitsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BenefitsComponent = class BenefitsComponent {
    constructor() {
        this.titleSectionProp = {
            class: 'text-center',
            title: 'BENEFITS',
            subTitle: 'Benefits With Us',
        };
        this.List = [
            {
                title: 'Predictive insights',
                desc: 'There are many variations of passages of Lorem Ipsum available, in',
                image: './assets/images/fancybox/7-5.png',
                bg_img: './assets/images/fancybox/bg-7-2.png',
            },
            {
                title: 'Smarter Workforce',
                desc: 'There are many variations of passages of Lorem Ipsum available, in',
                image: './assets/images/fancybox/7-6.png',
                bg_img: './assets/images/fancybox/bg-7-2.png',
            },
            {
                title: 'Proficiency',
                desc: 'There are many variations of passages of Lorem Ipsum available, in',
                image: './assets/images/fancybox/7-7.png',
                bg_img: './assets/images/fancybox/bg-7-2.png',
            },
            {
                title: 'Consistent accuracy',
                desc: 'There are many variations of passages of Lorem Ipsum available, in',
                image: './assets/images/fancybox/7-8.png',
                bg_img: './assets/images/fancybox/bg-7-2.png',
            }
        ];
    }
    ngOnInit() {
    }
};
BenefitsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-benefits',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./benefits.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/benefits/benefits.component.html")).default
    })
], BenefitsComponent);



/***/ }),

/***/ "./src/app/landing-page7/components/contact-form/contact-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/landing-page7/components/contact-form/contact-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactFormComponent = class ContactFormComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/contact-form/contact-form.component.html")).default
    })
], ContactFormComponent);



/***/ }),

/***/ "./src/app/landing-page7/components/faq/faq.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/landing-page7/components/faq/faq.component.ts ***!
  \***************************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FaqComponent = class FaqComponent {
    constructor() {
        this.List = [
            { title: 'How does your pricing work?', desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, It is a long established.', active: true },
            { title: 'How does your pricing work?', desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, It is a long established.' },
            { title: 'How does your pricing work?', desc: '*There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, It is a long established.' }
        ];
    }
    ngOnInit() {
    }
};
FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-faq',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./faq.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/faq/faq.component.html")).default
    })
], FaqComponent);



/***/ }),

/***/ "./src/app/landing-page7/components/how-it-work/how-it-work.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/landing-page7/components/how-it-work/how-it-work.component.ts ***!
  \*******************************************************************************/
/*! exports provided: HowItWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItWorkComponent", function() { return HowItWorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HowItWorkComponent = class HowItWorkComponent {
    constructor() {
        this.titleSectionProp = {
            class: 'text-center',
            title: 'WORK',
            subTitle: 'How it works',
        };
        this.List = [
            {
                title: 'Text',
                desc: 'It is a long established fact that a fre ader will be distracted by the .',
                image: './assets/images/fancybox/7-1.png',
                arrow_image: './assets/images/fancybox/arrow-7.png',
                arrowbg_img: './assets/images/fancybox/bg-7-1.png',
            },
            {
                title: 'ML Algorithms',
                desc: 'It is a long established fact that a fre ader will be distracted by the .',
                image: './assets/images/fancybox/7-2.png',
                arrow_image: './assets/images/fancybox/arrow-7.png',
                arrowbg_img: './assets/images/fancybox/bg-7-1.png',
            },
            {
                title: 'Classified Model',
                desc: 'It is a long established fact that a fre ader will be distracted by the .',
                image: './assets/images/fancybox/7-3.png',
                arrow_image: './assets/images/fancybox/arrow-7.png',
                arrowbg_img: './assets/images/fancybox/bg-7-1.png',
            },
            {
                title: 'Prediction',
                desc: 'It is a long established fact that a fre ader will be distracted by the .',
                image: './assets/images/fancybox/7-4.png',
                arrowbg_img: './assets/images/fancybox/bg-7-1.png',
            }
        ];
    }
    ngOnInit() {
    }
};
HowItWorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-how-it-work',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./how-it-work.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/how-it-work/how-it-work.component.html")).default
    })
], HowItWorkComponent);



/***/ }),

/***/ "./src/app/landing-page7/components/our-blog/our-blog.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/landing-page7/components/our-blog/our-blog.component.ts ***!
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
    }
    ngOnInit() {
    }
};
OurBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-our-blog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-blog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/our-blog/our-blog.component.html")).default
    })
], OurBlogComponent);



/***/ }),

/***/ "./src/app/landing-page7/components/our-testimonial/our-testimonial.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/landing-page7/components/our-testimonial/our-testimonial.component.ts ***!
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
            title: 'Testimonials',
            subTitle: '100+ Companies are Using Xamin',
        };
        this.navigation = true;
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-testimonial.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/our-testimonial/our-testimonial.component.html")).default
    })
], OurTestimonialComponent);



/***/ }),

/***/ "./src/app/landing-page7/components/pricing/pricing.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/landing-page7/components/pricing/pricing.component.ts ***!
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
                title: "Free",
                subtitle: 'Feedback System',
                description: "It is a long established fact that a reader will be distracted",
                price: "0$",
                plan_desc: "/Month",
                href: "#",
                services: ["Social Integration", "Push Notifications", "Relevant App Content", "Log-in via Social Media"]
            },
            {
                title: "Team",
                subtitle: 'Feedback System',
                description: "It is a long established fact that a reader will be distracted",
                price: "49$",
                plan_desc: "/Month",
                active: true,
                href: "#",
                services: ["Social Integration", "Push Notifications", "Relevant App Content", "Log-in via Social Media"]
            },
            {
                title: "Enterprise",
                subtitle: 'Feedback System',
                description: "It is a long established fact that a reader will be distracted",
                price: "99$",
                plan_desc: "/Month",
                href: "#",
                services: ["Social Integration", "Push Notifications", "Relevant App Content", "Log-in via Social Media"]
            }
        ];
    }
    ngOnInit() {
    }
};
PricingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pricing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pricing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/pricing/pricing.component.html")).default
    })
], PricingComponent);



/***/ }),

/***/ "./src/app/landing-page7/components/revolution-slider7/revolution-slider7.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/landing-page7/components/revolution-slider7/revolution-slider7.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: RevolutionSlider7Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevolutionSlider7Component", function() { return RevolutionSlider7Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RevolutionSlider7Component = class RevolutionSlider7Component {
    constructor() { }
    ngOnInit() {
    }
};
RevolutionSlider7Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-revolution-slider7',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./revolution-slider7.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/components/revolution-slider7/revolution-slider7.component.html")).default
    })
], RevolutionSlider7Component);



/***/ }),

/***/ "./src/app/landing-page7/components/revolution-slider7/revolution-slider7.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/landing-page7/components/revolution-slider7/revolution-slider7.module.ts ***!
  \******************************************************************************************/
/*! exports provided: RevolutionSlider7Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevolutionSlider7Module", function() { return RevolutionSlider7Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _revolution_slider7_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./revolution-slider7.component */ "./src/app/landing-page7/components/revolution-slider7/revolution-slider7.component.ts");




let RevolutionSlider7Module = class RevolutionSlider7Module {
};
RevolutionSlider7Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_revolution_slider7_component__WEBPACK_IMPORTED_MODULE_3__["RevolutionSlider7Component"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _revolution_slider7_component__WEBPACK_IMPORTED_MODULE_3__["RevolutionSlider7Component"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], RevolutionSlider7Module);



/***/ }),

/***/ "./src/app/landing-page7/index/index.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page7/index/index.component.ts ***!
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page7/index/index.component.html")).default
    })
], IndexComponent);



/***/ }),

/***/ "./src/app/landing-page7/landing-page7.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/landing-page7/landing-page7.module.ts ***!
  \*******************************************************/
/*! exports provided: LandingPage7Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage7Module", function() { return LandingPage7Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../xamin/xamin.module */ "./src/app/xamin/xamin.module.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index/index.component */ "./src/app/landing-page7/index/index.component.ts");
/* harmony import */ var _components_revolution_slider7_revolution_slider7_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/revolution-slider7/revolution-slider7.module */ "./src/app/landing-page7/components/revolution-slider7/revolution-slider7.module.ts");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/landing-page7/components/about-us/about-us.component.ts");
/* harmony import */ var _components_analysis_type_analysis_type_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/analysis-type/analysis-type.component */ "./src/app/landing-page7/components/analysis-type/analysis-type.component.ts");
/* harmony import */ var _components_how_it_work_how_it_work_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/how-it-work/how-it-work.component */ "./src/app/landing-page7/components/how-it-work/how-it-work.component.ts");
/* harmony import */ var _components_benefits_benefits_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/benefits/benefits.component */ "./src/app/landing-page7/components/benefits/benefits.component.ts");
/* harmony import */ var _components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pricing/pricing.component */ "./src/app/landing-page7/components/pricing/pricing.component.ts");
/* harmony import */ var _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/faq/faq.component */ "./src/app/landing-page7/components/faq/faq.component.ts");
/* harmony import */ var _components_our_testimonial_our_testimonial_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/our-testimonial/our-testimonial.component */ "./src/app/landing-page7/components/our-testimonial/our-testimonial.component.ts");
/* harmony import */ var _components_our_blog_our_blog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/our-blog/our-blog.component */ "./src/app/landing-page7/components/our-blog/our-blog.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/contact-form/contact-form.component */ "./src/app/landing-page7/components/contact-form/contact-form.component.ts");
















const routes = [
    {
        path: '',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"],
        children: []
    }
];
let LandingPage7Module = class LandingPage7Module {
};
LandingPage7Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"], _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"], _components_analysis_type_analysis_type_component__WEBPACK_IMPORTED_MODULE_8__["AnalysisTypeComponent"], _components_how_it_work_how_it_work_component__WEBPACK_IMPORTED_MODULE_9__["HowItWorkComponent"], _components_benefits_benefits_component__WEBPACK_IMPORTED_MODULE_10__["BenefitsComponent"], _components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_11__["PricingComponent"], _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_12__["FaqComponent"], _components_our_testimonial_our_testimonial_component__WEBPACK_IMPORTED_MODULE_13__["OurTestimonialComponent"], _components_our_blog_our_blog_component__WEBPACK_IMPORTED_MODULE_14__["OurBlogComponent"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__["ContactFormComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _components_revolution_slider7_revolution_slider7_module__WEBPACK_IMPORTED_MODULE_6__["RevolutionSlider7Module"],
            _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_4__["XaminModule"]
        ]
    })
], LandingPage7Module);



/***/ })

}]);
//# sourceMappingURL=landing-page7-landing-page7-module-es2015.js.map
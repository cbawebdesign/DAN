(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about-us-one/about-us-one.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about-us-one/about-us-one.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Header component start-->\n<app-header [logoImg]=\"logoImage\" [navItemList]=\"navItems\" [contactInfo]=\"contactInfo\"></app-header>\n<!-- Header component end-->\n<app-top-banner [data]=\"data\"></app-top-banner>\n<div class=\"main-content\">\n  <app-about-two [titleSectionProp]=\"titleSectionProp\" [List]=\"Lists\"></app-about-two>\n  <app-about-card [cardData]=\"cardData\"></app-about-card>\n  <app-history></app-history>\n  <app-our-team></app-our-team>\n</div>\n<!-- Footer start -->\n<app-footer [logoImg]=\"logoImage\" [contactInfo]=\"contactInfo\"></app-footer>\n<!-- Footer end -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about-us-two/about-us-two.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about-us-two/about-us-two.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Header component start-->\n<app-header [logoImg]=\"logoImage\" [navItemList]=\"navItems\" [contactInfo]=\"contactInfo\"></app-header>\n<!-- Header component end-->\n<app-top-banner [data]=\"data\"></app-top-banner>\n<div class=\"main-content\">\n    <app-our-services></app-our-services>\n    <app-section-two></app-section-two>\n    <app-section-three></app-section-three>\n    <app-our-testimonial></app-our-testimonial>\n    <app-our-partner></app-our-partner>\n</div>\n<!-- Footer start -->\n<app-footer [logoImg]=\"logoImage\" [contactInfo]=\"contactInfo\"></app-footer>\n<!-- Footer end -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about-us-two/components/our-partner/our-partner.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about-us-two/components/our-partner/our-partner.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"iq-ptb-100\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12 wow fadeInUp\">\n                <div class=\"owl-carousel client-logo owl-loaded owl-drag\" data-dots=\"false\" data-nav=\"false\" data-items=\"6\" data-items-laptop=\"4\" data-items-tab=\"3\" data-items-mobile=\"2\" data-items-mobile-sm=\"1\" data-autoplay=\"true\" data-loop=\"true\" data-margin=\"30\">\n                    <div *ngFor=\"let lists of List\" class=\"item\">\n                        <div class=\"clients-box hover-effct\">\n                            <img class=\"img-fluid client-img\" src=\"./assets/images/partners/{{ lists.img }}\" alt=\"client-image\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about-us-two/components/our-services/our-services.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about-us-two/components/our-services/our-services.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <div class=\"container\">\n        <div class=\"row xamin-bg\">\n            <div class=\"col-sm-12 offset-md-1 offset-lg-1 col-md-10 col-lg-10 wow fadeInUp text-center\">\n                <div>\n                    <div class=\"title-box text-center\">\n                        <span class=\"title-design\">our Services</span>\n                        <h2 class=\"mb-0\">We Provide Useful Services</h2>\n                    </div>\n                    <div class=\"scroll-effect\">\n                        <img src=\"./assets/images/about-us/09.jpg\" class=\"img-fluid img-one\" alt=\"#\" />\n                        <div class=\"main-video\">\n                            <div class=\"video-img\">\n                                <div class=\"consult-video video-btn\">\n                                    <div class=\"btn-waves\">\n                                        <div class=\"waves wave-1\"></div>\n                                        <div class=\"waves wave-2\"></div>\n                                        <div class=\"waves wave-3\"></div>\n                                    </div>\n                                    <a href=\"http://www.youtube.com/watch?v=0O2aH4XLbto\" class=\"iq-video popup-youtube\"><i class=\"fa fa-play\"></i></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row mt-5\">\n            <div *ngFor=\"let list of List\" class=\"col-lg-4 col-sm-12\">\n                <div class=\"service-box mt-5 mb-0 wow fadeInUp text-left\" data-wow-delay=\"0.6s\">\n                    <img src=\"{{ list.image }}\" alt=\"fancybox\">\n                    <div class=\"service-detail align-self-center\">\n                        <h4 class=\"mb-2\">{{ list.title }}</h4>\n                        <p>{{ list.desc }}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about-us-two/components/our-testimonial/our-testimonial.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about-us-two/components/our-testimonial/our-testimonial.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"pt-0 bg-with-image\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n        </div>\n        <app-testimonials [List]=\"List\"></app-testimonials>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about-us-two/components/section-three/section-three.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about-us-two/components/section-three/section-three.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"aboutus-two-service\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"title-box wow fadeInUp text-center mb-0\">\n                    <span class=\"title-design\">our Services</span>\n                    <h2 class=\"mb-0\">We Provide Useful Services</h2>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div *ngFor=\"let list of List\" class=\"col-lg-4 col-md-6\">\n                <div class=\"service-box wow fadeInUp text-left\">\n                    <img class=\"fancy-list-img\" src=\"{{ list.image }}\" alt=\"fancy-list\" />\n                    <div class=\"service-detail align-self-center\">\n                        <h4 class=\"mb-2\">{{ list.title }}</h4>\n                        <p>{{ list.desc }}</p>\n                        <div class=\"text-left\">\n                            <app-check-list [lists]=\"list.checkList\"></app-check-list>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about-us-two/components/section-two/section-two.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about-us-two/components/section-two/section-two.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"bg-gray\">\n    <div class=\"container\">\n        <div class=\"row iq-how-it-works\">\n            <div class=\"fadeInUp   col-sm-12 col-lg-6 col-md-6 wow align-items-center\">\n                <div class=\"title-box wow fadeInUp text-left\">\n                    <span class=\"title-design\">About us</span>\n                    <h2>Human Behaviour, Data Science</h2>\n                    <p> It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout. </p>\n                </div>\n                <div class=\"text-left\">\n                    <app-check-list [lists]=\"checkList1\"></app-check-list>\n                </div>\n            </div>\n            <div class=\"fadeInUp col-sm-12 col-lg-6 col-md-6 wow\">\n                <img alt=\"\" class=\"single_image-img attachment-full\" height=\"954\" src=\"./assets/images/about-us/03.png\" width=\"1260\" />\n            </div>\n        </div>\n        <div class=\"row iq-how-it-works pt-5\">\n            <div class=\"fadeInUp col-sm-12 col-lg-6 col-md-6 wow\">\n                <img alt=\"\" class=\"single_image-img attachment-full\" height=\"954\" src=\"./assets/images/about-us/05.png\" width=\"1260\" />\n                </div>\n            <div class=\" fadeInUp  col-sm-12 col-lg-6 col-md-6 wow align-items-center\">\n                <div class=\"title-box wow fadeInUp text-left\">\n                    <span class=\"title-design\">About us</span>\n                    <h2>Human Behaviour, Data Science</h2>\n                    <p> It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout. </p>\n                </div>\n                <div class=\"text-left\">\n                    <app-check-list [lists]=\"checkList2\"></app-check-list>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/history/history.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/history/history.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"pt-0\">\n  <div class=\"container\">\n    <div class=\"row xamin-bg\">\n      <div class=\"col-sm-12\">\n        <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n      </div>\n      <div *ngFor=\"let list of List\" class=\"col-sm-12 mb-5\">\n        <div class=\"{{ list.class }}\">\n          <div class=\"xamin-history row row-eq-height align-items-center wow fadeInUp \">\n            <div class=\"col-sm-4 col-lg-2 col-md-2\">\n                <img alt=\"\" class=\"single_image-img attachment-full\" height=\"360\" width=\"550\" src=\"{{ list.img }}\" >\n            </div>\n            <div class=\"text-lg-center text-left col-sm-12 col-lg-2 col-md-3\">\n              <h4 class=\"pt-3 pb-1 pt-lg-0 pb-lg-0\">{{ list.year }}</h4>\n            </div>\n            <div class=\"col-sm-12 col-lg-8 col-md-7\">\n              <p class=\"mb-0\">{{ list.desc }}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/our-team/our-team.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/our-team/our-team.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"pt-0\">\n  <div class=\"container\">\n    <div class=\"row xamin-bg\">\n      <div class=\"col-sm-12\">\n        <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n      </div>\n    </div>\n    <div class=\"col-md-12 wow fadeInUp \">\n      <app-team></app-team>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./src/app/about/about-us-one/about-us-one.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/about/about-us-one/about-us-one.component.ts ***!
  \**************************************************************/
/*! exports provided: AboutUsOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsOneComponent", function() { return AboutUsOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _xamin_plugins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../xamin/plugins.service */ "./src/app/xamin/plugins.service.ts");
/* harmony import */ var _constants_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/menu */ "./src/constants/menu.js");




let AboutUsOneComponent = class AboutUsOneComponent {
    constructor(plugins) {
        this.plugins = plugins;
        this.logoImage = './assets/images/logo.png';
        this.contactInfo = {
            contactNumber: '+0123456789',
            email: 'support@iqnonicthemes.com'
        };
        this.navItems = _constants_menu__WEBPACK_IMPORTED_MODULE_3__["topMenuBarItems"];
        this.data = {
            title: "About us",
            img: "04.png"
        };
        this.titleSectionProp = {
            title: 'ABOUT US',
            subTitle: 'Human Behaviour, Data Science',
            description: 'It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout.'
        };
        this.Lists = {
            isOuter: false,
            img: '06.png',
            chkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations']
        };
        this.cardData = [
            {
                title: "Data for all people",
                desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            },
            {
                title: "A new breed of AI",
                desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            },
            {
                title: "Analytics business",
                desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            },
        ];
    }
    ngOnInit() {
        const current = this;
        setTimeout(function () {
            current.plugins.index();
        }, 200);
    }
};
AboutUsOneComponent.ctorParameters = () => [
    { type: _xamin_plugins_service__WEBPACK_IMPORTED_MODULE_2__["PluginsService"] }
];
AboutUsOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us-one',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us-one.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about-us-one/about-us-one.component.html")).default,
    })
], AboutUsOneComponent);



/***/ }),

/***/ "./src/app/about/about-us-two/about-us-two.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/about/about-us-two/about-us-two.component.ts ***!
  \**************************************************************/
/*! exports provided: AboutUsTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsTwoComponent", function() { return AboutUsTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _xamin_plugins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../xamin/plugins.service */ "./src/app/xamin/plugins.service.ts");
/* harmony import */ var _constants_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/menu */ "./src/constants/menu.js");




let AboutUsTwoComponent = class AboutUsTwoComponent {
    constructor(plugins) {
        this.plugins = plugins;
        this.logoImage = './assets/images/logo.png';
        this.contactInfo = {
            contactNumber: '+0123456789',
            email: 'support@iqnonicthemes.com'
        };
        this.navItems = _constants_menu__WEBPACK_IMPORTED_MODULE_3__["topMenuBarItems"];
        this.data = {
            title: "About Us Two",
            img: "04.png"
        };
        this.titleSectionProp = {
            title: 'ABOUT US',
            subTitle: 'Human Behaviour, Data Science',
            description: 'It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout.'
        };
    }
    ngOnInit() {
        const current = this;
        setTimeout(function () {
            current.plugins.index();
        }, 200);
    }
};
AboutUsTwoComponent.ctorParameters = () => [
    { type: _xamin_plugins_service__WEBPACK_IMPORTED_MODULE_2__["PluginsService"] }
];
AboutUsTwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us-two',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us-two.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about-us-two/about-us-two.component.html")).default
    })
], AboutUsTwoComponent);



/***/ }),

/***/ "./src/app/about/about-us-two/components/our-partner/our-partner.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/about/about-us-two/components/our-partner/our-partner.component.ts ***!
  \************************************************************************************/
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
            { img: '1.png' },
            { img: '2.png' },
            { img: '3.png' },
            { img: '4.png' },
            { img: '1.png' },
            { img: '2.png' }
        ];
    }
    ngOnInit() {
    }
};
OurPartnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-our-partner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-partner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about-us-two/components/our-partner/our-partner.component.html")).default
    })
], OurPartnerComponent);



/***/ }),

/***/ "./src/app/about/about-us-two/components/our-services/our-services.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/about/about-us-two/components/our-services/our-services.component.ts ***!
  \**************************************************************************************/
/*! exports provided: OurServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServicesComponent", function() { return OurServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OurServicesComponent = class OurServicesComponent {
    constructor() {
        this.List = [
            { title: 'Data for all people', image: './assets/images/services/01.png', desc: 'There are many variations of passages of Lorem Ipsum available.' },
            { title: 'A new breed of AI', image: './assets/images/services/02.png', desc: 'There are many variations of passages of Lorem Ipsum available.' },
            { title: 'Analytics business', image: './assets/images/services/03.png', desc: 'There are many variations of passages of Lorem Ipsum available.' }
        ];
    }
    ngOnInit() {
    }
};
OurServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-our-services',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about-us-two/components/our-services/our-services.component.html")).default
    })
], OurServicesComponent);



/***/ }),

/***/ "./src/app/about/about-us-two/components/our-testimonial/our-testimonial.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/about/about-us-two/components/our-testimonial/our-testimonial.component.ts ***!
  \********************************************************************************************/
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
            title: 'OUR SERVICES',
            subTitle: 'What Our Clients Say',
        };
        this.List = [
            {
                img: "1.jpg",
                name: "Rick Shrotri",
                designation: "CEO",
                desc: "Richard McClintock, a Latin professor at Hampden-Sydney consectetur adip isicing elit, sed dolore magna aliqua hampden. Latin professor at Hampden-Sydney consectetur."
            },
            {
                img: "2.jpg",
                name: "Andy Alcon",
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-testimonial.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about-us-two/components/our-testimonial/our-testimonial.component.html")).default
    })
], OurTestimonialComponent);



/***/ }),

/***/ "./src/app/about/about-us-two/components/section-three/section-three.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/about/about-us-two/components/section-three/section-three.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SectionThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionThreeComponent", function() { return SectionThreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SectionThreeComponent = class SectionThreeComponent {
    constructor() {
        this.List = [
            {
                title: 'Data Analytics',
                image: './assets/images/services/01.png',
                desc: 'It is a long established fact that a reader will be distracted by the of readable content.',
                checkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center']
            },
            {
                title: 'Managed Analytics',
                image: './assets/images/services/02.png',
                desc: 'It is a long established fact that a reader will be distracted by the of readable content.',
                checkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center']
            },
            {
                title: 'Big Data Services',
                image: './assets/images/services/03.png',
                desc: 'It is a long established fact that a reader will be distracted by the of readable content.',
                checkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center']
            },
            {
                title: 'Data Science',
                image: './assets/images/services/04.png',
                desc: 'It is a long established fact that a reader will be distracted by the of readable content.',
                checkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center']
            },
            {
                title: 'Business Intelligence',
                image: './assets/images/services/06.png',
                desc: 'It is a long established fact that a reader will be distracted by the of readable content.',
                checkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center']
            },
            {
                title: 'Data Visualization',
                image: './assets/images/services/05.png',
                desc: 'It is a long established fact that a reader will be distracted by the of readable content.',
                checkList: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center']
            }
        ];
    }
    ngOnInit() {
    }
};
SectionThreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-section-three',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./section-three.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about-us-two/components/section-three/section-three.component.html")).default
    })
], SectionThreeComponent);



/***/ }),

/***/ "./src/app/about/about-us-two/components/section-two/section-two.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/about/about-us-two/components/section-two/section-two.component.ts ***!
  \************************************************************************************/
/*! exports provided: SectionTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTwoComponent", function() { return SectionTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SectionTwoComponent = class SectionTwoComponent {
    constructor() {
        this.checkList1 = ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations'];
        this.checkList2 = ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Customer Service & Operations'];
    }
    ngOnInit() {
    }
};
SectionTwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-section-two',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./section-two.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about-us-two/components/section-two/section-two.component.html")).default
    })
], SectionTwoComponent);



/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../xamin/xamin.module */ "./src/app/xamin/xamin.module.ts");
/* harmony import */ var _about_us_one_about_us_one_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-us-one/about-us-one.component */ "./src/app/about/about-us-one/about-us-one.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history/history.component */ "./src/app/about/history/history.component.ts");
/* harmony import */ var _our_team_our_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./our-team/our-team.component */ "./src/app/about/our-team/our-team.component.ts");
/* harmony import */ var _about_us_two_about_us_two_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about-us-two/about-us-two.component */ "./src/app/about/about-us-two/about-us-two.component.ts");
/* harmony import */ var _about_us_two_components_our_services_our_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about-us-two/components/our-services/our-services.component */ "./src/app/about/about-us-two/components/our-services/our-services.component.ts");
/* harmony import */ var _about_us_two_components_section_two_section_two_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about-us-two/components/section-two/section-two.component */ "./src/app/about/about-us-two/components/section-two/section-two.component.ts");
/* harmony import */ var _about_us_two_components_section_three_section_three_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about-us-two/components/section-three/section-three.component */ "./src/app/about/about-us-two/components/section-three/section-three.component.ts");
/* harmony import */ var _about_us_two_components_our_testimonial_our_testimonial_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about-us-two/components/our-testimonial/our-testimonial.component */ "./src/app/about/about-us-two/components/our-testimonial/our-testimonial.component.ts");
/* harmony import */ var _about_us_two_components_our_partner_our_partner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about-us-two/components/our-partner/our-partner.component */ "./src/app/about/about-us-two/components/our-partner/our-partner.component.ts");














const routes = [
    {
        path: '',
        component: _about_us_one_about_us_one_component__WEBPACK_IMPORTED_MODULE_5__["AboutUsOneComponent"],
    },
    {
        path: 'about-us-two',
        component: _about_us_two_about_us_two_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsTwoComponent"]
    }
];
let AboutModule = class AboutModule {
};
AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_about_us_one_about_us_one_component__WEBPACK_IMPORTED_MODULE_5__["AboutUsOneComponent"], _history_history_component__WEBPACK_IMPORTED_MODULE_6__["HistoryComponent"], _our_team_our_team_component__WEBPACK_IMPORTED_MODULE_7__["OurTeamComponent"], _about_us_two_about_us_two_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsTwoComponent"], _about_us_two_components_our_services_our_services_component__WEBPACK_IMPORTED_MODULE_9__["OurServicesComponent"], _about_us_two_components_section_two_section_two_component__WEBPACK_IMPORTED_MODULE_10__["SectionTwoComponent"], _about_us_two_components_section_three_section_three_component__WEBPACK_IMPORTED_MODULE_11__["SectionThreeComponent"], _about_us_two_components_our_testimonial_our_testimonial_component__WEBPACK_IMPORTED_MODULE_12__["OurTestimonialComponent"], _about_us_two_components_our_partner_our_partner_component__WEBPACK_IMPORTED_MODULE_13__["OurPartnerComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_4__["XaminModule"]
        ]
    })
], AboutModule);



/***/ }),

/***/ "./src/app/about/history/history.component.ts":
/*!****************************************************!*\
  !*** ./src/app/about/history/history.component.ts ***!
  \****************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HistoryComponent = class HistoryComponent {
    constructor() {
        this.titleSectionProp = {
            class: 'text-center',
            title: 'OUR HISTORY',
            subTitle: 'Xamin Company History',
            description: ''
        };
        this.List = [
            {
                class: 'bg-gray',
                img: './assets/images/about-us/01.png',
                year: '2012 - 2013',
                desc: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages.'
            },
            {
                class: 'border',
                img: './assets/images/about-us/07.png',
                year: '2013 - 2014',
                desc: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages.'
            },
            {
                class: 'bg-gray',
                img: './assets/images/about-us/03.png',
                year: '2014 - 2015',
                desc: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages.'
            },
            {
                class: 'border',
                img: './assets/images/about-us/02.png',
                year: '2015 - 2016',
                desc: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages.'
            },
        ];
    }
    ngOnInit() {
    }
};
HistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/history/history.component.html")).default
    })
], HistoryComponent);



/***/ }),

/***/ "./src/app/about/our-team/our-team.component.ts":
/*!******************************************************!*\
  !*** ./src/app/about/our-team/our-team.component.ts ***!
  \******************************************************/
/*! exports provided: OurTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurTeamComponent", function() { return OurTeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OurTeamComponent = class OurTeamComponent {
    constructor() {
        this.titleSectionProp = {
            class: 'text-center',
            title: 'TEAM',
            subTitle: 'Management Team',
            description: ''
        };
    }
    ngOnInit() {
    }
};
OurTeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-our-team',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-team.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/our-team/our-team.component.html")).default,
    })
], OurTeamComponent);



/***/ })

}]);
//# sourceMappingURL=about-about-module-es2015.js.map
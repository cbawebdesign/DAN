(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/careers/careers.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/careers/careers.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header component start-->\n<app-header [logoImg]=\"logoImage\" [navItemList]=\"navItems\" [contactInfo]=\"contactInfo\"></app-header>\n<!-- Header component end-->\n<app-top-banner [data]=\"data\"></app-top-banner>\n<div class=\"main-content\">\n  <section>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"iq-accordion career-style\">\n            <div *ngFor=\"let lists of List\" class=\"iq-accordion-block\">\n              <div class=\"active-faq clearfix\">\n                <div class=\"container\">\n                  <div class=\"row align-items-center\">\n                    <div class=\"col-md-9 col-sm-12 \"> <a href=\"javascript:void(0)\" class=\"accordion-title\"><span>{{ lists.title }}</span></a> </div>\n                    <div class=\"col-md-3 col-sm-12 text-center text-lg-right text-md-right\"> <a class=\"button\" href=\"#\">Apply Now</a> </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"accordion-details\">\n                <div class=\"container\">\n                  <div class=\"row mt-4\">\n                    <div class=\"col-lg-6 mb-4 mb-lg-0\">\n                      <h4 class=\"mb-3\">Job Descriptions:</h4>\n                          <app-check-list [lists]=\"lists.job\"></app-check-list>\n                    </div>\n                    <div class=\"col-lg-6\">\n                      <h4 class=\"mb-3\">Qualifications:</h4>\n                          <app-check-list [lists]=\"lists.qualification\"></app-check-list>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n<!-- Footer start -->\n<app-footer [logoImg]=\"logoImage\" [contactInfo]=\"contactInfo\"></app-footer>\n<!-- Footer end -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/contact-us/contact-us.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/contact-us/contact-us.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header component start-->\n<app-header [logoImg]=\"logoImage\" [navItemList]=\"navItems\" [contactInfo]=\"contactInfo\"></app-header>\n<!-- Header component end-->\n<app-top-banner [data]=\"data\"></app-top-banner>\n<div class=\"main-content\">\n  <section>\n    <div class=\"container\">\n    <div class=\"row\">\n      <div *ngFor=\"let list of List\" class=\"col-sm-12\">\n        <div class=\"consult-services wow fadeInUp contact-detail text-center\">\n          <div class=\"circle-effect\"> <i aria-hidden=\"true\" class=\"fa fa-envelope\"></i> </div>\n          <h4 class=\"mb-2\">{{ list.title }}</h4>\n          <p class=\"mb-0\">{{ list.address }}</p>\n          <p class=\"mb-0\">{{ list.address1 }}</p>\n\n        </div>\n      </div>\n    </div>\n    </div>\n  </section>\n  <!-- Contact us page -->\n  \n  <!-- Contact us page End-->\n</div>\n<!-- Footer start -->\n<app-footer [logoImg]=\"logoImage\" [contactInfo]=\"contactInfo\"></app-footer>\n<!-- Footer end -->\n\n\n<style>\n\n  .a {\n    text-decoration: bold;\n  }\n</style>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/our-client/our-client.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/our-client/our-client.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header component start-->\n<app-header [logoImg]=\"logoImage\" [navItemList]=\"navItems\" [contactInfo]=\"contactInfo\"></app-header>\n<!-- Header component end-->\n<app-top-banner [data]=\"data\"></app-top-banner>\n<div class=\"main-content\">\n  <section>\n    <div class=\"container\">\n      <div class=\"row xamin-bg\">\n        <div class=\"col-sm-12\">\n          <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n        </div>\n        <div class=\"col-sm-12\">\n          <div class=\"row fancy-clients  wow fadeIn\">\n            <div *ngFor=\"let lists of List\" class=\"col-lg-2 col-md-3 col-sm-6 text-center\">\n              <a class=\"clients-block wow fadeIn\" data-wow-delay=\"0.6s\" href=\"#\"> <img class=\"img-fluid\" src=\"./assets/images/partners/{{ lists.img }}\" alt=\"image\"> </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n<!-- Footer start -->\n<app-footer [logoImg]=\"logoImage\" [contactInfo]=\"contactInfo\"></app-footer>\n<!-- Footer end -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/our-team/our-team.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/our-team/our-team.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header component start-->\n<app-header [logoImg]=\"logoImage\" [navItemList]=\"navItems\" [contactInfo]=\"contactInfo\"></app-header>\n<!-- Header component end-->\n<app-top-banner [data]=\"data\"></app-top-banner>\n<div class=\"main-content\">\n  <!-- Team Section -->\n  <section >\n    <div class=\"container\">\n      <div class=\"row xamin-bg\">\n        <div class=\"col-sm-12\">\n          <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n        </div>\n        <div class=\"col-md-12 wow fadeInUp mb-5 \">\n          <app-team></app-team>\n        </div>\n        <div class=\"col-md-12 wow fadeInUp \">\n          <app-team></app-team>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n<!-- Footer start -->\n<app-footer [logoImg]=\"logoImage\" [contactInfo]=\"contactInfo\"></app-footer>\n<!-- Footer end -->\n\n"

/***/ }),

/***/ "./src/app/pages/careers/careers.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/careers/careers.component.ts ***!
  \****************************************************/
/*! exports provided: CareersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareersComponent", function() { return CareersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _xamin_plugins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../xamin/plugins.service */ "./src/app/xamin/plugins.service.ts");
/* harmony import */ var _constants_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/menu */ "./src/constants/menu.js");




let CareersComponent = class CareersComponent {
    constructor(plugins) {
        this.plugins = plugins;
        this.logoImage = './assets/images/logo.png';
        this.contactInfo = {
            contactNumber: '+0123456789',
            email: 'support@iqnonicthemes.com'
        };
        this.navItems = _constants_menu__WEBPACK_IMPORTED_MODULE_3__["topMenuBarItems"];
        this.data = {
            title: "Careers",
            img: "04.png"
        };
        this.List = [
            {
                title: "Finance adviser-2 Posts",
                job: ['It is a long established fact that a reader will be distracted.', 'The point of using Lorem Ipsum is that.', 'Many desktop publishing packages and web page.',
                    'There are many variations of passages.', 'All the Lorem Ipsum generators on the Internet.', 'It uses a dictionary of over 200 Latin words.'],
                qualification: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center']
            },
            {
                title: "Marketing Manager-1 Posts",
                job: ['It is a long established fact that a reader will be distracted.', 'The point of using Lorem Ipsum is that.', 'Many desktop publishing packages and web page.',
                    'There are many variations of passages.', 'All the Lorem Ipsum generators on the Internet.', 'It uses a dictionary of over 200 Latin words.'],
                qualification: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center']
            },
            {
                title: "Health and Medical Expert -1 Posts",
                job: ['It is a long established fact that a reader will be distracted.', 'The point of using Lorem Ipsum is that.', 'Many desktop publishing packages and web page.',
                    'There are many variations of passages.', 'All the Lorem Ipsum generators on the Internet.', 'It uses a dictionary of over 200 Latin words.'],
                qualification: ['Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center', 'Advance Advisory Team', 'Professional Consulting Services', '24/7 Support Help Center']
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
CareersComponent.ctorParameters = () => [
    { type: _xamin_plugins_service__WEBPACK_IMPORTED_MODULE_2__["PluginsService"] }
];
CareersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-careers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./careers.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/careers/careers.component.html")).default,
    })
], CareersComponent);



/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.ts ***!
  \**********************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _xamin_plugins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../xamin/plugins.service */ "./src/app/xamin/plugins.service.ts");
/* harmony import */ var _constants_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/menu */ "./src/constants/menu.js");




let ContactUsComponent = class ContactUsComponent {
    constructor(plugins) {
        this.plugins = plugins;
        this.logoImage = './assets/images/logo.png';
        this.contactInfo = {
            contactNumber: '+0123456789',
            email: 'support@iqnonicthemes.com'
        };
        this.navItems = _constants_menu__WEBPACK_IMPORTED_MODULE_3__["topMenuBarItems"];
        this.data = {
            title: "Contact us",
            img: "logo.png"
        };
        this.List = [
            {
                title: "Karl Meyer",
                address: "Partner",
                address1: " karl@dalphafund.com      "
            },
            {
                title: "Natalie Topham-Smith",
                address: "Investor Relations",
                address1: "natalie@dalphafund.com"
            }
        ];
    }
    ngOnInit() {
        const current = this;
        setTimeout(function () {
            current.plugins.index();
        }, 200);
    }
};
ContactUsComponent.ctorParameters = () => [
    { type: _xamin_plugins_service__WEBPACK_IMPORTED_MODULE_2__["PluginsService"] }
];
ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/contact-us/contact-us.component.html")).default,
    })
], ContactUsComponent);



/***/ }),

/***/ "./src/app/pages/our-client/our-client.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/our-client/our-client.component.ts ***!
  \**********************************************************/
/*! exports provided: OurClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurClientComponent", function() { return OurClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _xamin_plugins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../xamin/plugins.service */ "./src/app/xamin/plugins.service.ts");
/* harmony import */ var _constants_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/menu */ "./src/constants/menu.js");




let OurClientComponent = class OurClientComponent {
    constructor(plugins) {
        this.plugins = plugins;
        this.logoImage = './assets/images/logo.png';
        this.contactInfo = {
            contactNumber: '+0123456789',
            email: 'support@iqnonicthemes.com'
        };
        this.navItems = _constants_menu__WEBPACK_IMPORTED_MODULE_3__["topMenuBarItems"];
        this.data = {
            title: "Clients",
            img: "04.png"
        };
        this.titleSectionProp = {
            class: 'text-center',
            title: 'OUR CLIENTS',
            subTitle: 'All Our Great Clients',
            description: ''
        };
        this.List = [
            {
                img: "1.png",
            }, {
                img: "2.png",
            }, {
                img: "4.png",
            }, {
                img: "5.png",
            }, {
                img: "1.png",
            }, {
                img: "2.png",
            }, {
                img: "3.png",
            }, {
                img: "4.png",
            }, {
                img: "5.png",
            }, {
                img: "1.png",
            }, {
                img: "3.png",
            }, {
                img: "2.png",
            }, {
                img: "4.png",
            }, {
                img: "1.png",
            }, {
                img: "2.png",
            }, {
                img: "3.png",
            }, {
                img: "5.png",
            }, {
                img: "4.png",
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
OurClientComponent.ctorParameters = () => [
    { type: _xamin_plugins_service__WEBPACK_IMPORTED_MODULE_2__["PluginsService"] }
];
OurClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-our-client',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-client.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/our-client/our-client.component.html")).default,
    })
], OurClientComponent);



/***/ }),

/***/ "./src/app/pages/our-team/our-team.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/our-team/our-team.component.ts ***!
  \******************************************************/
/*! exports provided: OurTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurTeamComponent", function() { return OurTeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _xamin_plugins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../xamin/plugins.service */ "./src/app/xamin/plugins.service.ts");
/* harmony import */ var _constants_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/menu */ "./src/constants/menu.js");




let OurTeamComponent = class OurTeamComponent {
    constructor(plugins) {
        this.plugins = plugins;
        this.logoImage = './assets/images/logo.png';
        this.contactInfo = {
            contactNumber: '+0123456789',
            email: 'support@iqnonicthemes.com'
        };
        this.navItems = _constants_menu__WEBPACK_IMPORTED_MODULE_3__["topMenuBarItems"];
        this.data = {
            title: "Our Team",
            img: "04.png"
        };
        this.titleSectionProp = {
            class: 'text-center',
            title: 'TEAM',
            subTitle: 'Management Team',
            description: ''
        };
    }
    ngOnInit() {
        const current = this;
        setTimeout(function () {
            current.plugins.index();
        }, 200);
    }
};
OurTeamComponent.ctorParameters = () => [
    { type: _xamin_plugins_service__WEBPACK_IMPORTED_MODULE_2__["PluginsService"] }
];
OurTeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-our-team',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-team.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/our-team/our-team.component.html")).default,
    })
], OurTeamComponent);



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../xamin/xamin.module */ "./src/app/xamin/xamin.module.ts");
/* harmony import */ var _our_team_our_team_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./our-team/our-team.component */ "./src/app/pages/our-team/our-team.component.ts");
/* harmony import */ var _our_client_our_client_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./our-client/our-client.component */ "./src/app/pages/our-client/our-client.component.ts");
/* harmony import */ var _careers_careers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./careers/careers.component */ "./src/app/pages/careers/careers.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/pages/contact-us/contact-us.component.ts");









const routes = [
    {
        path: 'our-team',
        component: _our_team_our_team_component__WEBPACK_IMPORTED_MODULE_5__["OurTeamComponent"],
    },
    {
        path: 'client',
        component: _our_client_our_client_component__WEBPACK_IMPORTED_MODULE_6__["OurClientComponent"],
    },
    {
        path: 'career',
        component: _careers_careers_component__WEBPACK_IMPORTED_MODULE_7__["CareersComponent"],
    },
    {
        path: 'contact-us',
        component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__["ContactUsComponent"],
    },
];
let PagesModule = class PagesModule {
};
PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_our_team_our_team_component__WEBPACK_IMPORTED_MODULE_5__["OurTeamComponent"], _our_client_our_client_component__WEBPACK_IMPORTED_MODULE_6__["OurClientComponent"], _careers_careers_component__WEBPACK_IMPORTED_MODULE_7__["CareersComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__["ContactUsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_4__["XaminModule"]
        ]
    })
], PagesModule);



/***/ })

}]);
//# sourceMappingURL=pages-pages-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-page6-landing-page6-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/landing-page6/components/about-us/about-us.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing-page6/components/about-us/about-us.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"pt-0 postion-relative overflow-hidden\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 wow fadeInUp align-items-center\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n                    </div>\n                </div>\n                <div class=\"row custom-tab verticaltab2 text-left  \">\n                    <div class=\"col-lg-4 col-md-12 \">\n                        <ul class=\"nav nav-pills mb-5\" id=\"pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\n                            <li  class=\"nav-item\" *ngFor=\"let list of List\">\n                                <a class=\"nav-link {{ list.active !== undefined && list.active ? 'active show' : '' }}\" data-toggle=\"pill\" (click)=\"tabActive(list.id)\"  href=\"{{ '#' + list.id }}\" role=\"tab\" [attr.aria-selected]=\" list.active !== undefined ? true : false \">\n                                    <h6 class=\"tab-title\">{{ list.title }}</h6>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"col-lg-8 col-md-12 tab-content\">\n                        <div *ngFor=\"let list of List\" id=\"{{ list.id }}\" class=\"tab-pane fade {{ list.active !== undefined && list.active ? 'show active' : '' }}\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-12\">\n                                    <p *ngFor=\"let text of list.desc\">{{ text }}</p>\n                                    <div class=\"text-left\"><a class=\"button button-icon\" href=\"#\"><span class=\"btn-effect\"> Read More</span></a></div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-6 wow fadeInUp xamin-right-img\">\n                <img src=\"./assets/images/about-us/16.jpg\" alt=\"about\">\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing-page6/components/case-studies/case-studies.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing-page6/components/case-studies/case-studies.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section  class=\"pt-0\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 fadeInUp  animated\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n            </div>\n            <div class=\"col-md-12\">\n                <div id=\"features\" class=\"iq-amazing-tab wow fadeInUp\" data-wow-delay=\"1s\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <ul class=\"nav  justify-content-center\" id=\"myTab\" role=\"tablist\">\n                                <li><a class=\"nav-link show active\" id=\"all-tab\" data-toggle=\"tab\" (click)=\"tabActive(all)\" href=\"#all\" role=\"tab\" aria-selected=\"true\">All<span class=\"post_no\">8</span></a></li>\n                                <li><a class=\"nav-link\" id=\"design-tab\" data-toggle=\"tab\" (click)=\"tabActive(design)\" href=\"#design\" role=\"tab\">Design<span class=\"post_no\">3</span></a></li>\n                                <li><a class=\"nav-link\" id=\"html-tab\" data-toggle=\"tab\" (click)=\"tabActive(html)\" href=\"#html\" role=\"tab\">HTML<span class=\"post_no\">2</span></a></li>\n                                <li><a class=\"nav-link\" id=\"photography-tab\" data-toggle=\"tab\" (click)=\"tabActive(photography)\" href=\"#photography\" role=\"tab\">Photography<span class=\"post_no\">3</span></a></li>\n                                <li><a class=\"nav-link\" id=\"video-tab\" data-toggle=\"tab\" (click)=\"tabActive(video)\" href=\"#video\" role=\"tab\">Video<span class=\"post_no\">1</span></a></li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"tab-content portfolioslider2 \">\n                        <div class=\"tab-pane active show \" id=\"all\">\n                            <div class=\"row flex-row-reverse \">\n                                <div class=\"col-lg-12 text-left align-self-center\">\n                                    <div class=\"owl-carousel owl-loaded owl-drag\" data-dots=\"false\" data-nav=\"false\" data-items=\"3\" data-items-laptop=\"3\" data-items-tab=\"2\" data-items-mobile=\"1\" data-items-mobile-sm=\"1\" data-autoplay=\"false\" data-loop=\"true\" data-margin=\"30\">\n                                        <div class=\"iq-masonry-item item video  \">\n                                            <div class=\"  iq-portfolio\">\n                                                <a routerLink=\"/our-cases/portfolio-details\" class=\"iq-portfolio-img\">\n                                                    <img width=\"1260\" height=\"954\" src=\"./assets/images/about-us/03.png\" class=\" \" alt=\"\" ></a>\n                                                <div class=\"iq-portfolio-content text-left\">\n                                                    <div class=\"details-box clearfix\">\n                                                        <div class=\"consult-details\">\n                                                            <a routerLink=\"/our-cases/portfolio-details\">\n                                                                <h5 class=\"text-hover mb-2\">Business Growth</h5>\n                                                            </a>\n                                                            <p class=\"desc mb-0\">It is a long established fact that a reader will be distracted by the readable content of a page when looking .</p>\n                                                        </div>\n                                                        <div class=\"mb-0 portfolio-tag\">\n                                                            <ul>\n                                                                <li>Html</li>\n                                                                <li>Video</li>\n                                                            </ul>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"iq-masonry-item item html \">\n                                            <div class=\"iq-portfolio\">\n                                                <a routerLink=\"/our-cases/portfolio-details\" class=\"iq-portfolio-img\"><img width=\"1260\" height=\"954\" src=\"./assets/images/about-us/03.png\" class=\" \" alt=\"\" ></a>\n                                                <div class=\"iq-portfolio-content text-left\">\n                                                    <div class=\"details-box clearfix\">\n                                                        <div class=\"consult-details\">\n                                                            <a routerLink=\"/our-cases/portfolio-details\">\n                                                                <h5 class=\"text-hover mb-2\">Business Growth</h5>\n                                                            </a>\n                                                            <p class=\"desc mb-0\">It is a long established fact that a reader will be distracted by the readable content of a page when looking .</p>\n                                                        </div>\n                                                        <div class=\"mb-0 portfolio-tag\">\n                                                            <ul>\n                                                                <li>Html</li>\n                                                                <li>Video</li>\n                                                            </ul>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"iq-masonry-item item html \">\n                                            <div class=\"iq-portfolio\">\n                                                <a routerLink=\"/our-cases/portfolio-details\" class=\"iq-portfolio-img\"><img width=\"1260\" height=\"954\" src=\"./assets/images/about-us/04.png\" class=\" \" alt=\"\" ></a>\n                                                <div class=\"iq-portfolio-content text-left\">\n                                                    <div class=\"details-box clearfix\">\n                                                        <div class=\"consult-details\">\n                                                            <a routerLink=\"/our-cases/portfolio-details\">\n                                                                <h5 class=\"text-hover mb-2\">Business Growth</h5>\n                                                            </a>\n                                                            <p class=\"desc mb-0\">It is a long established fact that a reader will be distracted by the readable content of a page when looking .</p>\n                                                        </div>\n                                                        <div class=\"mb-0 portfolio-tag\">\n                                                            <ul>\n                                                                <li>Html</li>\n                                                                <li>Photography</li>\n                                                            </ul>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"iq-masonry-item item design \">\n                                            <div class=\"iq-portfolio\">\n                                                <a routerLink=\"/our-cases/portfolio-details\" class=\"iq-portfolio-img\"><img width=\"1260\" height=\"954\" src=\"./assets/images/about-us/05.png\" class=\" \" alt=\"\" ></a>\n                                                <div class=\"iq-portfolio-content text-left\">\n                                                    <div class=\"details-box clearfix\">\n                                                        <div class=\"consult-details\">\n                                                            <a routerLink=\"/our-cases/portfolio-details\">\n                                                                <h5 class=\"text-hover mb-2\">Business Growth</h5>\n                                                            </a>\n                                                            <p class=\"desc mb-0\">It is a long established fact that a reader will be distracted by the readable content of a page when looking .</p>\n                                                        </div>\n                                                        <div class=\"mb-0 portfolio-tag\">\n                                                            <ul>\n                                                                <li>Html</li>\n                                                                <li>Design</li>\n                                                            </ul>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"iq-masonry-item item photography \">\n                                            <div class=\"iq-portfolio\">\n                                                <a routerLink=\"/our-cases/portfolio-details\" class=\"iq-portfolio-img\"><img width=\"1260\" height=\"954\" src=\"./assets/images/about-us/04.png\" class=\" \" alt=\"\" ></a>\n                                                <div class=\"iq-portfolio-content text-left\">\n                                                    <div class=\"details-box clearfix\">\n                                                        <div class=\"consult-details\">\n                                                            <a routerLink=\"/our-cases/portfolio-details\">\n                                                                <h5 class=\"text-hover mb-2\">Business Growth</h5>\n                                                            </a>\n                                                            <p class=\"desc mb-0\">It is a long established fact that a reader will be distracted by the readable content of a page when looking .</p>\n                                                        </div>\n                                                        <div class=\"mb-0 portfolio-tag\">\n                                                            <ul>\n                                                                <li>Html</li>\n                                                                <li>Video</li>\n                                                            </ul>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"iq-masonry-item item photography \">\n                                            <div class=\"iq-portfolio\">\n                                                <a routerLink=\"/our-cases/portfolio-details\" class=\"iq-portfolio-img\"><img width=\"1260\" height=\"954\" src=\"./assets/images/about-us/03.png\" class=\" \" alt=\"\" ></a>\n                                                <div class=\"iq-portfolio-content text-left\">\n                                                    <div class=\"details-box clearfix\">\n                                                        <div class=\"consult-details\">\n                                                            <a routerLink=\"/our-cases/portfolio-details\">\n                                                                <h5 class=\"text-hover mb-2\">Business Growth</h5>\n                                                            </a>\n                                                            <p class=\"desc mb-0\">It is a long established fact that a reader will be distracted by the readable content of a page when looking .</p>\n                                                        </div>\n                                                        <div class=\"mb-0 portfolio-tag\">\n                                                            <ul>\n                                                                <li>Html</li>\n                                                                <li>Photography</li>\n                                                            </ul>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"iq-masonry-item item design photography \">\n                                            <div class=\"iq-portfolio\">\n                                                <a routerLink=\"/our-cases/portfolio-details\" class=\"iq-portfolio-img\">\n                                                    <img width=\"1260\" height=\"954\" src=\"./assets/images/about-us/02.png\" class=\" \" alt=\"\" >\n                                                </a>\n                                                <div class=\"iq-portfolio-content text-left\">\n                                                    <div class=\"details-box clearfix\">\n                                                        <div class=\"consult-details\">\n                                                            <a routerLink=\"/our-cases/portfolio-details\">\n                                                                <h5 class=\"text-hover mb-2\">Business Growth</h5>\n                                                            </a>\n                                                            <p class=\"desc mb-0\">It is a long established fact that a reader will be distracted by the readable content of a page when looking .</p>\n                                                        </div>\n                                                        <div class=\"mb-0 portfolio-tag\">\n                                                            <ul>\n                                                                <li>Html</li>\n                                                                <li>Video</li>\n                                                            </ul>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"iq-masonry-item item design \">\n                                            <div class=\"iq-portfolio\">\n                                                <a routerLink=\"/our-cases/portfolio-details\" class=\"iq-portfolio-img\">\n                                                    <img width=\"1260\" height=\"954\" src=\"./assets/images/about-us/01.png\" class=\" \" alt=\"\" >\n                                                </a>\n                                                <div class=\"iq-portfolio-content text-left\">\n                                                    <div class=\"details-box clearfix\">\n                                                        <div class=\"consult-details\">\n                                                            <a routerLink=\"/our-cases/portfolio-details\">\n                                                                <h5 class=\"text-hover mb-2\">Business Growth</h5>\n                                                            </a>\n                                                            <p class=\"desc mb-0\">It is a long established fact that a reader will be distracted by the readable content of a page when looking .</p>\n                                                        </div>\n                                                        <div class=\"mb-0 portfolio-tag\">\n                                                            <ul>\n                                                                <li>Html</li>\n                                                                <li>Design</li>\n                                                            </ul>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"tab-pane\" id=\"design\">\n                            <div class=\"row flex-row-reverse\">\n                                <div class=\"col-lg-12 text-left align-self-center\">\n                                    <div class=\"owl-carousel owl-loaded owl-drag\" data-dots=\"false\" data-nav=\"false\" data-items=\"3\" data-items-laptop=\"3\" data-items-tab=\"2\" data-items-mobile=\"1\" data-items-mobile-sm=\"1\" data-autoplay=\"false\" data-loop=\"true\" data-margin=\"30\">\n                                        <div class=\"iq-masonry-item item design \">\n                                            <div class=\"iq-portfolio\">\n                                                <a routerLink=\"/our-cases/portfolio-details\" class=\"iq-portfolio-img\">\n                                                    <img width=\"1260\" height=\"954\" src=\"./assets/images/about-us/05.png\" class=\" \" alt=\"\" ></a>\n                                                <div class=\"iq-portfolio-content text-left\">\n                                                    <div class=\"details-box clearfix\">\n                                                        <div class=\"consult-details\">\n                                                            <a routerLink=\"/our-cases/portfolio-details\">\n                                                                <h5 class=\"text-hover mb-2\">Business Growth</h5>\n                                                            </a>\n                                                            <p class=\"desc mb-0\">It is a long established fact that a reader will be distracted by the readable content of a page when looking .</p>\n                                                        </div>\n                                                        <div class=\"mb-0 portfolio-tag\">\n                                                            <ul>\n                                                                <li>Html</li>\n                                                                <li>Video</li>\n                                                            </ul>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"iq-masonry-item item design photography \">\n                                            <div class=\"iq-portfolio\">\n                                                <a routerLink=\"/our-cases/portfolio-details\" class=\"iq-portfolio-img\"><img width=\"1260\" height=\"954\" src=\"./assets/images/about-us/02.png\" class=\" \" alt=\"\" ></a>\n                                                <div class=\"iq-portfolio-content text-left\">\n                                                    <div class=\"details-box clearfix\">\n                                                        <div class=\"consult-details\">\n                                                            <a routerLink=\"/our-cases/portfolio-details\">\n                                                                <h5 class=\"text-hover mb-2\">Business Growth</h5>\n                                                            </a>\n                                                            <p class=\"desc mb-0\">It is a long established fact that a reader will be distracted by the readable content of a page when looking .</p>\n                                                        </div>\n                                                        <div class=\"mb-0 portfolio-tag\">\n                                                            <ul>\n                                                                <li>Html</li>\n                                                                <li>Photography</li>\n                                                            </ul>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"iq-masonry-item item design \">\n                                            <div class=\"iq-portfolio\">\n                                                <a routerLink=\"/our-cases/portfolio-details\" class=\"iq-portfolio-img\">\n                                                    <img width=\"1260\" height=\"954\" src=\"./assets/images/about-us/01.png\" class=\" \" alt=\"\" ></a>\n                                                <div class=\"iq-portfolio-content text-left\">\n                                                    <div class=\"details-box clearfix\">\n                                                        <div class=\"consult-details\">\n                                                            <a routerLink=\"/our-cases/portfolio-details\">\n                                                                <h5 class=\"text-hover mb-2\">Business Growth</h5>\n                                                            </a>\n                                                            <p class=\"desc mb-0\">It is a long established fact that a reader will be distracted by the readable content of a page when looking .</p>\n                                                        </div>\n                                                        <div class=\"mb-0 portfolio-tag\">\n                                                            <ul>\n                                                                <li>Html</li>\n                                                                <li>Photography</li>\n                                                            </ul>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"tab-pane\" id=\"html\">\n                            <div class=\"row flex-row-reverse\">\n                                <div class=\"col-lg-12 text-left align-self-center\">\n                                    <div class=\"owl-carousel owl-loaded owl-drag\" data-dots=\"false\" data-nav=\"false\" data-items=\"3\" data-items-laptop=\"3\" data-items-tab=\"2\" data-items-mobile=\"1\" data-items-mobile-sm=\"1\" data-autoplay=\"false\" data-loop=\"true\" data-margin=\"30\">\n                                        <div class=\"iq-masonry-item item html \">\n                                            <div class=\"iq-portfolio\">\n                                                <a routerLink=\"/our-cases/portfolio-details\" class=\"iq-portfolio-img\"><img width=\"1260\" height=\"954\" src=\"./assets/images/about-us/03.png\" class=\"\" alt=\"\" ></a>\n                                                <div class=\"iq-portfolio-content text-left\">\n                                                    <div class=\"details-box clearfix\">\n                                                        <div class=\"consult-details\">\n                                                            <a routerLink=\"/our-cases/portfolio-details\">\n                                                                <h5 class=\"text-hover mb-2\">Business Growth</h5>\n                                                            </a>\n                                                            <p class=\"desc mb-0\">It is a long established fact that a reader will be distracted by the readable content of a page when looking .</p>\n                                                        </div>\n                                                        <div class=\"mb-0 portfolio-tag\">\n                                                            <ul>\n                                                                <li>Html</li>\n                                                                <li>Video</li>\n                                                            </ul>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"iq-masonry-item item html \">\n                                            <div class=\"iq-portfolio\">\n                                                <a routerLink=\"/our-cases/portfolio-details\" class=\"iq-portfolio-img\"><img width=\"1260\" height=\"954\" src=\"./assets/images/about-us/04.png\" class=\"\" alt=\"\" ></a>\n                                                <div class=\"iq-portfolio-content text-left\">\n                                                    <div class=\"details-box clearfix\">\n                                                        <div class=\"consult-details\">\n                                                            <a routerLink=\"/our-cases/portfolio-details\">\n                                                                <h5 class=\"text-hover mb-2\">Business Growth</h5>\n                                                            </a>\n                                                            <p class=\"desc mb-0\">It is a long established fact that a reader will be distracted by the readable content of a page when looking .</p>\n                                                        </div>\n                                                        <div class=\"mb-0 portfolio-tag\">\n                                                            <ul>\n                                                                <li>Html</li>\n                                                                <li>Video</li>\n                                                            </ul>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"tab-pane\" id=\"photography\">\n                            <div class=\"row flex-row-reverse\">\n                                <div class=\"col-lg-12 text-left align-self-center\">\n                                    <div class=\"owl-carousel owl-loaded owl-drag\" data-dots=\"false\" data-nav=\"false\" data-items=\"3\" data-items-laptop=\"3\" data-items-tab=\"2\" data-items-mobile=\"1\" data-items-mobile-sm=\"1\" data-autoplay=\"false\" data-loop=\"true\" data-margin=\"30\">\n                                        <div class=\"iq-masonry-item item photography \">\n                                            <div class=\"iq-portfolio\">\n                                                <a routerLink=\"/our-cases/portfolio-details\" class=\"iq-portfolio-img\"><img width=\"1260\" height=\"954\" src=\"./assets/images/about-us/04.png\" class=\" \" alt=\"\" ></a>\n                                                <div class=\"iq-portfolio-content text-left\">\n                                                    <div class=\"details-box clearfix\">\n                                                        <div class=\"consult-details\">\n                                                            <a routerLink=\"/our-cases/portfolio-details\">\n                                                                <h5 class=\"text-hover mb-2\">Business Growth</h5>\n                                                            </a>\n                                                            <p class=\"desc mb-0\">It is a long established fact that a reader will be distracted by the readable content of a page when looking .</p>\n                                                        </div>\n                                                        <div class=\"mb-0 portfolio-tag\">\n                                                            <ul>\n                                                                <li>Html</li>\n                                                                <li>Video</li>\n                                                            </ul>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"iq-masonry-item item photography \">\n                                            <div class=\"iq-portfolio\">\n                                                <a routerLink=\"/our-cases/portfolio-details\" class=\"iq-portfolio-img\"><img width=\"1260\" height=\"954\" src=\"./assets/images/about-us/03.png\" class=\" \" alt=\"\" ></a>\n                                                <div class=\"iq-portfolio-content text-left\">\n                                                    <div class=\"details-box clearfix\">\n                                                        <div class=\"consult-details\">\n                                                            <a routerLink=\"/our-cases/portfolio-details\">\n                                                                <h5 class=\"text-hover mb-2\">Business Growth</h5>\n                                                            </a>\n                                                            <p class=\"desc mb-0\">It is a long established fact that a reader will be distracted by the readable content of a page when looking .</p>\n                                                        </div>\n                                                        <div class=\"mb-0 portfolio-tag\">\n                                                            <ul>\n                                                                <li>Html</li>\n                                                                <li>Design</li>\n                                                            </ul>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"iq-masonry-item item design photography \">\n                                            <div class=\"iq-portfolio\">\n                                                <a routerLink=\"/our-cases/portfolio-details\" class=\"iq-portfolio-img\"><img width=\"1260\" height=\"954\" src=\"./assets/images/about-us/02.png\" class=\" \" alt=\"\" ></a>\n                                                <div class=\"iq-portfolio-content text-left\">\n                                                    <div class=\"details-box clearfix\">\n                                                        <div class=\"consult-details\">\n                                                            <a routerLink=\"/our-cases/portfolio-details\">\n                                                                <h5 class=\"text-hover mb-2\">Business Growth</h5>\n                                                            </a>\n                                                            <p class=\"desc mb-0\">It is a long established fact that a reader will be distracted by the readable content of a page when looking .</p>\n                                                        </div>\n                                                        <div class=\"mb-0 portfolio-tag\">\n                                                            <ul>\n                                                                <li>Html</li>\n                                                                <li>Photography/li>\n                                                            </ul>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"tab-pane\" id=\"video\">\n                            <div class=\"row flex-row-reverse\">\n                                <div class=\"col-lg-12 text-left align-self-center\">\n                                    <div class=\"owl-carousel owl-loaded owl-drag\" data-dots=\"false\" data-nav=\"false\" data-items=\"3\" data-items-laptop=\"3\" data-items-tab=\"2\" data-items-mobile=\"1\" data-items-mobile-sm=\"1\" data-autoplay=\"false\" data-loop=\"true\" data-margin=\"30\">\n                                        <div class=\"iq-masonry-item item video \">\n                                            <div class=\"iq-portfolio\">\n                                                <a routerLink=\"/our-cases/portfolio-details\" class=\"iq-portfolio-img\"><img width=\"1260\" height=\"954\" src=\"./assets/images/about-us/01.png\" class=\" \" alt=\"\" ></a>\n                                                <div class=\"iq-portfolio-content text-left\">\n                                                    <div class=\"details-box clearfix\">\n                                                        <div class=\"consult-details\">\n                                                            <a routerLink=\"/our-cases/portfolio-details\">\n                                                                <h5 class=\"text-hover mb-2\">Business Growth</h5>\n                                                            </a>\n                                                            <p class=\"desc mb-0\">It is a long established fact that a reader will be distracted by the readable content of a page when looking .</p>\n                                                        </div>\n                                                        <div class=\"mb-0 portfolio-tag\">\n                                                            <ul>\n                                                                <li>Html</li>\n                                                                <li>Video</li>\n                                                            </ul>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing-page6/components/contact-form/contact-form.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing-page6/components/contact-form/contact-form.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"xamin-primary-bg\">\n    <div class=\"container\">\n        <div class=\"row align-items-center  \">\n            <div class=\"col-lg-6 col-md-6 col-sm-12 \">\n                <form >\n                    <div class=\"predict-form  consultab-contact contact-form\">\n                        <div>\n                            <h4 class=\"title mb-4 text-center\">Talk With Our Expert</h4>\n                        </div>\n                        <div class=\"\"> <input type=\"text\" name=\"your-name\" class=\"form-control text \" placeholder=\"Your Name\"> </div>\n                        <div class=\"\"> <input type=\"text\" name=\"your-email\" class=\"form-control text \" placeholder=\"Your Email\"> </div>\n                        <div class=\"\"> <textarea name=\"your-message\" cols=\"40\" rows=\"5\" class=\"form-control textarea \" placeholder=\"Your Message\"></textarea> </div>\n                        <div> <button id=\"submit-4\" name=\"submit\" type=\"submit\" value=\"Send\" class=\"button d-block w-100\">Send Message</button> </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                <div class=\"contact-box d-flex  text- text-white \">\n                    <i aria-hidden=\"true\" class=\"fa fa-phone\"></i> \n                    <div class=\"service-detail\">\n                        <h2 class=\"mb-2  text-white \" >Phone Support</h2>\n                        <ul class=\"list-inline mb-0\">\n                            <li><a href=\"tel:+0123456789\"> +0123456789</a> </li>\n                            <li><a href=\"tel:+0123456789\">+0123456789</a></li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"contact-box d-flex  text- text-white \">\n                    <i aria-hidden=\"true\" class=\"fa fa-map-marker\"></i> \n                    <div class=\"service-detail\">\n                        <h2 class=\"mb-2  text-white\">Email us</h2>\n                        <ul class=\"list-inline mb-0\">\n                            <li><a href=\"mailto:support@iqnonicthemes.com\">support@iqnonicthemes.com</a>  </li>\n                            <li><a href=\"mailto:support@iqnonicthemes.com\"> support@iqnonicthemes.com</a>  </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing-page6/components/counters/counters.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing-page6/components/counters/counters.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"pt-0 iq-pb-70\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div *ngFor=\"let list of List\" class=\"col-lg-3 col-md-3 col-sm-6\">\n                <div class=\"iq-timer style3 text-left\">\n                    <div class=\"iq-img\">\n                        <img src=\"{{ list.image }}\" alt=\"fancybox\">\n                    </div>\n                    <div class=\"timer-details\">\n                        <span class=\"timer dark-text\" [attr.data-to]=\"list.number\" data-speed=\"5000\">{{ list.number }}</span>\n                        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                        <p class=\"dark-text\">{{ list.title }}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing-page6/components/features/features.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing-page6/components/features/features.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"iq-feture-bg\">\n    <div class=\"container \">\n        <div class=\"row align-items-center \">\n            <div class=\"col-md-6\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"xamin-feature-circle wow zoomIn postion-relative\">\n                    <div class=\"xamin-img\">\n                        <ul class=\"list-inline mb-0\">\n                            <li *ngFor=\"let list of List\" class=\"list-inline-item\">\n                                <div class=\"feature-info\">\n                                    <div class=\"feature-img\">\n                                        <img class=\"img-fluid client-img\" src=\"{{ list.image }}\" alt=\"image0\">\n                                    </div>\n                                    <h6>{{ list.title }}</h6>\n                                </div>\n                            </li>\n                        </ul>\n                        <div class=\"dot-circle\">\n                            <div class=\"effect-circle\"></div>\n                        </div>\n                        <div class=\"main-circle\">\n                            <div class=\"circle-bg\">\n                                <img src=\"./assets/images/fancybox/6-9.png\" alt=\"image\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing-page6/components/our-blog/our-blog.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing-page6/components/our-blog/our-blog.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"pt-0\">\n    <div class=\"container\">\n        <div class=\"row layer-fly-one \">\n            <div class=\"col-md-12\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n                <div class=\"xamin-recentblog v1\">\n                    <app-blog-owl [List]=\"List\"></app-blog-owl>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing-page6/components/our-service/our-service.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing-page6/components/our-service/our-service.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"pt-0\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n            </div>\n        </div>\n        <div class=\"row custom-tab verticaltab3\">\n            <div class=\"col-lg-6\">\n                <div class=\"col-lg-12 col-md-12 \">\n                    <ul class=\"nav nav-pills nav-pills-style-3 mb-5\" id=\"pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\n                        <li  class=\"nav-item\" *ngFor=\"let list of List\">\n                            <a class=\"nav-link {{ list.active !== undefined && list.active ? 'active show' : '' }}\" data-toggle=\"pill\" (click)=\"tabActive(list.id)\"  href=\"{{ '#' + list.id }}\" role=\"tab\" [attr.aria-selected]=\" list.active !== undefined ? true : false \">\n                                <div class=\"media\">\n                                    <img src=\"{{ list.image }}\" alt=\"tab-image\" class=\"img-fluid\">\n                                    <div class=\"media-body\">\n                                        <h5 class=\"mb-2 active-title\">{{ list.title }}</h5>\n                                        <p class=\"mb-0\">{{ list.subtitle }}</p>\n                                    </div>\n                                </div>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-lg-6 tab-content\">\n                <div *ngFor=\"let list of List\" id=\"{{ list.id }}\" class=\"tab-pane fade {{ list.active !== undefined && list.active ? 'show active' : '' }}\">\n                    <div class=\"xamin-right-img-wm\">\n                        <img width=\"863\" height=\"528\" src=\"{{ list.tabImage }}\" class=\"attachment-full\"  >\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing-page6/components/our-services2/our-services2.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing-page6/components/our-services2/our-services2.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"pt-0 iq-pb-70\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <app-title-section [titleSectionProp]=\"titleSectionProp\"></app-title-section>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div *ngFor=\"let list of List\" class=\"col-md-3 col-sm-6\">\n                <div class=\"consult-services xamin-square right wow fadeInUp text-left\">\n                    <div class=\"square-effect bg\">\n                        <img src=\"{{ list.image }}\" alt=\"fancybox\">\n                    </div>\n                    <h5 class=\"mb-2\">{{ list.title }}</h5>\n                    <p class=\"mb-0\">{{ list.desc }}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing-page6/components/our-testimonial/our-testimonial.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing-page6/components/our-testimonial/our-testimonial.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"iq-bg-over iq-pb-70\">\n    <div class=\"container\">\n        <div class=\"row \">\n            <div class=\"col-md-12\">\n                <div class=\"title-box wow fadeInUp text-center\">\n                    <span class=\"title-design\">Portfolio</span>\n                    <h2>Investing in the future</h2>\n                </div>\n            </div>\n        </div>\n        <div class=\"row \">\n            <div *ngFor=\"let list of List\" class=\"col-md-12\">\n                <div class=\"xamin-client wow fadeInUp text-center\">\n                    <div class=\"client-icon\">\n                        <img src=\"{{ list.image }}\" alt=\"fancybox\">\n                    </div>\n                    <div class=\"client-detail\">\n                        <h5>{{list.exit}}</h5>\n                        <h6 class=\"mb-1\">{{ list.title }}</h6>\n                        <!-- <p class=\"mb-0\">{{ list.subtitle }}</p> -->\n                       \n                        <a href=\"{{list.subtitle}}\">{{list.info}}</a>\n                        <br>\n                        <a href=\"{{list.subtitle2}}\">{{list.info2}}</a>\n\n                    </div>\n                </div>  \n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing-page6/components/partner/partner.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing-page6/components/partner/partner.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"pt-0\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"owl-carousel owl-loaded owl-drag\" data-dots=\"false\" data-nav=\"false\" data-items=\"6\" data-items-laptop=\"4\" data-items-tab=\"3\" data-items-mobile=\"2\" data-items-mobile-sm=\"1\" data-autoplay=\"true\" data-loop=\"true\" data-margin=\"30\" >\n                    <div *ngFor=\"let lists of List\" class=\"item\">\n                        <div class=\"clients-box\">\n                            <img class=\"img-fluid client-img\" src=\"./assets/images/partners/{{ lists.img }}\" alt=\"image0\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing-page6/components/revolution-slider6/revolution-slider6.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing-page6/components/revolution-slider6/revolution-slider6.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"iq-banner\">\n    <!-- START xamin6 REVOLUTION SLIDER 6.1.0 -->\n    <p class=\"rs-p-wp-fix\"></p>\n    <rs-module-wrap id=\"rev_slider_6_1_wrapper\" data-alias=\"xamin6\" data-source=\"gallery\" style=\"background:transparent;padding:0;margin:0px auto;margin-top:0;margin-bottom:0;\">\n        <rs-module id=\"rev_slider_6_1\" class=\" rs-ov-hidden\" style=\"display:none;\" data-version=\"6.1.0\">\n            <rs-slides>\n                <rs-slide data-key=\"rs-2\" data-title=\"Slide\" data-anim=\"ei:d,d,d,d,d,d,d,d,d;eo:d,d,d,d,d,d,d,d,d;s:1000ms,d,d,d,d,d,d,d,d;r:0,0,0,0,0,0,0,0,0;t:fade,grayscale,blurlight,blurstrong,fade,crossfade,fadethroughlight,fadethroughdark,fadethroughtransparent;sl:d,d,d,d,d,d,d,d,d;\" data-firstanim=\"t:fade;sl:12;\">\n                    <img src=\"./assets/revslider/assets/dummy.png\" title=\"demo6_revolution_bg\" width=\"1600\" height=\"828\" data-lazyload=\"./assets/revslider/assets_slider6/demo6_revolution_bg.png\" data-bg=\"f:100% 100%;\" data-parallax=\"2\" class=\"rev-slidebg\" data-no-retina>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-2-slide-2-layer-5\" \n                        data-type=\"text\"\n                        data-color=\"#313e5b\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:594px,433px,326px,203px;y:m;yo:-50px,12px,19px,4px;\"\n                        data-text=\"w:normal;s:16,11,8,16;l:25,18,13,20;fw:700;a:center;\"\n                        data-dim=\"w:45px,32px,23px,30px;h:45px,32px,23px,30px;\"\n                        data-padding=\"t:10,7,5,3;b:10,7,5,3;\"\n                        data-border=\"bos:solid;boc:#d4d4d4;bow:1px,1px,1px,1px;bor:90px,90px,90px,90px;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:2000;sp:1000;sR:2000;\"\n                        data-frame_999=\"o:0;st:w;sR:6000;\"\n                        style=\"z-index:20;background-color:#ffffff;font-family:Lato;\"\n                        >2 \n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-2-slide-2-layer-6\" \n                        data-type=\"text\"\n                        data-color=\"#313e5b\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:591px,434px,325px,202px;y:m;yo:-250px,-125px,-79px,-89px;\"\n                        data-text=\"w:normal;s:16,11,8,16;l:25,18,13,20;fw:700;a:center;\"\n                        data-dim=\"w:45px,32px,23px,30px;h:45px,32px,23px,30px;\"\n                        data-padding=\"t:10,7,5,3;b:10,7,5,3;\"\n                        data-border=\"bos:solid;boc:#d4d4d4;bow:1px,1px,1px,1px;bor:90px,90px,90px,90px;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:2000;sp:1000;sR:2000;\"\n                        data-frame_999=\"o:0;st:w;sR:6000;\"\n                        style=\"z-index:19;background-color:#ffffff;font-family:Lato;\"\n                        >3 \n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-2-slide-2-layer-7\" \n                        data-type=\"text\"\n                        data-color=\"#313e5b\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:593px,434px,326px,201px;y:m;yo:150px,162px,132px,99px;\"\n                        data-text=\"w:normal;s:16,11,8,16;l:25,18,13,20;fw:700;a:center;\"\n                        data-dim=\"w:45px,32px,23px,30px;h:45px,32px,23px,30px;\"\n                        data-padding=\"t:10,7,5,3;b:10,7,5,3;\"\n                        data-border=\"bos:solid;boc:#d4d4d4;bow:1px,1px,1px,1px;bor:90px,90px,90px,90px;\"\n                        data-frame_0=\"x:0,0,0,0px;y:0,0,0,0px;sX:0.8;sY:0.8;\"\n                        data-frame_1=\"x:0,0,0,0px;y:0,0,0,0px;e:Power4.easeOut;st:2000;sp:1000;sR:2000;\"\n                        data-frame_999=\"o:0;st:w;sR:6000;\"\n                        style=\"z-index:17;background-color:#ffffff;font-family:Lato;\"\n                        >1 \n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-2-slide-2-layer-8\" \n                        data-type=\"text\"\n                        data-color=\"#566384\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:r;xo:-50px,13px,10px,6px;y:b;yo:125px,92px,52px,32px;\"\n                        data-text=\"w:normal;s:16,16,16,9;l:25,18,13,8;fw:700;a:right;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:2000;sp:1000;sR:2000;\"\n                        data-frame_999=\"o:0;st:w;sR:6000;\"\n                        style=\"z-index:22;font-family:Lato;\"\n                        > \n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-2-slide-2-layer-9\" \n                        data-type=\"text\"\n                        data-color=\"#566384\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:r;xo:-50px,13px,9px,5px;yo:90px,74px,55px,34px;\"\n                        data-text=\"w:normal;s:16,16,16,9;l:25,18,13,8;fw:700;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:2000;sp:1000;sR:2000;\"\n                        data-frame_999=\"o:0;st:w;sR:6000;\"\n                        style=\"z-index:23;font-family:Lato;\"\n                        >\n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-2-slide-2-layer-10\" \n                        data-type=\"text\"\n                        data-color=\"#313e5b\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:69px,50px,37px,23px;yo:466px,340px,254px,158px;\"\n                        data-text=\"w:normal;s:20,16,14,16;l:25,18,13,20;fw:700;\"\n                        data-dim=\"w:314px,229px,171px,106px;\"\n                        data-frame_1=\"e:Power4.easeInOut;st:900;sp:1200;sR:900;\"\n                        data-frame_1_sfx=\"se:blocktoright;\"\n                        data-frame_999=\"o:0;st:w;sR:6900;\"\n                        style=\"z-index:9;font-family:Karla;\"\n                        >Our Portfolio\n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-2-slide-2-layer-11\" \n                        data-type=\"text\"\n                        data-color=\"#313e5b\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:69px,50px,37px,20px;yo:545px,398px,298px,211px;\"\n                        data-text=\"w:normal;s:20,16,14,14;l:25,18,13,20;fw:700;\"\n                        data-frame_0=\"x:0,0,0,0px;y:0,0,0,0px;\"\n                        data-frame_1=\"x:0,0,0,0px;y:0,0,0,0px;e:Power4.easeInOut;st:1200;sp:1200;sR:1200;\"\n                        data-frame_1_sfx=\"se:blocktoright;\"\n                        data-frame_999=\"o:0;st:w;sR:6600;\"\n                        style=\"z-index:10;font-family:Karla;\"\n                        > \n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-2-slide-2-layer-12\" \n                        data-type=\"text\"\n                        data-color=\"#313e5b\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:69px,50px,37px,19px;yo:580px,424px,317px,262px;\"\n                        data-text=\"w:normal;s:18,14,12,12;l:25,18,13,20;fw:700;\"\n                        data-frame_1=\"e:Power4.easeInOut;st:1500;sp:1000;sR:1500;\"\n                        data-frame_1_sfx=\"se:blocktoright;\"\n                        data-frame_999=\"o:0;st:w;sR:6500;\"\n                        style=\"z-index:11;font-family:Karla;\"\n                        > <br>\n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-2-slide-2-layer-13\" \n                        data-type=\"text\"\n                        data-color=\"#313e5b\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:69px,50px,27px,26px;y:b;yo:86px,62px,15px,18px;\"\n                        data-text=\"w:normal;s:16,16,16,12;l:25,18,13,8;fw:700;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:2000;sp:1000;\"\n                        data-frame_999=\"o:0;st:w;sR:6700;\"\n                        style=\"z-index:24;font-family:Lato;\"\n                        >  \n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-2-slide-2-layer-14\" \n                        data-type=\"text\"\n                        data-color=\"#313e5b\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:150px,140px,113px,88px;y:b;yo:86px,62px,16px,17px;\"\n                        data-text=\"w:normal;s:16,16,16,12;l:25,18,13,8;fw:700;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:2000;sp:1000;\"\n                        data-frame_999=\"o:0;st:w;sR:6700;\"\n                        style=\"z-index:25;font-family:Lato;\"\n                        > \n                    </rs-layer>\n                    <!--\n                        -->\n                    <!-- <rs-layer\n                        id=\"slider-2-slide-2-layer-15\" \n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:471px,344px,257px,172px;yo:487px,356px,266px,159px;\"\n                        data-text=\"w:normal;s:20,14,10,6;l:0,18,13,8;\"\n                        data-dim=\"w:56px,40px,29px,18px;h:437px,319px,238px,148px;\"\n                        data-vbility=\"t,t,t,f\"\n                        data-frame_1=\"e:Power4.easeInOut;st:2800;sp:1200;sR:2800;\"\n                        data-frame_1_sfx=\"se:blocktobottom;\"\n                        data-frame_999=\"o:0;st:w;sR:5000;\"\n                        style=\"z-index:26;font-family:Roboto;\"\n                        ><img src=\"./assets/revslider/assets/dummy.png\" width=\"56\" height=\"437\" data-lazyload=\"./assets/revslider/assets_slider6/demo6_revolution_03.png\" data-no-retina> \n                    </rs-layer> -->\n                    <!--\n                        -->\n                    <!-- <rs-layer\n                        id=\"slider-2-slide-2-layer-16\" \n                        data-type=\"text\"\n                        data-color=\"#313e5b\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:473px,345px,258px,171px;yo:489px,357px,267px,161px;\"\n                        data-text=\"w:normal;s:16,11,8,4;l:32,23,17,10;a:center;\"\n                        data-dim=\"w:56px,40px,29px,18px;h:56px,40px,29px,18px;\"\n                        data-vbility=\"t,t,t,f\"\n                        data-padding=\"t:10,7,5,3;r:10,7,5,3;b:10,7,5,3;l:10,7,5,3;\"\n                        data-border=\"bos:solid;boc:#68deef;bow:1px,1px,1px,1px;bor:90px,90px,90px,90px;\"\n                        data-frame_0=\"sX:0.9;sY:0.9;\"\n                        data-frame_1=\"st:2850;sp:1000;sR:2850;\"\n                        data-frame_999=\"o:0;st:w;sR:5150;\"\n                        style=\"z-index:27;font-family:Lato;\"\n                        ><a href=\"#\" class=\"iq-video popup-youtube\"><i class=\"fa fa-play\"></i></a> \n                    </rs-layer> -->\n                    <!--\n                        -->\n                    <!-- <rs-layer\n                        id=\"slider-2-slide-2-layer-17\" \n                        data-type=\"text\"\n                        data-color=\"#313e5b\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:415px,303px,226px,153px;yo:708px,517px,387px,251px;\"\n                        data-text=\"w:normal;s:18,13,12,7;l:25,18,13,8;ls:2px,1px,0px,0px;fw:700;\"\n                        data-vbility=\"t,t,t,f\"\n                        data-btrans=\"rZ:-90;\"\n                        data-frame_0=\"sX:0.9;sY:0.9;\"\n                        data-frame_1=\"e:Power2.easeInOut;st:2900;sp:1000;sR:2900;\"\n                        data-frame_999=\"o:0;st:w;sR:5100;\"\n                        style=\"z-index:28;font-family:Lato;\"\n                        >Watch Our Video \n                    </rs-layer> -->\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-2-slide-2-layer-18\" \n                        data-type=\"shape\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:616px,447px,334px,214px;yo:600px,511px,382px,299px;\"\n                        data-text=\"w:normal;s:20,14,10,6;l:0,18,13,8;\"\n                        data-dim=\"w:200px,146px,109px,68px;h:2px,2px,1px,1px;\"\n                        data-frame_0=\"x:-50,-36,-26,-16;\"\n                        data-frame_1=\"st:2200;sp:1000;sR:2200;\"\n                        data-frame_999=\"o:0;st:w;sR:5800;\"\n                        style=\"z-index:15;background-color:#4c5871;font-family:Roboto;\"\n                        > \n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-2-slide-2-layer-19\" \n                        data-type=\"shape\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:611px,443px,331px,215px;yo:404px,363px,271px,205px;\"\n                        data-text=\"w:normal;s:20,14,10,6;l:0,18,13,8;\"\n                        data-dim=\"w:450px,329px,246px,153px;h:2px,1px,1px,1px;\"\n                        data-frame_0=\"x:-50,-36,-26,-16;\"\n                        data-frame_1=\"st:2400;sp:1000;sR:2400;\"\n                        data-frame_999=\"o:0;st:w;sR:5600;\"\n                        style=\"z-index:18;background-color:#adb2bd;font-family:Roboto;\"\n                        > \n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-2-slide-2-layer-20\" \n                        data-type=\"shape\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:614px,447px,334px,227px;yo:202px,227px,170px,113px;\"\n                        data-text=\"w:normal;s:20,14,10,6;l:0,18,13,8;\"\n                        data-dim=\"w:631px,461px,345px,215px;h:2px,1px,1px,1px;\"\n                        data-frame_0=\"x:-50,-36,-26,-16;\"\n                        data-frame_1=\"st:2550;sp:1000;sR:2550;\"\n                        data-frame_999=\"o:0;st:w;sR:5450;\"\n                        style=\"z-index:16;background-color:#687187;font-family:Roboto;\"\n                        > \n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-2-slide-2-layer-21\" \n                        class=\"rs-pxl-1\"\n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:783px,561px,420px,272px;yo:507px,422px,316px,251px;\"\n                        data-text=\"w:normal;s:20,14,10,6;l:0,18,13,8;\"\n                        data-dim=\"w:219px,160px,119px,90px;h:220px,160px,119px,90px;\"\n                        data-frame_0=\"x:-50,-36,-26,-16;\"\n                        data-frame_1=\"st:2300;sp:1000;sR:2300;\"\n                        data-frame_999=\"o:0;st:w;sR:5700;\"\n                        data-loop_999=\"rZ:360;sp:20000;\"\n                        style=\"z-index:29;font-family:Roboto;\"\n                        ><img src=\"./assets/revslider/assets/dummy.png\" width=\"219\" height=\"220\" data-lazyload=\"./assets/revslider/assets_slider6/demo6_revolution_04.png\" data-no-retina> \n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-2-slide-2-layer-22\" \n                        class=\"rs-pxl-1\"\n                        data-type=\"text\"\n                        data-color=\"#566384\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:837px,604px,441px,284px;yo:586px,479px,361px,285px;\"\n                        data-text=\"w:normal;s:24,17,16,14;l:25,18,13,8;fw:900;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:2300;sp:1000;sR:2300;\"\n                        data-frame_999=\"o:0;st:w;sR:5700;\"\n                        style=\"z-index:80;font-family:Lato;\"\n                        >Internet of Things\n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-2-slide-2-layer-23\" \n                        class=\"rs-pxl-1\"\n                        data-type=\"text\"\n                        data-color=\"#313e5b\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:874px,628px,459px,304px;yo:621px,501px,382px,299px;\"\n                        data-text=\"w:normal;s:16,11,14,12;l:25,18,13,8;fw:700;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:2300;sp:1000;sR:2300;\"\n                        data-frame_999=\"o:0;st:w;sR:5700;\"\n                        style=\"z-index:31;font-family:Lato;\"\n                        >\n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-2-slide-2-layer-24\" \n                        class=\"rs-pxl-2\"\n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:968px,677px,507px,315px;yo:287px,280px,209px,161px;\"\n                        data-text=\"w:normal;s:20,14,10,6;l:0,18,13,8;\"\n                        data-dim=\"w:238px,174px,130px,87px;h:238px,174px,130px,87px;\"\n                        data-frame_0=\"x:-50,-36,-26,-16;\"\n                        data-frame_1=\"st:2400;sp:1000;sR:2400;\"\n                        data-frame_999=\"o:0;st:w;sR:5600;\"\n                        data-tloop=\"u:true;\"\n                        data-loop_999=\"rZ:360;sp:20000;\"\n                        style=\"z-index:32;font-family:Roboto;\"\n                        ><img src=\"./assets/revslider/assets/dummy.png\" width=\"238\" height=\"238\" data-lazyload=\"./assets/revslider/assets_slider6/demo6_revolution_05.png\" data-no-retina> \n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-2-slide-2-layer-25\" \n                        class=\"rs-pxl-2\"\n                        data-type=\"text\"\n                        data-color=\"#566384\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:1046px,732px,540px,331px;yo:377px,353px,261px,197px;\"\n                        data-text=\"w:normal;s:24,17,16,14;l:25,18,13,8;fw:900;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:2400;sp:1000;sR:2400;\"\n                        data-frame_999=\"o:0;st:w;sR:5600;\"\n                        style=\"z-index:33;font-family:Lato;\"\n                        >Next Gen Networks\n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-2-slide-2-layer-26\" \n                        class=\"rs-pxl-2\"\n                        data-type=\"text\"\n                        data-color=\"#313e5b\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:1070px,750px,557px,345px;yo:412px,377px,280px,213px;\"\n                        data-text=\"w:normal;s:16,11,14,12;l:25,18,13,8;fw:700;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:2400;sp:1000;sR:2400;\"\n                        data-frame_999=\"o:0;st:w;sR:5600;\"\n                        style=\"z-index:34;font-family:Lato;\"\n                        > \n                        <!-- >Why?  -->\n\n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-2-slide-2-layer-27\" \n                        class=\"rs-pxl-3\"\n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:1135px,796px,596px,346px;yo:70px,129px,96px,55px;\"\n                        data-text=\"w:normal;s:20,14,10,6;l:0,18,13,8;\"\n                        data-dim=\"w:251px,183px,137px,109px;h:251px,183px,137px,109px;\"\n                        data-frame_0=\"x:-50,-36,-26,-16;\"\n                        data-frame_1=\"st:2550;sp:1000;sR:2550;\"\n                        data-frame_999=\"o:0;st:w;sR:5450;\"\n                        data-loop_999=\"rZ:360deg;sp:20000;\"\n                        style=\"z-index:35;font-family:Roboto;\"\n                        ><img src=\"./assets/revslider/assets/dummy.png\" width=\"251\" height=\"251\" data-lazyload=\"./assets/revslider/assets_slider6/demo6_revolution_06.png\" data-no-retina> \n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-2-slide-2-layer-28\" \n                        class=\"rs-pxl-3\"\n                        data-type=\"text\"\n                        data-color=\"#566384\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:1207px,851px,627px,368px;yo:176px,200px,147px,102px;\"\n                        data-text=\"w:normal;s:24,17,16,14;l:25,18,13,8;fw:900;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:2550;sp:1000;sR:2550;\"\n                        data-frame_999=\"o:0;st:w;sR:5450;\"\n                        style=\"z-index:36;font-family:Lato;\"\n                        >Cloud\n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-2-slide-2-layer-29\" \n                        class=\"rs-pxl-3\"\n                        data-type=\"text\"\n                        data-color=\"#313e5b\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:1224px,857px,624px,367px;yo:206px,220px,170px,121px;\"\n                        data-text=\"w:normal;s:16,11,14,12;l:25,18,13,8;fw:700;\"\n                        data-dim=\"h:auto,auto,auto,12px;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:2550;sp:1000;sR:2550;\"\n                        data-frame_999=\"o:0;st:w;sR:5450;\"\n                        style=\"z-index:37;font-family:Lato;\"\n                        >\n                        <!-- >What Might?  -->\n\n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-2-slide-2-layer-32\" \n                        data-type=\"text\"\n                        data-color=\"#313e5b\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:69px,50px,37px,23px;yo:188px,137px,102px,63px;\"\n                        data-text=\"w:normal;s:95,69,51,31;l:120,87,65,40;fw:900;\"\n                        data-frame_1=\"e:Power4.easeInOut;st:600;sp:1000;sR:600;\"\n                        data-frame_1_sfx=\"se:blocktoright;\"\n                        data-frame_999=\"o:0;st:w;sR:7400;\"\n                        style=\"z-index:8;font-family:Lato;\"\n                        >Digital<br>Alpha LLC\n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-2-slide-2-layer-33\" \n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:r;xo:-141px,-103px,-78px,-158px;y:b;yo:100px,73px,33px,23px;\"\n                        data-text=\"w:normal;s:20,14,10,6;l:0,18,13,8;\"\n                        data-dim=\"w:930px,680px,509px,422px;h:783px,572px,428px,355px;\"\n                        data-frame_1=\"e:Power4.easeInOut;st:1800;sp:1000;sR:1800;\"\n                        data-frame_999=\"o:0;st:w;sR:6200;\"\n                        style=\"z-index:12;font-family:Roboto;\"\n                        ><img src=\"./assets/revslider/assets/dummy.png\" width=\"966\" height=\"813\" data-lazyload=\"./assets/revslider/assets_slider6/demo6_revolution_02.png\" data-no-retina> \n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-2-slide-2-layer-34\" \n                        data-type=\"image\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"x:r;xo:0,-3px,-6px,-82px;y:b;yo:95px,73px,29px,22px;\"\n                        data-text=\"w:normal;s:20,14,10,6;l:0,18,13,8;\"\n                        data-dim=\"w:787px,575px,436px,345px;h:798px,583px,442px,350px;\"\n                        data-frame_1=\"e:Power4.easeInOut;st:1800;sp:1000;sR:1800;\"\n                        data-frame_999=\"o:0;st:w;sR:6200;\"\n                        data-loop_0=\"x:-3px;\"\n                        data-loop_999=\"x:3px;sp:3000;e:Sine.easeInOut;yym:t;\"\n                        style=\"z-index:13;font-family:Roboto;\"\n                        ><img src=\"./assets/revslider/assets/dummy.png\" width=\"791\" height=\"802\" data-lazyload=\"./assets/revslider/assets_slider6/demo6_revolution_01.png\" data-no-retina> \n                    </rs-layer>\n                    <!--\n                        -->\n                    <rs-layer\n                        id=\"slider-2-slide-2-layer-35\" \n                        data-type=\"text\"\n                        data-color=\"#313e5b\"\n                        data-rsp_ch=\"on\"\n                        data-xy=\"xo:596px,435px,327px,204px;y:m;yo:343px,274px,213px,170px;\"\n                        data-text=\"w:normal;s:16,11,8,16;l:25,18,13,20;fw:700;a:center;\"\n                        data-dim=\"w:45px,32px,23px,30px;h:45px,32px,23px,30px;\"\n                        data-padding=\"t:10,7,5,3;b:10,7,5,3;\"\n                        data-border=\"bos:solid;boc:#d4d4d4;bow:1px,1px,1px,1px;bor:90px,90px,90px,90px;\"\n                        data-frame_0=\"sX:0.8;sY:0.8;\"\n                        data-frame_1=\"e:Power4.easeOut;st:2000;sp:1000;sR:2000;\"\n                        data-frame_999=\"o:0;st:w;sR:6000;\"\n                        style=\"z-index:14;background-color:#ffffff;font-family:Lato;\"\n                        >0 \n                    </rs-layer>\n                    <!--\n                        -->\t\t\t\t\t\t\n                </rs-slide>\n            </rs-slides>\n            <rs-static-layers>\n                <!--\n                    -->\n            </rs-static-layers>\n            <rs-progress class=\"rs-bottom\" style=\"visibility: hidden !important;\"></rs-progress>\n        </rs-module>\n    </rs-module-wrap>\n    <!-- END REVOLUTION SLIDER -->\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/landing-page6/index/index.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/landing-page6/index/index.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header component start-->\n<app-header [logoImg]=\"logoImage\" [navItemList]=\"navItems\" [contactInfo]=\"contactInfo\"></app-header>\n<!-- Header component end-->\n<!-- START REVOLUTION SLIDER -->\n<app-revolution-slider6></app-revolution-slider6>\n<!-- END REVOLUTION SLIDER -->\n<!-- MainContent -->\n<div class=\"main-content\">\n    <!-- <app-counters></app-counters> -->\n    <!-- <app-about-us></app-about-us> -->\n    <app-our-testimonial></app-our-testimonial>\n\n    <!-- <app-our-service></app-our-service> -->\n    <!-- <app-features></app-features> -->\n    <!-- <app-our-services2></app-our-services2> -->\n    <!-- <app-case-studies></app-case-studies> -->\n    <!-- <app-partner></app-partner> -->\n    <!-- <app-our-testimonial></app-our-testimonial> -->\n    <!-- <app-our-blog></app-our-blog> -->\n    <!-- <app-contact-form></app-contact-form> -->\n</div>\n<!-- Footer start -->\n<app-footer-style1 [footerProp]=\"footerProp\" [contactInfo]=\"contactInfo\"></app-footer-style1>\n<!-- Footer end -->\n"

/***/ }),

/***/ "./src/app/landing-page6/components/about-us/about-us.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/landing-page6/components/about-us/about-us.component.ts ***!
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
            class: 'text-center',
            title: 'ABOUT US OUR COMPANY',
            subTitle: 'What is Predictive Analytics?'
        };
        this.List = [
            {
                id: 'tab-about-us',
                title: 'About Us',
                desc: [
                    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.',
                ],
                active: true
            },
            {
                id: 'tab-our-vision',
                title: 'Our Vision',
                desc: [
                    'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.',
                    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                ]
            },
            {
                id: 'tab-our-mission',
                title: 'Our Mission',
                desc: [
                    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                    'Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.',
                ]
            }
        ];
    }
    ngOnInit() {
    }
    tabActive(id) {
        // @ts-ignore
        const jquery = window.$;
        jquery('.tab-content').find('.active').removeClass('active show');
        jquery('#' + id).addClass('active show');
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page6/components/about-us/about-us.component.html")).default
    })
], AboutUsComponent);



/***/ }),

/***/ "./src/app/landing-page6/components/case-studies/case-studies.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/landing-page6/components/case-studies/case-studies.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CaseStudiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseStudiesComponent", function() { return CaseStudiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CaseStudiesComponent = class CaseStudiesComponent {
    constructor() {
        this.titleSectionProp = {
            class: 'text-center',
            title: 'CASE STUDIES',
            subTitle: 'Our Latest Case Studies'
        };
    }
    tabActive(id) {
        // @ts-ignore
        const jquery = window.$;
        jquery('.tab-content').find('.active').removeClass('active show');
        jquery('#' + id).addClass('active show');
    }
    ngOnInit() {
    }
};
CaseStudiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-case-studies',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./case-studies.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page6/components/case-studies/case-studies.component.html")).default
    })
], CaseStudiesComponent);



/***/ }),

/***/ "./src/app/landing-page6/components/contact-form/contact-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/landing-page6/components/contact-form/contact-form.component.ts ***!
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page6/components/contact-form/contact-form.component.html")).default
    })
], ContactFormComponent);



/***/ }),

/***/ "./src/app/landing-page6/components/counters/counters.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/landing-page6/components/counters/counters.component.ts ***!
  \*************************************************************************/
/*! exports provided: CountersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountersComponent", function() { return CountersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CountersComponent = class CountersComponent {
    constructor() {
        this.List = [
            {
                number: 422,
                title: 'Managed Analytics as a global business',
                image: './assets/images/fancybox/4.png'
            },
            {
                number: 32,
                title: 'Data Management in the telecoms',
                image: './assets/images/fancybox/3.png'
            },
            {
                number: 563,
                title: 'Project complete in timeline.',
                image: './assets/images/fancybox/2.png'
            },
            {
                number: 1254,
                title: 'Custom Portfolio Created',
                image: './assets/images/fancybox/1.png'
            }
        ];
    }
    ngOnInit() {
    }
};
CountersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-counters',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./counters.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page6/components/counters/counters.component.html")).default
    })
], CountersComponent);



/***/ }),

/***/ "./src/app/landing-page6/components/features/features.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/landing-page6/components/features/features.component.ts ***!
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
            class: 'pr-lg-5 text-left',
            title: '',
            subTitle: 'What can you do with predictive analytics',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.'
        };
        this.List = [
            { title: 'Business performance', image: './assets/images/fancybox/6-5.png' },
            { title: 'Predict behavior', image: './assets/images/fancybox/6-6.png' },
            { title: 'Drive strategic', image: './assets/images/fancybox/6-5.png' },
            { title: 'Business performance', image: './assets/images/fancybox/6-6.png' },
            { title: 'Understand customers', image: './assets/images/fancybox/6-7.png' },
            { title: 'Predict behavior', image: './assets/images/fancybox/6-8.png' },
            { title: 'Identify trends', image: './assets/images/fancybox/6-6.png' },
            { title: 'Insights into data', image: './assets/images/fancybox/6-7.png' },
        ];
    }
    ngOnInit() {
    }
};
FeaturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-features',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./features.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page6/components/features/features.component.html")).default
    })
], FeaturesComponent);



/***/ }),

/***/ "./src/app/landing-page6/components/our-blog/our-blog.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/landing-page6/components/our-blog/our-blog.component.ts ***!
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
            subTitle: 'Recent Blog'
        };
        this.List = [
            {
                img: './assets/images/about-us/03.png',
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-blog.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page6/components/our-blog/our-blog.component.html")).default
    })
], OurBlogComponent);



/***/ }),

/***/ "./src/app/landing-page6/components/our-service/our-service.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/landing-page6/components/our-service/our-service.component.ts ***!
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
            title: 'OUR FOCUS',
            subTitle: 'Investing in the Digital Future'
        };
        this.List = [
            {
                id: 'tab-software-development',
                title: 'Content',
                subtitle: 'Digital Alpha Strategy Content',
                image: './assets/images/services/6-1.png',
                tabImage: './assets/images/services/16.jpg',
                active: true
            },
            {
                id: 'tab-application-services',
                title: 'Content',
                subtitle: 'Digital Alpha Strategy Content',
                image: './assets/images/services/6-2.png',
                tabImage: './assets/images/services/14.png'
            },
            {
                id: 'tab-data-analytics',
                title: 'Content',
                subtitle: 'Digital Alpha Strategy Content',
                image: './assets/images/services/6-3.png',
                tabImage: './assets/images/services/13.png'
            },
            {
                id: 'tab-help-desk',
                title: 'Content',
                subtitle: 'Digital Alpha Strategy Content',
                image: './assets/images/services/6-4.png',
                tabImage: './assets/images/services/14.png'
            }
        ];
    }
    tabActive(id) {
        // @ts-ignore
        const jquery = window.$;
        jquery('.tab-content').find('.active').removeClass('active show');
        jquery('#' + id).addClass('active show');
    }
    ngOnInit() {
    }
};
OurServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-our-service',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-service.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page6/components/our-service/our-service.component.html")).default
    })
], OurServiceComponent);



/***/ }),

/***/ "./src/app/landing-page6/components/our-services2/our-services2.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/landing-page6/components/our-services2/our-services2.component.ts ***!
  \***********************************************************************************/
/*! exports provided: OurServices2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServices2Component", function() { return OurServices2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OurServices2Component = class OurServices2Component {
    constructor() {
        this.titleSectionProp = {
            class: 'text-center',
            title: 'OUR SERVICES',
            subTitle: 'We Provide Useful Services'
        };
        this.List = [
            {
                title: 'Generate Ideas',
                image: './assets/images/fancybox/6-1.png',
                desc: 'It is a long established fact that a fre ader will be distracted by the .'
            },
            {
                title: 'Collect Data',
                image: './assets/images/fancybox/6-2.png',
                desc: 'It is a long established fact that a fre ader will be distracted by the .'
            },
            {
                title: 'Create Design',
                image: './assets/images/fancybox/6-3.png',
                desc: 'It is a long established fact that a fre ader will be distracted by the .'
            },
            {
                title: 'Launch Project',
                image: './assets/images/fancybox/6-4.png',
                desc: 'It is a long established fact that a fre ader will be distracted by the .'
            }
        ];
    }
    ngOnInit() {
    }
};
OurServices2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-our-services2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-services2.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page6/components/our-services2/our-services2.component.html")).default
    })
], OurServices2Component);



/***/ }),

/***/ "./src/app/landing-page6/components/our-testimonial/our-testimonial.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/landing-page6/components/our-testimonial/our-testimonial.component.ts ***!
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
            // {
            //   title: 'UK Cloud',
            //   subtitle: '.',
            //   image: './assets/images/partners/1.png'
            // },
            // {
            //   title: 'JetStream',
            //   subtitle:"https://www.tradingview.com/chart/6AfSgpbI/?symbol=CME_MINI%3ANQ1%21",
            //   image: './assets/images/partners/3.png'
            // },
            // {
            //   title: 'British Telecom',
            //   subtitle: '.',
            //   image: './assets/images/partners/4.png'
            // },
            // {
            //   title: 'Working Group Two',
            //   subtitle: '.',
            //   image: './assets/images/partners/2.png'
            // },
            {
                image: './assets/images/partners/element8.png',
                name: 'Element8',
                // time: 'September 26, 2019 ',
                title: 'PRESS',
                info: 'Element8 secures 200 million for national expansion from Digital Alpha',
                subtitle: "https://www.prnewswire.com/news-releases/element8-secures-200-million-for-national-expansion-from-digital-alpha-301773118.html"
                // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
            },
            {
                image: './assets/images/partners/star.png',
                name: 'Starlite Media',
                // time: 'September 26, 2019 ',
                title: 'PRESS',
                info: 'Quantela Digital Alpha and Starlite Media form a 50 million strategic partnership to revolutionize retail media networks',
                subtitle: "https://www.prnewswire.com/news-releases/quantela-digital-alpha-and-starlite-media-form-a-50-million-strategic-partnership-to-revolutionize-retail-media-networks-301778893.html"
                // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
            },
            {
                image: './assets/images/partners/dtiq.png',
                name: 'DTIQ',
                // time: 'September 26, 2019 ',
                title: 'PRESS',
                info: 'Digital Alpha leads $200M investment to acquire majority stake in DTiQ',
                subtitle: "https://www.prnewswire.com/news-releases/digital-alpha-leads-200m-investment-to-acquire-majority-stake-in-dtiq-catalyzing-cisco-meraki-partnership-and-extending-dtiqs-market-leading-ai-cloud-and-automation-capabilities-301441587.html"
                // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
            },
            {
                image: './assets/images/partners/25.png',
                name: 'Unitas Global',
                // time: 'September 26, 2019 ',
                title: 'PRESS',
                info: 'Digital Alpha completes the asset acquisition of Unitas Global connectivity business',
                subtitle: "https://www.businesswire.com/news/home/20220418005166/en/Digital-Alpha-Completes-the-Asset-Acquisition-of-Unitas-Globals-Connectivity-Business-a-Next-Generation-Networking-Platform"
                // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
            },
            {
                image: './assets/images/partners/24.png',
                name: 'Welink',
                // time: 'September 26, 2019 ',
                title: 'PRESS',
                info: 'WeLink secures 185 m Million funding from Digital Alpha to revolutionize the future Ultra High Speed Wireless Broadband',
                subtitle: 'https://www.businesswire.com/news/home/20210107005328/en/WeLink-Secures-185-Million-Funding-from-Digital-Alpha-to-Revolutionize-the-Future-of-Ultra-High-Speed-Wireless-Broadband'
                // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
            },
            // {
            //   img: './assets/images/partners/1.png',
            //   name:  'British Telecom',
            //   // time: 'September 26, 2019 ',
            //   title: 'Press',
            //   // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
            // },
            {
                image: './assets/images/partners/1.png',
                name: 'SHARE CARE',
                // time: 'September 26, 2019 ',
                title: 'PRESS',
                info: 'Cisco, Qwilt and Digital Alpha Define the Future of Content Delivery with New Open Caching Solution for Service Providers',
                subtitle: "https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2020/m10/cisco-qwilt-and-digital-alpha-define-the-future-of-content-delivery-with-new-open-caching-solution-for-service-providers.html"
                // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
            },
            {
                image: './assets/images/partners/27.png',
                name: 'SHARE CARE',
                info: 'Cisco, Qwilt and Digital Alpha bring open caching to Brazil via Tim partnership',
                subtitle: "https://www.fiercevideo.com/tech/cisco-qwilt-and-digital-alpha-bring-open-caching-to-brazil-via-tim-partnership",
                // time: 'September 26, 2019 ',
                title: 'PRESS',
            },
            {
                image: './assets/images/partners/26.png',
                name: 'SHARE CARE',
                // time: 'September 26, 2019 ',
                title: 'PRESS',
                info: 'Cisco, Qwilt and Digital Alpha launching cdn solution to improve streaming experience for its customers in Argentina',
                info2: 'Sharecare and Falcon Capital Acquisition Corp. Reach Agreement to Combine, Creating Publicly Traded Digital Health Company',
                subtitle: "https://www.qwilt.com/telecom-argentina-launching-new-cisco-qwilt-and-digital-alpha-cdn-solution-to-improve-streaming-experience-for-its-customers-in-argentina/",
                subtitle2: "https://www.prnewswire.com/news-releases/sharecare-and-falcon-capital-acquisition-corp-reach-agreement-to-combine-creating-publicly-traded-digital-health-company-301227530.html"
                // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
            },
            {
                image: './assets/images/partners/9.png',
                name: 'SHARE CARE',
                info: 'Cisco, Qwilt and Digital Alpha Define the Future of Content Delivery with New Open Caching Solution for Service Providers',
                info2: 'Qwilt Content Delivery Sharing for Publishers Transforms Media Delivery',
                subtitle: "https://www.qwilt.com/cisco-qwilt-and-digital-alpha-define-the-future-of-content-delivery-with-new-open-caching-solution-for-service-providers/",
                subtitle2: "https://www.qwilt.com/qwilt-content-delivery-sharing-for-publishers-transforms-media-delivery/",
                // time: 'September 26, 2019 ',
                title: 'PRESS',
            },
            {
                image: './assets/images/partners/g.jpg',
                name: 'Google Station',
                // time: 'September 26, 2019 ',
                title: 'PRESS',
                desc: ' Google Station announcement at Mobile World Congress Barcelona',
                info: 'Google Station announcement at Mobile World Congress Barcelona',
                subtitle: "https://www.qwilt.com/telecom-argentina-launching-new-cisco-qwilt-and-digital-alpha-cdn-solution-to-improve-streaming-experience-for-its-customers-in-argentina/",
            },
            {
                image: './assets/images/partners/p.png',
                name: 'Packet Fabric',
                // time: 'September 26, 2019 ',
                title: 'PRESS',
                info: 'Chris Dedicoat joins PacketFabric Board of Directors as chairman',
                info2: 'PacketFabric names former Cisco Executive Dave Ward as its new CEO',
                subtitle: "https://www.lightreading.com/services/chris-dedicoat-joins-packetfabric-board-of-directors-as-chairman/d/d-id/762784?/",
                subtitle2: "https://www.fiercetelecom.com/telecom/packetfabric-names-former-cisco-executive-ward-as-its-new-ceo"
                // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
            },
            {
                image: './assets/images/partners/7.png',
                name: 'PRYON',
                // time: 'September 26, 2019 ',
                title: 'PRESS',
                info: 'Pyron an AI Technology company announces Series A 20M Equity funding round',
                subtitle: "https://pryon.com/2019/06/11/pryon-announces-20m-equity-round/",
            },
            {
                image: './assets/images/partners/10.png',
                name: 'Working Group Two',
                exit: 'Exit Announced 2023',
                // time: 'September 26, 2019 ',
                title: 'PRESS',
                info: 'Telenor and Cisco Strengthen Partnership to Support Critical Infrastructure Transitions for Telcos Scale Joint Venture WG2 for Global Operations',
                info2: 'Norways Telenor Seeks Salvation in the Cloud with spinout WG2',
                subtitle: "https://www.globenewswire.com/news-release/2020/06/25/2053226/0/en/Telenor-and-Cisco-Strengthen-Partnership-to-Support-Critical-Infrastructure-Transitions-for-Telcos-Scale-Joint-Venture-WG2-for-Global-Operations.html",
                subtitle2: "https://www.reuters.com/article/idUSKCN1GD5JA"
                // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
            },
            {
                image: './assets/images/partners/cloudian.png',
                name: 'Cloudian',
                // time: 'September 26, 2019 ',
                title: 'PRESS',
                info: 'Cloudian secures $125m Joint Venture Commitment with Digital Alpha',
                info2: 'Cisco & Cloudian Collaborate to Create Scale-Out Enterprise Object Storage Solutions',
                subtitle: "https://www.globenewswire.com/news-release/2018/02/28/1401078/0/en/Cloudian-Secures-Funding-Commitment-of-125-Million-in-Joint-Venture-with-Digital-Alpha-to-Power-Enterprise-Object-Storage-Growth.html",
                subtitle2: "https://cloudian.com/blog/cisco-cloudian-create-scale-out-object-storage-solutions/"
                // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
            },
            {
                image: './assets/images/partners/5.png',
                name: 'Sharecare',
                // time: 'September 26, 2019 ',
                title: 'PRESS',
                info: 'Sharecare and Digital Alpha announce a strategic collaboration',
                info2: 'Sharecare and Falcon Capital Acquisition Corp. Reach Agreement to Combine, Creating Publicly Traded Digital Health Company',
                subtitle: "https://www.prnewswire.com/news-releases/sharecare-and-digital-alpha-announce-a-strategic-collaboration-to-strengthen-the-nexus-of-healthcare-and-digital-infrastructure-across-america-301231713.html",
                subtitle2: "https://www.prnewswire.com/news-releases/sharecare-and-falcon-capital-acquisition-corp-reach-agreement-to-combine-creating-publicly-traded-digital-health-company-301227530.html"
                // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
            },
            {
                image: './assets/images/partners/6.png',
                name: 'CONNEXIN',
                // time: 'September 26, 2019 ',
                title: 'Press',
                info: 'Smart Cities Race Steps up a Gear with £10m Connexin Investment',
                exit: 'Exited 2019',
                subtitle: "https://venturebeat.com/2017/10/15/smart-cities-race-steps-up-a-gear-with-10m-connexin-investment/",
            },
            // {
            //   img: './assets/images/partners/7.png',
            //   name:  'PRYON',
            //   // time: 'September 26, 2019 ',
            //   title: 'Press',
            //   desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
            // },
            // {
            //   img: './assets/images/partners/10.png',
            //   name:  'Working Group Two',
            //   // time: 'September 26, 2019 ',
            //   title: 'Press',
            //   desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
            // },
            {
                image: './assets/images/partners/11.png',
                name: 'JetStream Software',
                // time: 'September 26, 2019 ',
                title: 'Press',
                info: 'JetStream Software Secures Funding Led by Digital Alpha to Advance Disaster Recovery as a Service, Cloud Data Protection',
                subtitle: "https://www.jetstreamsoft.com/2019/05/28/jetstream-software-secures-series-a-funding-led-by-digital-alpha-to-advance-draas-and-cloud-data-protection/",
            },
            // {
            //   image: './assets/images/partners/ukcloud.png',
            //   name:  'UK Cloud',
            //   // time: 'September 26, 2019 ',
            //   title: 'Press',
            //   info: 'UKCloud secures investment from Digital Alpha',
            //   info2:'UKCloud awarded an expanded presence on G-Cloud 11 with new and improved multi-cloud services',
            //   subtitle: "https://ukcloud.com/hub/news/ukcloud-secures-investment-from-digital-alpha-to-accelerate-the-expansion-of-its-high-security-multi-cloud-platform/",
            //   // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
            //   subtitle2:"https://www.socpub.com/articles/ukcloud-awarded-expanded-presence-g-cloud-11-new-and-improved-multi-cloud-services-16584"
            // },
            {
                image: './assets/images/partners/quantela.jpg',
                name: 'Quantela',
                // time: 'September 26, 2019 ',
                title: 'Press',
                info: 'Quantela receives $10m Equity Investment From Digital Alpha to Scale its Global Business',
                info2: 'World Economic Forum Awards Quantela Inc. the Coveted Technology Pioneer',
                subtitle: "https://www.prnewswire.com/news-releases/quantela-a-smart-city-automation-and-ai-leader-announces-a-10m-equity-investment-from-digital-alpha-to-scale-its-global-business-828415024.html",
                // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
                subtitle2: "https://www.prnewswire.com/in/news-releases/world-economic-forum-awards-quantela-inc-the-coveted-technology-pioneer--827359253.html"
            },
            {
                image: './assets/images/partners/cimcon.jpg',
                name: 'Cimcon Lighting',
                // time: 'September 26, 2019 ',
                title: 'Press',
                exit: 'Exited 2021',
                info: 'Cimcon receives 33 million in funding to extend its reach to smart cities.',
                info2: 'Platform provider aims to lower smart city set-up costs',
                subtitle: "https://www.prnewswire.com/news-releases/cimcon-receives-33-million-in-funding-to-extend-the-reach-of-its-smart-cities-solutions-300914826.html",
                // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
                subtitle2: "https://www.smartcitiesworld.net/news/news/platform-provider-aims-to-lower-smart-city-set-up-costs-4566"
            },
        ];
    }
    ngOnInit() {
    }
};
OurTestimonialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-our-testimonial',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-testimonial.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page6/components/our-testimonial/our-testimonial.component.html")).default
    })
], OurTestimonialComponent);



/***/ }),

/***/ "./src/app/landing-page6/components/partner/partner.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/landing-page6/components/partner/partner.component.ts ***!
  \***********************************************************************/
/*! exports provided: PartnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerComponent", function() { return PartnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PartnerComponent = class PartnerComponent {
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
PartnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-partner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./partner.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page6/components/partner/partner.component.html")).default
    })
], PartnerComponent);



/***/ }),

/***/ "./src/app/landing-page6/components/revolution-slider6/revolution-slider6.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/landing-page6/components/revolution-slider6/revolution-slider6.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: RevolutionSlider6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevolutionSlider6Component", function() { return RevolutionSlider6Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RevolutionSlider6Component = class RevolutionSlider6Component {
    constructor() { }
    ngOnInit() {
    }
};
RevolutionSlider6Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-revolution-slider6',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./revolution-slider6.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page6/components/revolution-slider6/revolution-slider6.component.html")).default
    })
], RevolutionSlider6Component);



/***/ }),

/***/ "./src/app/landing-page6/components/revolution-slider6/revolution-slider6.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/landing-page6/components/revolution-slider6/revolution-slider6.module.ts ***!
  \******************************************************************************************/
/*! exports provided: RevolutionSlider6Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevolutionSlider6Module", function() { return RevolutionSlider6Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _revolution_slider6_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./revolution-slider6.component */ "./src/app/landing-page6/components/revolution-slider6/revolution-slider6.component.ts");




let RevolutionSlider6Module = class RevolutionSlider6Module {
};
RevolutionSlider6Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_revolution_slider6_component__WEBPACK_IMPORTED_MODULE_3__["RevolutionSlider6Component"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _revolution_slider6_component__WEBPACK_IMPORTED_MODULE_3__["RevolutionSlider6Component"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], RevolutionSlider6Module);



/***/ }),

/***/ "./src/app/landing-page6/index/index.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page6/index/index.component.ts ***!
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/index.js!./src/app/landing-page6/index/index.component.html")).default
    })
], IndexComponent);



/***/ }),

/***/ "./src/app/landing-page6/landing-page6.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/landing-page6/landing-page6.module.ts ***!
  \*******************************************************/
/*! exports provided: LandingPage6Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage6Module", function() { return LandingPage6Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../xamin/xamin.module */ "./src/app/xamin/xamin.module.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index/index.component */ "./src/app/landing-page6/index/index.component.ts");
/* harmony import */ var _components_revolution_slider6_revolution_slider6_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/revolution-slider6/revolution-slider6.module */ "./src/app/landing-page6/components/revolution-slider6/revolution-slider6.module.ts");
/* harmony import */ var _components_counters_counters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/counters/counters.component */ "./src/app/landing-page6/components/counters/counters.component.ts");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/landing-page6/components/about-us/about-us.component.ts");
/* harmony import */ var _components_our_service_our_service_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/our-service/our-service.component */ "./src/app/landing-page6/components/our-service/our-service.component.ts");
/* harmony import */ var _components_features_features_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/features/features.component */ "./src/app/landing-page6/components/features/features.component.ts");
/* harmony import */ var _components_our_services2_our_services2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/our-services2/our-services2.component */ "./src/app/landing-page6/components/our-services2/our-services2.component.ts");
/* harmony import */ var _components_case_studies_case_studies_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/case-studies/case-studies.component */ "./src/app/landing-page6/components/case-studies/case-studies.component.ts");
/* harmony import */ var _components_partner_partner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/partner/partner.component */ "./src/app/landing-page6/components/partner/partner.component.ts");
/* harmony import */ var _components_our_testimonial_our_testimonial_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/our-testimonial/our-testimonial.component */ "./src/app/landing-page6/components/our-testimonial/our-testimonial.component.ts");
/* harmony import */ var _components_our_blog_our_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/our-blog/our-blog.component */ "./src/app/landing-page6/components/our-blog/our-blog.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/contact-form/contact-form.component */ "./src/app/landing-page6/components/contact-form/contact-form.component.ts");

















const routes = [
    {
        path: '',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"],
        children: []
    }
];
let LandingPage6Module = class LandingPage6Module {
};
LandingPage6Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"],
            _components_counters_counters_component__WEBPACK_IMPORTED_MODULE_7__["CountersComponent"],
            _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"],
            _components_our_service_our_service_component__WEBPACK_IMPORTED_MODULE_9__["OurServiceComponent"],
            _components_features_features_component__WEBPACK_IMPORTED_MODULE_10__["FeaturesComponent"],
            _components_our_services2_our_services2_component__WEBPACK_IMPORTED_MODULE_11__["OurServices2Component"],
            _components_case_studies_case_studies_component__WEBPACK_IMPORTED_MODULE_12__["CaseStudiesComponent"],
            _components_partner_partner_component__WEBPACK_IMPORTED_MODULE_13__["PartnerComponent"],
            _components_our_testimonial_our_testimonial_component__WEBPACK_IMPORTED_MODULE_14__["OurTestimonialComponent"],
            _components_our_blog_our_blog_component__WEBPACK_IMPORTED_MODULE_15__["OurBlogComponent"],
            _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_16__["ContactFormComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _xamin_xamin_module__WEBPACK_IMPORTED_MODULE_4__["XaminModule"],
            _components_revolution_slider6_revolution_slider6_module__WEBPACK_IMPORTED_MODULE_6__["RevolutionSlider6Module"]
        ],
        exports: []
    })
], LandingPage6Module);



/***/ })

}]);
//# sourceMappingURL=landing-page6-landing-page6-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/@angular/compiler/src sync recursive":
/*!*************************************************!*\
  !*** ./node_modules/@angular/compiler/src sync ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/@angular/compiler/src sync recursive";

/***/ }),

/***/ "./src/app/aboutme/aboutme.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutme/aboutme.component.ts ***!
  \**********************************************/
/*! exports provided: AboutmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutmeComponent", function() { return AboutmeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AboutmeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        // let body = document.querySelector('body');
        // let nav = document.querySelector('nav');
        // if (body.classList.contains('container')) {
        // } else {
        //   body.classList.add('container');
        // }
        // if (body.classList.contains('container-work')) {
        //   body.classList.remove('container-work');
        //   nav.classList.remove('work-nav');
        // }
        let title = document.querySelectorAll('.title span');
        let counter = 0, widthLoading = 0;
        let loaderWrapper = document.querySelector('.loader-wrapper');
        let loadingComplete = (document.querySelector('.loading-complete'));
        const animationArray = ['hideUp', 'hideDown', 'hideLeft', 'hideRight'];
        let percentage = document.createElement('div');
        percentage.classList.add('loading-percentage');
        loaderWrapper.appendChild(percentage);
        var interval = setInterval(() => {
            loadingComplete.style.width = widthLoading + '%';
            counter++;
            widthLoading++;
            percentage.innerHTML = counter - 1 + '%';
            if (counter == 101) {
                loaderWrapper.classList.add(animationArray[Math.floor(Math.random() * 4)]);
                clearInterval(interval);
            }
        }, 10);
        setTimeout(() => {
            let delay = 0;
            title.forEach((spanEle) => {
                spanEle.style.animation = `comeout 1s ease ${delay}s forwards`;
                delay += 0.05;
            });
        }, 2000);
        title.forEach((spanTag) => {
            spanTag.addEventListener('mouseover', () => {
                spanTag.style.opacity = '1';
                spanTag.style.animation = '';
                spanTag.classList.toggle('bounce');
            });
        });
    }
}
AboutmeComponent.ɵfac = function AboutmeComponent_Factory(t) { return new (t || AboutmeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AboutmeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutmeComponent, selectors: [["app-aboutme"]], decls: 59, vars: 0, consts: [[1, "loader-wrapper"], [1, "loading-logo"], [1, "loading-text"], [1, "loading-bar"], [1, "loading-complete"], [1, "circles"], [2, "left", "-12%"], [1, "home-main-section", "contact-main-section"], [1, "title", "aboutmesection"], [1, "upabout"], [1, "uph1about"], [1, "aboutMe"], [1, "about"], [1, "me"], [1, "downh1about", 2, "margin-bottom", "30px"], [1, "description"], [1, "timeline"], [1, "downabout"], [1, "cuberotate"], [1, "wrap"], [1, "cube"], [1, "front"], [1, "fab", "fa-html5"], [1, "back"], [1, "fab", "fa-css3"], [1, "top"], [1, "fab", "fa-angular"], [1, "bottom"], [1, "fab", "fa-js-square"], [1, "left"], [1, "fab", "fa-python"], [1, "right"], [1, "fab", "fa-node"]], template: function AboutmeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading your Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "<about>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "<h1>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "</h1>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repellat sed provident esse pariatur libero ab? Et alias ad voluptatibus quas rerum itaque ipsum eos placeat enim? Consequatur vitae aliquid sapiente, dicta accusantium cumque veritatis porro earum laudantium quaerat tempora voluptatibus esse id dolore itaque ducimus mollitia dignissimos sed eveniet ipsam quibusdam, nemo deleniti eius! Consequatur ea, eius minima itaque debitis quo blanditiis obcaecati iusto dolor molestias optio suscipit ex sunt repudiandae porro totam eveniet facilis doloremque ullam mollitia eos veritatis aperiam? Modi soluta id quidem error blanditiis dolores quibusdam. Officia aspernatur maiores exercitationem eaque quisquam dolor reprehenderit quos praesentium. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "</about>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".wrap[_ngcontent-%COMP%] {\n  \n  position: absolute;\n  top: 50%;\n  transform: translate(110%, -50%);\n  perspective: 1000px;\n  perspective-origin: 50% 50%;\n}\n\n.cube[_ngcontent-%COMP%] {\n  margin: auto;\n  position: relative;\n  height: 200px;\n  width: 200px;\n  transform-style: preserve-3d;\n}\n\n.cube[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: absolute;\n  box-sizing: border-box;\n  padding: 55px;\n  height: 100%;\n  width: 100%;\n  background-color: #97716eb3;\n  border: solid 1px #eeeeee31;\n  color: #ffffff;\n}\n\n.front[_ngcontent-%COMP%] {\n  transform: translateZ(100px);\n}\n\n.back[_ngcontent-%COMP%] {\n  transform: translateZ(-100px) rotateY(180deg);\n}\n\n.right[_ngcontent-%COMP%] {\n  transform: rotateY(-270deg) translateX(100px);\n  transform-origin: top right;\n}\n\n.left[_ngcontent-%COMP%] {\n  transform: rotateY(270deg) translateX(-100px);\n  transform-origin: center left;\n}\n\n.top[_ngcontent-%COMP%] {\n  transform: rotateX(-270deg) translateY(-100px);\n  transform-origin: top center;\n}\n\n.bottom[_ngcontent-%COMP%] {\n  transform: rotateX(270deg) translateY(100px);\n  transform-origin: bottom center;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotateX(0deg) rotateY(0deg);\n  }\n\n  to {\n    transform: rotateX(360deg) rotateY(360deg);\n  }\n}\n\n.cube[_ngcontent-%COMP%] {\n  animation: rotate 10s infinite linear;\n}\n\n.fab[_ngcontent-%COMP%] {\n  font-size: 6em;\n}\n\n.upabout[_ngcontent-%COMP%], .downabout[_ngcontent-%COMP%], .uph1about[_ngcontent-%COMP%], .downh1about[_ngcontent-%COMP%] {\n  color: #585858;\n  opacity: 1;\n  font-size: 1vw;\n  font-family: \"Vibur\", cursive;\n}\n\n.upabout[_ngcontent-%COMP%], .downabout[_ngcontent-%COMP%] {\n  margin-left: -15%;\n}\n\n.home-main-section[_ngcontent-%COMP%]   .aboutmesection[_ngcontent-%COMP%] {\n  width: 20%;\n  margin: auto 0;\n  z-index: 0;\n}\n\n.about[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 7vh;\n}\n\n.me[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.aboutMe[_ngcontent-%COMP%] {\n  display: inline-block;\n  line-height: 0px;\n}\n\n.aboutMe[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  opacity: 1;\n  color: #fc766a;\n  font-size: 4vw;\n}\n\n.aboutMe[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  opacity: 1;\n  font-size: 4vw;\n}\n\n.description[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding-bottom: 25px;\n}\n\n.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 1vw;\n  opacity: 1;\n  line-height: 24px;\n}\n\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  left: -7px;\n  background-image: url('timeline.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  height: 20vh;\n  width: 40vw;\n  object-fit: cover;\n}\n\n@media (min-width: 380px) and (max-width: 1024px) {\n  .upabout[_ngcontent-%COMP%], .downabout[_ngcontent-%COMP%], .uph1about[_ngcontent-%COMP%], .downh1about[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n  .home-main-section[_ngcontent-%COMP%]   .aboutmesection[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .timeline[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .aboutMe[_ngcontent-%COMP%] {\n    margin-top: 20%;\n  }\n  .about[_ngcontent-%COMP%] {\n    height: 0;\n  }\n  .description[_ngcontent-%COMP%] {\n    margin-top: 5%;\n  }\n\n  .aboutMe[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .aboutMe[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 6vw;\n  }\n\n  .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 2vw;\n    line-height: 20px;\n  }\n\n  .wrap[_ngcontent-%COMP%] {\n    transform: translate(30vw, 15vw);\n  }\n\n  .cube[_ngcontent-%COMP%] {\n    height: 24vw;\n    width: 24vw;\n  }\n  .cube[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    padding: 37%;\n  }\n  .front[_ngcontent-%COMP%] {\n    transform: translateZ(100px);\n  }\n  .fab[_ngcontent-%COMP%] {\n    font-size: 7 vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXRtZS9hYm91dG1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0ZBQXdGOztBQUV4RjtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsNkNBQTZDO0VBQzdDLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDZDQUE2QztFQUM3Qyw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFO0lBQ0Usc0NBQXNDO0VBQ3hDOztFQUVBO0lBQ0UsMENBQTBDO0VBQzVDO0FBQ0Y7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7O0VBSUUsY0FBYztFQUNkLFVBQVU7RUFDVixjQUFjO0VBQ2QsNkJBQTZCO0FBQy9COztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixxQ0FBeUQ7RUFDekQsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFOzs7O0lBSUUsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7O0lBRUUsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWJvdXRtZS9hYm91dG1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9WmhpK01hbmcrWGluZyZkaXNwbGF5PXN3YXBcIik7ICovXG5cbi53cmFwIHtcbiAgLyogbWFyZ2luLXRvcDogMTUwcHg7ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMCUsIC01MCUpO1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xuICBwZXJzcGVjdGl2ZS1vcmlnaW46IDUwJSA1MCU7XG59XG5cbi5jdWJlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLmN1YmUgPiBkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDU1cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NzcxNmViMztcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2VlZWVlZTMxO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5mcm9udCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCk7XG59XG5cbi5iYWNrIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xMDBweCkgcm90YXRlWSgxODBkZWcpO1xufVxuXG4ucmlnaHQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTI3MGRlZykgdHJhbnNsYXRlWCgxMDBweCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcbn1cblxuLmxlZnQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMjcwZGVnKSB0cmFuc2xhdGVYKC0xMDBweCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBsZWZ0O1xufVxuXG4udG9wIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKC0yNzBkZWcpIHRyYW5zbGF0ZVkoLTEwMHB4KTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcbn1cblxuLmJvdHRvbSB7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgyNzBkZWcpIHRyYW5zbGF0ZVkoMTAwcHgpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gY2VudGVyO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgzNjBkZWcpIHJvdGF0ZVkoMzYwZGVnKTtcbiAgfVxufVxuXG4uY3ViZSB7XG4gIGFuaW1hdGlvbjogcm90YXRlIDEwcyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbi5mYWIge1xuICBmb250LXNpemU6IDZlbTtcbn1cblxuLnVwYWJvdXQsXG4uZG93bmFib3V0LFxuLnVwaDFhYm91dCxcbi5kb3duaDFhYm91dCB7XG4gIGNvbG9yOiAjNTg1ODU4O1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDF2dztcbiAgZm9udC1mYW1pbHk6IFwiVmlidXJcIiwgY3Vyc2l2ZTtcbn1cblxuLnVwYWJvdXQsXG4uZG93bmFib3V0IHtcbiAgbWFyZ2luLWxlZnQ6IC0xNSU7XG59XG5cbi5ob21lLW1haW4tc2VjdGlvbiAuYWJvdXRtZXNlY3Rpb24ge1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW46IGF1dG8gMDtcbiAgei1pbmRleDogMDtcbn1cblxuLmFib3V0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDd2aDtcbn1cblxuLm1lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYWJvdXRNZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDBweDtcbn1cblxuLmFib3V0TWUgLmFib3V0IHNwYW4ge1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogI2ZjNzY2YTtcbiAgZm9udC1zaXplOiA0dnc7XG59XG5cbi5hYm91dE1lIC5tZSBzcGFuIHtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiA0dnc7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xufVxuXG4uZGVzY3JpcHRpb24gcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxdnc7XG4gIG9wYWNpdHk6IDE7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4udGltZWxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC03cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvdGltZWxpbmUucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjB2aDtcbiAgd2lkdGg6IDQwdnc7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzgwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnVwYWJvdXQsXG4gIC5kb3duYWJvdXQsXG4gIC51cGgxYWJvdXQsXG4gIC5kb3duaDFhYm91dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbiAgLmhvbWUtbWFpbi1zZWN0aW9uIC5hYm91dG1lc2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnRpbWVsaW5lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmFib3V0TWUge1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgfVxuICAuYWJvdXQge1xuICAgIGhlaWdodDogMDtcbiAgfVxuICAuZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICB9XG5cbiAgLmFib3V0TWUgLmFib3V0IHNwYW4sXG4gIC5hYm91dE1lIC5tZSBzcGFuIHtcbiAgICBmb250LXNpemU6IDZ2dztcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbiBwIHtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuXG4gIC53cmFwIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHZ3LCAxNXZ3KTtcbiAgfVxuXG4gIC5jdWJlIHtcbiAgICBoZWlnaHQ6IDI0dnc7XG4gICAgd2lkdGg6IDI0dnc7XG4gIH1cbiAgLmN1YmUgPiBkaXYge1xuICAgIHBhZGRpbmc6IDM3JTtcbiAgfVxuICAuZnJvbnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCk7XG4gIH1cbiAgLmZhYiB7XG4gICAgZm9udC1zaXplOiA3IHZ3O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutmeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aboutme',
                templateUrl: './aboutme.component.html',
                styleUrls: ['./aboutme.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutme/aboutme.component */ "./src/app/aboutme/aboutme.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _contactme_contactme_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contactme/contactme.component */ "./src/app/contactme/contactme.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");










const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'aboutme', component: _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_3__["AboutmeComponent"] },
    { path: 'skills', component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"] },
    { path: 'contactme', component: _contactme_contactme_component__WEBPACK_IMPORTED_MODULE_5__["ContactmeComponent"] },
    { path: 'work', component: _work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"] },
    { path: '**', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__["PagenotfoundComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["active"]; };
const _c1 = function () { return { exact: true }; };
class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'rahilhastu';
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    ngOnInit() { }
    navigateTo(link) {
        // let unorderedList = document.querySelector('.unordered');
        // let links = <HTMLElement[]>(<any>unorderedList.querySelectorAll('li'));
        // links.forEach((link) => {
        //   link.addEventListener('click', function () {
        //     links.forEach((activeLink) => {
        //       activeLink.querySelector('i').classList.remove('active');
        //     });
        //     this.querySelector('i').classList.add('active');
        //   });
        // });
        this.router.navigate([link]);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 43, vars: 20, consts: [[1, "sideNav"], ["href", "#"], [1, "logo"], ["width", "38", "height", "45", "viewBox", "0 0 38 45", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["filter", "url(#filter0_d)"], ["d", "M7.31869 10.664C7.27069 10.376 7.24669 10.016 7.24669 9.584C7.24669 9.104 7.24669 8.576 7.24669 8C7.24669 6.704 7.15069 5.552 6.95869 4.544C6.76669 3.536 6.67069 2.816 6.67069 2.384C6.67069 1.568 7.46269 1.016 9.04669 0.727999C10.7267 0.439997 13.5587 0.295996 17.5427 0.295996H19.4867C27.4067 0.295996 32.3267 2.696 34.2467 7.496C34.5347 8.12 34.7267 8.816 34.8227 9.584C34.9667 10.352 35.0387 11.192 35.0387 12.104C35.0387 13.976 34.6787 15.656 33.9587 17.144C33.2387 18.584 32.1587 20.072 30.7187 21.608C29.2307 23.24 28.4867 24.512 28.4867 25.424C28.4867 25.952 28.7507 26.816 29.2787 28.016C29.8067 29.168 30.4307 30.392 31.1507 31.688C31.8707 32.984 32.5907 34.208 33.3107 35.36C34.0787 36.512 34.6787 37.304 35.1107 37.736C36.7907 39.512 37.6307 40.712 37.6307 41.336V41.912C37.6307 42.872 36.8627 43.352 35.3267 43.352H34.6067C33.1667 43.352 31.8707 42.752 30.7187 41.552C30.0467 40.88 28.6067 38.672 26.3987 34.928C25.2947 33.056 24.3827 31.592 23.6627 30.536C22.9907 29.432 22.3907 28.616 21.8627 28.088C21.3827 27.512 20.8787 27.152 20.3507 27.008C19.8707 26.864 19.2467 26.792 18.4787 26.792C16.9427 26.792 15.8627 27.416 15.2387 28.664C14.6627 29.864 14.3747 31.28 14.3747 32.912C14.3747 34.496 14.5187 35.984 14.8067 37.376C15.0947 38.72 15.2387 39.512 15.2387 39.752C15.2387 41 14.7347 41.912 13.7267 42.488C12.7667 43.016 11.5907 43.28 10.1987 43.28C8.75869 43.28 7.65469 42.992 6.88669 42.416C6.11869 41.84 5.73469 40.856 5.73469 39.464C5.73469 38.888 5.97469 38.096 6.45469 37.088C6.93469 36.08 7.24669 35.072 7.39069 34.064C7.43869 33.584 7.46269 32.816 7.46269 31.76C7.51069 30.704 7.53469 29.336 7.53469 27.656V18.872L7.46269 17.936V16.136L7.31869 10.664ZM16.8227 21.824H17.6147C20.8787 21.824 23.4707 21.08 25.3907 19.592C27.3107 18.056 28.2707 16.016 28.2707 13.472V11.96C28.2707 9.704 27.5267 7.928 26.0387 6.632C24.5987 5.288 22.5827 4.616 19.9907 4.616H18.9107L17.6147 4.76C16.7027 4.76 15.8867 4.904 15.1667 5.192C14.4947 5.48 14.1587 6.176 14.1587 7.28L14.0147 9.224V11.528L13.9427 12.392V18.512C13.9427 19.904 14.1107 20.816 14.4467 21.248C14.7827 21.632 15.5747 21.824 16.8227 21.824Z", "fill", "#FC766A"], ["id", "filter0_d", "x", "0.73468", "y", "0.296021", "width", "36.896", "height", "44.056", "filterUnits", "userSpaceOnUse", "color-interpolation-filters", "sRGB"], ["flood-opacity", "0", "result", "BackgroundImageFix"], ["in", "SourceAlpha", "type", "matrix", "values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"], ["dx", "-5", "dy", "1"], ["type", "matrix", "values", "0 0 0 0 0.356863 0 0 0 0 0.517647 0 0 0 0 0.694118 0 0 0 1 0"], ["mode", "normal", "in2", "BackgroundImageFix", "result", "effect1_dropShadow"], ["mode", "normal", "in", "SourceGraphic", "in2", "effect1_dropShadow", "result", "shape"], [1, "links"], [1, "unordered"], ["id", "0", "name", "Home"], ["routerLink", "/home"], [1, "fas", "fa-home", 3, "routerLinkActive", "routerLinkActiveOptions"], [1, "linkName"], ["id", "1", "name", "About Me"], ["routerLink", "/aboutme"], [1, "far", "fa-user", 3, "routerLinkActive", "routerLinkActiveOptions"], ["id", "2", "name", "Skills"], ["routerLink", "/skills"], [1, "far", "fa-keyboard", 3, "routerLinkActive", "routerLinkActiveOptions"], ["id", "3", "name", "Work"], ["routerLink", "/work"], [1, "far", "fa-save", 3, "routerLinkActive", "routerLinkActiveOptions"], ["id", "4", "name", "Contact Me"], ["routerLink", "/contactme"], [1, "far", "fa-envelope", 3, "routerLinkActive", "routerLinkActiveOptions"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "filter", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "feFlood", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "feColorMatrix", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "feOffset", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "feColorMatrix", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "feBlend", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "feBlend", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aboutme/aboutme.component */ "./src/app/aboutme/aboutme.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _contactme_contactme_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contactme/contactme.component */ "./src/app/contactme/contactme.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_5__["AboutmeComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__["SkillsComponent"],
        _contactme_contactme_component__WEBPACK_IMPORTED_MODULE_7__["ContactmeComponent"],
        _work_work_component__WEBPACK_IMPORTED_MODULE_8__["WorkComponent"],
        _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__["PagenotfoundComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_5__["AboutmeComponent"],
                    _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__["SkillsComponent"],
                    _contactme_contactme_component__WEBPACK_IMPORTED_MODULE_7__["ContactmeComponent"],
                    _work_work_component__WEBPACK_IMPORTED_MODULE_8__["WorkComponent"],
                    _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__["PagenotfoundComponent"],
                ],
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/contact.service.ts":
/*!************************************!*\
  !*** ./src/app/contact.service.ts ***!
  \************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ContactService {
    constructor(https) {
        this.https = https;
    }
    sendEmail(obj) {
        return this.https.post(' https://limitless-citadel-69513.herokuapp.com/sendmail', obj);
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contactme/contactme.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactme/contactme.component.ts ***!
  \**************************************************/
/*! exports provided: ContactmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactmeComponent", function() { return ContactmeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact.service */ "./src/app/contact.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/// <reference types="googlemaps" />
/// <reference types="googlemaps" />






class ContactmeComponent {
    constructor(contact) {
        this.contact = contact;
        this.contactMe = { name: '', subject: '', email: '', comment: '' };
        this.formTitle = {
            name: 'Required',
            email: 'Enter valid Email Address',
            subject: 'Required',
            comment: 'Min 3 characters',
        };
    }
    ngOnInit() {
        let body = document.querySelector('body');
        body.classList.remove('container');
        let title = document.querySelectorAll('.title span');
        let counter = 0, widthLoading = 0;
        let loaderWrapper = document.querySelector('.loader-wrapper');
        let loadingComplete = (document.querySelector('.loading-complete'));
        const animationArray = ['hideUp', 'hideDown', 'hideLeft', 'hideRight'];
        let percentage = document.createElement('div');
        percentage.classList.add('loading-percentage');
        loaderWrapper.appendChild(percentage);
        var interval = setInterval(() => {
            loadingComplete.style.width = widthLoading + '%';
            counter++;
            widthLoading++;
            percentage.innerHTML = counter - 1 + '%';
            if (counter == 101) {
                loaderWrapper.classList.add(animationArray[Math.floor(Math.random() * 4)]);
                clearInterval(interval);
            }
        }, 10);
        setTimeout(() => {
            let delay = 0;
            title.forEach((spanEle) => {
                spanEle.style.animation = `comeout 1s ease ${delay}s forwards`;
                delay += 0.05;
            });
        }, 2800);
        var markerPos = { lat: 12.9698, lng: 77.75 };
        12.9141;
        var uluru = { lat: 12.918, lng: 75.94 };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 7,
            center: uluru,
            mapTypeControl: false,
            // disableDefaultUI: true,
            styles: [
                { elementType: 'geometry', stylers: [{ color: '#a34d45' }] },
                {
                    elementType: 'labels.text.stroke',
                    stylers: [{ color: '#000000' }],
                },
                {
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#ffffff' }],
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{ color: '#282626' }],
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{ color: '#000000' }],
                },
            ],
        });
        const icon = './assets/images/map_marker.png';
        var marker = new google.maps.Marker({
            position: markerPos,
            map: map,
            title: 'My Residence!',
            icon: icon,
        });
        title.forEach((spanTag) => {
            spanTag.addEventListener('mouseover', () => {
                spanTag.style.opacity = '1';
                spanTag.style.animation = '';
                spanTag.classList.toggle('bounce');
            });
        });
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.contactMe.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.contactMe.email),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.contactMe.subject),
            comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.contactMe.comment, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
            ]),
        });
    }
    get name() {
        return this.contactForm.get('name');
    }
    get email() {
        return this.contactForm.get('email');
    }
    get subject() {
        return this.contactForm.get('subject');
    }
    get comment() {
        return this.contactForm.get('comments');
    }
    onSubmit() {
        this.contactMe.name = this.contactForm.value.name;
        this.contactMe.subject = this.contactForm.value.subject;
        this.contactMe.email = this.contactForm.value.email;
        this.contactMe.comment = this.contactForm.value.comments;
        // console.log(this.contactMe.email + ' Hello');
        this.subscription = this.contact.sendEmail(this.contactMe).subscribe((data) => {
            let msg = data['message'];
            // alert(msg);
            console.log('success');
            info.classList.remove('wait');
            info.classList.add('success');
            setTimeout(function () {
                info.classList.remove('success');
            }, 3000);
        }, (error) => {
            console.error(error, 'error');
            info.classList.add('error');
            setTimeout(function () {
                info.classList.remove('error');
            }, 3000);
        });
        this.contactForm.reset();
        let info = document.querySelector('.info');
        info.classList.add('wait');
    }
    ngOnDestroy() {
        let body = document.querySelector('body');
        body.classList.add('container');
    }
}
ContactmeComponent.ɵfac = function ContactmeComponent_Factory(t) { return new (t || ContactmeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"])); };
ContactmeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactmeComponent, selectors: [["app-contactme"]], decls: 56, vars: 10, consts: [[1, "loader-wrapper"], [1, "loading-logo"], [1, "loading-text"], [1, "loading-bar"], [1, "loading-complete"], [1, "circles"], [1, "contact-page-section"], [1, "contact-form"], [1, "upend"], [1, "title"], [1, "contactme"], [1, "contact"], [1, "me"], [1, "downend"], [1, "form"], ["name", "contact", "id", "contactForms", 1, "col-10", 3, "formGroup", "ngSubmit"], ["type", "text", "placeholder", "Name", "formControlName", "name", "required", "", 1, "form-element", "name", 3, "ngClass", "title"], ["type", "email", "placeholder", "Email", "email", "true", "formControlName", "email", "required", "", 1, "form-element", "email", 3, "ngClass", "title"], ["type", "text", "placeholder", "Subject", "formControlName", "subject", "required", "", 1, "form-element", "subject", 3, "ngClass", "title"], ["placeholder", "Comment", "minlength", "3", "formControlName", "comments", "required", "", 1, "form-element", "comment", 3, "ngClass", "title"], ["type", "submit", "value", "Send", 1, "submit", 3, "disabled"], [1, "info"], [1, "endHTML"], [1, "contact-map"], ["id", "map"]], template: function ContactmeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading your Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "<end>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "c");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "</end>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactmeComponent_Template_form_ngSubmit_44_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "</html>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.formTitle.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched) ? "wrong" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.formTitle.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.email.invalid && (ctx.email.dirty || ctx.email.touched) ? "wrong" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.formTitle.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.subject.invalid && (ctx.subject.dirty || ctx.subject.touched) ? "wrong" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.formTitle.comment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.comment.invalid && (ctx.comment.dirty || ctx.comment.touched) ? "wrong" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.contactForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"]], styles: [".contact-page-section[_ngcontent-%COMP%] {\n  height: 100vh;\n  padding: 0 0 0 100px;\n}\n\n.contact-form[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  flex-grow: 1;\n  margin: auto auto;\n  margin-left: 10%;\n}\n\n.title[_ngcontent-%COMP%]   .contactme[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 3vw;\n  opacity: 1;\n}\n\n.contact[_ngcontent-%COMP%] {\n  display: inline;\n  color: #fc766a;\n}\n\n.me[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.upend[_ngcontent-%COMP%], .downend[_ngcontent-%COMP%], .endHTML[_ngcontent-%COMP%] {\n  color: #585858;\n  opacity: 1;\n  font-size: 1vw;\n  font-family: \"Vibur\", cursive;\n}\n\n.endHTML[_ngcontent-%COMP%] {\n  position: relative;\n  left: -10%;\n  margin-top: 5%;\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  height: auto;\n  margin-top: 20px;\n  overflow: hidden;\n  justify-content: flex-start;\n  align-items: center;\n  align-content: center;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-bottom: 1px solid #5fa8d3;\n  transition: all 0.1s ease;\n  transform: border-bottom;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid, .form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:valid {\n  border-bottom: 1px solid #fc766aec;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 40%;\n  padding: 15px;\n  margin: 10px 1px;\n  background: #585858;\n  border: none;\n  outline: none;\n  \n  font-size: 1vw;\n}\n\n.form[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin-right: 6%;\n}\n\n.form[_ngcontent-%COMP%]   .subject[_ngcontent-%COMP%] {\n  width: 86%;\n}\n\n.form[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%] {\n  width: 86%;\n  height: 160px;\n}\n\n.contact-map[_ngcontent-%COMP%] {\n  width: 50%;\n  background: #282626;\n}\n\n.submit[_ngcontent-%COMP%] {\n  position: relative;\n  left: 37%;\n  cursor: pointer;\n  width: -webkit-max-content;\n  width: max-content;\n  height: 11%;\n  padding: 10px 20px;\n  color: #fc766a;\n  background-color: transparent;\n  \n}\n\n.submit[_ngcontent-%COMP%]:hover:enabled {\n  background-color: #585858;\n  cursor: pointer;\n}\n\n.submit[_ngcontent-%COMP%]:enabled {\n  border: 0.5px solid #fc766a;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  pointer-events: none;\n  color: #585858;\n  background-color: transparent;\n  border: 0.5px solid transparent;\n}\n\n#map[_ngcontent-%COMP%] {\n  height: 100%; \n  width: 100%; \n}\n\n.info[_ngcontent-%COMP%] {\n  content: \"success\";\n  position: absolute;\n  height: 7vh;\n  width: -webkit-max-content;\n  width: max-content;\n  padding: 10px;\n  left: 7%;\n  top: 8%;\n  display: grid;\n  place-items: center;\n  visibility: hidden;\n}\n\n.success[_ngcontent-%COMP%] {\n  background-color: green;\n  visibility: visible;\n}\n\n.success[_ngcontent-%COMP%]::before {\n  content: \"Sent!\";\n}\n\n.error[_ngcontent-%COMP%] {\n  visibility: visible;\n  background-color: red;\n}\n\n.error[_ngcontent-%COMP%]::before {\n  content: \"Failed\";\n}\n\n.wait[_ngcontent-%COMP%] {\n  visibility: visible;\n  background-color: #1d1b1b;\n  color: #fc766a;\n}\n\n.wait[_ngcontent-%COMP%]::before {\n  content: \"Sending...\";\n}\n\n.wrong[_ngcontent-%COMP%] {\n  border-left: 4px solid red !important;\n  border-radius: 2px;\n  transition: border-left 0.3s ease-in;\n}\n\n@media (min-width: 380px) and (max-width: 1024px) {\n  .contact-form[_ngcontent-%COMP%] {\n    height: 100vh;\n    width: 100vw;\n    margin-left: 0;\n    justify-content: center;\n    margin: 0 auto;\n    flex-grow: 0;\n  }\n\n  .upend[_ngcontent-%COMP%], .downend[_ngcontent-%COMP%], .endHTML[_ngcontent-%COMP%] {\n    visibility: hidden;\n    display: none;\n  }\n  .form[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%] {\n    height: 10vw;\n  }\n  .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 2vw;\n  }\n  .form[_ngcontent-%COMP%] {\n    overflow: visible;\n    margin-left: 5%;\n  }\n  .contact-map[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .submit[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 10%;\n    left: 45%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdG1lL2NvbnRhY3RtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOzs7RUFHRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGNBQWM7RUFDZCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLGdDQUFnQztFQUNoQyx5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFLGtDQUFrQztBQUNwQzs7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxlQUFlO0VBQ2YsMEJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLDZCQUE2QjtFQUM3QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxZQUFZLEVBQUUsNkJBQTZCO0VBQzNDLFdBQVcsRUFBRSwyQ0FBMkM7QUFDMUQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCwwQkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixRQUFRO0VBQ1IsT0FBTztFQUNQLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxZQUFZO0VBQ2Q7O0VBRUE7OztJQUdFLGtCQUFrQjtJQUNsQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBOztJQUVFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztFQUNYO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0bWUvY29udGFjdG1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC1wYWdlLXNlY3Rpb24ge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAwIDAgMCAxMDBweDtcbn1cblxuLmNvbnRhY3QtZm9ybSB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZmxleC1ncm93OiAxO1xuICBtYXJnaW46IGF1dG8gYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLnRpdGxlIC5jb250YWN0bWUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogM3Z3O1xuICBvcGFjaXR5OiAxO1xufVxuXG4uY29udGFjdCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgY29sb3I6ICNmYzc2NmE7XG59XG5cbi5tZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnVwZW5kLFxuLmRvd25lbmQsXG4uZW5kSFRNTCB7XG4gIGNvbG9yOiAjNTg1ODU4O1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDF2dztcbiAgZm9udC1mYW1pbHk6IFwiVmlidXJcIiwgY3Vyc2l2ZTtcbn1cblxuLmVuZEhUTUwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xMCU7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4uZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZvcm0gaW5wdXQ6Zm9jdXMsXG4uZm9ybSB0ZXh0YXJlYTpmb2N1cyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNWZhOGQzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlO1xuICB0cmFuc2Zvcm06IGJvcmRlci1ib3R0b207XG59XG5cbi5mb3JtIGlucHV0OnZhbGlkLFxuLmZvcm0gdGV4dGFyZWE6dmFsaWQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZjNzY2YWVjO1xufVxuXG4uZm9ybSBpbnB1dCxcbi5mb3JtIHRleHRhcmVhIHtcbiAgd2lkdGg6IDQwJTtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAxMHB4IDFweDtcbiAgYmFja2dyb3VuZDogIzU4NTg1ODtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICAvKiBmb250LWZhbWlseTogXCJWaWJ1clwiLCBjdXJzaXZlOyAqL1xuICBmb250LXNpemU6IDF2dztcbn1cblxuLmZvcm0gLm5hbWUge1xuICBtYXJnaW4tcmlnaHQ6IDYlO1xufVxuXG4uZm9ybSAuc3ViamVjdCB7XG4gIHdpZHRoOiA4NiU7XG59XG5cbi5mb3JtIC5jb21tZW50IHtcbiAgd2lkdGg6IDg2JTtcbiAgaGVpZ2h0OiAxNjBweDtcbn1cblxuLmNvbnRhY3QtbWFwIHtcbiAgd2lkdGg6IDUwJTtcbiAgYmFja2dyb3VuZDogIzI4MjYyNjtcbn1cblxuLnN1Ym1pdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMzclO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgaGVpZ2h0OiAxMSU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgY29sb3I6ICNmYzc2NmE7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsgKi9cbn1cblxuLnN1Ym1pdDpob3ZlcjplbmFibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4NTg1ODtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3VibWl0OmVuYWJsZWQge1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNmYzc2NmE7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjb2xvcjogIzU4NTg1ODtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMC41cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbiNtYXAge1xuICBoZWlnaHQ6IDEwMCU7IC8qIFRoZSBoZWlnaHQgaXMgNDAwIHBpeGVscyAqL1xuICB3aWR0aDogMTAwJTsgLyogVGhlIHdpZHRoIGlzIHRoZSB3aWR0aCBvZiB0aGUgd2ViIHBhZ2UgKi9cbn1cblxuLmluZm8ge1xuICBjb250ZW50OiBcInN1Y2Nlc3NcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDd2aDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBwYWRkaW5nOiAxMHB4O1xuICBsZWZ0OiA3JTtcbiAgdG9wOiA4JTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uc3VjY2Vzczo6YmVmb3JlIHtcbiAgY29udGVudDogXCJTZW50IVwiO1xufVxuXG4uZXJyb3Ige1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5lcnJvcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJGYWlsZWRcIjtcbn1cblxuLndhaXQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxYjFiO1xuICBjb2xvcjogI2ZjNzY2YTtcbn1cblxuLndhaXQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiU2VuZGluZy4uLlwiO1xufVxuXG4ud3Jvbmcge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRyYW5zaXRpb246IGJvcmRlci1sZWZ0IDAuM3MgZWFzZS1pbjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDM4MHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5jb250YWN0LWZvcm0ge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZsZXgtZ3JvdzogMDtcbiAgfVxuXG4gIC51cGVuZCxcbiAgLmRvd25lbmQsXG4gIC5lbmRIVE1MIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuZm9ybSAuY29tbWVudCB7XG4gICAgaGVpZ2h0OiAxMHZ3O1xuICB9XG4gIC5mb3JtIGlucHV0LFxuICAuZm9ybSB0ZXh0YXJlYSB7XG4gICAgZm9udC1zaXplOiAydnc7XG4gIH1cbiAgLmZvcm0ge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgfVxuICAuY29udGFjdC1tYXAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnN1Ym1pdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTAlO1xuICAgIGxlZnQ6IDQ1JTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactmeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contactme',
                templateUrl: './contactme.component.html',
                styleUrls: ['./contactme.component.css'],
            }]
    }], function () { return [{ type: _contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/compiler/src/util */ "./node_modules/@angular/compiler/src/util.js");
/* harmony import */ var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_1__);



class HomeComponent {
    constructor() { }
    ngOnInit() {
        let frontR = document.querySelector('.frontR');
        let backR = document.querySelector('.backR');
        let logoRimg = document.querySelector('.imgR');
        let title = document.querySelectorAll('.title span');
        let skillsLandingPage = (document.querySelector('.title .subtitle'));
        let counter = 0, widthLoading = 0;
        let loaderWrapper = document.querySelector('.loader-wrapper');
        let loadingComplete = (document.querySelector('.loading-complete'));
        const animationArray = ['hideUp', 'hideDown', 'hideLeft', 'hideRight'];
        let percentage = document.createElement('div');
        percentage.classList.add('loading-percentage');
        loaderWrapper.appendChild(percentage);
        var interval = setInterval(() => {
            loadingComplete.style.width = widthLoading + '%';
            counter++;
            widthLoading++;
            percentage.innerHTML = counter - 1 + '%';
            if (counter == 101) {
                loaderWrapper.classList.add(animationArray[Math.floor(Math.random() * 4)]);
                clearInterval(interval);
            }
        }, 10);
        //Related -> Big R Logo Animation
        setTimeout(() => {
            frontR.classList.add('animateFront');
            backR.classList.add('animateBack');
        }, 800);
        setTimeout(() => {
            frontR.classList.add('fillFront');
            backR.classList.add('fillBack');
        }, 1400);
        setTimeout(fading, 3000, loaderWrapper);
        setTimeout(() => {
            let delay = 0;
            title.forEach((spanEle) => {
                spanEle.style.animation = `comeout 1s ease ${delay}s forwards`;
                delay += 0.05;
            });
            skillsLandingPage.style.opacity = '1';
        }, 2000);
        function fading(loaderWrapper) {
            var increment = 0.019;
            var opacity = 0;
            var instance = window.setInterval(function () {
                logoRimg.style.opacity = Object(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_1__["stringify"])(opacity);
                opacity = opacity + increment;
                if (opacity >= 1) {
                    window.clearInterval(instance);
                }
                loaderWrapper.innerHTML = '';
            }, 20);
        }
        title.forEach((spanTag) => {
            spanTag.addEventListener('mouseover', () => {
                spanTag.style.opacity = '1';
                spanTag.style.animation = '';
                spanTag.classList.toggle('bounce');
            });
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 94, vars: 0, consts: [[1, "loader-wrapper"], [1, "loading-logo"], [1, "loading-text"], [1, "loading-bar"], [1, "loading-complete"], [1, "circles"], [1, "home-main-section"], [1, "intro-section"], [1, "uphtml"], [1, "upintro"], [1, "title"], [1, "hi"], [1, "myName"], [1, "Rtitle"], [1, "sftDevp"], [1, "subtitle"], [1, "downintro"], [1, "downbody"], [1, "bigR"], [1, "imageWrapper"], [1, "rlogo"], [1, "imgR"], ["viewBox", "0 0 454 544", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "svgR"], ["d", "M103.505 111.912C103.831 108.688 104.625 104.761 105.887 100.13C107.29 94.9846 108.833 89.3245 110.516 83.1497C114.303 69.2566 116.637 56.6354 117.52 45.2862C118.402 33.937 119.474 25.9469 120.737 21.3159C123.121 12.5683 133.244 8.89239 151.105 10.2881C169.997 11.9554 200.847 18.4268 243.653 29.7023L264.541 35.2042C349.638 57.6193 395.489 97.2719 402.093 154.162C403.365 161.666 403.394 169.671 402.181 178.176C401.484 186.816 399.804 196.025 397.139 205.801C391.669 225.869 382.892 242.86 370.808 256.774C358.864 270.173 342.912 283.068 322.952 295.458C302.195 308.742 290.484 320.272 287.819 330.049C286.276 335.709 286.588 345.718 288.755 360.077C291.062 373.92 294.19 388.808 298.14 404.739C302.089 420.67 306.249 435.829 310.619 450.216C315.504 464.739 319.637 474.927 323.016 480.781C335.878 504.574 341.397 519.816 339.574 526.505L337.891 532.68C335.086 542.971 325.431 545.943 308.927 541.596L301.191 539.558C285.719 535.483 273.547 525.383 264.676 509.258C259.419 500.153 250.398 472.407 237.614 426.022C231.222 402.83 225.701 384.555 221.05 371.197C217.056 357.46 212.993 347.014 208.863 339.86C205.388 332.326 201.025 327.041 195.773 324.003C191.036 321.101 184.542 318.563 176.29 316.389C159.786 312.042 146.359 315.675 136.007 327.287C126.312 338.521 119.08 352.886 114.311 370.381C109.683 387.361 106.882 403.72 105.909 419.457C105.077 434.68 104.31 443.578 103.608 446.151C99.9619 459.53 91.8817 467.88 79.3681 471.202C67.5105 474.145 54.1034 473.647 39.1469 469.707C23.6746 465.632 12.6541 459.42 6.08525 451.071C-0.483564 442.723 -1.73427 431.088 2.33311 416.165C4.01617 409.991 8.90907 402.18 17.0118 392.732C25.1146 383.285 31.4123 373.362 35.9049 362.964C37.8231 357.954 40.3251 349.789 43.4107 338.469C47.012 327.284 51.2672 312.687 56.1761 294.678L81.8427 200.513L83.804 190.275L89.0636 170.979L103.505 111.912ZM173.013 258.445L181.523 260.687C216.593 269.925 246.617 269.285 271.595 258.767C296.713 247.735 312.988 228.583 320.422 201.312L324.84 185.103C331.432 160.919 328.627 139.774 316.426 121.67C304.881 103.187 285.183 90.277 257.333 82.9411L245.729 79.8845L231.383 77.7603C221.584 75.1791 212.396 74.4134 203.818 75.463C195.756 76.6485 190.112 83.1587 186.887 94.9936L179.659 115.426L172.927 140.125L169.629 149.183L151.746 214.79C147.679 229.712 146.819 239.964 149.167 245.546C151.655 250.613 159.604 254.913 173.013 258.445Z", "fill", "#FC766A", 1, "frontR"], ["d", "M153.505 101.912C153.831 98.6884 154.625 94.7613 155.887 90.1303C157.29 84.9846 158.833 79.3245 160.516 73.1497C164.303 59.2566 166.637 46.6354 167.52 35.2862C168.402 23.937 169.474 15.9469 170.737 11.3159C173.121 2.56833 183.244 -1.10761 201.105 0.288058C219.997 1.95539 250.847 8.4268 293.653 19.7023L314.541 25.2042C399.638 47.6193 445.489 87.2719 452.093 144.162C453.365 151.666 453.394 159.671 452.181 168.176C451.484 176.816 449.804 186.025 447.139 195.801C441.669 215.869 432.892 232.86 420.808 246.774C408.864 260.173 392.912 273.068 372.952 285.458C352.195 298.742 340.484 310.272 337.819 320.049C336.276 325.709 336.588 335.718 338.755 350.077C341.062 363.92 344.19 378.808 348.14 394.739C352.089 410.67 356.249 425.829 360.619 440.216C365.504 454.739 369.637 464.927 373.016 470.781C385.878 494.574 391.397 509.816 389.574 516.505L387.891 522.68C385.086 532.971 375.431 535.943 358.927 531.596L351.191 529.558C335.719 525.483 323.547 515.383 314.676 499.258C309.419 490.153 300.398 462.407 287.614 416.022C281.222 392.83 275.701 374.555 271.05 361.197C267.056 347.46 262.993 337.014 258.863 329.86C255.388 322.326 251.025 317.041 245.773 314.003C241.036 311.101 234.542 308.563 226.29 306.389C209.786 302.042 196.359 305.675 186.007 317.287C176.312 328.521 169.08 342.886 164.311 360.381C159.683 377.361 156.882 393.72 155.909 409.457C155.077 424.68 154.31 433.578 153.608 436.151C149.962 449.53 141.882 457.88 129.368 461.202C117.51 464.145 104.103 463.647 89.1469 459.707C73.6746 455.632 62.6541 449.42 56.0852 441.071C49.5164 432.723 48.2657 421.088 52.3331 406.165C54.0162 399.991 58.9091 392.18 67.0118 382.732C75.1146 373.285 81.4123 363.362 85.9049 352.964C87.8232 347.954 90.3251 339.789 93.4107 328.469C97.012 317.284 101.267 302.687 106.176 284.678L131.843 190.513L133.804 180.275L139.064 160.979L153.505 101.912ZM223.013 248.445L231.523 250.687C266.593 259.925 296.617 259.285 321.595 248.767C346.713 237.735 362.988 218.583 370.422 191.312L374.84 175.103C381.432 150.919 378.627 129.774 366.426 111.67C354.881 93.1865 335.183 80.277 307.333 72.9411L295.729 69.8845L281.383 67.7603C271.584 65.1791 262.396 64.4134 253.818 65.463C245.756 66.6485 240.112 73.1587 236.887 84.9936L229.659 105.426L222.927 130.125L219.629 139.183L201.746 204.79C197.679 219.712 196.819 229.964 199.167 235.546C201.655 240.613 209.604 244.913 223.013 248.445Z", "fill", "#FC766A", 1, "backR"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading your Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "<html>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "<intro>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "I");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "m\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "h");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "l");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "f");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "w");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "r");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u00A0D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "v");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "l");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "r");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Python | CSS | HTML | Angular | C++");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "</intro>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "<body>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".uphtml[_ngcontent-%COMP%], .upintro[_ngcontent-%COMP%], .downintro[_ngcontent-%COMP%], .downbody[_ngcontent-%COMP%] {\n  color: #585858;\n  opacity: 1;\n  font-size: 1vw;\n  font-family: \"Vibur\", cursive;\n}\n\n.uphtml[_ngcontent-%COMP%], .downbody[_ngcontent-%COMP%] {\n  margin-left: -20%;\n}\n\n.upintro[_ngcontent-%COMP%] {\n  padding-bottom: 5%;\n  padding-top: 3%;\n  margin-left: -15%;\n}\n\n.downintro[_ngcontent-%COMP%] {\n  padding-top: 5%;\n  margin-left: -15%;\n  padding-bottom: 3%;\n}\n\n.intro-section[_ngcontent-%COMP%] {\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  \n  margin: auto auto;\n}\n\n.imageWrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n}\n\n.home-main-section[_ngcontent-%COMP%]   .rlogo[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  flex-grow: 1;\n  height: 51%;\n  width: 37%;\n  top: 10%;\n  transform: translateY(10%);\n}\n\n.imgR[_ngcontent-%COMP%] {\n  position: absolute;\n  background: url('r_final_cropped.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0;\n  height: 62vh;\n  width: 25vw;\n\n  min-width: 10vw;\n  min-height: 30vh;\n}\n\n.svgR[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 25vw;\n  height: 62vh;\n  display: flex;\n  flex-grow: 1;\n  min-width: 10vw;\n  min-height: 30vh;\n  \n}\n\n.frontR[_ngcontent-%COMP%] {\n  position: static;\n  fill: transparent;\n  stroke: #5b84b1;\n  z-index: 2;\n}\n\n.backR[_ngcontent-%COMP%] {\n  position: static;\n  fill: transparent;\n  stroke: #fc766a;\n  z-index: 0;\n}\n\n.animateFront[_ngcontent-%COMP%] {\n  stroke-dasharray: 2428px;\n  stroke-dashoffset: 2428px;\n  stroke: #4d4d4e;\n  stroke-width: 3;\n  animation: linejoin 4s ease forwards;\n  fill: transparent;\n}\n\n.animateBack[_ngcontent-%COMP%] {\n  fill: transparent;\n  stroke: #4d4d4e;\n  stroke-width: 3;\n  stroke-linecap: round;\n  stroke-dasharray: 2428px;\n  stroke-dashoffset: 2428px;\n  animation: linejoin 3s ease 1s forwards;\n}\n\n@keyframes linejoin {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n\n.fillFront[_ngcontent-%COMP%] {\n  stroke-width: 0;\n  transition: all 3s ease-out;\n}\n\n.fillBack[_ngcontent-%COMP%] {\n  stroke-width: 0;\n  transition: all 3s ease-out;\n}\n\n.Rtitle[_ngcontent-%COMP%] {\n  color: #fc766a;\n  text-shadow: -3px 0px 0px #5b84b1;\n}\n\n@media (min-width: 380px) and (max-width: 1024px) {\n  .uphtml[_ngcontent-%COMP%], .upintro[_ngcontent-%COMP%], .downintro[_ngcontent-%COMP%], .downbody[_ngcontent-%COMP%] {\n    visibility: hidden;\n    display: none;\n  }\n\n  .home-main-section[_ngcontent-%COMP%]   .rlogo[_ngcontent-%COMP%] {\n    top: 0;\n    \n    width: 100%;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .intro-section[_ngcontent-%COMP%] {\n    height: 50vh;\n    width: 100%;\n    align-items: center;\n    justify-content: flex-end;\n  }\n  .Rtitle[_ngcontent-%COMP%] {\n    text-shadow: -2px 0px 0px #5b84b1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFJRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGNBQWM7RUFDZCw2QkFBNkI7QUFDL0I7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLFFBQVE7RUFDUiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0NBQTBEO0VBQzFELHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVzs7RUFFWCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCO2FBQ1c7QUFDYjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0U7SUFDRSxvQkFBb0I7RUFDdEI7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFOzs7O0lBSUUsa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLE1BQU07SUFDTixpQkFBaUI7SUFDakIsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGlDQUFpQztFQUNuQztBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBodG1sLFxuLnVwaW50cm8sXG4uZG93bmludHJvLFxuLmRvd25ib2R5IHtcbiAgY29sb3I6ICM1ODU4NTg7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBmb250LWZhbWlseTogXCJWaWJ1clwiLCBjdXJzaXZlO1xufVxuXG4udXBodG1sLFxuLmRvd25ib2R5IHtcbiAgbWFyZ2luLWxlZnQ6IC0yMCU7XG59XG5cbi51cGludHJvIHtcbiAgcGFkZGluZy1ib3R0b206IDUlO1xuICBwYWRkaW5nLXRvcDogMyU7XG4gIG1hcmdpbi1sZWZ0OiAtMTUlO1xufVxuXG4uZG93bmludHJvIHtcbiAgcGFkZGluZy10b3A6IDUlO1xuICBtYXJnaW4tbGVmdDogLTE1JTtcbiAgcGFkZGluZy1ib3R0b206IDMlO1xufVxuXG4uaW50cm8tc2VjdGlvbiB7XG4gIHdpZHRoOiA3MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICBtYXJnaW46IGF1dG8gYXV0bztcbn1cblxuLmltYWdlV3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5ob21lLW1haW4tc2VjdGlvbiAucmxvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgaGVpZ2h0OiA1MSU7XG4gIHdpZHRoOiAzNyU7XG4gIHRvcDogMTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAlKTtcbn1cblxuLmltZ1Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvcl9maW5hbF9jcm9wcGVkLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIGhlaWdodDogNjJ2aDtcbiAgd2lkdGg6IDI1dnc7XG5cbiAgbWluLXdpZHRoOiAxMHZ3O1xuICBtaW4taGVpZ2h0OiAzMHZoO1xufVxuXG4uc3ZnUiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI1dnc7XG4gIGhlaWdodDogNjJ2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICBtaW4td2lkdGg6IDEwdnc7XG4gIG1pbi1oZWlnaHQ6IDMwdmg7XG4gIC8qIGxlZnQ6IDIycHg7XG4gIHRvcDogOXB4OyAqL1xufVxuLmZyb250UiB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGZpbGw6IHRyYW5zcGFyZW50O1xuICBzdHJva2U6ICM1Yjg0YjE7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5iYWNrUiB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGZpbGw6IHRyYW5zcGFyZW50O1xuICBzdHJva2U6ICNmYzc2NmE7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5hbmltYXRlRnJvbnQge1xuICBzdHJva2UtZGFzaGFycmF5OiAyNDI4cHg7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAyNDI4cHg7XG4gIHN0cm9rZTogIzRkNGQ0ZTtcbiAgc3Ryb2tlLXdpZHRoOiAzO1xuICBhbmltYXRpb246IGxpbmVqb2luIDRzIGVhc2UgZm9yd2FyZHM7XG4gIGZpbGw6IHRyYW5zcGFyZW50O1xufVxuXG4uYW5pbWF0ZUJhY2sge1xuICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgc3Ryb2tlOiAjNGQ0ZDRlO1xuICBzdHJva2Utd2lkdGg6IDM7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMjQyOHB4O1xuICBzdHJva2UtZGFzaG9mZnNldDogMjQyOHB4O1xuICBhbmltYXRpb246IGxpbmVqb2luIDNzIGVhc2UgMXMgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgbGluZWpvaW4ge1xuICB0byB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIH1cbn1cblxuLmZpbGxGcm9udCB7XG4gIHN0cm9rZS13aWR0aDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDNzIGVhc2Utb3V0O1xufVxuXG4uZmlsbEJhY2sge1xuICBzdHJva2Utd2lkdGg6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAzcyBlYXNlLW91dDtcbn1cblxuLlJ0aXRsZSB7XG4gIGNvbG9yOiAjZmM3NjZhO1xuICB0ZXh0LXNoYWRvdzogLTNweCAwcHggMHB4ICM1Yjg0YjE7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzODBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAudXBodG1sLFxuICAudXBpbnRybyxcbiAgLmRvd25pbnRybyxcbiAgLmRvd25ib2R5IHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5ob21lLW1haW4tc2VjdGlvbiAucmxvZ28ge1xuICAgIHRvcDogMDtcbiAgICAvKiBoZWlnaHQ6IDB2aDsgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmludHJvLXNlY3Rpb24ge1xuICAgIGhlaWdodDogNTB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbiAgLlJ0aXRsZSB7XG4gICAgdGV4dC1zaGFkb3c6IC0ycHggMHB4IDBweCAjNWI4NGIxO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PagenotfoundComponent {
    constructor() { }
    ngOnInit() {
        var sideNav = document.querySelector('.sideNav');
        sideNav.style.visibility = 'hidden';
    }
    ngOnDestroy() {
        var sideNav = document.querySelector('.sideNav');
        sideNav.style.visibility = 'visible';
    }
}
PagenotfoundComponent.ɵfac = function PagenotfoundComponent_Factory(t) { return new (t || PagenotfoundComponent)(); };
PagenotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagenotfoundComponent, selectors: [["app-pagenotfound"]], decls: 9, vars: 0, consts: [[1, "error-page-not-found"], [1, "loading-logo"], [1, "error-info"], [1, "error-redirect"], ["routerLink", "/home"]], template: function PagenotfoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No Such page yet exists!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Click ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " to Redirect to Home Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".error-page-not-found[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.error-info[_ngcontent-%COMP%] {\n  font-size: 3vw;\n  font-weight: bold;\n  color: aliceblue;\n}\n\n.error-redirect[_ngcontent-%COMP%] {\n  font-size: 1.5vw;\n  color: #585858;\n}\n\n.error-redirect[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  color: #fc766a;\n  text-decoration: none;\n}\n\n.error-redirect[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  animation: updown 0.2s ease-in-out infinite;\n  animation-direction: alternate;\n}\n\n@keyframes updown {\n  0% {\n    top: 0px;\n  }\n  100% {\n    top: -6px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZW5vdGZvdW5kL3BhZ2Vub3Rmb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRTtJQUNFLFFBQVE7RUFDVjtFQUNBO0lBQ0UsU0FBUztFQUNYO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlbm90Zm91bmQvcGFnZW5vdGZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItcGFnZS1ub3QtZm91bmQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmVycm9yLWluZm8ge1xuICBmb250LXNpemU6IDN2dztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBhbGljZWJsdWU7XG59XG5cbi5lcnJvci1yZWRpcmVjdCB7XG4gIGZvbnQtc2l6ZTogMS41dnc7XG4gIGNvbG9yOiAjNTg1ODU4O1xufVxuXG4uZXJyb3ItcmVkaXJlY3QgYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNmYzc2NmE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmVycm9yLXJlZGlyZWN0IGE6aG92ZXIge1xuICBhbmltYXRpb246IHVwZG93biAwLjJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG59XG5cbkBrZXlmcmFtZXMgdXBkb3duIHtcbiAgMCUge1xuICAgIHRvcDogMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogLTZweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagenotfoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pagenotfound',
                templateUrl: './pagenotfound.component.html',
                styleUrls: ['./pagenotfound.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SkillsComponent {
    constructor() { }
    ngOnInit() {
        let title = document.querySelectorAll('.title span');
        let infoForMouse = document.querySelector('.infoForMouse');
        let infoForZoom = document.querySelector('.infoForZoom');
        setTimeout(() => {
            infoForMouse.classList.add('fadeBar');
        }, 5000);
        setTimeout(() => {
            infoForZoom.classList.add('fadeBar');
        }, 6000);
        try {
            TagCanvas.Start('myCanvas', 'tags', {
                textColour: '#e7e7e7',
                outlineColour: 'transparent',
                reverse: true,
                depth: 0.8,
                maxSpeed: 0.05,
                minSpeed: 0.02,
                imageScale: 0.08,
                clickToFront: 1000,
                initial: [0.1, 0.1],
            });
        }
        catch (e) {
            // something went wrong, hide the canvas container
            document.getElementById('myCanvasContainer').style.display = 'none';
        }
        let counter = 0, widthLoading = 0;
        let loaderWrapper = document.querySelector('.loader-wrapper');
        let loadingComplete = (document.querySelector('.loading-complete'));
        const animationArray = ['hideUp', 'hideDown', 'hideLeft', 'hideRight'];
        let percentage = document.createElement('div');
        percentage.classList.add('loading-percentage');
        loaderWrapper.appendChild(percentage);
        var interval = setInterval(() => {
            loadingComplete.style.width = widthLoading + '%';
            counter++;
            widthLoading++;
            percentage.innerHTML = counter - 1 + '%';
            if (counter == 101) {
                loaderWrapper.classList.add(animationArray[Math.floor(Math.random() * 4)]);
                clearInterval(interval);
            }
        }, 10);
        setTimeout(() => {
            let delay = 0;
            title.forEach((spanEle) => {
                spanEle.style.animation = `comeout 1s ease ${delay}s forwards`;
                delay += 0.05;
            });
        }, 2000);
        title.forEach((spanTag) => {
            spanTag.addEventListener('mouseover', () => {
                spanTag.style.opacity = '1';
                spanTag.style.animation = '';
                spanTag.classList.toggle('bounce');
            });
        });
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 110, vars: 0, consts: [[1, "loader-wrapper"], [1, "loading-logo"], [1, "loading-text"], [1, "loading-bar"], [1, "loading-complete"], [1, "circles"], [1, "infoForMouse"], [1, "infoForZoom"], [1, "home-main-section", "skills-main-section"], [1, "title", "skillssection"], [1, "upskill"], [1, "uph1skill"], [1, "skill"], [1, "downh1skill"], [1, "description"], [1, "downskill"], [1, "bigR"], ["id", "myCanvasContainer"], ["width", "300", "height", "300", "id", "myCanvas"], ["id", "tags"], ["href", "#", "target", "_blank"], ["href", "#"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading your Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "<skill>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "<h1>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "K");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "I");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "</h1>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum modi minus possimus nisi quod maxime ab ipsam illo quae, rerum reiciendis architecto ducimus sed repellat similique incidunt, illum quos placeat accusantium, ea laborum ex. Voluptatibus rerum neque architecto aperiam, voluptatem est exercitationem facilis iure voluptas earum fugiat quae eius quas adipisci, laboriosam, nesciunt non quibusdam. Quam nisi voluptatem, placeat porro reiciendis nostrum cupiditate pariatur dolor laudantium a necessitatibus mollitia dolores veritatis tenetur omnis, quasi alias incidunt facilis adipisci, sint totam? Ab non, quos tempora, nihil laudantium delectus facere alias, velit earum excepturi fugit. Facilis delectus similique incidunt eius molestias ea! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "</skill>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "canvas", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Anything in here will be replaced on browsers that support the canvas element ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "CRON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Django");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "C++");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "GIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Figma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "regex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Mongo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "SQLite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Heroku");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "AWS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Scraping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Linux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " #\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " #\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#myCanvasContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  margin-right: -270px;\n}\n\ncanvas[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-grow: 0.7;\n}\n\n.skillssection[_ngcontent-%COMP%] {\n  width: 20%;\n  line-height: 20px;\n  margin: auto;\n}\n\n.skill[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fc766a;\n  font-size: 4vw;\n  opacity: 1;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-size: 1vw;\n  line-height: 30px;\n}\n\n.upskill[_ngcontent-%COMP%], .downskill[_ngcontent-%COMP%], .uph1skill[_ngcontent-%COMP%], .downh1skill[_ngcontent-%COMP%] {\n  color: #585858;\n  opacity: 1;\n  font-size: 1vw;\n  font-family: \"Vibur\", cursive;\n}\n\n.uph1skill[_ngcontent-%COMP%] {\n  margin-bottom: 3%;\n}\n\n.upskill[_ngcontent-%COMP%] {\n  margin-bottom: 10%;\n  margin-left: -15%;\n}\n\n.downh1skill[_ngcontent-%COMP%] {\n  padding-bottom: 3%;\n}\n\n.downskill[_ngcontent-%COMP%] {\n  margin-left: -15%;\n  padding-bottom: 10%;\n}\n\n.infoForMouse[_ngcontent-%COMP%], .infoForZoom[_ngcontent-%COMP%] {\n  position: absolute;\n  width: -webkit-max-content;\n  width: max-content;\n  background-color: #1d1b1b7e;\n  height: 8vh;\n  display: grid;\n  place-items: center;\n  right: 0;\n}\n\n.infoForMouse[_ngcontent-%COMP%] {\n  bottom: 15%;\n}\n\n.infoForZoom[_ngcontent-%COMP%] {\n  bottom: 5%;\n}\n\n.infoForMouse[_ngcontent-%COMP%]::after {\n  content: \"Move Mouse to Control Speed\";\n  color: #fc766a79;\n  padding: 0px 15px;\n}\n\n.infoForZoom[_ngcontent-%COMP%]::after {\n  content: \"Zoom In/Out on Mouse Scroll\";\n  color: #fc766a79;\n  padding: 0px 16px;\n}\n\n@media (min-width: 380px) and (max-width: 1024px) {\n  .upskill[_ngcontent-%COMP%], .downskill[_ngcontent-%COMP%], .uph1skill[_ngcontent-%COMP%], .downh1skill[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n  .skillssection[_ngcontent-%COMP%] {\n    width: 100%;\n    line-height: 60px;\n  }\n  .skills-main-section[_ngcontent-%COMP%] {\n    padding: 0 66px;\n  }\n  .description[_ngcontent-%COMP%] {\n    font-size: 2vw;\n    line-height: 20px;\n  }\n  #myCanvasContainer[_ngcontent-%COMP%] {\n    margin-right: 0;\n    align-items: flex-start;\n  }\n  .infoForMouse[_ngcontent-%COMP%], .infoForZoom[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTs7OztFQUlFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsY0FBYztFQUNkLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQiwwQkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7Ozs7SUFJRSxhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsdUJBQXVCO0VBQ3pCO0VBQ0E7O0lBRUUsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI215Q2FudmFzQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luLXJpZ2h0OiAtMjcwcHg7XG59XG5cbmNhbnZhcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAwLjc7XG59XG5cbi5za2lsbHNzZWN0aW9uIHtcbiAgd2lkdGg6IDIwJTtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnNraWxsIHNwYW4ge1xuICBjb2xvcjogI2ZjNzY2YTtcbiAgZm9udC1zaXplOiA0dnc7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxuLnVwc2tpbGwsXG4uZG93bnNraWxsLFxuLnVwaDFza2lsbCxcbi5kb3duaDFza2lsbCB7XG4gIGNvbG9yOiAjNTg1ODU4O1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDF2dztcbiAgZm9udC1mYW1pbHk6IFwiVmlidXJcIiwgY3Vyc2l2ZTtcbn1cblxuLnVwaDFza2lsbCB7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xufVxuXG4udXBza2lsbCB7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xNSU7XG59XG5cbi5kb3duaDFza2lsbCB7XG4gIHBhZGRpbmctYm90dG9tOiAzJTtcbn1cblxuLmRvd25za2lsbCB7XG4gIG1hcmdpbi1sZWZ0OiAtMTUlO1xuICBwYWRkaW5nLWJvdHRvbTogMTAlO1xufVxuXG4uaW5mb0Zvck1vdXNlLFxuLmluZm9Gb3Jab29tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDFiMWI3ZTtcbiAgaGVpZ2h0OiA4dmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIHJpZ2h0OiAwO1xufVxuXG4uaW5mb0Zvck1vdXNlIHtcbiAgYm90dG9tOiAxNSU7XG59XG5cbi5pbmZvRm9yWm9vbSB7XG4gIGJvdHRvbTogNSU7XG59XG5cbi5pbmZvRm9yTW91c2U6OmFmdGVyIHtcbiAgY29udGVudDogXCJNb3ZlIE1vdXNlIHRvIENvbnRyb2wgU3BlZWRcIjtcbiAgY29sb3I6ICNmYzc2NmE3OTtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG5cbi5pbmZvRm9yWm9vbTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlpvb20gSW4vT3V0IG9uIE1vdXNlIFNjcm9sbFwiO1xuICBjb2xvcjogI2ZjNzY2YTc5O1xuICBwYWRkaW5nOiAwcHggMTZweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDM4MHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC51cHNraWxsLFxuICAuZG93bnNraWxsLFxuICAudXBoMXNraWxsLFxuICAuZG93bmgxc2tpbGwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG4gIC5za2lsbHNzZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgfVxuICAuc2tpbGxzLW1haW4tc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMCA2NnB4O1xuICB9XG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAydnc7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cbiAgI215Q2FudmFzQ29udGFpbmVyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgLmluZm9Gb3JNb3VzZSxcbiAgLmluZm9Gb3Jab29tIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/work/work.component.ts":
/*!****************************************!*\
  !*** ./src/app/work/work.component.ts ***!
  \****************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WorkComponent {
    constructor() { }
    ngOnInit() {
        let body = document.querySelector('body');
        let nav = document.querySelector('nav');
        let addParticle = document.querySelector('.addParticles');
        setTimeout(() => {
            console.log('Hi');
            addParticle.classList.add('fadeBar');
        }, 5000);
        if (!body.classList.contains('container-work')) {
            body.classList.add('container-work');
            nav.classList.add('work-nav');
        }
        let counter = 0, widthLoading = 0;
        let loaderWrapper = document.querySelector('.loader-wrapper');
        let loadingComplete = (document.querySelector('.loading-complete'));
        const animationArray = ['hideUp', 'hideDown', 'hideLeft', 'hideRight'];
        let percentage = document.createElement('div');
        percentage.classList.add('loading-percentage');
        loaderWrapper.appendChild(percentage);
        var interval = setInterval(() => {
            loadingComplete.style.width = widthLoading + '%';
            counter++;
            widthLoading++;
            percentage.innerHTML = counter - 1 + '%';
            if (counter == 101) {
                loaderWrapper.classList.add(animationArray[Math.floor(Math.random() * 4)]);
                clearInterval(interval);
            }
        }, 10);
        particlesJS.load('particles-js', '../assets/js/particles.json', function () {
            console.log('callback');
        });
        let wh = window.innerHeight, intro = document.querySelector('#intro'), first = document.querySelector('#first'), second = document.querySelector('#second'), third = document.querySelector('#third'), fourth = document.querySelector('#fourth'), circle = document.querySelector('.circle'), introCircle = document.querySelector('#intro .circle'), firstCircle = document.querySelector('#first .circle'), secondCircle = document.querySelector('#second .circle'), thirdCircle = document.querySelector('#third .circle'), fourthCircle = document.querySelector('#fourth .circle'), projectSection = document.querySelectorAll('.proj-section'), ropeCircleIntro = document.querySelector('.interval-0-intro div'), ropeCircle1 = document.querySelector('.interval-1-proj div'), ropeCircle2 = document.querySelector('.interval-2-proj div'), ropeCircle3 = document.querySelector('.interval-3-proj div'), ropeCircle4 = document.querySelector('.interval-4-proj div'), introTitle = document.querySelector('.intro-title'), firstTitle = document.querySelector('.first-title'), secondTitle = document.querySelector('.second-title'), thirdTitle = document.querySelector('.third-title'), fourthTitle = document.querySelector('.fourth-title'), man = document.querySelector('.man');
        // init
        var ctrl = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: 'onLeave',
            },
        });
        // Create scene
        projectSection.forEach((projs) => {
            new ScrollMagic.Scene({
                triggerElement: projs,
                duration: '20%',
            })
                .setPin(projs)
                .addTo(ctrl);
        });
        //Intro fade out, Proj 1 fade in
        var introToproj1 = new TimelineMax();
        introToproj1
            .to(introCircle, 5, {
            xPercent: -20,
            position: 'fixed',
            autoAlpha: 0,
            ease: Power4.easeInOut,
        })
            .to(introTitle, 2, {
            yPercent: -20,
            autoAlpha: 0,
            ease: Power4.easeInOut,
        }, 0)
            .to(man, 1, { left: '27.5%' }, 0)
            .to(ropeCircleIntro, 1, { className: '-=innerCircle' }, 0)
            .fromTo(firstCircle, 5, { scale: '0', autoAlpha: 0 }, {
            position: 'fixed',
            autoAlpha: 1,
            ease: Power4.easeInOut,
            scale: '1',
        }, 3)
            .fromTo(firstTitle, 5, { left: '40%', yPercent: +20, autoAlpha: 0 }, {
            yPercent: 0,
            position: 'fixed',
            autoAlpha: 1,
            ease: Power4.easeInOut,
        }, 3)
            .to(ropeCircle1, 1, { className: '+=innerCircle' }, 2);
        new ScrollMagic.Scene({
            triggerElement: intro[0],
            duration: '100%',
        })
            .setTween(introToproj1)
            .addTo(ctrl);
        //Proj 1 fade out, Proj 2 fade in
        var introToproj2 = new TimelineMax();
        introToproj2
            .to(firstCircle, 5, {
            autoAlpha: 0,
            yPercent: -20,
            ease: Power4.easeInOut,
        })
            .to(firstTitle, 2, {
            yPercent: -20,
            autoAlpha: 0,
            ease: Power4.easeInOut,
        }, 0)
            .to(man, 1, { left: '47.5%' }, 0)
            .to(ropeCircle1, 1, { className: '-=innerCircle' }, 0)
            .fromTo(secondCircle, 5, { autoAlpha: 0, scale: '0' }, { position: 'fixed', autoAlpha: 1, ease: Power4.easeInOut, scale: '1' }, 3)
            .fromTo(secondTitle, 5, { left: '60%', yPercent: +20, autoAlpha: 0 }, {
            yPercent: 0,
            position: 'fixed',
            autoAlpha: 1,
            ease: Power4.easeInOut,
        }, 3)
            .to(ropeCircle2, 1, { className: '+=innerCircle' }, 2);
        new ScrollMagic.Scene({
            triggerElement: first,
            duration: '100%',
        })
            .setTween(introToproj2)
            .addTo(ctrl);
        //Proj 2 fade out, Proj 3 fade in
        var introToproj3 = new TimelineMax();
        introToproj3
            .to(secondCircle, 5, {
            // yPercent: -10,
            xPercent: 20,
            autoAlpha: 0,
            ease: Power4.easeInOut,
        })
            .to(secondTitle, 2, {
            yPercent: -20,
            autoAlpha: 0,
            ease: Power4.easeInOut,
        }, 0)
            .to(man, 1, { left: '67.5%' }, 0)
            .to(ropeCircle2, 1, { className: '-=innerCircle' }, 0)
            .fromTo(thirdCircle, 5, { autoAlpha: 0, scale: '0' }, { position: 'fixed', autoAlpha: 1, ease: Power4.easeInOut, scale: '1' }, 3)
            .fromTo(thirdTitle, 5, { left: '60%', yPercent: +20, autoAlpha: 0 }, {
            yPercent: 0,
            position: 'fixed',
            autoAlpha: 1,
            ease: Power4.easeInOut,
        }, 3)
            .to(ropeCircle3, 1, { className: '+=innerCircle' }, 2);
        new ScrollMagic.Scene({
            triggerElement: second,
            duration: '100%',
        })
            .setTween(introToproj3)
            .addTo(ctrl);
        //Proj 3 fade out, Proj 4 fade in
        var introToproj4 = new TimelineMax();
        introToproj4
            .to(thirdCircle, 5, {
            autoAlpha: 0,
            // yPercent: -10,
            yPercent: 20,
            ease: Power4.easeInOut,
        })
            .to(thirdTitle, 2, {
            yPercent: -20,
            autoAlpha: 0,
            ease: Power4.easeInOut,
        }, 0)
            .to(man, 1, { left: '87.5%' }, 0)
            .to(ropeCircle3, 1, { className: '-=innerCircle' }, 0)
            .fromTo(fourthCircle, 5, { autoAlpha: 0, scale: '0' }, { position: 'fixed', autoAlpha: 1, ease: Power4.easeInOut, scale: '1' }, 3)
            .fromTo(fourthTitle, 5, { left: '80%', yPercent: +20, autoAlpha: 0 }, {
            yPercent: 0,
            position: 'fixed',
            autoAlpha: 1,
            ease: Power4.easeInOut,
        }, 3)
            .to(ropeCircle4, 1, { className: '+=innerCircle' }, 2);
        new ScrollMagic.Scene({
            triggerElement: third,
            duration: '100%',
        })
            .setTween(introToproj4)
            .addTo(ctrl);
        // window.event
    }
    ngOnDestroy() {
        let nav = document.querySelector('nav');
        let body = document.querySelector('body');
        body.classList.remove('container-work');
        nav.classList.remove('work-nav');
        window.scrollTo(0, 0);
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(); };
WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["app-work"]], decls: 59, vars: 0, consts: [[1, "loader-wrapper"], [1, "loading-logo"], [1, "loading-text"], [1, "loading-bar"], [1, "loading-complete"], ["id", "particles-js"], [1, "addParticles"], [2, "z-index", "1"], [1, "climbingman"], [1, "rope"], [1, "proj-circle-interval"], ["href", "#intro", "data-proj", "0", 1, "interval-0-intro"], [1, "innerCircle"], ["href", "#first", "data-proj", "1", 1, "interval-1-proj"], ["href", "#second", "data-proj", "2", 1, "interval-2-proj"], ["href", "#third", "data-proj", "3", 1, "interval-3-proj"], ["href", "#fourth", "data-proj", "4", 1, "interval-4-proj"], [1, "man"], ["id", "intro"], [1, "title-proj", "intro-title"], ["id", "intro", 1, "proj", "proj-section"], [1, "circle", "activeCircle"], [1, "proj-desc"], [1, "proj-image"], ["id", "first"], [1, "title-proj", "first-title"], ["data-index", "first", "id", "first", 1, "proj-section", "proj", "first"], [1, "circle"], ["id", "second"], [1, "title-proj", "second-title"], ["data-index", "second", "id", "second", 1, "proj-section", "proj", "second"], ["id", "third"], [1, "title-proj", "third-title"], ["data-index", "third", "id", "third", 1, "proj-section", "proj", "third"], ["id", "fourth"], [1, "title-proj", "fourth-title"], ["data-index", "fourth", "id", "fourth", 1, "proj-section", "proj", "fourth"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading your Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Intro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Intro Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos excepturi laboriosam nam adipisci aspernatur, voluptatem vel, amet sit nulla iusto ipsam. Vero, molestias, praesentium dolor ducimus officiis sunt veniam doloribus eius excepturi nisi explicabo sed neque aperiam. Sed, autem quos ea doloremque laborum voluptates fugit dolorem blanditiis. Inventore, error temporibus! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "section", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "First");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " First Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos excepturi laboriosam nam adipisci aspernatur, voluptatem vel, amet sit nulla iusto ipsam. Vero, molestias, praesentium dolor ducimus officiis sunt veniam doloribus eius excepturi nisi explicabo sed neque aperiam. Sed, autem quos ea doloremque laborum voluptates fugit dolorem blanditiis. Inventore, error temporibus! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "section", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Second");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Second Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos excepturi laboriosam nam adipisci aspernatur, voluptatem vel, amet sit nulla iusto ipsam. Vero, molestias, praesentium dolor ducimus officiis sunt veniam doloribus eius excepturi nisi explicabo sed neque aperiam. Sed, autem quos ea doloremque laborum voluptates fugit dolorem blanditiis. Inventore, error temporibus! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "section", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Third");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Third Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos excepturi laboriosam nam adipisci aspernatur, voluptatem vel, amet sit nulla iusto ipsam. Vero, molestias, praesentium dolor ducimus officiis sunt veniam doloribus eius excepturi nisi explicabo sed neque aperiam. Sed, autem quos ea doloremque laborum voluptates fugit dolorem blanditiis. Inventore, error temporibus! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "section", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Fourth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Fourth Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos excepturi laboriosam nam adipisci aspernatur, voluptatem vel, amet sit nulla iusto ipsam. Vero, molestias, praesentium dolor ducimus officiis sunt veniam doloribus eius excepturi nisi explicabo sed neque aperiam. Sed, autem quos ea doloremque laborum voluptates fugit dolorem blanditiis. Inventore, error temporibus! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#particles-js[_ngcontent-%COMP%] {\n  margin-left: -10%;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n\n.addParticles[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0%;\n  bottom: 5%;\n  \n  height: 8vh;\n  display: grid;\n  place-items: center;\n  background: #1d1b1b7e;\n}\n\n.addParticles[_ngcontent-%COMP%]::after {\n  content: \"Click anywhere to add particles \";\n  color: #fc766a79;\n  padding: 0px 15px;\n}\n\n.fadeBar[_ngcontent-%COMP%] {\n  transform: translateY(-15px);\n  opacity: 0;\n  transition: all 0.5s ease-out;\n}\n\n.work-nav[_ngcontent-%COMP%] {\n  position: fixed;\n}\n\n.climbingman[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0%;\n  top: 14%;\n  \n}\n\n.rope[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 0px;\n  border: 2px solid #000000;\n}\n\n.proj-circle-interval[_ngcontent-%COMP%] {\n  position: relative;\n  top: -10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.interval-0-intro[_ngcontent-%COMP%], .interval-1-proj[_ngcontent-%COMP%], .interval-2-proj[_ngcontent-%COMP%], .interval-3-proj[_ngcontent-%COMP%], .interval-4-proj[_ngcontent-%COMP%] {\n  position: relative;\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  background: #282626;\n  border: 2px solid tomato;\n  z-index: 3;\n  display: grid;\n  place-items: center;\n}\n\n.innerCircle[_ngcontent-%COMP%] {\n  height: 6px;\n  width: 6px;\n  border-radius: 3px;\n  background: #5b84b1;\n}\n\n.man[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 7.5%;\n  margin-top: 12px;\n  width: 6%;\n  height: 20%;\n  background: url('zipline.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  transition: all 1s ease;\n}\n\nsection#intro[_ngcontent-%COMP%], section#first[_ngcontent-%COMP%], section#second[_ngcontent-%COMP%], section#third[_ngcontent-%COMP%], section#fourth[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n\n.circle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 55%;\n  left: 48%;\n  transform: translate(-50%, -50%);\n  height: auto;\n  width: 28%;\n  border-radius: 50%;\n  padding-bottom: 28%;\n  background: #fc766a31;\n  box-shadow: 0px 14px 10px rgba(0, 0, 0, 0.4);\n  opacity: 0;\n  display: flex;\n  place-items: center;\n  z-index: 2;\n  flex-direction: row;\n  flex-grow: 1;\n  justify-content: center;\n  align-content: center;\n}\n\n.activeCircle[_ngcontent-%COMP%] {\n  position: fixed;\n  opacity: 1;\n  visibility: visible;\n  top: 61%;\n  left: 50%;\n}\n\n.proj-desc[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 35%;\n  z-index: 3;\n  width: 70%;\n  margin: 0 auto;\n  color: white;\n  text-align: left;\n  opacity: 1;\n  font-size: 0.8vw;\n}\n\n.title-proj[_ngcontent-%COMP%] {\n  position: fixed;\n  color: #fc766a;\n  font-size: 4vw;\n  opacity: 0;\n  top: 20%;\n  z-index: 1;\n}\n\n.intro-title[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n@media (min-width: 380px) and (max-width: 1024px) {\n  .circle[_ngcontent-%COMP%] {\n    width: 60%;\n    padding-bottom: 60%;\n  }\n  .proj-desc[_ngcontent-%COMP%] {\n    font-size: 1.8vw;\n  }\n  #particles-js[_ngcontent-%COMP%] {\n    width: 110%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay93b3JrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLFVBQVU7RUFDViw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixRQUFRO0VBQ1IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBOzs7OztFQUtFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFdBQVc7RUFDWCw4QkFBa0Q7RUFDbEQsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1Qix1QkFBdUI7QUFDekI7O0FBRUE7Ozs7O0VBS0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQiw0Q0FBNEM7RUFDNUMsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixVQUFVO0VBQ1YsY0FBYztFQUNkLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYztFQUNkLFVBQVU7RUFDVixRQUFRO0VBQ1IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvd29yay93b3JrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFydGljbGVzLWpzIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTtcbn1cblxuLmFkZFBhcnRpY2xlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDAlO1xuICBib3R0b206IDUlO1xuICAvKiB3aWR0aDogbWF4LWNvbnRlbnQ7ICovXG4gIGhlaWdodDogOHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMWQxYjFiN2U7XG59XG5cbi5hZGRQYXJ0aWNsZXM6OmFmdGVyIHtcbiAgY29udGVudDogXCJDbGljayBhbnl3aGVyZSB0byBhZGQgcGFydGljbGVzIFwiO1xuICBjb2xvcjogI2ZjNzY2YTc5O1xuICBwYWRkaW5nOiAwcHggMTVweDtcbn1cblxuLmZhZGVCYXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcbn1cblxuLndvcmstbmF2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4uY2xpbWJpbmdtYW4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDAlO1xuICB0b3A6IDE0JTtcbiAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cbn1cblxuLnJvcGUge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xufVxuXG4ucHJvai1jaXJjbGUtaW50ZXJ2YWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uaW50ZXJ2YWwtMC1pbnRybyxcbi5pbnRlcnZhbC0xLXByb2osXG4uaW50ZXJ2YWwtMi1wcm9qLFxuLmludGVydmFsLTMtcHJvaixcbi5pbnRlcnZhbC00LXByb2oge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMyODI2MjY7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRvbWF0bztcbiAgei1pbmRleDogMztcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cblxuLmlubmVyQ2lyY2xlIHtcbiAgaGVpZ2h0OiA2cHg7XG4gIHdpZHRoOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogIzViODRiMTtcbn1cblxuLm1hbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogNy41JTtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgd2lkdGg6IDYlO1xuICBoZWlnaHQ6IDIwJTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy96aXBsaW5lLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbn1cblxuc2VjdGlvbiNpbnRybyxcbnNlY3Rpb24jZmlyc3QsXG5zZWN0aW9uI3NlY29uZCxcbnNlY3Rpb24jdGhpcmQsXG5zZWN0aW9uI2ZvdXJ0aCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNpcmNsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1NSU7XG4gIGxlZnQ6IDQ4JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDI4JTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nLWJvdHRvbTogMjglO1xuICBiYWNrZ3JvdW5kOiAjZmM3NjZhMzE7XG4gIGJveC1zaGFkb3c6IDBweCAxNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBvcGFjaXR5OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LWdyb3c6IDE7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hY3RpdmVDaXJjbGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRvcDogNjElO1xuICBsZWZ0OiA1MCU7XG59XG5cbi5wcm9qLWRlc2Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzUlO1xuICB6LWluZGV4OiAzO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDAuOHZ3O1xufVxuXG4udGl0bGUtcHJvaiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgY29sb3I6ICNmYzc2NmE7XG4gIGZvbnQtc2l6ZTogNHZ3O1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IDIwJTtcbiAgei1pbmRleDogMTtcbn1cblxuLmludHJvLXRpdGxlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDM4MHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5jaXJjbGUge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgcGFkZGluZy1ib3R0b206IDYwJTtcbiAgfVxuICAucHJvai1kZXNjIHtcbiAgICBmb250LXNpemU6IDEuOHZ3O1xuICB9XG4gICNwYXJ0aWNsZXMtanMge1xuICAgIHdpZHRoOiAxMTAlO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-work',
                templateUrl: './work.component.html',
                styleUrls: ['./work.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rahilhastu/Desktop/practice/rahilhastu/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
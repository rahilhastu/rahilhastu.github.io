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




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal/personal.component */ "./src/app/personal/personal.component.ts");



class AppComponent {
    constructor() {
        this.title = 'rahilhastu';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-personal");
    } }, directives: [_personal_personal_component__WEBPACK_IMPORTED_MODULE_1__["PersonalComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./personal/personal.component */ "./src/app/personal/personal.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact.service */ "./src/app/contact.service.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _contact_service__WEBPACK_IMPORTED_MODULE_10__["ContactService"]
    ], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyCzbhcSfbpSGAm5sauoAbG1nCpscdyZpsw'
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _personal_personal_component__WEBPACK_IMPORTED_MODULE_4__["PersonalComponent"],
        _work_work_component__WEBPACK_IMPORTED_MODULE_5__["WorkComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _personal_personal_component__WEBPACK_IMPORTED_MODULE_4__["PersonalComponent"],
                    _work_work_component__WEBPACK_IMPORTED_MODULE_5__["WorkComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
                ],
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                        apiKey: 'AIzaSyCzbhcSfbpSGAm5sauoAbG1nCpscdyZpsw'
                    }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                ],
                providers: [
                    _contact_service__WEBPACK_IMPORTED_MODULE_10__["ContactService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
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
        console.log(obj);
        return this.https.post(' https://limitless-citadel-69513.herokuapp.com/sendmail', obj);
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_personaldetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/personaldetails */ "./src/assets/personaldetails.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact.service */ "./src/app/contact.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function ContactComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_25_div_1_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.name.errors.required);
} }
function ContactComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " EmailId is Invalid. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Minimum 4 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ContactComponent {
    constructor(contact) {
        this.contact = contact;
        this.fname = "";
        this.details = _assets_personaldetails__WEBPACK_IMPORTED_MODULE_1__["p_details"];
        this.lat = 12.9847110611;
        this.lng = 77.7348603939;
        this.zoom = 15;
        this.contactMe = { firstName: '', lastName: '', email: '', comment: '' };
    }
    ngOnInit() {
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.contactMe.firstName, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.contactMe.lastName),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.contactMe.email),
            comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.contactMe.comment, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)
            ])
        });
    }
    get name() { return this.contactForm.get('name'); }
    get emailId() { return this.contactForm.get('emailId'); }
    get comments() { return this.contactForm.get('comments'); }
    onSubmit() {
        this.contactMe.firstName = this.contactForm.value.name;
        this.contactMe.lastName = this.contactForm.value.lastName;
        this.contactMe.email = this.contactForm.value.emailId;
        this.contactMe.comment = this.contactForm.value.comments;
        // console.log(JSON.stringify(this.contactMe));
        this.subscription = this.contact.sendEmail(this.contactMe).
            subscribe(data => {
            let msg = data['message'];
            // alert(msg);
            // console.log(data, "success");
            x.className = x.className.replace("wait", "");
            x.className = "success";
            setTimeout(function () { x.className = x.className.replace("success", ""); }, 3000);
        }, error => {
            console.error(error, "error");
            x.className = "error1";
            setTimeout(function () { x.className = x.className.replace("error1", ""); }, 3000);
        });
        this.contactForm.reset();
        var x = document.getElementById("snackbar");
        x.className = "wait";
        // setTimeout(function(){ x.className = x.className.replace("wait", ""); }, 3000);
    }
    openContact() {
        var leftPane = document.getElementById("mySidenavLeft");
        leftPane.style.width = "50%";
        leftPane.style.borderRight = "2px solid #201d1d82";
        var rightPaneUp = document.getElementById("mySideNavRightUp");
        rightPaneUp.style.height = "50%";
        rightPaneUp.style.borderBottom = "2px solid #201d1d82";
        var rightPaneBottom = document.getElementById("mySideNavRightBottom");
        rightPaneBottom.style.height = "50%";
        document.getElementById("contactForm").style.display = "none";
    }
    closeNav() {
        var leftPane = document.getElementById("mySidenavLeft");
        leftPane.style.width = "0";
        leftPane.style.borderRight = "";
        var rightPaneUp = document.getElementById("mySideNavRightUp");
        rightPaneUp.style.height = "0";
        rightPaneUp.style.borderBottom = "";
        var rightPaneBottom = document.getElementById("mySideNavRightBottom");
        rightPaneBottom.style.height = "0";
        document.getElementById("contactForm").style.display = "block";
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 66, vars: 13, consts: [["id", "contactForm", 3, "click"], [1, "menuLines"], [1, "middleMenu"], ["id", "mySidenavLeft", 1, "sidenavLeft"], [1, "photo"], ["src", "../../assets/images/me.jpg", "alt", "me", 2, "width", "180px", "transform", "rotate(90deg)", "border-radius", "140px"], ["id", "mySideNavRightUp", 1, "sidenavRightUp"], [1, "closebtn", 3, "click"], ["href", "https://www.facebook.com/rahil.hastu", 1, "fa", "fa-facebook"], ["href", "https://www.linkedin.com/in/rahilhastu/", 1, "fa", "fa-linkedin"], [1, "row", "contactForm"], [1, "col-4", "contactMe"], ["name", "contact", "id", "contactForms", 1, "col-10", 3, "formGroup", "ngSubmit"], [1, "leftContactMe"], ["for", "name", 1, "fname"], ["id", "name", "formControlName", "name", "placeholder", "", "required", "", 1, "effect-1", 3, "ngClass"], [1, "focus-border"], ["class", "error alert alert-danger", 4, "ngIf"], [1, "lname"], ["id", "lname", "formControlName", "lastName"], [1, "rightContactMe"], [1, "emailid"], ["type", "email", "id", "emailid", "email", "true", "formControlName", "emailId", 3, "ngClass"], [1, "comments"], ["formControlName", "comments", "minlength", "4", "id", "comment", "rows", "3", "cols", "30", "placeholder", "Comments about the Website", "required", "", 2, "margin-top", "10px", 3, "ngClass"], ["type", "submit", "value", "Send", 1, "submitOn", 3, "disabled"], ["id", "snackbar"], ["id", "mySideNavRightBottom", 1, "sidenavRightBottom"], ["href", "https://stackoverflow.com/users/8811767/rahil-hastu", 1, "fa", "fa-stack-overflow"], ["href", "https://github.com/rahilhastu", 1, "fa", "fa-github"], [1, "map"], [1, "row", "personalDetails"], [1, "leftinfo"], [1, "rightinfo"], ["target", "_top", 3, "href"], [1, "error", "alert", "alert-danger"], [4, "ngIf"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_span_click_0_listener() { return ctx.openContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_a_click_8_listener() { return ctx.closeNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "contact me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_18_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ContactComponent_div_25_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Email Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ContactComponent_div_36_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "                        \n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ContactComponent_div_42_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ul", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ul", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Email ..... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched) ? "wrong" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.emailId.invalid && (ctx.emailId.dirty || ctx.emailId.touched) ? "wrong" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailId.invalid && (ctx.emailId.dirty || ctx.emailId.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.comments.invalid && (ctx.comments.dirty || ctx.comments.touched) ? "wrong" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comments.invalid && (ctx.comments.dirty || ctx.comments.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.contactForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Address ..... ", ctx.details[0].address, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Phone ..... ", ctx.details[0].phone, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx.details[0].email, "?Subject=Hello%20again", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details[0].email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Freelance ..... ", ctx.details[0].freelance, "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"]], styles: [".sidenavLeft[_ngcontent-%COMP%], .sidenavRightUp[_ngcontent-%COMP%], .sidenavRightBottom[_ngcontent-%COMP%] {\n    position: fixed;\n    \n    background-color: rgba(17, 17, 17, 0.973);\n    overflow: -moz-hidden-unscrollable;\n    transition: 0.5s;\n}\n\n.sidenavLeft[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 0;\n    left: 0;\n    top:0;\n}\n\n.sidenavRightUp[_ngcontent-%COMP%]{ \n    height:0;\n    top:0;\n    width: 50%;\n    right:0%;\n    \n}\n\n.sidenavRightBottom[_ngcontent-%COMP%]{\n    bottom:0;\n    right:0%;\n    height:0;\n    width: 50%;\n}\n\n.sidenavRightUp[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%], .sidenavRightBottom[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{\n    list-style: none;\n}\n\n.sidenavRightUp[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]{\n    position: absolute;\n    right: 25px;\n    font-size: 21px;\n    bottom:-10px;\n}\n\n.sidenavRightBottom[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]{\n    position: absolute;\n    right: 25px;\n    font-size: 21px;\n    top:5px;\n}\n\n.sidenavRightBottom[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]{\n    margin-top: 0 !important;\n}\n\n.sidenavRightUp[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\nposition: absolute;\ntop: 0;\nright: 25px;\nfont-size: 36px;\nmargin-left: 50px;\ncolor: azure;\n\n}\n\n.sidenavRightUp[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%]:hover {\n    color: rgb(59, 59, 236);\n    cursor: pointer;\n}\n\n.contactMe[_ngcontent-%COMP%]{\n    position: relative;\n    margin: 5% 0 4% 6%;\n    width: 40%;\n    text-transform: uppercase;\n    font-size: 40px;\n    color: #08f;\n}\n\n.contactForm[_ngcontent-%COMP%]{\n    height: 80%;\n}\n\n#contactForms[_ngcontent-%COMP%]{\n    position: relative;\n    bottom: 4px;\n    left: 85px;\n}\n\ninput[_ngcontent-%COMP%]{\n    width: 50%;\n    background: transparent;\n    border: none;\n    border: 0; \n    padding: 7px 0; \n    border-bottom: 1px solid #ccc;\n    color: white;\n}\n\ninput[_ngcontent-%COMP%]:focus{\n    animation: s 1s;border-bottom: 1px solid #08f;\n  }\n\n@keyframes s {\n    from {width: 0;}\n    to {width: 50%; border-bottom-color: #08f;}\n}\n\n\n\n\n\n.leftContactMe[_ngcontent-%COMP%]{\n    position: relative;\n    width: 50%;\n}\n\n.rightContactMe[_ngcontent-%COMP%]{\n    position: absolute;\n    left: 45%;\n    top: 0%;\n}\n\n.fname[_ngcontent-%COMP%], .lname[_ngcontent-%COMP%], .emailid[_ngcontent-%COMP%], .comments[_ngcontent-%COMP%]{\n    color: white;\n    margin-right: 28px;\n    padding-top: 10px;\n    \n}\n\n.emailid[_ngcontent-%COMP%]{\n    margin-right:49px;\n}\n\n.comments[_ngcontent-%COMP%]{\n    position: relative;\n    top: -32px;\n}\n\nbutton[_ngcontent-%COMP%]{\n    margin: 14% auto auto 40%;\n    width: 100px;\n    height: 34px;\n    border-radius: 2px;\n    background-color: #08f;\n    border-color: #08f;\n}\n\nbutton[_ngcontent-%COMP%]:disabled{\n    background-color: rgb(182, 179, 179);\n    border-color: rgb(182, 179, 179);\n    pointer-events: none;\n}\n\nbutton[_ngcontent-%COMP%]:hover{\n    color: wheat;\n    background-color: rgba(0, 195, 255, 0.788);\n    border-color: rgba(0, 195, 255, 0.788);\n}\n\n.error[_ngcontent-%COMP%]{\n    padding: 0 !important;\n    width: 210px;\n    left: 14%;\n    margin-top: 7px;\n}\n\n.wrong[_ngcontent-%COMP%]{\n    border-left:4px solid red;\n    border-radius: 2px;\n}\n\n.right[_ngcontent-%COMP%]{\n    border-left:4px solid yellowgreen;\n    border-radius: 2px;\n}\n\n.map[_ngcontent-%COMP%]{\n    position: relative;\n    margin: 1% auto auto 5%;\n    width:70%;\n    height:69%;\n}\n\nagm-map[_ngcontent-%COMP%] {\n    height: 300px;\n    display: block;\n   }\n\n.personalDetails[_ngcontent-%COMP%]{\n    list-style: none;\n    margin: 2% auto auto 3%;\n    color: #08f;\n}\n\n.personalDetails[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{\n    list-style: disclosure-closed;\n}\n\n.rightinfo[_ngcontent-%COMP%]{\n    margin-left: 20%;\n}\n\n.rightinfo[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   a[href][_ngcontent-%COMP%]{\n    color: yellow;\n}\n\n.rightinfo[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   a[href][_ngcontent-%COMP%]:hover{\n    color: tomato;\n}\n\n.photo[_ngcontent-%COMP%]{\n    height:50px;\n    width:50px;\n    margin: 10% 0 0 14%;\n}\n\n.menuLines[_ngcontent-%COMP%]{\n    height: 1px;\n    background-color: black;\n    margin: 6px 0;\n    background-image: linear-gradient(to right, rgb(8, 0, 249) , rgb(105, 80, 196));\n}\n\n.middleMenu[_ngcontent-%COMP%]{\n    height: 1px;\n    background-color: black;\n    margin: 9px 0 9px 0;\n    background-image: linear-gradient(to right, rgb(8, 0, 249) , rgb(105, 80, 196));\n}\n\n#contactForm[_ngcontent-%COMP%]{\n    cursor:pointer;\n    width: 35px;\n    display: block;\n}\n\n#contactForm[_ngcontent-%COMP%]:hover    > .middleMenu[_ngcontent-%COMP%]{\n    margin-left: 8px;\n}\n\n#snackbar[_ngcontent-%COMP%] {\n    visibility: hidden; \n    min-width: 125px;\n    margin-left: -125px; \n    background-color: rgb(13, 66, 123); \n    color: #fff; \n    text-align: center;\n    position: fixed;\n    border-radius: 2px; \n    padding: 16px; \n    z-index: 1;\n    left: 94%; \n    top: 5%; \n}\n\n#snackbar.success[_ngcontent-%COMP%] {\n    visibility: visible; \n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n\n#snackbar.success[_ngcontent-%COMP%]::before {\n    content: \"Success\";\n}\n\n#snackbar.error1[_ngcontent-%COMP%] {\n    visibility: visible; \n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\n    background-color: rgb(68, 2, 2);\n}\n\n#snackbar.error1[_ngcontent-%COMP%]::before {\n    content: \"Error\";\n}\n\n#snackbar.wait[_ngcontent-%COMP%]{\n    content: \"Wait\";\n    visibility: visible; \n    animation: fadein 1s;\n}\n\n#snackbar.wait[_ngcontent-%COMP%]::before{\n      content: \"Waiting...\";\n}\n\n@keyframes fadein {\n    from {top: 0; opacity: 0;}\n    to {top: 5%; opacity: 1;}\n  }\n\n@keyframes fadeout {\n    from {top: 5%; opacity: 1;}\n    to {top: 0; opacity: 0;}\n  }\n\n@media (min-width: 1281px){\n    .menuLines[_ngcontent-%COMP%]{\n        width: 35px;\n    }\n    .middleMenu[_ngcontent-%COMP%]{\n        width: 20px;\n    }\n}\n\n@media (min-width: 1025px) and (max-width: 1280px){\n    .menuLines[_ngcontent-%COMP%]{\n        width: 35px;\n    }\n    .middleMenu[_ngcontent-%COMP%]{\n        width: 20px;\n    }\n}\n\n@media (min-width: 768px) and (max-width: 1024px) {\n    .menuLines[_ngcontent-%COMP%]{\n        width: 35px;\n    }\n    .middleMenu[_ngcontent-%COMP%]{\n        width: 20px;\n    }\n\n    .sidenavLeft[_ngcontent-%COMP%], .sidenavRightUp[_ngcontent-%COMP%], .sidenavRightBottom[_ngcontent-%COMP%] {\n        display: none !important;\n    }\n}\n\n@media (min-width: 481px) and (max-width: 767px) {\n    .menuLines[_ngcontent-%COMP%]{\n        width: 30px;\n        margin: 6px 0 0 3px;\n    }\n    .middleMenu[_ngcontent-%COMP%]{\n        width: 15px;\n        margin: 6px 0 0 3px;\n    }\n    .sidenavLeft[_ngcontent-%COMP%], .sidenavRightUp[_ngcontent-%COMP%], .sidenavRightBottom[_ngcontent-%COMP%] {\n        display: none !important;\n    }\n}\n\n@media (min-width: 320px) and (max-width: 480px) {\n    .menuLines[_ngcontent-%COMP%]{\n        width: 25px;\n        margin: 6px 0 0 3px;\n    }\n    .middleMenu[_ngcontent-%COMP%]{\n        width: 10px;\n        margin: 6px 0 0 3px;\n    }\n    .sidenavLeft[_ngcontent-%COMP%], .sidenavRightUp[_ngcontent-%COMP%], .sidenavRightBottom[_ngcontent-%COMP%] {\n        display: none !important;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztJQUdJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUNBQXlDO0lBQ3pDLGtDQUFrQztJQUNsQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osUUFBUTtJQUNSLE9BQU87SUFDUCxLQUFLO0FBQ1Q7O0FBR0E7SUFDSSxRQUFRO0lBQ1IsS0FBSztJQUNMLFVBQVU7SUFDVixRQUFRO0lBQ1IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsT0FBTztBQUNYOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUdBO0FBQ0Esa0JBQWtCO0FBQ2xCLE1BQU07QUFDTixXQUFXO0FBQ1gsZUFBZTtBQUNmLGlCQUFpQjtBQUNqQixZQUFZO0FBQ1osZ0JBQWdCO0FBQ2hCOztBQUVFO0lBQ0UsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osU0FBUztJQUNULGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWUsQ0FBQyw2QkFBNkI7RUFDL0M7O0FBRUY7SUFDSSxNQUFNLFFBQVEsQ0FB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QUNKOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO0lBQ3ZCO0lBQ0E7OztRQUdJLHdCQUF3QjtJQUM1QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdkxlZnQsXG4uc2lkZW5hdlJpZ2h0VXAsIFxuLnNpZGVuYXZSaWdodEJvdHRvbSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIC8qIHotaW5kZXg6IDE7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNywgMTcsIDE3LCAwLjk3Myk7XG4gICAgb3ZlcmZsb3c6IC1tb3otaGlkZGVuLXVuc2Nyb2xsYWJsZTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uc2lkZW5hdkxlZnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDowO1xufVxuXG5cbi5zaWRlbmF2UmlnaHRVcHsgXG4gICAgaGVpZ2h0OjA7XG4gICAgdG9wOjA7XG4gICAgd2lkdGg6IDUwJTtcbiAgICByaWdodDowJTtcbiAgICAvKiB6LWluZGV4OjA7ICovXG59XG5cbi5zaWRlbmF2UmlnaHRCb3R0b217XG4gICAgYm90dG9tOjA7XG4gICAgcmlnaHQ6MCU7XG4gICAgaGVpZ2h0OjA7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLnNpZGVuYXZSaWdodFVwID4gdWwgPmxpLFxuLnNpZGVuYXZSaWdodEJvdHRvbSA+IHVsPiBsaXtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufSBcbi5zaWRlbmF2UmlnaHRVcCA+IHVse1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjVweDtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgYm90dG9tOi0xMHB4O1xufVxuLnNpZGVuYXZSaWdodEJvdHRvbSA+IHVse1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjVweDtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgdG9wOjVweDtcbn1cblxuLnNpZGVuYXZSaWdodEJvdHRvbSA+IHVse1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuICBcbi5zaWRlbmF2UmlnaHRVcCAuY2xvc2VidG4ge1xucG9zaXRpb246IGFic29sdXRlO1xudG9wOiAwO1xucmlnaHQ6IDI1cHg7XG5mb250LXNpemU6IDM2cHg7XG5tYXJnaW4tbGVmdDogNTBweDtcbmNvbG9yOiBhenVyZTtcbi8qIHotaW5kZXg6MjA7ICovXG59XG5cbiAgLnNpZGVuYXZSaWdodFVwIC5jbG9zZWJ0bjpob3ZlciB7XG4gICAgY29sb3I6IHJnYig1OSwgNTksIDIzNik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29udGFjdE1le1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDUlIDAgNCUgNiU7XG4gICAgd2lkdGg6IDQwJTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBjb2xvcjogIzA4Zjtcbn1cbi5jb250YWN0Rm9ybXtcbiAgICBoZWlnaHQ6IDgwJTtcbn1cbiNjb250YWN0Rm9ybXN7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogNHB4O1xuICAgIGxlZnQ6IDg1cHg7XG59XG5cbmlucHV0e1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlcjogMDsgXG4gICAgcGFkZGluZzogN3B4IDA7IFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW5wdXQ6Zm9jdXN7XG4gICAgYW5pbWF0aW9uOiBzIDFzO2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDhmO1xuICB9XG4gIFxuQGtleWZyYW1lcyBzIHtcbiAgICBmcm9tIHt3aWR0aDogMDt9XG4gICAgdG8ge3dpZHRoOiA1MCU7IGJvcmRlci1ib3R0b20tY29sb3I6ICMwOGY7fVxufSAgICBcblxuLyogLmVmZmVjdC0xIH4gLmZvY3VzLWJvcmRlcnsgYm90dG9tOiAwOyBsZWZ0OiAwOyB3aWR0aDogMDsgaGVpZ2h0OiAycHg7IGJhY2tncm91bmQtY29sb3I6ICMzMzk5RkY7IHRyYW5zaXRpb246IDAuNHM7fVxuLmVmZmVjdC0xOmZvY3VzIH4gLmZvY3VzLWJvcmRlcnt3aWR0aDogMTAwJTsgdHJhbnNpdGlvbjogMC40czt9ICovXG5cblxuLyogaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0LCBpbnB1dFt0eXBlPWVtYWlsXSB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBwYWRkaW5nOiAzcHggMnB4O1xuICAgIG1hcmdpbjogMTVweCAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufSAqL1xuXG4ubGVmdENvbnRhY3RNZXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLnJpZ2h0Q29udGFjdE1le1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA0NSU7XG4gICAgdG9wOiAwJTtcbn1cblxuLmZuYW1lLFxuLmxuYW1lLFxuLmVtYWlsaWQsXG4uY29tbWVudHN7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1yaWdodDogMjhweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBcbn1cblxuLmVtYWlsaWR7XG4gICAgbWFyZ2luLXJpZ2h0OjQ5cHg7XG59XG5cbi5jb21tZW50c3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMzJweDtcbn1cblxuYnV0dG9ue1xuICAgIG1hcmdpbjogMTQlIGF1dG8gYXV0byA0MCU7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMzRweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4ZjtcbiAgICBib3JkZXItY29sb3I6ICMwOGY7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgyLCAxNzksIDE3OSk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMTgyLCAxNzksIDE3OSk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbmJ1dHRvbjpob3ZlcntcbiAgICBjb2xvcjogd2hlYXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxOTUsIDI1NSwgMC43ODgpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAxOTUsIDI1NSwgMC43ODgpO1xufVxuXG4uZXJyb3J7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAyMTBweDtcbiAgICBsZWZ0OiAxNCU7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xufVxuXG4ud3Jvbmd7XG4gICAgYm9yZGVyLWxlZnQ6NHB4IHNvbGlkIHJlZDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5yaWdodHtcbiAgICBib3JkZXItbGVmdDo0cHggc29saWQgeWVsbG93Z3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4ubWFwe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDElIGF1dG8gYXV0byA1JTtcbiAgICB3aWR0aDo3MCU7XG4gICAgaGVpZ2h0OjY5JTtcbn1cblxuYWdtLW1hcCB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgIH1cblxuLnBlcnNvbmFsRGV0YWlsc3tcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMiUgYXV0byBhdXRvIDMlO1xuICAgIGNvbG9yOiAjMDhmO1xufVxuXG4ucGVyc29uYWxEZXRhaWxzPnVsPmxpe1xuICAgIGxpc3Qtc3R5bGU6IGRpc2Nsb3N1cmUtY2xvc2VkO1xufVxuXG4ucmlnaHRpbmZve1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG5cbi5yaWdodGluZm8gPiBsaSAgYVtocmVmXXtcbiAgICBjb2xvcjogeWVsbG93O1xufVxuLnJpZ2h0aW5mbyA+IGxpIGFbaHJlZl06aG92ZXJ7XG4gICAgY29sb3I6IHRvbWF0bztcbn1cblxuLnBob3Rve1xuICAgIGhlaWdodDo1MHB4O1xuICAgIHdpZHRoOjUwcHg7XG4gICAgbWFyZ2luOiAxMCUgMCAwIDE0JTtcbn1cblxuXG4ubWVudUxpbmVze1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbjogNnB4IDA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoOCwgMCwgMjQ5KSAsIHJnYigxMDUsIDgwLCAxOTYpKTtcbn1cblxuLm1pZGRsZU1lbnV7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luOiA5cHggMCA5cHggMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYig4LCAwLCAyNDkpICwgcmdiKDEwNSwgODAsIDE5NikpO1xufVxuXG4jY29udGFjdEZvcm17XG4gICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNjb250YWN0Rm9ybTpob3ZlciA+IC5taWRkbGVNZW51e1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbiNzbmFja2JhciB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuOyBcbiAgICBtaW4td2lkdGg6IDEyNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTI1cHg7IFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMywgNjYsIDEyMyk7IFxuICAgIGNvbG9yOiAjZmZmOyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDsgXG4gICAgcGFkZGluZzogMTZweDsgXG4gICAgei1pbmRleDogMTtcbiAgICBsZWZ0OiA5NCU7IFxuICAgIHRvcDogNSU7IFxufVxuICBcbiNzbmFja2Jhci5zdWNjZXNzIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyBcbiAgICBhbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcbn1cblxuI3NuYWNrYmFyLnN1Y2Nlc3M6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJTdWNjZXNzXCI7XG59XG5cbiNzbmFja2Jhci5lcnJvcjEge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7IFxuICAgIGFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2OCwgMiwgMik7XG59XG5cbiNzbmFja2Jhci5lcnJvcjE6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJFcnJvclwiO1xufVxuXG4jc25hY2tiYXIud2FpdHtcbiAgICBjb250ZW50OiBcIldhaXRcIjtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyBcbiAgICBhbmltYXRpb246IGZhZGVpbiAxcztcbn1cblxuI3NuYWNrYmFyLndhaXQ6OmJlZm9yZXtcbiAgICAgIGNvbnRlbnQ6IFwiV2FpdGluZy4uLlwiO1xufVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7dG9wOiAwOyBvcGFjaXR5OiAwO31cbiAgICB0byB7dG9wOiA1JTsgb3BhY2l0eTogMTt9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHt0b3A6IDA7IG9wYWNpdHk6IDA7fVxuICAgIHRvIHt0b3A6IDUlOyBvcGFjaXR5OiAxO31cbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVvdXQge1xuICAgIGZyb20ge3RvcDogNSU7IG9wYWNpdHk6IDE7fVxuICAgIHRvIHt0b3A6IDA7IG9wYWNpdHk6IDA7fVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGZhZGVvdXQge1xuICAgIGZyb20ge3RvcDogNSU7IG9wYWNpdHk6IDE7fVxuICAgIHRvIHt0b3A6IDA7IG9wYWNpdHk6IDA7fVxuICB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgxcHgpe1xuICAgIC5tZW51TGluZXN7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgIH1cbiAgICAubWlkZGxlTWVudXtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KXtcbiAgICAubWVudUxpbmVze1xuICAgICAgICB3aWR0aDogMzVweDtcbiAgICB9XG4gICAgLm1pZGRsZU1lbnV7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLm1lbnVMaW5lc3tcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgfVxuICAgIC5taWRkbGVNZW51e1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICB9XG5cbiAgICAuc2lkZW5hdkxlZnQsXG4gICAgLnNpZGVuYXZSaWdodFVwLCBcbiAgICAuc2lkZW5hdlJpZ2h0Qm90dG9tIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAubWVudUxpbmVze1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgbWFyZ2luOiA2cHggMCAwIDNweDtcbiAgICB9XG4gICAgLm1pZGRsZU1lbnV7XG4gICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICBtYXJnaW46IDZweCAwIDAgM3B4O1xuICAgIH1cbiAgICAuc2lkZW5hdkxlZnQsXG4gICAgLnNpZGVuYXZSaWdodFVwLCBcbiAgICAuc2lkZW5hdlJpZ2h0Qm90dG9tIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAubWVudUxpbmVze1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgbWFyZ2luOiA2cHggMCAwIDNweDtcbiAgICB9XG4gICAgLm1pZGRsZU1lbnV7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBtYXJnaW46IDZweCAwIDAgM3B4O1xuICAgIH1cbiAgICAuc2lkZW5hdkxlZnQsXG4gICAgLnNpZGVuYXZSaWdodFVwLCBcbiAgICAuc2lkZW5hdlJpZ2h0Qm90dG9tIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return [{ type: _contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/personal/personal.component.ts":
/*!************************************************!*\
  !*** ./src/app/personal/personal.component.ts ***!
  \************************************************/
/*! exports provided: PersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalComponent", function() { return PersonalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../work/work.component */ "./src/app/work/work.component.ts");




class PersonalComponent {
    constructor() { }
    ngOnInit() {
        fullpage('#fullpage', {
            licenseKey: 'EA26EC0D-13A84407-961F3DBD-832CEB96',
            anchors: ['homePage', 'work'],
        });
    }
}
PersonalComponent.ɵfac = function PersonalComponent_Factory(t) { return new (t || PersonalComponent)(); };
PersonalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonalComponent, selectors: [["app-personal"]], decls: 33, vars: 0, consts: [[1, "contact"], ["id", "fullpage", 1, "container-fluid", "hero-bkg-animated"], [1, "section", "fp-auto-height-responsive"], [1, "row"], [1, "offset-4", "col-5", "border_name", "border_name_m"], [1, "offset-3", "col-6"], [1, "offset-3", "col-6", "rotate"], [1, "txt-rotate"], [1, "d-inline-flex", "p-2", "sit_box"], [1, "d-flex", "p-2", "justify-content-center"], ["href", "#work"], [1, "next", "arrow"], [1, "line"], [1, "down-triangle"], [1, "bubble"], [1, "container-fluid", "section"]], template: function PersonalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Rahil Hastu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "I'm a 22 year old Computer Science engineer from India.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "I Love ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "See my Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_contact_contact_component__WEBPACK_IMPORTED_MODULE_1__["ContactComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_2__["WorkComponent"]], styles: [".hero-bkg-animated[_ngcontent-%COMP%] {\n      \n    background-color: #011832;\n    \n    text-align: center;\n    height: 100vh;\n    position: fixed;\n  }\n\n  .hero-bkg-animated[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    position: relative;\n    font-family: Palatino;\n    color: white;\n    font-size: 4vw;\n    font-weight: 100;\n    text-transform: uppercase;\n    letter-spacing: 13px;\n    box-sizing: content-box;\n    left:0%;\n  }\n\n  \n\n  @media (min-width: 1281px){\n    .hero-bkg-animated[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      margin-top: 10%;\n    }\n    .border_name[_ngcontent-%COMP%]{\n      margin: 9% 33.33% auto 36.33%;\n      width: 30vw;\n    }\n    .rotate[_ngcontent-%COMP%]{\n      font-size: 1vw;\n      margin-top: 42px;\n    }\n    .sit_box[_ngcontent-%COMP%]{\n      margin-top:210px;\n    }\n  }\n\n  \n\n  @media (min-width: 1025px) and (max-width: 1280px){    \n    .hero-bkg-animated[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      margin-top: 10%;\n    }\n    .border_name[_ngcontent-%COMP%]{\n      margin: 9% 33.33% auto 32%;\n    }\n    .rotate[_ngcontent-%COMP%]{\n      font-size: 2vw;\n      margin-top: 35px;\n      margin-left: 15%;\n      \n      flex: content;\n    }\n    .sit_box[_ngcontent-%COMP%]{\n      margin-top:2%;\n    }\n  }\n\n  \n\n  @media (min-width: 768px) and (max-width: 1024px) {\n    .hero-bkg-animated[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      margin-top: 7%;\n      max-width: -webkit-min-content;\n      max-width: min-content;\n      margin-left: 39%;\n    }\n    .border_name[_ngcontent-%COMP%]{\n      margin: 8% 33.33% auto 32%;\n    }\n  \n    .bubble[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){\n      display: none;\n    }\n    .bubble[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4){\n      display: none;\n    }\n    .bubble[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5){\n      display: none;\n    }\n    .bubble[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6){\n      display: none;\n    }\n    .rotate[_ngcontent-%COMP%]{\n      font-size: 2vw;\n      margin-top: 13px;\n      margin-left: 15%;\n      \n      flex: content;\n    }\n    .sit_box[_ngcontent-%COMP%]{\n      margin-top:2%;\n    }\n  }\n\n  \n\n  @media (min-width: 481px) and (max-width: 767px) {\n    .border_name[_ngcontent-%COMP%]{\n      margin: 17% 33.33% auto 32%;;\n    }\n    .hero-bkg-animated[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n      margin-top: 16%;\n      max-width: -webkit-min-content;\n      max-width: min-content;\n      margin-left: 36%;\n    }\n    \n    .bubble[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){\n      display: none;\n    }\n    .bubble[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4){\n      display: none;\n    }\n    .bubble[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5){\n      display: none;\n    }\n    .bubble[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6){\n      display: none;\n    }\n\n    .rotate[_ngcontent-%COMP%]{\n      font-size: 14px;\n      margin-top: 13px;\n      margin-left: 15%;\n      \n      flex: content;\n    }\n    .sit_box[_ngcontent-%COMP%]{\n      margin-top:2%;\n    }\n  }\n\n  \n\n  @media (min-width: 320px) and (max-width: 480px) {\n    .border_name[_ngcontent-%COMP%]{\n      margin-top: 3px;\n      width: 100%;\n      left: -10px;\n    }\n\n    .bubble[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){\n      display: none;\n    }\n    .bubble[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4){\n      display: none;\n    }\n    .bubble[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5){\n      display: none;\n    }\n    .bubble[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6){\n      display: none;\n    }\n    .rotate[_ngcontent-%COMP%]{\n      font-size: 14px;\n      margin-top: 30px;\n      margin-left: 15%;\n      \n      flex: content;\n    }\n    .sit_box[_ngcontent-%COMP%]{\n      margin-top:2%;\n    }\n\n  }\n\n  .border_name[_ngcontent-%COMP%]{\n      \n      position: absolute;\n      height: 7vw;\n      border: #3e4b805e 18px solid;\n  }\n\n  ul[_ngcontent-%COMP%]{\n    \n    list-style: disc;\n    list-style-position: inside;\n    z-index: -1;    \n  }\n\n  .bubble[_ngcontent-%COMP%]{\n    position: absolute;\n    top:0; \n    width: 100%;\n    height: 100%;\n}\n\n  .bubble[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n    position: absolute;\n    list-style: none;\n    display: block;\n    width: 200px;\n    height: 200px;\n    animation: slide 40s linear infinite;\n    background-color: rgba(76, 86, 210, 0.08);\n    top: -320px;\n  }\n\n  .bubble[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1){\n    left : 0%;\n    animation-delay: 8s;\n    animation-duration: 20s;\n  }\n\n  .bubble[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){\n    left : 10%;\n    animation-delay: 1s;\n  }\n\n  .bubble[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3){\n    left : 25%;\n    animation-delay: 27s;\n    -webkit-animation-delay: 27s;\n  }\n\n  .bubble[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4){\n    left : 40%;\n    animation-duration: 15s;\n    animation-delay: 10s;\n    -webkit-animation-delay: 10s;\n  }\n\n  .bubble[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5){\n    left : 60%;\n    animation-delay: 25s;\n    -webkit-animation-delay: 25s;\n  }\n\n  .bubble[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6){\n    left : 75%;\n    animation-duration: 20s;\n    animation-delay: 10s;\n    -webkit-animation-delay: 10s;\n  }\n\n  .bubble[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(7){\n    left : 85%;\n    animation-delay: 20s;\n    -webkit-animation-delay: 20s;\n  }\n\n  @keyframes slide {\n      0% { \n        top:100%;\n        -webkit-transform: rotate(0deg)\n      }\n      25% { top: 75%; \n        -webkit-transform: rotate(90deg)\n      }\n      50% { top: 50%; \n        -webkit-transform: rotate(180deg)\n      }\n      75% { top:25%;\n        -webkit-transform: rotate(270deg);\n      }\n      100% { top: 0%;\n        -webkit-transform: rotate(360deg);         \n      }\n  }\n\n  .rotate[_ngcontent-%COMP%]{\n      color: rgb(72, 80, 100);\n      font-family: Comic Sans MS ;\n      margin-left: 26%;\n  }\n\n  .next[_ngcontent-%COMP%]{\n      \n      \n      width: 40px;\n      height: 50px;\n      border: solid 1px #3e4b805e;\n      border-image: linear-gradient(to right, rgb(8, 0, 249) , rgb(105, 80, 196))1;\n}\n\n  .arrow[_ngcontent-%COMP%]{\n      \n  }\n\n  .arrow[_ngcontent-%COMP%]    > .line[_ngcontent-%COMP%]{\n    width: 1px;\n    height: 52px; \n    background-color: white;\n    margin: 18px;\n  }\n\n  .arrow[_ngcontent-%COMP%]    > .down-triangle[_ngcontent-%COMP%] {\n    width: 0;\n    height: 0;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    border-top: 15px solid white;\n    margin-left: 13px;\n    margin-top: -18px;\n}\n\n  .sit_box[_ngcontent-%COMP%]{\n    \n    font-size: 15px;\n    width: -webkit-max-content;\n    width: max-content;\n    color: rgb(72, 80, 100);\n    display: inline-block;\n    font-family: Comic Sans MS;\n    \n    }\n\n  .next[_ngcontent-%COMP%]:hover{\n    transform: scale(1.1);\n}\n\n  .container-fluid[_ngcontent-%COMP%]{\n  padding:0;\n}\n\n  #container[_ngcontent-%COMP%]{\n  perspective: 40px;\n}\n\n  .letter[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  float: left;\n  transform: translateZ(25px);\n  transform-origin: 50% 50% 25px;\n}\n\n  .letter.out[_ngcontent-%COMP%] {\n  transform: rotateX(90deg);\n  transition: transform 0.32s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n\n  .letter.behind[_ngcontent-%COMP%] { transform: rotateX(-90deg); }\n\n  .letter.in[_ngcontent-%COMP%] {\n  transform: rotateX(0deg);\n  transition: transform 0.38s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n  .contact[_ngcontent-%COMP%]{\n  position:fixed;\n  margin-top:1%;\n  margin-left:1%;\n  width: 20px;\n  height: 15px;\n  z-index:20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uYWwvcGVyc29uYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtNQUNJLDZGQUE2RjtJQUMvRix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsT0FBTztFQUNUOztFQUVBLHlDQUF5Qzs7RUFDekM7SUFDRTtNQUNFLGVBQWU7SUFDakI7SUFDQTtNQUNFLDZCQUE2QjtNQUM3QixXQUFXO0lBQ2I7SUFDQTtNQUNFLGNBQWM7TUFDZCxnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLGdCQUFnQjtJQUNsQjtFQUNGOztFQUVBLHNCQUFzQjs7RUFDdEI7SUFDRTtNQUNFLGVBQWU7SUFDakI7SUFDQTtNQUNFLDBCQUEwQjtJQUM1QjtJQUNBO01BQ0UsY0FBYztNQUNkLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsb0JBQW9CO01BQ3BCLGFBQWE7SUFDZjtJQUNBO01BQ0UsYUFBYTtJQUNmO0VBQ0Y7O0VBRUEscUJBQXFCOztFQUNyQjtJQUNFO01BQ0UsY0FBYztNQUNkLDhCQUFzQjtNQUF0QixzQkFBc0I7TUFDdEIsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSwwQkFBMEI7SUFDNUI7O0lBRUE7TUFDRSxhQUFhO0lBQ2Y7SUFDQTtNQUNFLGFBQWE7SUFDZjtJQUNBO01BQ0UsYUFBYTtJQUNmO0lBQ0E7TUFDRSxhQUFhO0lBQ2Y7SUFDQTtNQUNFLGNBQWM7TUFDZCxnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLG9CQUFvQjtNQUNwQixhQUFhO0lBQ2Y7SUFDQTtNQUNFLGFBQWE7SUFDZjtFQUNGOztFQUVBLG9CQUFvQjs7RUFDcEI7SUFDRTtNQUNFLDJCQUEyQjtJQUM3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QUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtFQUFrRTtBQUNwRTs7RUFFQSxpQkFBaUIsMEJBQTBCLEVBQUU7O0VBRTdDO0VBQ0Usd0JBQXdCO0VBQ3hCLG1FQUFtRTtBQUNyRTs7RUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvcGVyc29uYWwvcGVyc29uYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLmhlcm8tYmtnLWFuaW1hdGVkIHtcbiAgICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMwMTE4MzIgMCUsICMyODI4MmYgMTAwJSkgIWltcG9ydGFudDsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExODMyO1xuICAgIC8qIG1hcmdpbjogMDsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIH1cblxuICAuaGVyby1ia2ctYW5pbWF0ZWQgaDEge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LWZhbWlseTogUGFsYXRpbm87XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMTNweDtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICBsZWZ0OjAlO1xuICB9XG5cbiAgLyogMTI4MXB4IHRvIGhpZ2hlciByZXNvbHV0aW9uIGRlc2t0b3BzICovXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjgxcHgpe1xuICAgIC5oZXJvLWJrZy1hbmltYXRlZCBoMSB7XG4gICAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgfVxuICAgIC5ib3JkZXJfbmFtZXtcbiAgICAgIG1hcmdpbjogOSUgMzMuMzMlIGF1dG8gMzYuMzMlO1xuICAgICAgd2lkdGg6IDMwdnc7XG4gICAgfVxuICAgIC5yb3RhdGV7XG4gICAgICBmb250LXNpemU6IDF2dztcbiAgICAgIG1hcmdpbi10b3A6IDQycHg7XG4gICAgfVxuICAgIC5zaXRfYm94e1xuICAgICAgbWFyZ2luLXRvcDoyMTBweDtcbiAgICB9XG4gIH1cblxuICAvKiBMYXB0b3Agb3IgRGVza3RvcCAqL1xuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KXsgICAgXG4gICAgLmhlcm8tYmtnLWFuaW1hdGVkIGgxIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICB9XG4gICAgLmJvcmRlcl9uYW1le1xuICAgICAgbWFyZ2luOiA5JSAzMy4zMyUgYXV0byAzMiU7XG4gICAgfVxuICAgIC5yb3RhdGV7XG4gICAgICBmb250LXNpemU6IDJ2dztcbiAgICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTUlO1xuICAgICAgLyogbWF4LXdpZHRoOiA3NSU7ICovXG4gICAgICBmbGV4OiBjb250ZW50O1xuICAgIH1cbiAgICAuc2l0X2JveHtcbiAgICAgIG1hcmdpbi10b3A6MiU7XG4gICAgfVxuICB9XG5cbiAgLyogVGFibGV0cyBvciBJcGFkcyAqL1xuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuaGVyby1ia2ctYW5pbWF0ZWQgaDEge1xuICAgICAgbWFyZ2luLXRvcDogNyU7XG4gICAgICBtYXgtd2lkdGg6IG1pbi1jb250ZW50O1xuICAgICAgbWFyZ2luLWxlZnQ6IDM5JTtcbiAgICB9XG4gICAgLmJvcmRlcl9uYW1le1xuICAgICAgbWFyZ2luOiA4JSAzMy4zMyUgYXV0byAzMiU7XG4gICAgfVxuICBcbiAgICAuYnViYmxlIGxpOm50aC1jaGlsZCgyKXtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5idWJibGUgbGk6bnRoLWNoaWxkKDQpe1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmJ1YmJsZSBsaTpudGgtY2hpbGQoNSl7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuYnViYmxlIGxpOm50aC1jaGlsZCg2KXtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5yb3RhdGV7XG4gICAgICBmb250LXNpemU6IDJ2dztcbiAgICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTUlO1xuICAgICAgLyogbWF4LXdpZHRoOiA3NSU7ICovXG4gICAgICBmbGV4OiBjb250ZW50O1xuICAgIH1cbiAgICAuc2l0X2JveHtcbiAgICAgIG1hcmdpbi10b3A6MiU7XG4gICAgfVxuICB9XG5cbiAgLyogTG93IHJlcyB0YWJsZXRzICovXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmJvcmRlcl9uYW1le1xuICAgICAgbWFyZ2luOiAxNyUgMzMuMzMlIGF1dG8gMzIlOztcbiAgICB9XG4gICAgLmhlcm8tYmtnLWFuaW1hdGVkIGgxe1xuICAgICAgbWFyZ2luLXRvcDogMTYlO1xuICAgICAgbWF4LXdpZHRoOiBtaW4tY29udGVudDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAzNiU7XG4gICAgfVxuICAgIFxuICAgIC5idWJibGUgbGk6bnRoLWNoaWxkKDIpe1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmJ1YmJsZSBsaTpudGgtY2hpbGQoNCl7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuYnViYmxlIGxpOm50aC1jaGlsZCg1KXtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5idWJibGUgbGk6bnRoLWNoaWxkKDYpe1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAucm90YXRle1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNSU7XG4gICAgICAvKiBtYXgtd2lkdGg6IDc1JTsgKi9cbiAgICAgIGZsZXg6IGNvbnRlbnQ7XG4gICAgfVxuICAgIC5zaXRfYm94e1xuICAgICAgbWFyZ2luLXRvcDoyJTtcbiAgICB9XG4gIH1cbiAgICAvKiBNb2JpbGUgUGhvbmVzICovXG4gIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgLmJvcmRlcl9uYW1le1xuICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBsZWZ0OiAtMTBweDtcbiAgICB9XG5cbiAgICAuYnViYmxlIGxpOm50aC1jaGlsZCgyKXtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5idWJibGUgbGk6bnRoLWNoaWxkKDQpe1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmJ1YmJsZSBsaTpudGgtY2hpbGQoNSl7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuYnViYmxlIGxpOm50aC1jaGlsZCg2KXtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5yb3RhdGV7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgICAgIC8qIG1heC13aWR0aDogNzUlOyAqL1xuICAgICAgZmxleDogY29udGVudDtcbiAgICB9XG4gICAgLnNpdF9ib3h7XG4gICAgICBtYXJnaW4tdG9wOjIlO1xuICAgIH1cblxuICB9XG5cbiAgLmJvcmRlcl9uYW1le1xuICAgICAgLyogbWFyZ2luLXRvcDogMjQwcHg7ICovXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBoZWlnaHQ6IDd2dztcbiAgICAgIGJvcmRlcjogIzNlNGI4MDVlIDE4cHggc29saWQ7XG4gIH1cblxuICB1bHtcbiAgICAvKiBwb3NpdGlvbjphYnNvbHV0ZTsgKi9cbiAgICBsaXN0LXN0eWxlOiBkaXNjO1xuICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcbiAgICB6LWluZGV4OiAtMTsgICAgXG4gIH1cblxuICAuYnViYmxle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MDsgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufSAgXG5cbiAgLmJ1YmJsZSBsaXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBhbmltYXRpb246IHNsaWRlIDQwcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgODYsIDIxMCwgMC4wOCk7XG4gICAgdG9wOiAtMzIwcHg7XG4gIH1cblxuICAuYnViYmxlIGxpOm50aC1jaGlsZCgxKXtcbiAgICBsZWZ0IDogMCU7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDhzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogOHM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMHM7XG4gIH1cblxuICAuYnViYmxlIGxpOm50aC1jaGlsZCgyKXtcbiAgICBsZWZ0IDogMTAlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICB9XG5cbiAgLmJ1YmJsZSBsaTpudGgtY2hpbGQoMyl7XG4gICAgbGVmdCA6IDI1JTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDI3cztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMjdzO1xuICB9XG5cbiAgLmJ1YmJsZSBsaTpudGgtY2hpbGQoNCl7XG4gICAgbGVmdCA6IDQwJTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE1cztcbiAgICBhbmltYXRpb24tZGVsYXk6IDEwcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTBzO1xuICB9XG5cbiAgLmJ1YmJsZSBsaTpudGgtY2hpbGQoNSl7XG4gICAgbGVmdCA6IDYwJTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDI1cztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMjVzO1xuICB9XG5cbiAgLmJ1YmJsZSBsaTpudGgtY2hpbGQoNil7XG4gICAgbGVmdCA6IDc1JTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDIwcztcbiAgICBhbmltYXRpb24tZGVsYXk6IDEwcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTBzO1xuICB9XG5cbiAgLmJ1YmJsZSBsaTpudGgtY2hpbGQoNyl7XG4gICAgbGVmdCA6IDg1JTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDIwcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMjBzO1xuICB9XG5cbiAgQGtleWZyYW1lcyBzbGlkZSB7XG4gICAgICAwJSB7IFxuICAgICAgICB0b3A6MTAwJTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKVxuICAgICAgfVxuICAgICAgMjUlIHsgdG9wOiA3NSU7IFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKVxuICAgICAgfVxuICAgICAgNTAlIHsgdG9wOiA1MCU7IFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZylcbiAgICAgIH1cbiAgICAgIDc1JSB7IHRvcDoyNSU7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgICAgIH1cbiAgICAgIDEwMCUgeyB0b3A6IDAlO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7ICAgICAgICAgXG4gICAgICB9XG4gIH1cblxuICAucm90YXRle1xuICAgICAgY29sb3I6IHJnYig3MiwgODAsIDEwMCk7XG4gICAgICBmb250LWZhbWlseTogQ29taWMgU2FucyBNUyA7XG4gICAgICBtYXJnaW4tbGVmdDogMjYlO1xuICB9XG5cbiAgLm5leHR7XG4gICAgICAvKiBib3R0b206IDEyJTsgKi9cbiAgICAgIC8qIGxlZnQ6IDUwJTsgKi9cbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzNlNGI4MDVlO1xuICAgICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYig4LCAwLCAyNDkpICwgcmdiKDEwNSwgODAsIDE5NikpMTtcbn1cblxuICAuYXJyb3d7XG4gICAgICAvKiB0b3A6MzAlOyAqL1xuICB9XG5cbiAgLmFycm93ID4gLmxpbmV7XG4gICAgd2lkdGg6IDFweDtcbiAgICBoZWlnaHQ6IDUycHg7IFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMThweDtcbiAgfVxuXG5cbiAgLmFycm93ID4gLmRvd24tdHJpYW5nbGUge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3A6IDE1cHggc29saWQgd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDEzcHg7XG4gICAgbWFyZ2luLXRvcDogLTE4cHg7XG59XG5cbiAgLnNpdF9ib3h7XG4gICAgLyogdG9wOiAtNjklOyAqL1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB3aWR0aDogLXdlYmtpdC1tYXgtY29udGVudDtcbiAgICB3aWR0aDogLW1vei1tYXgtY29udGVudDtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgY29sb3I6IHJnYig3MiwgODAsIDEwMCk7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtZmFtaWx5OiBDb21pYyBTYW5zIE1TO1xuICAgIC8qIHJpZ2h0OiAtOTIlOyAqL1xuICAgIH1cblxuLm5leHQ6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uY29udGFpbmVyLWZsdWlke1xuICBwYWRkaW5nOjA7XG59XG5cbiNjb250YWluZXJ7XG4gIHBlcnNwZWN0aXZlOiA0MHB4O1xufVxuXG4ubGV0dGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMjVweCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCUgMjVweDtcbn1cblxuLmxldHRlci5vdXQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zMnMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG59XG5cbi5sZXR0ZXIuYmVoaW5kIHsgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZyk7IH1cblxuLmxldHRlci5pbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzhzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cblxuLmNvbnRhY3R7XG4gIHBvc2l0aW9uOmZpeGVkO1xuICBtYXJnaW4tdG9wOjElO1xuICBtYXJnaW4tbGVmdDoxJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMTVweDtcbiAgei1pbmRleDoyMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-personal',
                templateUrl: './personal.component.html',
                styleUrls: ['./personal.component.css']
            }]
    }], function () { return []; }, null); })();
var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};
TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    }
    else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    var that = this;
    var delta = 300 - Math.random() * 100;
    if (this.isDeleting) {
        delta /= 2;
    }
    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    }
    else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }
    setTimeout(function () {
        that.tick();
    }, delta);
};
window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = "[ \"C++.\", \"Python.\",\"Angular.\" ]";
        var period = 2000;
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #fff }";
    document.body.appendChild(css);
};


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
/* harmony import */ var _assets_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/projects */ "./src/assets/projects.ts");



class WorkComponent {
    // static selectedItem: string;
    constructor() {
        this.project = _assets_projects__WEBPACK_IMPORTED_MODULE_1__["products"];
        this.selectedItem = "";
    }
    ngOnInit() {
        this.selectedItem = "1";
    }
    ;
    listClick(event, newValue) {
        this.selectedItem = newValue; // don't forget to update the model here
    }
    windowMove(event) {
        var container = document.getElementById("container"), inner = document.getElementById("inner"), container2 = document.getElementById("container2"), inner2 = document.getElementById("inner2"), container3 = document.getElementById("container3"), inner3 = document.getElementById("inner3");
        // Mouse
        var mouse = {
            _x: 0,
            _y: 0,
            x: 0,
            y: 0,
            updatePosition: function (event) {
                var e = event || window.event;
                this.x = e.clientX - this._x;
                this.y = (e.clientY - this._y) * -1;
            },
            setOrigin: function (e) {
                this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
                this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
            },
            show: function () {
                return "(" + this.x + ", " + this.y + ")";
            }
        };
        // Track the mouse position relative to the center of the container.
        mouse.setOrigin(inner);
        mouse.setOrigin(inner2);
        mouse.setOrigin(inner3);
        //----------------------------------------------------
        var counter = 0;
        var refreshRate = 10;
        var isTimeToUpdate = function () {
            return counter++ % refreshRate === 0;
        };
        //----------------------------------------------------
        var onMouseEnterHandler = function (event) {
            update(event);
        };
        // var onMouseLeaveHandler = function() {
        //   inner.style.transform = "";
        // };
        var onMouseMoveHandler = function (event) {
            if (isTimeToUpdate()) {
                update(event);
            }
        };
        //----------------------------------------------------
        var update = function (event) {
            mouse.updatePosition(event);
            updateTransformStyle((mouse.y / inner.offsetHeight / 1.5).toFixed(2), (mouse.x / inner.offsetWidth / 1.5).toFixed(2), (mouse.y / inner.offsetWidth).toFixed(2));
        };
        var updateTransformStyle = function (x, y, z) {
            var style = "rotateX(" + x + "deg) rotateY(" + y + "deg) rotateZ(" + z + "deg)";
            inner.style.transform = style;
            inner.style.webkitTransform = style;
            inner2.style.transform = style;
            inner2.style.webkitTransform = style;
            inner3.style.transform = style;
            inner3.style.webkitTransform = style;
        };
        //--------------------------------------------------------
        container.onmousemove = onMouseMoveHandler;
        container.onmouseenter = onMouseEnterHandler;
        container2.onmousemove = onMouseMoveHandler;
        container2.onmouseenter = onMouseEnterHandler;
        container3.onmousemove = onMouseMoveHandler;
        container3.onmouseenter = onMouseEnterHandler;
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(); };
WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["app-work"]], decls: 80, vars: 18, consts: [[1, "fp-slides"], [1, "fp-slidescontainer"], [1, "slide", "fp-slide", "fp-table", "slide1"], [1, "contain"], [1, "mid"], [1, "project_number"], [1, "upon"], [1, "project_number_total"], ["id", "container", 3, "mouseenter"], ["id", "inner"], [1, "shapeTriangle"], [1, "right"], [1, "p-number"], [1, "title"], [1, "description"], [1, "tech"], [1, "slide", "fp-slide", "fp-table", "slide2"], ["id", "container2", 3, "mouseenter"], ["id", "inner2"], [1, "shapeCircle"], [1, "slide", "fp-slide", "fp-table", "slide3"], ["id", "container3", 3, "mouseenter"], ["id", "inner3"], [1, "shapeHexagon"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function WorkComponent_Template_div_mouseenter_10_listener($event) { return ctx.windowMove($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function WorkComponent_Template_div_mouseenter_36_listener($event) { return ctx.windowMove($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function WorkComponent_Template_div_mouseenter_62_listener($event) { return ctx.windowMove($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project[0].id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("0", ctx.project[0].id, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project[0].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project[0].description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Technologies Used: ", ctx.project[0].tech, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project[1].id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("0", ctx.project[1].id, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project[1].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project[1].description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Technologies Used: ", ctx.project[1].tech, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project[2].id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("0", ctx.project[2].id, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project[2].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project[2].description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Technologies Used: ", ctx.project[2].tech, "");
    } }, styles: ["@import url('https://fonts.googleapis.com/css?family=Fira+Code|Lemonada|Roboto+Slab|Rosario&display=swap');\n\n#inner[_ngcontent-%COMP%], #inner2[_ngcontent-%COMP%], #inner3[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    transition: transform 0.5s;\n    \n    -webkit-transition: transform 0.5s;\n}\n\n#container[_ngcontent-%COMP%], #container2[_ngcontent-%COMP%], #container3[_ngcontent-%COMP%]{\n    perspective: 40px;\n    height: 100%;\n}\n\nspan[_ngcontent-%COMP%]{\n    font-size: 80px;\n    margin: 50% 50%;\n}\n\n.background[_ngcontent-%COMP%]{\n    height: 100%;\n    background-color: rgb(29, 25, 20);\n}\n\n.fp-slidescontainer[_ngcontent-%COMP%]{\n    height:100%;\n}\n\n.slide1[_ngcontent-%COMP%]{\n    background-color: #e5d8e6;\n    \n    background-image: url('p1a.png');\n    \n    background-position: bottom;\n    background-repeat: no-repeat;\n    height: 900px;\n    \n    \n    color: rgb(5, 5, 5);\n}\n\n.slide2[_ngcontent-%COMP%]{\n    background-color: #619ce9;   \n    \n    background-image: url('p2.jpg');\n    background-position: top;\n}\n\n.slide3[_ngcontent-%COMP%]{\n    background-color: #ffffff; \n    \n    background-image: url('p3a.jpg');\n    background-size: cover;\n    background-position: center;\n    \n}\n\n.fp-slidesNav.fp-bottom[_ngcontent-%COMP%]{\n    top: 40%;\n    right: 0px;\n    display: inline-block;\n    width: 54px;\n    \n}\n\n.fp-next[_ngcontent-%COMP%]{\n        display: none;\n}\n\n.contain[_ngcontent-%COMP%]{\n    width:33.33%;\n    height: 100%;\n    position: absolute;   \n}\n\n.left[_ngcontent-%COMP%]{\n    height: 100%;\n    position: absolute;\n    width: 50%;\n}\n\n.right[_ngcontent-%COMP%]{\n    height: 100%;\n    position: absolute;\n    width: 50%;\n    left:50%;\n}\n\n.borderr[_ngcontent-%COMP%]{\n    border-right: 1px solid rgb(42, 65, 33);\n    position: absolute;\n    height: 68%;\n    width: 50%;\n    top: 15%;\n}\n\n.mid[_ngcontent-%COMP%]{\n    margin: 18% 0 0 3%;\n    position: absolute;\n    font-size: 40px;\n    \n}\n\n.upon[_ngcontent-%COMP%]{\n    border-left:3px black solid;\n    margin: 20% 4%;\n    font-size: 55px;\n}\n\n.project_number[_ngcontent-%COMP%]{\n    font-size: 60px;\n    margin-right: 17%;\n    font-family: 'Comic', cursive;\n}\n\n.project_number_total[_ngcontent-%COMP%]{\n    font-size: 25px;\n    margin-left:17%;\n    font-family: 'Comic', cursive;\n}\n\n@keyframes fade-in{\n    0%{\n        opacity: 0;\n    }\n    100%{\n        opacity: 1;\n    }\n}\n\n.p-number[_ngcontent-%COMP%]{\n    position: relative;\n    margin-top:15%;\n    margin-left: 10%;\n    font-size:50px;\n    text-align: left;\n    font-family:SorrenMedium;\n    animation: fade-in 3s linear;\n    font-family: 'Lemonada', cursive;\n}\n\n.title[_ngcontent-%COMP%]{\n    text-transform: uppercase;\n    text-align: left;\n    position: relative;\n    margin: 0 0 0 10%;\n    font-size: 40px;\n    animation: fade-in 3s linear;\n    \n    font-family: 'Lemonada', cursive;\n}\n\n.description[_ngcontent-%COMP%]{\n    width: 70%;\n    margin-top:4%;\n    margin-left: 10%;\n    animation: fade-in 3s linear;\n    text-align:  left;\n    font-family: \"Roboto Slab\", monospace;\n    font-size: 14px;\n    line-height: 25px;\n    letter-spacing: 1px;\n}\n\n.tech[_ngcontent-%COMP%]{\n    margin-left:10%;\n    text-align: left;\n    animation: fade-in 3s linear;\n    margin-top:3%;\n    font-family: 'Fira Code', monospace;\n    font-size: 14px;\n}\n\n.shapeTriangle[_ngcontent-%COMP%], .shapeCircle[_ngcontent-%COMP%], .shapeHexagon[_ngcontent-%COMP%]{\n    position: absolute;\n    width:100%;\n    height: 100%;\n}\n\n.shapeTriangle[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], .shapeCircle[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], .shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]{\n    list-style: none;\n    position: absolute;\n    width: 0;\n\theight: 0;\n}\n\n.shapeCircle[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]{\n    background-image: linear-gradient(to top right, #ffe900b5 , #090909)\n}\n\n.shapeTriangle[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]{\n    border-bottom-color: rgb(7, 56, 112);\n    border-image-source: linear-gradient(to right bottom,rgba(0, 132, 255, 0.795),rgb(117, 1, 117)) 1;\n}\n\n.shapeTriangle[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(1){\n    left: 25%;\n    top:15%;\n    transform: rotateZ(100deg);\n    border-left: 50px solid transparent;\n\tborder-right: 50px solid transparent;\n    border-bottom-style: solid;\n    border-bottom-width: 100px;\n}\n\n.shapeTriangle[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(2){\n    right: 25%;\n    top:15%;\n    transform: rotateZ(150deg);    \n    border-left: 60px solid transparent;\n\tborder-right: 60px solid transparent;\n    border-bottom-style: solid;\n    border-bottom-width: 120px;\n}\n\n.shapeTriangle[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(3){\n    left: 25%;\n    bottom:15%;\n    transform: rotateZ(70deg);\n    border-left: 30px solid transparent;\n\tborder-right: 30px solid transparent;\n    border-bottom-style: solid;\n    border-bottom-width: 60px;\n}\n\n.shapeTriangle[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(4){\n    left: 20%;\n    top:50%;    \n    transform: rotateZ(20deg);\n    border-left: 25px solid transparent;\n\tborder-right: 25px solid transparent;\n    border-bottom-style: solid;\n    border-bottom-width: 50px;\n}\n\n.shapeTriangle[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(5){\n    right: 18%;\n    top:50%;\n    transform: rotateZ(120deg);\n    border-left: 40px solid transparent;\n\tborder-right: 40px solid transparent;\n    border-bottom-style: solid;\n    border-bottom-width: 80px;\n}\n\n.shapeTriangle[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(6){\n    right: 25%;\n    bottom:15%;\n    transform: rotateZ(50deg);\n    border-left: 40px solid transparent;\n\tborder-right: 40px solid transparent;\n    border-bottom-style: solid;\n    border-bottom-width: 80px;\n}\n\n.shapeCircle[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(1){\n    left: 25%;\n    top:15%;\n    transform: rotateZ(100deg);\n    width: 100px;\n    height: 100px;\n    border-radius: 100px;\n}\n\n.shapeCircle[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(2){\n    right: 25%;\n    top:15%;\n    transform: rotateZ(150deg);    \n    width: 70px;\n    height: 70px;\n    border-radius: 40px;\n}\n\n.shapeCircle[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(3){\n    left: 25%;\n    bottom:15%;\n    transform: rotateZ(70deg);\n    width: 80px;\n    height: 80px;\n    border-radius: 100px;\n}\n\n.shapeCircle[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(4){\n    left: 20%;\n    top:50%;    \n    transform: rotateZ(20deg);\n    width: 60px;\n    height: 60px;    \n    border-radius: 40px;\n}\n\n.shapeCircle[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(5){\n    right: 18%;\n    top:50%;\n    transform: rotateZ(120deg);\n    width: 70px;\n    height: 70px;    \n    border-radius: 40px;\n}\n\n.shapeCircle[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(6){\n    right: 25%;\n    bottom:15%;\n    transform: rotateZ(50deg);\n    width: 110px;\n    height: 110px;\n    border-radius: 100px;\n}\n\n.shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(1):before, .shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(2):before, .shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(3):before, .shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(4):before, .shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(5):before, .shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(6):before{  \n    content: \"\";\n    position: absolute;\n    left: 0;\n    width: 0;\n    height: 0;\n    border-bottom-color:rgba(30, 34, 90, 0.623);\n}\n\n.shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(1):after, .shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(2):after, .shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(3):after, .shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(4):after, .shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(5):after, .shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(6):after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    width: 0;\n    height: 0;\n    border-top-color: rgba(30, 34, 90, 0.623);\n}\n\n.shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(1), .shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(2), .shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(3), .shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(4), .shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(5), .shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(6){\n    position: relative;\n    background: rgba(30, 34, 90, 0.623);\n}\n\n.shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(1){\n    left: 22%;\n    top: 12%;\n    width: 100px;\n    height: 55px;\n}\n\n.shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(1):after{\n    border-left: 50px solid transparent;\n    border-right: 50px solid transparent;\n    border-top-style: solid;\n    border-top-width: 25px;    \n    bottom: -25px;\n}\n\n.shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(1):before{\n    border-left: 50px solid transparent;\n    border-right: 50px solid transparent;\n    border-bottom-style: solid;\n    border-bottom-width: 25px;\n    top: -25px;\n}\n\n.shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(2){\n    left: 75%;\n    top:38%;\n    width: 70px;\n    height: 40px;\n}\n\n.shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(2):after{\n    border-left: 35px solid transparent;\n    border-right: 35px solid transparent;\n    border-top-style: solid;\n    border-top-width: 17px;\n    bottom: -17px;\n}\n\n.shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(2):before{\n    border-left: 35px solid transparent;\n    border-right: 35px solid transparent;\n    border-bottom-style: solid;\n    border-bottom-width: 17px;\n    top: -17px;\n}\n\n.shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(3){\n    left: 19%;\n    top:33%;\n    width: 50px;\n    height: 25px;\n}\n\n.shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(3):after{\n    border-left: 25px solid transparent;\n    border-right: 25px solid transparent;\n    border-top-style: solid;\n    border-top-width: 15px;\n    bottom: -15px;\n}\n\n.shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(3):before{\n    border-left: 25px solid transparent;\n    border-right: 25px solid transparent;\n    border-bottom-style: solid;\n    border-bottom-width: 15px;\n    top: -15px;\n}\n\n.shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(4){\n    left: 20%;\n    top:62%;\n    width: 70px;\n    height: 45px;\n}\n\n.shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(4):after{\n    border-left: 35px solid transparent;\n    border-right: 35px solid transparent;\n    border-top-style: solid;\n    border-top-width: 15px;\n    bottom: -15px;\n}\n\n.shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(4):before{\n    border-left: 35px solid transparent;\n    border-right: 35px solid transparent;\n    border-bottom-style: solid;\n    border-bottom-width: 15px;\n    top: -15px;\n}\n\n.shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(6){\n  left: 82%;\n  top:50%;\n  width: 60px;\n  height: 35px;\n}\n\n.shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(6):after{\n\n  border-left: 30px solid transparent;\n  border-right: 30px solid transparent;\n  border-top-style: solid;\n  border-top-width: 15px;    \n  bottom: -15px;\n}\n\n.shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(6):before{\n  border-left: 30px solid transparent;\n  border-right: 30px solid transparent;\n  border-bottom-style: solid;\n  border-bottom-width: 15px;\n  top: -15px;\n}\n\n.shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(5){\n    left: 73%;\n    top: -8%;\n    width: 100px;\n    height: 55px;  \n}\n\n.shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(5):after{\n    border-left: 50px solid transparent;\n    border-right: 50px solid transparent;\n    border-top-style: solid;\n    border-top-width: 25px;    \n    bottom: -25px;\n}\n\n.shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(5):before{\n    border-left: 50px solid transparent;\n    border-right: 50px solid transparent;\n    border-bottom-style: solid;\n    border-bottom-width: 25px;\n    top: -25px;\n}\n\n.projectImage1[_ngcontent-%COMP%]{\n    position: absolute;\n    width: 600px;\n    height: 390px;\n    margin: 23% auto auto -10%;\n}\n\n.projectImage2[_ngcontent-%COMP%]{\n    \n    \n    \n    \n    z-index: -100;\n}\n\n@media (min-width: 1281px){\n\n}\n\n@media (min-width: 1025px) and (max-width: 1280px){\n\n}\n\n@media (min-width: 768px) and (max-width: 1024px) {\n    .shapeTriangle[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], .shapeCircle[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], .shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%], .mid[_ngcontent-%COMP%]{\n        display: none;\n    }\n    #inner[_ngcontent-%COMP%], #inner2[_ngcontent-%COMP%], #inner3[_ngcontent-%COMP%]{\n        transform:none !important;\n    }\n\n    .right[_ngcontent-%COMP%]{\n        left:0;\n        width: 100%;\n    }\n    .p-number[_ngcontent-%COMP%]{\n        margin-top: 18%;\n    }\n}\n\n@media (min-width: 481px) and (max-width: 767px) {\n    .shapeTriangle[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], .shapeCircle[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], .shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%], .mid[_ngcontent-%COMP%]{\n        display: none;\n    }\n    #inner[_ngcontent-%COMP%], #inner2[_ngcontent-%COMP%], #inner3[_ngcontent-%COMP%]{\n    transform:none !important;\n    }\n    \n    .right[_ngcontent-%COMP%]{\n        left:0;\n        width: 100%;\n    }\n    .p-number[_ngcontent-%COMP%]{\n        margin-top: 20%;\n    }\n}\n\n@media (min-width: 320px) and (max-width: 480px) {\n    .shapeTriangle[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], .shapeCircle[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], .shapeHexagon[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%], .mid[_ngcontent-%COMP%]{\n        display: none;\n    }\n    #inner[_ngcontent-%COMP%], #inner2[_ngcontent-%COMP%], #inner3[_ngcontent-%COMP%]{\n        transform:none !important;\n    }\n\n    .right[_ngcontent-%COMP%]{\n        left:0;\n        width: 100%;\n    }\n\n    .p-number[_ngcontent-%COMP%]{\n        margin-top: 23%;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay93b3JrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEdBQTBHOztBQUUxRzs7O0lBR0ksV0FBVztJQUNYLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsZ0NBQWdDO0lBQ2hDLGtDQUFrQztBQUN0Qzs7QUFFQTs7O0lBR0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsK0VBQStFO0lBQy9FLGdDQUFvRDtJQUNwRCw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixhQUFhOzs7SUFHYixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsK0VBQStFO0lBQy9FLCtCQUFtRDtJQUNuRCx3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsK0VBQStFO0lBQy9FLGdDQUFvRDtJQUNwRCxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFFBQVE7SUFDUixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7UUFDUSxhQUFhO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUM7SUFDRyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7QUFDWjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7O0FB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O1FBSUksYUFBYTtJQUNqQjtJQUNBOzs7UUFHSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxNQUFNO1FBQ04sV0FBVztJQUNmOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3dvcmsvd29yay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1GaXJhK0NvZGV8TGVtb25hZGF8Um9ib3RvK1NsYWJ8Um9zYXJpbyZkaXNwbGF5PXN3YXAnKTtcblxuI2lubmVyLFxuI2lubmVyMixcbiNpbm5lcjN7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xuICAgIC8qIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzOyAqL1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG59XG5cbiNjb250YWluZXIsXG4jY29udGFpbmVyMixcbiNjb250YWluZXIze1xuICAgIHBlcnNwZWN0aXZlOiA0MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuc3BhbntcbiAgICBmb250LXNpemU6IDgwcHg7XG4gICAgbWFyZ2luOiA1MCUgNTAlO1xufVxuXG4uYmFja2dyb3VuZHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAyNSwgMjApO1xufVxuXG4uZnAtc2xpZGVzY29udGFpbmVye1xuICAgIGhlaWdodDoxMDAlO1xufVxuXG4uc2xpZGUxe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWQ4ZTY7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzAzMDczZTdkICwgIzFjMTA2Y2FkKTsgKi9cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3AxYS5wbmdcIik7XG4gICAgLyogYmFja2dyb3VuZC1zaXplOiBjb250YWluOyAqL1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogOTAwcHg7XG4gICAgXG4gICAgXG4gICAgY29sb3I6IHJnYig1LCA1LCA1KTtcbn1cbi5zbGlkZTJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxOWNlOTsgICBcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMDMxZjNlN2QgLCAjMTAyOTZjYWQpOyAqL1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvcDIuanBnXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbn1cbi5zbGlkZTN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzAzMmIzZTdkICwgIzEwNTI2Y2FkKTsgKi9cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3AzYS5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xufVxuXG4uZnAtc2xpZGVzTmF2LmZwLWJvdHRvbXtcbiAgICB0b3A6IDQwJTtcbiAgICByaWdodDogMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNTRweDtcbiAgICAvKiBsZWZ0OjFweCAhaW1wb3J0YW50OyAqL1xufVxuXG4uZnAtbmV4dHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNvbnRhaW57XG4gICAgd2lkdGg6MzMuMzMlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgXG59XG5cbiAubGVmdHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5yaWdodHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbGVmdDo1MCU7XG59XG5cbi5ib3JkZXJye1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYig0MiwgNjUsIDMzKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiA2OCU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICB0b3A6IDE1JTtcbn1cblxuLm1pZHtcbiAgICBtYXJnaW46IDE4JSAwIDAgMyU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBcbn1cblxuLnVwb257XG4gICAgYm9yZGVyLWxlZnQ6M3B4IGJsYWNrIHNvbGlkO1xuICAgIG1hcmdpbjogMjAlIDQlO1xuICAgIGZvbnQtc2l6ZTogNTVweDtcbn1cblxuXG4ucHJvamVjdF9udW1iZXJ7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTclO1xuICAgIGZvbnQtZmFtaWx5OiAnQ29taWMnLCBjdXJzaXZlO1xufVxuXG4ucHJvamVjdF9udW1iZXJfdG90YWx7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG1hcmdpbi1sZWZ0OjE3JTtcbiAgICBmb250LWZhbWlseTogJ0NvbWljJywgY3Vyc2l2ZTtcbn1cblxuQGtleWZyYW1lcyBmYWRlLWlue1xuICAgIDAle1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAle1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cbi5wLW51bWJlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDoxNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBmb250LXNpemU6NTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtZmFtaWx5OlNvcnJlbk1lZGl1bTtcbiAgICBhbmltYXRpb246IGZhZGUtaW4gM3MgbGluZWFyO1xuICAgIGZvbnQtZmFtaWx5OiAnTGVtb25hZGEnLCBjdXJzaXZlO1xufVxuXG4udGl0bGV7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgMCAwIDEwJTtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgYW5pbWF0aW9uOiBmYWRlLWluIDNzIGxpbmVhcjtcbiAgICAvKiBmb250LWZhbWlseTogU29ycmVuTWVkaXVtOyAqL1xuICAgIGZvbnQtZmFtaWx5OiAnTGVtb25hZGEnLCBjdXJzaXZlO1xufVxuXG4uZGVzY3JpcHRpb257XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXJnaW4tdG9wOjQlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgYW5pbWF0aW9uOiBmYWRlLWluIDNzIGxpbmVhcjtcbiAgICB0ZXh0LWFsaWduOiAgbGVmdDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gU2xhYlwiLCBtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4udGVjaHtcbiAgICBtYXJnaW4tbGVmdDoxMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBhbmltYXRpb246IGZhZGUtaW4gM3MgbGluZWFyO1xuICAgIG1hcmdpbi10b3A6MyU7XG4gICAgZm9udC1mYW1pbHk6ICdGaXJhIENvZGUnLCBtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uc2hhcGVUcmlhbmdsZSxcbi5zaGFwZUNpcmNsZSxcbi5zaGFwZUhleGFnb257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2hhcGVUcmlhbmdsZT4gbGksXG4uc2hhcGVDaXJjbGU+IGxpLFxuLnNoYXBlSGV4YWdvbiA+IGxpe1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAwO1xuXHRoZWlnaHQ6IDA7XG59XG5cbi5zaGFwZUNpcmNsZSA+IGxpe1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICNmZmU5MDBiNSAsICMwOTA5MDkpXG59XG5cbi5zaGFwZVRyaWFuZ2xlID4gbGl7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiKDcsIDU2LCAxMTIpO1xuICAgIGJvcmRlci1pbWFnZS1zb3VyY2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20scmdiYSgwLCAxMzIsIDI1NSwgMC43OTUpLHJnYigxMTcsIDEsIDExNykpIDE7XG59XG5cbi5zaGFwZVRyaWFuZ2xlID4gbGk6bnRoLWNoaWxkKDEpe1xuICAgIGxlZnQ6IDI1JTtcbiAgICB0b3A6MTUlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigxMDBkZWcpO1xuICAgIGJvcmRlci1sZWZ0OiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRib3JkZXItcmlnaHQ6IDUwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMTAwcHg7XG59XG5cbi5zaGFwZVRyaWFuZ2xlID4gbGk6bnRoLWNoaWxkKDIpe1xuICAgIHJpZ2h0OiAyNSU7XG4gICAgdG9wOjE1JTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMTUwZGVnKTsgICAgXG4gICAgYm9yZGVyLWxlZnQ6IDYwcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci1yaWdodDogNjBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxMjBweDtcbn1cblxuLnNoYXBlVHJpYW5nbGUgPiBsaTpudGgtY2hpbGQoMyl7XG4gICAgbGVmdDogMjUlO1xuICAgIGJvdHRvbToxNSU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDcwZGVnKTtcbiAgICBib3JkZXItbGVmdDogMzBweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLXJpZ2h0OiAzMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDYwcHg7XG59XG5cbi5zaGFwZVRyaWFuZ2xlID4gbGk6bnRoLWNoaWxkKDQpe1xuICAgIGxlZnQ6IDIwJTtcbiAgICB0b3A6NTAlOyAgICBcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMjBkZWcpO1xuICAgIGJvcmRlci1sZWZ0OiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRib3JkZXItcmlnaHQ6IDI1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogNTBweDtcbn1cblxuXG4uc2hhcGVUcmlhbmdsZSA+IGxpOm50aC1jaGlsZCg1KXtcbiAgICByaWdodDogMTglO1xuICAgIHRvcDo1MCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDEyMGRlZyk7XG4gICAgYm9yZGVyLWxlZnQ6IDQwcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci1yaWdodDogNDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiA4MHB4O1xufVxuXG4uc2hhcGVUcmlhbmdsZSA+IGxpOm50aC1jaGlsZCg2KXtcbiAgICByaWdodDogMjUlO1xuICAgIGJvdHRvbToxNSU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDUwZGVnKTtcbiAgICBib3JkZXItbGVmdDogNDBweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLXJpZ2h0OiA0MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDgwcHg7XG59XG5cbi5zaGFwZUNpcmNsZSA+IGxpOm50aC1jaGlsZCgxKXtcbiAgICBsZWZ0OiAyNSU7XG4gICAgdG9wOjE1JTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMTAwZGVnKTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cblxuLnNoYXBlQ2lyY2xlID4gbGk6bnRoLWNoaWxkKDIpe1xuICAgIHJpZ2h0OiAyNSU7XG4gICAgdG9wOjE1JTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMTUwZGVnKTsgICAgXG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG59XG5cbi5zaGFwZUNpcmNsZSA+IGxpOm50aC1jaGlsZCgzKXtcbiAgICBsZWZ0OiAyNSU7XG4gICAgYm90dG9tOjE1JTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNzBkZWcpO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cblxuLnNoYXBlQ2lyY2xlID4gbGk6bnRoLWNoaWxkKDQpe1xuICAgIGxlZnQ6IDIwJTtcbiAgICB0b3A6NTAlOyAgICBcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMjBkZWcpO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDsgICAgXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbn1cblxuLnNoYXBlQ2lyY2xlID4gbGk6bnRoLWNoaWxkKDUpe1xuICAgIHJpZ2h0OiAxOCU7XG4gICAgdG9wOjUwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMTIwZGVnKTtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7ICAgIFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG59XG5cbi5zaGFwZUNpcmNsZSA+IGxpOm50aC1jaGlsZCg2KXtcbiAgICByaWdodDogMjUlO1xuICAgIGJvdHRvbToxNSU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDUwZGVnKTtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cblxuLnNoYXBlSGV4YWdvbiA+IGxpOm50aC1jaGlsZCgxKTpiZWZvcmUsIFxuLnNoYXBlSGV4YWdvbiA+IGxpOm50aC1jaGlsZCgyKTpiZWZvcmUsXG4uc2hhcGVIZXhhZ29uID4gbGk6bnRoLWNoaWxkKDMpOmJlZm9yZSxcbi5zaGFwZUhleGFnb24gPiBsaTpudGgtY2hpbGQoNCk6YmVmb3JlLFxuLnNoYXBlSGV4YWdvbiA+IGxpOm50aC1jaGlsZCg1KTpiZWZvcmUsXG4uc2hhcGVIZXhhZ29uID4gbGk6bnRoLWNoaWxkKDYpOmJlZm9yZXsgIFxuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6cmdiYSgzMCwgMzQsIDkwLCAwLjYyMyk7XG59XG4uc2hhcGVIZXhhZ29uID4gbGk6bnRoLWNoaWxkKDEpOmFmdGVyLFxuLnNoYXBlSGV4YWdvbiA+IGxpOm50aC1jaGlsZCgyKTphZnRlcixcbi5zaGFwZUhleGFnb24gPiBsaTpudGgtY2hpbGQoMyk6YWZ0ZXIsXG4uc2hhcGVIZXhhZ29uID4gbGk6bnRoLWNoaWxkKDQpOmFmdGVyLFxuLnNoYXBlSGV4YWdvbiA+IGxpOm50aC1jaGlsZCg1KTphZnRlcixcbi5zaGFwZUhleGFnb24gPiBsaTpudGgtY2hpbGQoNik6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMzAsIDM0LCA5MCwgMC42MjMpO1xufVxuXG4uc2hhcGVIZXhhZ29uID4gbGk6bnRoLWNoaWxkKDEpLFxuLnNoYXBlSGV4YWdvbiA+IGxpOm50aC1jaGlsZCgyKSxcbi5zaGFwZUhleGFnb24gPiBsaTpudGgtY2hpbGQoMyksXG4uc2hhcGVIZXhhZ29uID4gbGk6bnRoLWNoaWxkKDQpLFxuLnNoYXBlSGV4YWdvbiA+IGxpOm50aC1jaGlsZCg1KSxcbi5zaGFwZUhleGFnb24gPiBsaTpudGgtY2hpbGQoNil7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMzAsIDM0LCA5MCwgMC42MjMpO1xufVxuXG4uc2hhcGVIZXhhZ29uID4gbGk6bnRoLWNoaWxkKDEpe1xuICAgIGxlZnQ6IDIyJTtcbiAgICB0b3A6IDEyJTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xufVxuXG4uc2hhcGVIZXhhZ29uID4gbGk6bnRoLWNoaWxkKDEpOmFmdGVye1xuICAgIGJvcmRlci1sZWZ0OiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItdG9wLXdpZHRoOiAyNXB4OyAgICBcbiAgICBib3R0b206IC0yNXB4O1xufVxuXG4uc2hhcGVIZXhhZ29uID4gbGk6bnRoLWNoaWxkKDEpOmJlZm9yZXtcbiAgICBib3JkZXItbGVmdDogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDUwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMjVweDtcbiAgICB0b3A6IC0yNXB4O1xufVxuXG4uc2hhcGVIZXhhZ29uID4gbGk6bnRoLWNoaWxkKDIpe1xuICAgIGxlZnQ6IDc1JTtcbiAgICB0b3A6MzglO1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLnNoYXBlSGV4YWdvbiA+IGxpOm50aC1jaGlsZCgyKTphZnRlcntcbiAgICBib3JkZXItbGVmdDogMzVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDM1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXRvcC13aWR0aDogMTdweDtcbiAgICBib3R0b206IC0xN3B4O1xufVxuXG4uc2hhcGVIZXhhZ29uID4gbGk6bnRoLWNoaWxkKDIpOmJlZm9yZXtcbiAgICBib3JkZXItbGVmdDogMzVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDM1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMTdweDtcbiAgICB0b3A6IC0xN3B4O1xufVxuXG5cbi5zaGFwZUhleGFnb24gPiBsaTpudGgtY2hpbGQoMyl7XG4gICAgbGVmdDogMTklO1xuICAgIHRvcDozMyU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uc2hhcGVIZXhhZ29uID4gbGk6bnRoLWNoaWxkKDMpOmFmdGVye1xuICAgIGJvcmRlci1sZWZ0OiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItdG9wLXdpZHRoOiAxNXB4O1xuICAgIGJvdHRvbTogLTE1cHg7XG59XG5cbi5zaGFwZUhleGFnb24gPiBsaTpudGgtY2hpbGQoMyk6YmVmb3Jle1xuICAgIGJvcmRlci1sZWZ0OiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxNXB4O1xuICAgIHRvcDogLTE1cHg7XG59XG4gIFxuLnNoYXBlSGV4YWdvbiA+IGxpOm50aC1jaGlsZCg0KXtcbiAgICBsZWZ0OiAyMCU7XG4gICAgdG9wOjYyJTtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5zaGFwZUhleGFnb24gPiBsaTpudGgtY2hpbGQoNCk6YWZ0ZXJ7XG4gICAgYm9yZGVyLWxlZnQ6IDM1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAzNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDE1cHg7XG4gICAgYm90dG9tOiAtMTVweDtcbn1cblxuLnNoYXBlSGV4YWdvbiA+IGxpOm50aC1jaGlsZCg0KTpiZWZvcmV7XG4gICAgYm9yZGVyLWxlZnQ6IDM1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAzNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDE1cHg7XG4gICAgdG9wOiAtMTVweDtcbn1cblxuLnNoYXBlSGV4YWdvbiA+IGxpOm50aC1jaGlsZCg2KXtcbiAgbGVmdDogODIlO1xuICB0b3A6NTAlO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4uc2hhcGVIZXhhZ29uID4gbGk6bnRoLWNoaWxkKDYpOmFmdGVye1xuXG4gIGJvcmRlci1sZWZ0OiAzMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDMwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xuICBib3JkZXItdG9wLXdpZHRoOiAxNXB4OyAgICBcbiAgYm90dG9tOiAtMTVweDtcbn1cblxuLnNoYXBlSGV4YWdvbiA+IGxpOm50aC1jaGlsZCg2KTpiZWZvcmV7XG4gIGJvcmRlci1sZWZ0OiAzMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDMwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxNXB4O1xuICB0b3A6IC0xNXB4O1xufVxuICBcbi5zaGFwZUhleGFnb24gPiBsaTpudGgtY2hpbGQoNSl7XG4gICAgbGVmdDogNzMlO1xuICAgIHRvcDogLTglO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDU1cHg7ICBcbn1cblxuLnNoYXBlSGV4YWdvbiA+IGxpOm50aC1jaGlsZCg1KTphZnRlcntcbiAgICBib3JkZXItbGVmdDogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDUwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXRvcC13aWR0aDogMjVweDsgICAgXG4gICAgYm90dG9tOiAtMjVweDtcbn1cblxuLnNoYXBlSGV4YWdvbiA+IGxpOm50aC1jaGlsZCg1KTpiZWZvcmV7XG4gICAgYm9yZGVyLWxlZnQ6IDUwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDI1cHg7XG4gICAgdG9wOiAtMjVweDtcbn1cblxuLnByb2plY3RJbWFnZTF7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBoZWlnaHQ6IDM5MHB4O1xuICAgIG1hcmdpbjogMjMlIGF1dG8gYXV0byAtMTAlO1xufVxuXG4ucHJvamVjdEltYWdlMntcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gICAgLyogd2lkdGg6IDYwMHB4OyAqL1xuICAgIC8qIGhlaWdodDogMzkwcHg7ICovXG4gICAgLyogbWFyZ2luOiAyMyUgYXV0byBhdXRvIC0xMCU7ICovXG4gICAgei1pbmRleDogLTEwMDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyODFweCl7XG5cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweCl7XG5cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLnNoYXBlVHJpYW5nbGU+IGxpLFxuICAgIC5zaGFwZUNpcmNsZT4gbGksXG4gICAgLnNoYXBlSGV4YWdvbiA+IGxpLFxuICAgIC5taWR7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgICNpbm5lcixcbiAgICAjaW5uZXIyLFxuICAgICNpbm5lcjN7XG4gICAgICAgIHRyYW5zZm9ybTpub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnJpZ2h0e1xuICAgICAgICBsZWZ0OjA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAucC1udW1iZXJ7XG4gICAgICAgIG1hcmdpbi10b3A6IDE4JTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLnNoYXBlVHJpYW5nbGU+IGxpLFxuICAgIC5zaGFwZUNpcmNsZT4gbGksXG4gICAgLnNoYXBlSGV4YWdvbiA+IGxpLFxuICAgIC5taWR7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgICNpbm5lcixcbiAgICAjaW5uZXIyLFxuICAgICNpbm5lcjN7XG4gICAgdHJhbnNmb3JtOm5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgXG4gICAgLnJpZ2h0e1xuICAgICAgICBsZWZ0OjA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAucC1udW1iZXJ7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgLnNoYXBlVHJpYW5nbGU+IGxpLFxuICAgIC5zaGFwZUNpcmNsZT4gbGksXG4gICAgLnNoYXBlSGV4YWdvbiA+IGxpLFxuICAgIC5taWR7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgICNpbm5lcixcbiAgICAjaW5uZXIyLFxuICAgICNpbm5lcjN7XG4gICAgICAgIHRyYW5zZm9ybTpub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnJpZ2h0e1xuICAgICAgICBsZWZ0OjA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5wLW51bWJlcntcbiAgICAgICAgbWFyZ2luLXRvcDogMjMlO1xuICAgIH1cblxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-work',
                templateUrl: './work.component.html',
                styleUrls: ['./work.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/assets/personaldetails.ts":
/*!***************************************!*\
  !*** ./src/assets/personaldetails.ts ***!
  \***************************************/
/*! exports provided: p_details */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_details", function() { return p_details; });
const p_details = [
    {
        "address": "Whitefield, Bangalore",
        "email": "rahilhastu@gmail.com",
        "phone": "6366856668",
        "freelance": "Available"
    }
];


/***/ }),

/***/ "./src/assets/projects.ts":
/*!********************************!*\
  !*** ./src/assets/projects.ts ***!
  \********************************/
/*! exports provided: products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "products", function() { return products; });
const products = [
    {
        "id": "1",
        "name": "subjective Evaluation",
        "description": "A subjective answer evaluation system which used NLTK( stop word removal, Tokenisation, Parts of speech tagging), Term frequency and document frequency, Pydictionary( for synonyms) and cosine similarity to find the similarity of students answer with a given answer bank answers. Also, there is a basic website made to present the project. Coding is done in Python and Django. ",
        "tech": "Python, Django"
    },
    {
        "id": "2",
        "name": "Call A Mail",
        "description": "This piece of code was written for a friend of mine who usually missed out important emails.What this script does is, rings up the phone of my friend whenever there is an unread email in his inbox. It was scheduled using cron and installed on the Amazon web server on an ec2 instance.",
        "tech": "Python, Django"
    },
    {
        "id": "3",
        "name": " Webpage for NGO EkkPahel ",
        "description": "Contributed in making the Araria Webpage for the NGO Ekk Pahel which went live on their main website and was also showcased in TedX GDGoenka in the year 2018. ",
        "tech": "Python, Django"
    }
];


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

module.exports = __webpack_require__(/*! /home/rahilhastu/Desktop/website/cool/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
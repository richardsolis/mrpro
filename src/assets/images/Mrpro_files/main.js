(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/administration/administration-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/administration/administration-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AdministrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationRoutingModule", function() { return AdministrationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/administration/components/home/home.component.ts");
/* harmony import */ var _administration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./administration.component */ "./src/app/administration/administration.component.ts");
/* harmony import */ var _components_select_provider_select_provider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/select-provider/select-provider.component */ "./src/app/administration/components/select-provider/select-provider.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'admin',
        component: _administration_component__WEBPACK_IMPORTED_MODULE_3__["AdministrationComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/admin/home'
            },
            {
                path: 'home',
                component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
            },
            {
                path: 'select',
                component: _components_select_provider_select_provider_component__WEBPACK_IMPORTED_MODULE_4__["SelectProviderComponent"]
            },
        ]
    }
];
var AdministrationRoutingModule = /** @class */ (function () {
    function AdministrationRoutingModule() {
    }
    AdministrationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdministrationRoutingModule);
    return AdministrationRoutingModule;
}());



/***/ }),

/***/ "./src/app/administration/administration.component.css":
/*!*************************************************************!*\
  !*** ./src/app/administration/administration.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/administration/administration.component.html":
/*!**************************************************************!*\
  !*** ./src/app/administration/administration.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<adm-header></adm-header>\n\n<div class=\"down-header\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-2 sidebar\">\n\t\t\t<adm-menu></adm-menu>\n\t\t</div>\n\t\t<main role=\"main\" class=\"col-md-10 ml-sm-auto col-lg-10 px-4\">\n\t  \t\t<router-outlet></router-outlet>\n\t\t</main>\t\n\t</div>\n</div>\n\n<adm-footer></adm-footer>"

/***/ }),

/***/ "./src/app/administration/administration.component.ts":
/*!************************************************************!*\
  !*** ./src/app/administration/administration.component.ts ***!
  \************************************************************/
/*! exports provided: AdministrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationComponent", function() { return AdministrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/session.service */ "./src/app/services/session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdministrationComponent = /** @class */ (function () {
    function AdministrationComponent(session) {
        this.session = session;
        this.user = {};
    }
    AdministrationComponent.prototype.ngOnInit = function () {
        this.user = this.session.getObject('user');
    };
    AdministrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-administration',
            template: __webpack_require__(/*! ./administration.component.html */ "./src/app/administration/administration.component.html"),
            styles: [__webpack_require__(/*! ./administration.component.css */ "./src/app/administration/administration.component.css")]
        }),
        __metadata("design:paramtypes", [_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]])
    ], AdministrationComponent);
    return AdministrationComponent;
}());



/***/ }),

/***/ "./src/app/administration/administration.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/administration/administration.module.ts ***!
  \*********************************************************/
/*! exports provided: AdministrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationModule", function() { return AdministrationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _administration_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./administration-routing.module */ "./src/app/administration/administration-routing.module.ts");
/* harmony import */ var _components_user_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user/user-create/user-create.component */ "./src/app/administration/components/user/user-create/user-create.component.ts");
/* harmony import */ var _components_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user/user-list/user-list.component */ "./src/app/administration/components/user/user-list/user-list.component.ts");
/* harmony import */ var _components_provider_provide_create_provide_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/provider/provide-create/provide-create.component */ "./src/app/administration/components/provider/provide-create/provide-create.component.ts");
/* harmony import */ var _components_provider_provide_list_provide_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/provider/provide-list/provide-list.component */ "./src/app/administration/components/provider/provide-list/provide-list.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/administration/components/login/login.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/administration/components/footer/footer.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/administration/components/header/header.component.ts");
/* harmony import */ var _administration_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./administration.component */ "./src/app/administration/administration.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/administration/components/home/home.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/administration/components/menu/menu.component.ts");
/* harmony import */ var ngx_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-modal */ "./node_modules/ngx-modal/index.js");
/* harmony import */ var ngx_modal__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ngx_modal__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_select_provider_select_provider_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/select-provider/select-provider.component */ "./src/app/administration/components/select-provider/select-provider.component.ts");
/* harmony import */ var _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/perfil/perfil.component */ "./src/app/administration/components/perfil/perfil.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AdministrationModule = /** @class */ (function () {
    function AdministrationModule() {
    }
    AdministrationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _administration_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdministrationRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                ngx_modal__WEBPACK_IMPORTED_MODULE_15__["ModalModule"]
            ],
            declarations: [
                _components_user_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"],
                _components_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__["UserListComponent"],
                _components_provider_provide_create_provide_create_component__WEBPACK_IMPORTED_MODULE_7__["ProvideCreateComponent"],
                _components_provider_provide_list_provide_list_component__WEBPACK_IMPORTED_MODULE_8__["ProvideListComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _administration_component__WEBPACK_IMPORTED_MODULE_12__["AdministrationComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"],
                _components_select_provider_select_provider_component__WEBPACK_IMPORTED_MODULE_16__["SelectProviderComponent"],
                _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_17__["PerfilComponent"]
            ],
            providers: []
        })
    ], AdministrationModule);
    return AdministrationModule;
}());



/***/ }),

/***/ "./src/app/administration/components/footer/footer.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/administration/components/footer/footer.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/administration/components/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./src/app/administration/components/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"primary block\">\n\t<div class=\"block flex\">\n\t\t<div class=\"block-33 red\"></div>\n\t\t<div class=\"block-33 blue\"></div>\n\t\t<div class=\"block-33 gray\"></div>\n\t</div>\n\t<div class=\"principal\"></div>\n</footer>"

/***/ }),

/***/ "./src/app/administration/components/footer/footer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/administration/components/footer/footer.component.ts ***!
  \**********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'adm-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/administration/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/administration/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/administration/components/header/header.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/administration/components/header/header.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/administration/components/header/header.component.html":
/*!************************************************************************!*\
  !*** ./src/app/administration/components/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n\t<div class=\"principal\">\n\t\t<img src=\"assets/images/logo.png\">\n\t</div>\n\t<div class=\"block flex\">\n\t\t<div class=\"block-33 brown\"></div>\n\t\t<div class=\"block-33 blue\"></div>\n\t\t<div class=\"block-33 yellow\"></div>\n\t</div>\n</header>"

/***/ }),

/***/ "./src/app/administration/components/header/header.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/administration/components/header/header.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'adm-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/administration/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/administration/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/administration/components/home/home.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/administration/components/home/home.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/administration/components/home/home.component.html":
/*!********************************************************************!*\
  !*** ./src/app/administration/components/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/administration/components/home/home.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/administration/components/home/home.component.ts ***!
  \******************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/administration/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/administration/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/administration/components/login/login.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/administration/components/login/login.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/administration/components/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/administration/components/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-login login\">\n\t<div class=\"shadow\">\n\t\t<div class=\"card-login\">\n\t\t\t<div class=\"all-center\">\n\t\t\t\t<img src=\"assets/images/logo.png\">\n\t\t\t\t<div class=\"inputForm\">\n\t\t\t\t\t<i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<input id=\"user\" type=\"\" name=\"\" [(ngModel)]=\"user.username\" placeholder=\"Usuario\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"inputForm\">\t\n\t\t\t\t\t<i class=\"fa fa-key\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<input id=\"password\" type=\"password\" name=\"\" [(ngModel)]=\"user.password\" placeholder=\"Contraseña\">\n\t\t\t\t</div>\n\t\t\t\t<div (click)=\"login(myModal)\" class=\"btn-login blue pointer\"><p>Acceder</p></div>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\t\t\n</div>\n\n<modal #myModal>\n    <modal-content>\n    \t<div class=\"error\">\n    \t\t<div class=\"icon\">\n    \t\t\t<i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n    \t\t</div>\n        \t<h4>{{message}}</h4>\n    \t</div>\n    </modal-content>        \n</modal>"

/***/ }),

/***/ "./src/app/administration/components/login/login.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/administration/components/login/login.component.ts ***!
  \********************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/session.service */ "./src/app/services/session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(spinner, router, session) {
        this.spinner = spinner;
        this.router = router;
        this.session = session;
        this.user = {
            username: '',
            password: '',
        };
        this.userdata = {};
        this.message = 'Datos incorrectos';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.spinner.show();
    };
    LoginComponent.prototype.login = function (myModal) {
        this.message = '';
        if (!this.user.username || !this.user.password) {
            this.message = 'Campos incompletos';
        }
        else {
            if (this.user.username == 'admin') {
                this.userdata = {
                    firstname: 'Admin',
                    lastname: 'Mr Pro',
                    email: 'admin@mrpro.com',
                    role: 1,
                    permission: {
                        user: { c: 1, r: 1, u: 1, d: 1 },
                        provider: { c: 1, r: 1, u: 1, d: 1 },
                    }
                };
            }
            else if (this.user.username == 'user1') {
                this.userdata = {
                    firstname: 'User',
                    lastname: 'Mr Pro',
                    email: 'user1@gmail.com',
                    role: 2,
                    permission: {
                        user: { c: 0, r: 1, u: 1, d: 0 },
                        provider: { c: 0, r: 1, u: 0, d: 0 },
                    }
                };
            }
            else if (this.user.username == 'provider1') {
                this.userdata = {
                    firstname: 'Provider',
                    lastname: 'Mr Pro',
                    email: 'provider1@gmail.com',
                    role: 3,
                    permission: {
                        user: { c: 0, r: 1, u: 0, d: 0 },
                        provider: { c: 0, r: 1, u: 1, d: 0 },
                    }
                };
            }
            else {
                this.message = 'Datos incorrectos';
            }
            this.session.setObject('user', this.userdata);
        }
        if (this.message) {
            myModal.open();
            return;
        }
        if (this.userdata['role'] == 1) {
            this.router.navigate(['/admin']);
        }
        else if (this.userdata['role'] == 2) {
            this.router.navigate(['/admin/select']);
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/administration/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/administration/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/administration/components/menu/menu.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/administration/components/menu/menu.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/administration/components/menu/menu.component.html":
/*!********************************************************************!*\
  !*** ./src/app/administration/components/menu/menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-nav\">\n\t<div class=\"menu-head\">\n\t\t<img *ngIf=\"user.role == 1\" src=\"./assets/images/admin.png\">\n\t\t<img *ngIf=\"user.role == 2\" src=\"./assets/images/user.png\">\n        <h2>{{user.firstname}}</h2>\n\t</div>\n\t<div class=\"menu-list\">\n\t\t<ul class=\"mb-0\">\n\t\t\t<li><a [routerLink]=\"['/admin/provider']\" routerLinkActive=\"active-route\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Perfil </a></li>\n\t\t\t<li *ngIf=\"user.role == 1\"><a [routerLink]=\"['/admin/user']\" routerLinkActive=\"active-route\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Usuarios </a></li>\n\t\t\t<li *ngIf=\"user.role == 1\"><a [routerLink]=\"['/admin/provider']\" routerLinkActive=\"active-route\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Proveedores </a></li>\n\t\t\t<li *ngIf=\"user.role == 2\"><a [routerLink]=\"['/admin/provider/select']\" routerLinkActive=\"active-route\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Proveedores </a></li>\n\t\t\t<!-- <li><a [routerLink]=\"['/reports/principal/consolidado']\" routerLinkActive=\"active-route\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i>  </a></li> -->\n\t\t</ul>\n\t\t<!-- <ul *ngIf=\"showMenu\">\n\t\t\t<li><a class=\"pl-4\" [routerLink]=\"['/reports/course', idCourse,'descargables']\" routerLinkActive=\"active-route\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Descargables</a></li>\n\t\t\t<li><a class=\"pl-4\" [routerLink]=\"['/reports/course', idCourse,'general']\" routerLinkActive=\"active-route\"><i class=\"fa fa-area-chart\" aria-hidden=\"true\"></i> Reporte General</a></li>\n\t\t\t<li><a class=\"pl-4\" [routerLink]=\"['/reports/course', idCourse,'enrolls']\" routerLinkActive=\"active-route\"><i class=\"fa fa-graduation-cap\" aria-hidden=\"true\"></i> Matriculados</a></li>\n\t\t\t<li><a class=\"pl-4\" [routerLink]=\"['/reports/course', idCourse,'activities']\" routerLinkActive=\"active-route\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> Actividades</a></li>\n\t\t\t<li><a class=\"pl-4\" [routerLink]=\"['/reports/course', idCourse,'scorm']\" routerLinkActive=\"active-route\"><i class=\"fa fa-window-maximize\" aria-hidden=\"true\"></i> SCORM</a></li>\n\t\t\t<li><a class=\"pl-4\" [routerLink]=\"['/reports/course', idCourse,'resources']\" routerLinkActive=\"active-route\"><i class=\"fa fa-file\" aria-hidden=\"true\"></i> Recursos</a></li>\n\t\t\t<li><a class=\"pl-4\" [routerLink]=\"['/reports/course', idCourse,'autoevaluation']\" routerLinkActive=\"active-route\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Autoevaluación</a></li>\n\t\t\t<li><a class=\"pl-4\" [routerLink]=\"['/reports/course', idCourse,'exams']\" routerLinkActive=\"active-route\"><i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i> Exámenes</a></li>\n\t\t\t<li><a class=\"pl-4\" [routerLink]=\"['/reports/course', idCourse,'foros']\" routerLinkActive=\"active-route\"><i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i> Foros de Consulta</a></li>\n\t\t</ul> -->\n\t\t<ul>\n\t\t\t<li><a (click)=\"logout()\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Cerrar Sesión</a></li>\n\t\t</ul>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/administration/components/menu/menu.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/administration/components/menu/menu.component.ts ***!
  \******************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(session, router) {
        this.session = session;
        this.router = router;
        this.user = {};
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.user = this.session.getObject('user');
    };
    MenuComponent.prototype.logout = function () {
        this.session.destroy('user');
        this.router.navigate(['/login']);
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'adm-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/administration/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/administration/components/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/administration/components/perfil/perfil.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/administration/components/perfil/perfil.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/administration/components/perfil/perfil.component.html":
/*!************************************************************************!*\
  !*** ./src/app/administration/components/perfil/perfil.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  perfil works!\n</p>\n"

/***/ }),

/***/ "./src/app/administration/components/perfil/perfil.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/administration/components/perfil/perfil.component.ts ***!
  \**********************************************************************/
/*! exports provided: PerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilComponent", function() { return PerfilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PerfilComponent = /** @class */ (function () {
    function PerfilComponent() {
    }
    PerfilComponent.prototype.ngOnInit = function () {
    };
    PerfilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__(/*! ./perfil.component.html */ "./src/app/administration/components/perfil/perfil.component.html"),
            styles: [__webpack_require__(/*! ./perfil.component.css */ "./src/app/administration/components/perfil/perfil.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PerfilComponent);
    return PerfilComponent;
}());



/***/ }),

/***/ "./src/app/administration/components/provider/provide-create/provide-create.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/administration/components/provider/provide-create/provide-create.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/administration/components/provider/provide-create/provide-create.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/administration/components/provider/provide-create/provide-create.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  provide-create works!\n</p>\n"

/***/ }),

/***/ "./src/app/administration/components/provider/provide-create/provide-create.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/administration/components/provider/provide-create/provide-create.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ProvideCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvideCreateComponent", function() { return ProvideCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProvideCreateComponent = /** @class */ (function () {
    function ProvideCreateComponent() {
    }
    ProvideCreateComponent.prototype.ngOnInit = function () {
    };
    ProvideCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-provide-create',
            template: __webpack_require__(/*! ./provide-create.component.html */ "./src/app/administration/components/provider/provide-create/provide-create.component.html"),
            styles: [__webpack_require__(/*! ./provide-create.component.css */ "./src/app/administration/components/provider/provide-create/provide-create.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProvideCreateComponent);
    return ProvideCreateComponent;
}());



/***/ }),

/***/ "./src/app/administration/components/provider/provide-list/provide-list.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/administration/components/provider/provide-list/provide-list.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/administration/components/provider/provide-list/provide-list.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/administration/components/provider/provide-list/provide-list.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  provide-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/administration/components/provider/provide-list/provide-list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/administration/components/provider/provide-list/provide-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProvideListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvideListComponent", function() { return ProvideListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProvideListComponent = /** @class */ (function () {
    function ProvideListComponent() {
    }
    ProvideListComponent.prototype.ngOnInit = function () {
    };
    ProvideListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-provide-list',
            template: __webpack_require__(/*! ./provide-list.component.html */ "./src/app/administration/components/provider/provide-list/provide-list.component.html"),
            styles: [__webpack_require__(/*! ./provide-list.component.css */ "./src/app/administration/components/provider/provide-list/provide-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProvideListComponent);
    return ProvideListComponent;
}());



/***/ }),

/***/ "./src/app/administration/components/select-provider/select-provider.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/administration/components/select-provider/select-provider.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/administration/components/select-provider/select-provider.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/administration/components/select-provider/select-provider.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  select-provider works!\n</p>\n"

/***/ }),

/***/ "./src/app/administration/components/select-provider/select-provider.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/administration/components/select-provider/select-provider.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SelectProviderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectProviderComponent", function() { return SelectProviderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectProviderComponent = /** @class */ (function () {
    function SelectProviderComponent() {
    }
    SelectProviderComponent.prototype.ngOnInit = function () {
    };
    SelectProviderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select-provider',
            template: __webpack_require__(/*! ./select-provider.component.html */ "./src/app/administration/components/select-provider/select-provider.component.html"),
            styles: [__webpack_require__(/*! ./select-provider.component.css */ "./src/app/administration/components/select-provider/select-provider.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SelectProviderComponent);
    return SelectProviderComponent;
}());



/***/ }),

/***/ "./src/app/administration/components/user/user-create/user-create.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/administration/components/user/user-create/user-create.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/administration/components/user/user-create/user-create.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/administration/components/user/user-create/user-create.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-create works!\n</p>\n"

/***/ }),

/***/ "./src/app/administration/components/user/user-create/user-create.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/administration/components/user/user-create/user-create.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent() {
    }
    UserCreateComponent.prototype.ngOnInit = function () {
    };
    UserCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-create',
            template: __webpack_require__(/*! ./user-create.component.html */ "./src/app/administration/components/user/user-create/user-create.component.html"),
            styles: [__webpack_require__(/*! ./user-create.component.css */ "./src/app/administration/components/user/user-create/user-create.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserCreateComponent);
    return UserCreateComponent;
}());



/***/ }),

/***/ "./src/app/administration/components/user/user-list/user-list.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/administration/components/user/user-list/user-list.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/administration/components/user/user-list/user-list.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/administration/components/user/user-list/user-list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/administration/components/user/user-list/user-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/administration/components/user/user-list/user-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserListComponent = /** @class */ (function () {
    function UserListComponent() {
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/administration/components/user/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/administration/components/user/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserListComponent);
    return UserListComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: '', pathMatch: 'full', redirectTo: '/home'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<ngx-spinner bdColor=\"rgba(0,0,0,0.65)\" size=\"medium\" color=\"#fff\" type=\"ball-scale-multiple\"></ngx-spinner>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'mrpro';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-modal */ "./node_modules/ngx-modal/index.js");
/* harmony import */ var ngx_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_rating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-rating */ "./node_modules/ngx-rating/index.js");
/* harmony import */ var ngx_rating__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_rating__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _administration_administration_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./administration/administration.module */ "./src/app/administration/administration.module.ts");
/* harmony import */ var _platform_platform_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./platform/platform.module */ "./src/app/platform/platform.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// ********************** angular-modal-gallery *****************************
//import 'hammerjs'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save hammerjs`)
//import 'mousetrap'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap`)
//import { ModalGalleryModule } from 'angular-modal-gallery'; // <----------------- angular-modal-gallery library import
// **************************************************************************
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _administration_administration_module__WEBPACK_IMPORTED_MODULE_7__["AdministrationModule"],
                _platform_platform_module__WEBPACK_IMPORTED_MODULE_8__["PlatformModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"],
                ngx_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"],
                ngx_rating__WEBPACK_IMPORTED_MODULE_6__["RatingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_11__["SlickCarouselModule"]
                //ModalGalleryModule.forRoot() // <-------------------------------------------- angular-modal-gallery module import
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.settings.ts":
/*!*********************************!*\
  !*** ./src/app/app.settings.ts ***!
  \*********************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    AppSettings.BASE_PATH = 'http://admin-mrpro.mrpro.pe/api/';
    // public static BASE_PATH = 'http://localhost:4028/';
    AppSettings.GUEST_CREATE_USER = 'guest/user/client';
    AppSettings.GUEST_GET_PROVIDERS = 'guest/providers';
    AppSettings.GUEST_GET_DISTRICTS = 'guest/districts';
    AppSettings.GUEST_GET_CATEGORIES = 'guest/categories';
    AppSettings.LOGIN_USER_EMAIL = 'oauth/token';
    AppSettings.CLIENT_SEND_BUDGET = 'client/send/budget';
    AppSettings.CURRENT_USER = 'oauth/current/user';
    return AppSettings;
}());



/***/ }),

/***/ "./src/app/platform/components/banner/banner.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/platform/components/banner/banner.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/platform/components/banner/banner.component.html":
/*!******************************************************************!*\
  !*** ./src/app/platform/components/banner/banner.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  banner works!\n</p>\n"

/***/ }),

/***/ "./src/app/platform/components/banner/banner.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/platform/components/banner/banner.component.ts ***!
  \****************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/platform/components/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/platform/components/banner/banner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/platform/components/contact/contact.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/platform/components/contact/contact.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/platform/components/contact/contact.component.html":
/*!********************************************************************!*\
  !*** ./src/app/platform/components/contact/contact.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ptfm-header></ptfm-header>\n<div class=\"body\">\n\t<section class=\"graysoft\">\n\t\t<div class=\"box-mh box-mg-micro\">\n\t\t\t<h5>Contacto</h5>\n\t\t</div>\n\t</section>\n\t<section>\n\t\t<div class=\"box-mh box-mg-small\">\n\t\t\t<div class=\"row row-start\">\n\t\t\t\t<div class=\"col-md-4 white box-mg-micro\">\n\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t<h5>Contact Information</h5>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mg-t-medium\">\n\t\t\t\t\t\t<p>Visit Our Company at</p>\n\t\t\t\t\t\t<p>Address: 4578 Marmora Road, Glasgow</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mg-t-medium\">\n\t\t\t\t\t\t<p>Have a Questions? Call us</p>\n\t\t\t\t\t\t<p><a href=\"tel:7194452808\">(719) 445-2808</a>;   <a href=\"tel:7194452809\">(719) 445-2809</a></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mg-t-medium\">\n\t\t\t\t\t\t<p>Working Time</p>\n\t\t\t\t\t\t<p>Our support available to help you24 hours\n\t\t\t\t\t\ta day, seven days a week.\n\t\t\t\t\t\tMonday–Friday: 08:00–18:00\n\t\t\t\t\t\tSaturday: 08:00–16:00\n\t\t\t\t\t\tSunday: Close</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mg-t-medium\">\n\t\t\t\t\t\t<p>Contact with Us</p>\n\t\t\t\t\t\t<p>E-mail: <a href=\"mailto:info@demolink.org\">info@demolink.org</a></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-8 white box-mg-micro\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h5>Feedback form contact with us</h5>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mg-t-small\">\n\t\t\t\t\t\t<p>If you’d like a free consultation, please start by completing the form:</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mg-t-small\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<h5>Tu nombre</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mg-t-micro card-sesion\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<input type=\"\" name=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"mg-t-small\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<h5>Tu email</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mg-t-micro card-sesion\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<input type=\"\" name=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"mg-t-small\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<h5>Servicio</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mg-t-micro card-sesion\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<input type=\"\" name=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"mg-t-small\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<h5>Tu mensaje</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mg-t-micro card-sesion\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<textarea></textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\n\t\t\t\t\t<div class=\"mg-t-small card-sesion\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<button (click)=\"send()\" class=\"btn btn-primary mg-t-medium\">Enviar</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</div>\n<ptfm-footer></ptfm-footer>"

/***/ }),

/***/ "./src/app/platform/components/contact/contact.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/platform/components/contact/contact.component.ts ***!
  \******************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.send = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/platform/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/platform/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/platform/components/error-page/error-page.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/platform/components/error-page/error-page.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/platform/components/error-page/error-page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/platform/components/error-page/error-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  error-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/platform/components/error-page/error-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/platform/components/error-page/error-page.component.ts ***!
  \************************************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
    };
    ErrorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/platform/components/error-page/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.css */ "./src/app/platform/components/error-page/error-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/platform/components/footer/footer.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/platform/components/footer/footer.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/platform/components/footer/footer.component.html":
/*!******************************************************************!*\
  !*** ./src/app/platform/components/footer/footer.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n\t<section class=\"blue\">\n\t\t<div class=\"box-mh\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4 row box-mg-micro\">\n\t\t\t\t\t<div class=\"circle circle-small white box-mg-h-micro\">\n\t\t\t\t\t\t<i class=\"fa fa-phone icon\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<p>Phone:</p>\n\t\t\t\t\t\t<p>(719) 445-2808;   (719) 445-2809</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 row box-mg-micro\">\n\t\t\t\t\t<div class=\"circle circle-small white box-mg-h-micro\">\n\t\t\t\t\t\t<i class=\"fa fa-map icon\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<p>Address:</p>\n\t\t\t\t\t\t<p>4578 Marmora Road, Glasgow</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 row box-mg-micro\">\n\t\t\t\t\t<div class=\"circle circle-small white box-mg-h-micro\">\n\t\t\t\t\t\t<i class=\"fa fa-envelope icon\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<p>E-mail:</p>\n\t\t\t\t\t\t<a class=\"color-white\" href=\"mailto:info@demolink.org\">info@demolink.org</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section class=\"darksoft\">\n\t\t<div class=\"box-mh box-mg-nano color-whitesdark\">\n\t\t\tAll Rights Reserved Privacy Policy | © Mr Pro\n\t\t</div>\n\t</section>\n</footer>"

/***/ }),

/***/ "./src/app/platform/components/footer/footer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/platform/components/footer/footer.component.ts ***!
  \****************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ptfm-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/platform/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/platform/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/platform/components/header/header.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/platform/components/header/header.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/platform/components/header/header.component.html":
/*!******************************************************************!*\
  !*** ./src/app/platform/components/header/header.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n\t<section class=\"box-mh\">\n\t\t<div class=\"principal row row-justifycon\">\n\t\t\t<img src=\"assets/images/logo.png\">\n\t\t\t<div>\n\t\t\t\t<p>Llámanos:</p>\n\t\t\t\t<h5>(+51) 999999999</h5>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<section class=\"blue\">\n\t\t<div class=\"row box-mh\">\n\t\t\t<div class=\"col-md-8\">\n\t\t\t\t<ul class=\"menu row\">\n\t\t\t\t\t<li><a routerLink=\"/home\" routerLinkActive=\"active-link\">INICIO</a></li>\n\t\t\t\t\t<li><a routerLink=\"/reserva\" routerLinkActive=\"active-link\">SERVICIOS</a></li>\n\t\t\t\t\t<li><a routerLink=\"/contacto\" routerLinkActive=\"active-link\">CONTACTO</a></li>\n\t\t\t\t\t<li *ngIf=\"user && user.name\"><a routerLink=\"/reservado\" routerLinkActive=\"active-link\">RESERVADO</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div *ngIf=\"user && user.name\" class=\"box-user row\">\n\t\t\t\t\t<img src=\"{{user.image?user.image:'./assets/images/user.png'}}\" class=\"card-img\" alt=\"...\">\n\t\t\t\t\t<p>{{user.name}} | </p>\n\t\t\t\t\t<a class=\"color-white\" (click)=\"logout()\">Cerrar Sesión</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</header>"

/***/ }),

/***/ "./src/app/platform/components/header/header.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/platform/components/header/header.component.ts ***!
  \****************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/session.service */ "./src/app/services/session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(session, router) {
        this.session = session;
        this.router = router;
        this.user = {};
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.user = this.session.getObject('user');
    };
    HeaderComponent.prototype.logout = function () {
        this.session.destroy('user');
        this.user = {};
        this.router.navigate(['/home']);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ptfm-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/platform/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/platform/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/platform/components/home/home.component.css":
/*!*************************************************************!*\
  !*** ./src/app/platform/components/home/home.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/platform/components/home/home.component.html":
/*!**************************************************************!*\
  !*** ./src/app/platform/components/home/home.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ptfm-header></ptfm-header>\n<div class=\"body\">\n\t<section class=\"banner\">\n\t\t<div class=\"box-mh box-pd-h-small\">\n\t\t\t<h1 class=\"pd-t-medium\">WE WILL GLADLY FIX EVERYTHING THAT BROKE</h1>\n\t\t\t<p class=\"pd-t-small\">OUR MASTERS ARE READY TO LEAVE FOR YOU AT ANY TIME</p>\n\t\t\t<button routerLink=\"/reserva\" class=\"btn btn-primary mg-t-medium\">Agenda un servicio</button>\n\t\t</div>\n\t</section>\n\n\t<section class=\"box-out-center\">\n\t\t<div class=\"row box-mh row-end\">\n\t\t\t<div class=\"col-md-4 text-center box-hover white box-mg-small\">\n\t\t\t\t<div class=\"circle circle-small blue mg-auto\">\n\t\t\t\t\t<i class=\"fa fa-user icon\" aria-hidden=\"true\"></i>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"pd-t-small\">QUALITY ASSURANCE</h5>\n\t\t\t\t<p class=\"pd-t-small\">We always stand for doing our job fast and at the highest level as understand people value their time and money.</p>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4 text-center box-hover box-middle white box-mg-medium\">\n\t\t\t\t<div class=\"circle circle-small blue mg-auto\">\n\t\t\t\t\t<i class=\"fa fa-user icon\" aria-hidden=\"true\"></i>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"pd-t-small\">20 YEARS OF EXPERIENCE</h5>\n\t\t\t\t<p class=\"pd-t-small\">We are here to meet your every demand so you could have no worries about your home!</p>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4 text-center box-hover white box-mg-small\">\n\t\t\t\t<div class=\"circle circle-small blue mg-auto\">\n\t\t\t\t\t<i class=\"fa fa-user icon\" aria-hidden=\"true\"></i>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"pd-t-small\">ECONOMICALLY</h5>\n\t\t\t\t<p class=\"pd-t-small\">We offer a huge number of services and works done by high-class experts using the latest technologies.</p>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section>\n\t\t<div class=\"box-mh\">\n\t\t\t<h3 class=\"pd-t-large text-center\">ABOUT</h3>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4 text-center white box-mg-micro\">\n\t\t\t\t\t<div class=\"row row-center\">\n\t\t\t\t\t\t<div class=\"box-line mg-r-small\">\n\t\t\t\t\t\t\t<h2 class=\"absolute-miidle color-blue\">M</h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h2> OTIVATION</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"pd-t-small\">Forget about all your small and big house problems! Our experts will fix everything for you!</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 text-center white box-mg-micro\">\n\t\t\t\t\t<div class=\"row row-center\">\n\t\t\t\t\t\t<div class=\"box-line mg-r-small\">\n\t\t\t\t\t\t\t<h2 class=\"absolute-miidle color-blue\">H</h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h2> ISTORY</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"pd-t-small\">Our company offers a flexible discount system and a lot of special offers being beneficial for our clients.</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 text-center white box-mg-micro\">\n\t\t\t\t\t<div class=\"row row-center\">\n\t\t\t\t\t\t<div class=\"box-line mg-r-small\">\n\t\t\t\t\t\t\t<h2 class=\"absolute-miidle color-blue\">C</h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h2> ERTIFICATES</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"pd-t-small\">We totally meet technical requirements, specifications and all kind of binding standards.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t\t\n\t<section  class=\"what-we\">\n\t\t<div class=\"box-mh\">\n\t\t\t<h3 class=\"text-center\">WHAT WE DO?</h3>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"box-do\">\n\t\t\t\t\t\t<div class=\"header-box-do\">\n\t\t\t\t\t\t\t<div class=\"box-icon\">\n\t\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-bolt\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text-do\">\n\t\t\t\t\t\t\t\t<h3><a>PLUMBING WORK</a></h3>\n\t\t\t\t\t\t\t\t<p>Plumbing is such a sphere in our houses that requires some professional skills and manpower. We can offer you to resolve problems as we know everything about it.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"footer-box-do\">\n\t\t\t\t\t\t\t<a >VIEW DETAILS</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"box-do\">\n\t\t\t\t\t\t<div class=\"header-box-do\">\n\t\t\t\t\t\t\t<div class=\"box-icon\">\n\t\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-bolt\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text-do\">\n\t\t\t\t\t\t\t\t<h3><a>PLUMBING WORK</a></h3>\n\t\t\t\t\t\t\t\t<p>Plumbing is such a sphere in our houses that requires some professional skills and manpower. We can offer you to resolve problems as we know everything about it.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"footer-box-do\">\n\t\t\t\t\t\t\t<a >VIEW DETAILS</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t<div class=\"box-do\">\n\t\t\t\t\t\t<div class=\"header-box-do\">\n\t\t\t\t\t\t\t<div class=\"box-icon\">\n\t\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-bolt\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text-do\">\n\t\t\t\t\t\t\t\t<h3><a>PLUMBING WORK</a></h3>\n\t\t\t\t\t\t\t\t<p>Plumbing is such a sphere in our houses that requires some professional skills and manpower. We can offer you to resolve problems as we know everything about it.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"footer-box-do\">\n\t\t\t\t\t\t\t<a >VIEW DETAILS</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<section class=\"graysoft\">\n\t\t<div class=\"box-mh box-mg-medium text-center\">\n\t\t\t<h3 class=\"pd-t-medium\">IMPROVE YOUR ENVIRONMENT WITH US</h3>\n\t\t\t<p class=\"pd-t-small\">During our work we helped a huge number of people and have garnered a reputation as a stable company with a team of real skilled experts who don’t fear any difficulties.</p>\n\t\t\t<button routerLink=\"/contacto\" class=\"btn btn-primary mg-t-medium\">Contáctanos</button>\n\t\t</div>\n\t</section>\n\t<section class=\"testimonials\">\n\t\t<div class=\"box-mh\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6 text-test\">\n\t\t\t\t\t<h3 class=\"\">TESTIMONIALS</h3>\n\t\t\t\t\t<ngx-slick-carousel class=\"carousel\" \n                        #slickModal=\"slick-carousel\" \n                        [config]=\"slideConfig\" \n                        (init)=\"slickInit($event)\"\n                        (breakpoint)=\"breakpoint($event)\"\n                        (afterChange)=\"afterChange($event)\"\n                        (beforeChange)=\"beforeChange($event)\">\n\t\t\t\t        <div ngxSlickItem  class=\"slide\">\n\t\t\t\t\t\t\t<div class=\"box-slick\">\n\t\t\t\t\t\t\t\t<div class=\"header-test\">\n\t\t\t\t\t\t\t\t\t<div class=\"d-table\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"box-image-test\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"../../../../assets/images/testi-2.jpg\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"box-name-test\">\n\t\t\t\t\t\t\t\t\t\t\t<h4><strong>Emma Stoun</strong></h4>\n\t\t\t\t\t\t\t\t\t\t\t<p><span>Designer</span></p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"text-test\">\n\t\t\t\t\t\t\t\t\t<p>Flexor is indeed a team of experts! Their Customer Service representative helped to select the correct service and the team came so quick! They are great and I’m totally pleased with their work!</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>             \n\t\t\t\t        </div>\n\t\t\t\t        <div ngxSlickItem  class=\"slide\">\n\t\t\t\t\t\t\t<div class=\"box-slick\">\n\t\t\t\t\t\t\t\t<div class=\"header-test\">\n\t\t\t\t\t\t\t\t\t<div class=\"d-table\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"box-image-test\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"../../../../assets/images/testi-1.jpg\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"box-name-test\">\n\t\t\t\t\t\t\t\t\t\t\t<h4><strong>Emma Stoun</strong></h4>\n\t\t\t\t\t\t\t\t\t\t\t<p><span>Designer</span></p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"text-test\">\n\t\t\t\t\t\t\t\t\t<p>Flexor is indeed a team of experts! Their Customer Service representative helped to select the correct service and the team came so quick! They are great and I’m totally pleased with their work!</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>             \n\t\t\t\t        </div>\n\t\t\t\t    </ngx-slick-carousel>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 why-us\">\n\t\t\t\t\t<h3 class=\"\">WHY US?</h3>\n\t\t\t\t\t<h4>Because We Are Very Flexible</h4>\n\t\t\t\t\t<p class=\"mb-3\">Mauris accumsan eros eget libero posuere vulputate.\n\t\t\t\t\t\tEtiam elit elit, elementum sed varius at, adipiscing vitae est.\n\t\t\t\t\t\tSed nec felis pellentesque, lacinia dui sed, ultricies sapien.</p>\n\t\t\t\t\t<p class=\"mb-3\">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.</p>\n\t\t\t\t\t<p class=\"mb-3\">Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</div>\n<ptfm-footer></ptfm-footer>"

/***/ }),

/***/ "./src/app/platform/components/home/home.component.ts":
/*!************************************************************!*\
  !*** ./src/app/platform/components/home/home.component.ts ***!
  \************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.slides = [
            { img: "http://placehold.it/350x150/000000" },
            { img: "http://placehold.it/350x150/111111" },
            { img: "http://placehold.it/350x150/333333" },
            { img: "http://placehold.it/350x150/666666" },
            { img: "http://placehold.it/350x150/666666" },
            { img: "http://placehold.it/350x150/666666" },
            { img: "http://placehold.it/350x150/666666" },
            { img: "http://placehold.it/350x150/666666" }
        ];
        this.slideConfig = { "slidesToShow": 1, "slidesToScroll": 1, "dots": true };
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.addSlide = function () {
        this.slides.push({ img: "http://placehold.it/350x150/777777" });
    };
    HomeComponent.prototype.removeSlide = function () {
        this.slides.length = this.slides.length - 1;
    };
    HomeComponent.prototype.slickInit = function (e) {
        console.log('slick initialized');
    };
    HomeComponent.prototype.breakpoint = function (e) {
        console.log('breakpoint');
    };
    HomeComponent.prototype.afterChange = function (e) {
        console.log('afterChange');
    };
    HomeComponent.prototype.beforeChange = function (e) {
        console.log('beforeChange');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/platform/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/platform/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/platform/components/login/login.component.css":
/*!***************************************************************!*\
  !*** ./src/app/platform/components/login/login.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/platform/components/login/login.component.html":
/*!****************************************************************!*\
  !*** ./src/app/platform/components/login/login.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ptfm-header></ptfm-header>\n<div class=\"\">\n\t<section class=\"box-mh row row-center\">\n\t\t<div class=\"col-md-4 card mg-t-small card-sesion\">\n\t\t\t<div class=\"mg-t-small card-title\">\n\t\t\t\t<h5>Iniciar Sesión</h5>\n\t\t\t</div>\n\t\t\t<div class=\"divider\"></div>\n\n\t\t\t<!-- <button class=\"btn bfacebook\" (click)=\"socialSignIn('facebook')\">Iniciar sesión con Facebook</button> -->\n\t\t\t<button class=\"btn bfacebook\" (click)=\"login(myModal, 'facebook')\" disabled>Iniciar sesión con Facebook</button>\n\t\t\t\t\n\t\t\t<div class=\"text-center\">o</div>\n\n\t\t\t<!-- <button class=\"btn bgoogle\" (click)=\"socialSignIn('google')\">Iniciar sesión con Google</button> -->\n\t\t\t<button class=\"btn bgoogle\" (click)=\"login(myModal, 'facebook')\" disabled>Iniciar sesión con Google</button>\n\n\t\t\t<div class=\"text-center\">o</div>\n\n\t\t\t<form class=\"form text-center\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"email\" [(ngModel)]=\"user.username\" placeholder=\"Correo electrónico\" name=\"email\" required=\"true\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Contraseña\" name=\"password\">\n\t\t\t\t</div>\n\t\t\t\t<button (click)=\"login(myModal)\" class=\"btn bprimary\">INGRESAR</button>\n\t\t\t</form>\n\t\t\t<div class=\"divider\"></div>\n\t\t\t\n\t\t\t<div class=\"row row-justifycon\">\n\t\t\t\t¿No tienes cuenta?\n\t\t\t\t<button routerLink=\"/registro\" class=\"btn btn-outprimary\">Registrarte</button>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</div>\n\n<modal #myModal>\n    <modal-content>\n    \t<div class=\"error\">\n    \t\t<div class=\"icon\">\n    \t\t\t<i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n    \t\t</div>\n        \t<h4>{{message}}</h4>\n    \t</div>\n    </modal-content>        \n</modal>"

/***/ }),

/***/ "./src/app/platform/components/login/login.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/platform/components/login/login.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(socialAuthService, router, route, session, generalS, userS, spinner) {
        this.socialAuthService = socialAuthService;
        this.router = router;
        this.route = route;
        this.session = session;
        this.generalS = generalS;
        this.userS = userS;
        this.spinner = spinner;
        this.user = {
            username: '',
            password: '',
            grant_type: 'password',
            client_id: 2,
            client_secret: 'KXDDEOHhgVNokuKgF9jpHmrJPWBcgqABxaAU3ktb',
        };
        this.message = '';
        this.data = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        var user = this.session.getObject('userlogin');
        if (user && user.name) {
            this.user.username = user.email;
            this.user.password = user.password;
            this.login();
        }
    };
    LoginComponent.prototype.socialSignIn = function (socialPlatform) {
        var socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_5__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "linkedin") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_5__["LinkedinLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            console.log(socialPlatform + " sign in data : ", userData);
            // Now sign-in with userData
            // ...
        });
    };
    LoginComponent.prototype.login = function (myModal, social) {
        var _this = this;
        if (myModal === void 0) { myModal = null; }
        if (social === void 0) { social = null; }
        if (social == 'facebook') {
            this.user.username = 'facebook';
            this.user.password = 'facebook';
        }
        else if (social == 'google') {
            this.user.username = 'google';
            this.user.password = 'google';
        }
        if (!this.user.username || !this.user.password) {
            this.message = 'Campos incompletos';
            myModal.open();
            return;
        }
        if (this.session.getObject('userlogin')) {
            this.session.destroy('userlogin');
        }
        this.spinner.show();
        this.generalS.login(this.user)
            .subscribe(function (response) {
            _this.session.setObject('token', response);
            _this.userS.getCurrentUser()
                .subscribe(function (response) {
                console.log(response);
                _this.session.setObject('user', response.data.user);
                _this.router.navigate(['/pedir-propuesta']);
                _this.spinner.hide();
            });
            // this.router.navigate(['/reservado']);
        }, function (error) {
            console.log(error);
            _this.message = 'Usuario y/o contraseña incorrectos';
            myModal.open();
            _this.spinner.hide();
        });
        // this.session.setObject('user', {
        // 	firstname: 'User 1',
        // 	lastname: 'Mc Pro',
        // 	username: 'user1',
        // 	image: 'user.png'
        // })
        // this.router.navigate(['/reservado']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/platform/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/platform/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [angular_6_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"],
            _services_general_service__WEBPACK_IMPORTED_MODULE_4__["GeneralService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/platform/components/providers/providers.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/platform/components/providers/providers.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/platform/components/providers/providers.component.html":
/*!************************************************************************!*\
  !*** ./src/app/platform/components/providers/providers.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ptfm-header></ptfm-header>\n<div class=\"row row-start\">\n\t<div class=\"col-md-12 min-h-window graysoft\">\n\t\t<section class=\"box-mh\">\n\t\t\t<div class=\"box-mg-nano\">\n\t\t\t\t{{providers.length}} Profesional{{providers.length == 1?'': 'es'}}\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6 mg-t-small\" *ngFor=\"let provider of providers\">\n\t\t\t\t\t<div class=\"card card-provider\">\n\t\t\t\t\t\t<div class=\"row no-gutters box-mg-nano\">\n\t\t\t\t\t\t    <div class=\"col-4 image-provider\">\n\t\t\t\t\t\t      <img src=\"./assets/images/{{provider.image}}\" class=\"card-img\" alt=\"...\">\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t    <div class=\"col-8\">\n\t\t\t\t\t\t      <div class=\"card-body\">\n\t\t\t\t\t\t        <h5 class=\"\">{{provider.name}}</h5>\n\t\t\t\t\t\t        <span>{{provider.rating}} </span><rating [(ngModel)]=\"provider.rating\" \n\t\t\t\t\t\t\t        [readonly]=\"true\"></rating>\n\t\t\t\t\t\t        <p class=\"card-text\"><small class=\"text-muted\">{{provider.success}} servicios realizados</small></p>\n\t\t\t\t\t\t        <p class=\"card-text\"><small class=\"text-muted\">{{provider.experience}} años de experiencia</small></p>\n\t\t\t\t\t\t      </div>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t    <div class=\"buttons-provider col-md-12 row row-justifycon\">\n\t\t\t\t\t\t    \t<button class=\"btn color-blue\">Ver ficha</button>\n\t\t\t\t\t\t    \t<button (click)=\"schedule()\" class=\"btn btn-danger\">Cancelar</button>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t</div>\n</div>\n<ptfm-footer></ptfm-footer>"

/***/ }),

/***/ "./src/app/platform/components/providers/providers.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/platform/components/providers/providers.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProvidersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersComponent", function() { return ProvidersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProvidersComponent = /** @class */ (function () {
    function ProvidersComponent(router) {
        this.router = router;
        this.serviceSearch = {
            type: 'programmed',
            category: 'Gasfitería',
            day: '2019-07-10',
            hour: '08:00 am'
        };
        this.allProviders = [
            {
                name: 'Luis Cardenas',
                category: 'Gasfitería',
                rating: 4.0,
                success: 41,
                criminalrecord: true,
                policerecord: true,
                judicialrecord: true,
                phone: '999999999',
                type_cedula: 'DNI',
                cedula: '77889955',
                certified: true,
                image: 'provider.png',
                experience: 4,
            },
            {
                name: 'Amelia Contreras',
                category: 'Lavandería',
                rating: 3.5,
                success: 41,
                criminalrecord: true,
                policerecord: true,
                judicialrecord: true,
                phone: '999999999',
                type_cedula: 'DNI',
                cedula: '25632152',
                certified: true,
                image: 'provider2.png',
                experience: 3,
            },
            {
                name: 'Sara Cruz',
                category: 'Lavandería',
                rating: 4.5,
                success: 25,
                criminalrecord: true,
                policerecord: true,
                judicialrecord: true,
                phone: '999999999',
                type_cedula: 'DNI',
                cedula: '65413321',
                certified: true,
                image: 'provider.png',
                experience: 5,
            },
            {
                name: 'Armando Pozo',
                category: 'Carpintería',
                rating: 5.0,
                success: 16,
                criminalrecord: true,
                policerecord: true,
                judicialrecord: true,
                phone: '999999999',
                type_cedula: 'DNI',
                cedula: '14785236',
                certified: true,
                image: 'provider2.png',
                experience: 2,
            }
        ];
        this.providers = [];
    }
    ProvidersComponent.prototype.ngOnInit = function () {
        this.categoryChanged('Gasfitería');
    };
    ProvidersComponent.prototype.categoryChanged = function (event) {
        console.log(event);
        this.providers = this.allProviders.filter(function (item) { return item.category == event; });
    };
    ProvidersComponent.prototype.schedule = function () {
        // this.router.navigate(['/ingresar']);
    };
    ProvidersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-providers',
            template: __webpack_require__(/*! ./providers.component.html */ "./src/app/platform/components/providers/providers.component.html"),
            styles: [__webpack_require__(/*! ./providers.component.css */ "./src/app/platform/components/providers/providers.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProvidersComponent);
    return ProvidersComponent;
}());



/***/ }),

/***/ "./src/app/platform/components/register-email/register-email.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/platform/components/register-email/register-email.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/platform/components/register-email/register-email.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/platform/components/register-email/register-email.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ptfm-header></ptfm-header>\n<div class=\"\">\n\t<section class=\"box-mh row row-center\">\n\t\t<div class=\"col-md-4 card mg-t-small card-sesion\">\n\t\t\t<div class=\"mg-t-small card-title\">\n\t\t\t\t<h5>Crear una cuenta</h5>\n\t\t\t</div>\n\t\t\t<div class=\"divider\"></div>\n\n\t\t\t<form class=\"form\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input [(ngModel)]=\"user.name\" type=\"text\" placeholder=\"Nombre\" name=\"firstname\" required=\"true\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input [(ngModel)]=\"user.lastname\" type=\"text\" placeholder=\"Apellido\" name=\"lastname\" required=\"true\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input [(ngModel)]=\"user.phone\" (keypress)=\"onlydigit($event)\" type=\"text\" placeholder=\"Celular\" name=\"phone\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input [(ngModel)]=\"user.email\" type=\"email\" placeholder=\"Correo electrónico\" name=\"email\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input [(ngModel)]=\"user.password\" type=\"password\" placeholder=\"Contraseña\" name=\"password\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input [(ngModel)]=\"user.password_confirmation\" type=\"password\" placeholder=\"Confirmar contraseña\" name=\"password_confirmation\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input [(ngModel)]=\"user.cpolicy\" class=\"check\" type=\"checkbox\" placeholder=\"Contraseña\" name=\"cpolicy\"> Acepto <strong class=\"color-blue\">Política de privacidad</strong>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input [(ngModel)]=\"user.cconditions\" class=\"check\" type=\"checkbox\" placeholder=\"Contraseña\" name=\"cconditions\"> Acepto <strong class=\"color-blue\">Términos y condiciones</strong>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t\t\t<button (click)=\"login(myModal)\" class=\"btn bprimary\">Crear mi cuenta</button>\n\t\t\t<div class=\"divider\"></div>\n\t\t\t\n\t\t\t<div class=\"row row-justifycon\">\n\t\t\t\t¿Ya tienes cuenta?\n\t\t\t\t<button routerLink=\"/ingresar\" class=\"btn btn-outprimary\">Inicia sesión</button>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</div>\n\n<modal #myModal>\n    <modal-content>\n    \t<div class=\"error\">\n    \t\t<div class=\"icon\">\n    \t\t\t<i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n    \t\t</div>\n        \t<h4>{{message}}</h4>\n    \t</div>\n    </modal-content>        \n</modal>"

/***/ }),

/***/ "./src/app/platform/components/register-email/register-email.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/platform/components/register-email/register-email.component.ts ***!
  \********************************************************************************/
/*! exports provided: RegisterEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterEmailComponent", function() { return RegisterEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterEmailComponent = /** @class */ (function () {
    function RegisterEmailComponent(session, spinner, router, userService) {
        this.session = session;
        this.spinner = spinner;
        this.router = router;
        this.userService = userService;
        this.user = {
            email: '',
            name: '',
            lastname: '',
            phone: '',
            password: '',
            password_confirmation: '',
            image: '',
            cpolicy: false,
            cconditions: false,
        };
        this.message = '';
    }
    RegisterEmailComponent.prototype.ngOnInit = function () {
    };
    RegisterEmailComponent.prototype.login = function (myModal) {
        var _this = this;
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (this.user.email && !re.test(this.user.email)) {
            this.message = 'Correo incorrecto';
            myModal.open();
            return;
        }
        if (!this.user.email || !this.user.name || !this.user.lastname || !this.user.phone || !this.user.password) {
            this.message = 'Campos incompletos';
            myModal.open();
            return;
        }
        if (this.user.password != this.user.password_confirmation) {
            this.message = 'Contraseñas diferentes';
            myModal.open();
            return;
        }
        if (!this.user.cpolicy) {
            this.message = 'Acepta las políticas de privacidad';
            myModal.open();
            return;
        }
        if (!this.user.cconditions) {
            this.message = 'Acepta los términos y condiciones';
            myModal.open();
            return;
        }
        if (!this.user.image) {
            delete this.user.image;
        }
        this.spinner.show();
        this.userService.guestCreateUser(this.user)
            .subscribe(function (response) {
            console.log(response);
            _this.spinner.hide();
            _this.session.setObject('userlogin', _this.user);
            _this.router.navigate(['/ingresar']);
        }, function (error) {
            console.log(error);
            if (error.error && error.error.data && error.error.data.email && error.error.data.email.length) {
                _this.message = 'El correo electrónico ya está registrado';
                myModal.open();
                _this.spinner.hide();
                return;
            }
        });
    };
    RegisterEmailComponent.prototype.onlydigit = function (e) {
        var tecla;
        var patron;
        var tecla_final;
        tecla = (document.all) ? e.keyCode : e.which;
        if (tecla == 8) {
            return true;
        }
        patron = /[0-9.]/;
        tecla_final = String.fromCharCode(tecla);
        return patron.test(tecla_final);
    };
    RegisterEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-email',
            template: __webpack_require__(/*! ./register-email.component.html */ "./src/app/platform/components/register-email/register-email.component.html"),
            styles: [__webpack_require__(/*! ./register-email.component.css */ "./src/app/platform/components/register-email/register-email.component.css")]
        }),
        __metadata("design:paramtypes", [_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], RegisterEmailComponent);
    return RegisterEmailComponent;
}());



/***/ }),

/***/ "./src/app/platform/components/registro/registro.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/platform/components/registro/registro.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/platform/components/registro/registro.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/platform/components/registro/registro.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ptfm-header></ptfm-header>\n<div class=\"\">\n\t<section class=\"box-mh row row-center\">\n\t\t<div class=\"col-md-4 card mg-t-small card-sesion\">\n\t\t\t<div class=\"mg-t-small card-title\">\n\t\t\t\t<h5>Crea tu cuenta</h5>\n\t\t\t</div>\n\t\t\t<div class=\"divider\"></div>\n\t\t\t<p>Si aún no tienes una cuenta puedes crearla:</p>\n\t\t\t<!-- <button (click)=\"socialSignIn('facebook')\" class=\"btn bfacebook\">Registrandote con Facebook</button> -->\n\t\t\t<button (click)=\"login(myModal)\" class=\"btn bfacebook\" disabled>Registrandote con Facebook</button>\n\t\t\t\t\n\t\t\t<div class=\"text-center\">o</div>\n\n\t\t\t<!-- <button (click)=\"socialSignIn('google')\" class=\"btn bgoogle\">Registrandote con Google</button> -->\n\t\t\t<button (click)=\"login(myModal)\" class=\"btn bgoogle\" disabled>Registrandote con Google</button>\n\n\t\t\t<div class=\"text-center\">o</div>\n\n\t\t\t<button routerLink=\"/registro/mail\" class=\"btn bprimary\">Registrandote con tu correo</button>\n\n\t\t\t<div class=\"divider\"></div>\n\t\t\t\n\t\t\t<div class=\"row row-justifycon\">\n\t\t\t\t¿Ya tienes cuenta?\n\t\t\t\t<button routerLink=\"/ingresar\" class=\"btn btn-outprimary\">Inicia sesión</button>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</div>\n\n<modal #myModal>\n    <modal-content>\n    \t<div class=\"error\">\n    \t\t<div class=\"icon\">\n    \t\t\t<i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n    \t\t</div>\n        \t<h4>{{message}}</h4>\n    \t</div>\n    </modal-content>        \n</modal>"

/***/ }),

/***/ "./src/app/platform/components/registro/registro.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/platform/components/registro/registro.component.ts ***!
  \********************************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistroComponent = /** @class */ (function () {
    function RegistroComponent(socialAuthService, spinner, router, session) {
        this.socialAuthService = socialAuthService;
        this.spinner = spinner;
        this.router = router;
        this.session = session;
        this.user = {
            username: 'user1',
            password: 'user1',
        };
        this.message = '';
    }
    RegistroComponent.prototype.ngOnInit = function () {
    };
    RegistroComponent.prototype.socialSignIn = function (socialPlatform) {
        var socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "linkedin") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["LinkedinLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            console.log(socialPlatform + " sign in data : ", userData);
            // Now sign-in with userData
            // ...
        });
    };
    RegistroComponent.prototype.login = function (myModal) {
        if (!this.user.username || !this.user.password) {
            this.message = 'Campos incompletos';
            myModal.open();
            return;
        }
        this.session.setObject('user', {
            firstname: 'User 1',
            lastname: 'Mc Pro',
            username: 'user1',
            image: 'user.png'
        });
        this.router.navigate(['/reservado']);
    };
    RegistroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! ./registro.component.html */ "./src/app/platform/components/registro/registro.component.html"),
            styles: [__webpack_require__(/*! ./registro.component.css */ "./src/app/platform/components/registro/registro.component.css")]
        }),
        __metadata("design:paramtypes", [angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], RegistroComponent);
    return RegistroComponent;
}());



/***/ }),

/***/ "./src/app/platform/components/select-provider/select-provider.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/platform/components/select-provider/select-provider.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/platform/components/select-provider/select-provider.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/platform/components/select-provider/select-provider.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ptfm-header></ptfm-header>\n<div class=\"row row-start\">\n\t<div class=\"white col-md-4 min-h-window\">\n\t\t<section class=\"box-mh\">\n\t\t\t<form class=\"form row\">\n\t\t\t\t<div class=\"form-group w-100\">\n\t\t\t\t\t<h5 class=\"color-blue\">Tipo de Servicio</h5>\n\t\t\t\t\t<div class=\"select w-100\">\n\t\t\t\t\t\t<select class=\"w-100 color-blue\" [(ngModel)]=\"serviceSearch.type\" name=\"type\">\n\t\t\t\t\t\t\t<option value=\"programmed\">Programado</option>\n\t\t\t\t\t\t\t<option value=\"immediate\">Inmediato</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group w-100\">\n\t\t\t\t\t<h5 class=\"color-blue\">Distrito</h5>\n\t\t\t\t\t<div class=\"select w-100\">\n\t\t\t\t\t\t<select class=\"w-100 color-blue\" [(ngModel)]=\"serviceSearch.district\" (change)=\"categoryChanged()\" style=\"width: initial\" name=\"district\">\n\t\t\t\t\t\t\t<option *ngFor=\"let district of districts\" [value]=\"district.id\">{{district.name}}</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"serviceSearch.type == 'programmed'\" class=\"form-group w-100\">\n\t\t\t\t\t<h5 class=\"color-blue\">Fecha y hora del servicio</h5>\n\t\t\t\t\t<div class=\"select row w-100\">\n\t\t\t\t\t\t<input class=\"color-blue\" [(ngModel)]=\"serviceSearch.date\" type=\"date\" name=\"date\">\n\t\t\t\t\t\t<select class=\"color-blue\" [(ngModel)]=\"serviceSearch.hour\" style=\"width: initial\" name=\"hour\">\n\t\t\t\t\t\t\t<option>08:00:00</option>\n\t\t\t\t\t\t\t<option>09:00:00</option>\n\t\t\t\t\t\t\t<option>10:00:00</option>\n\t\t\t\t\t\t\t<option>11:00:00</option>\n\t\t\t\t\t\t\t<option>12:00:00</option>\n\t\t\t\t\t\t\t<option>13:00:00</option>\n\t\t\t\t\t\t\t<option>14:00:00</option>\n\t\t\t\t\t\t\t<option>15:00:00</option>\n\t\t\t\t\t\t\t<option>16:00:00</option>\n\t\t\t\t\t\t\t<option>17:00:00</option>\n\t\t\t\t\t\t\t<option>18:00:00</option>\n\t\t\t\t\t\t\t<option>19:00:00</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group w-100\">\n\t\t\t\t\t<h5 class=\"color-blue\">Categoría</h5>\n\t\t\t\t\t<div class=\"select w-100\">\n\t\t\t\t\t\t<select class=\"w-100 color-blue\" [(ngModel)]=\"serviceSearch.category\" (change)=\"categoryChanged()\" style=\"width: initial\" name=\"category\">\n\t\t\t\t\t\t\t<option *ngFor=\"let category of categories\" [value]=\"category.id\">{{category.name}}</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group w-100\">\n\t\t\t\t\t<h5 class=\"color-blue\">Sub Categoría</h5>\n\t\t\t\t\t<div class=\"select w-100\">\n\t\t\t\t\t\t<select class=\"w-100 color-blue\" [(ngModel)]=\"serviceSearch.subcategory\" style=\"width: initial\" name=\"subcategory\">\n\t\t\t\t\t\t\t<option *ngFor=\"let subcategory of subCategories\" [value]=\"subcategory.id\">{{subcategory.name}}</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</section>\n\t</div>\n\n\t<div class=\"col-md-8 min-h-window graysoft\">\n\t\t<section class=\"box-mh\">\n\t\t\t<div class=\"box-mg-nano\">\n\t\t\t\t{{providers.length}} Profesional{{providers.length == 1?'': 'es'}}\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6 mg-t-small\" *ngFor=\"let provider of providers\">\n\t\t\t\t\t<div class=\"card card-provider\">\n\t\t\t\t\t\t<div class=\"row no-gutters box-mg-nano\">\n\t\t\t\t\t\t    <div class=\"col-4 image-provider\">\n\t\t\t\t\t\t      <img src=\"{{provider.user.image?provider.user.image:'./assets/images/provider.png'}}\" class=\"card-img\" alt=\"...\">\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t    <div class=\"col-8\">\n\t\t\t\t\t\t      <div class=\"card-body\">\n\t\t\t\t\t\t        <h5 class=\"\">{{provider.user.name}}</h5>\n\t\t\t\t\t\t        <span>{{provider.rating}} </span><rating [(ngModel)]=\"provider.rating\" \n\t\t\t\t\t\t\t        [readonly]=\"true\"></rating>\n\t\t\t\t\t\t        <p class=\"card-text\"><small class=\"text-muted\">{{provider.success}} servicios realizados</small></p>\n\t\t\t\t\t\t        <p class=\"card-text\"><small class=\"text-muted\">{{provider.experience}} años de experiencia</small></p>\n\t\t\t\t\t\t      </div>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t    <div class=\"buttons-provider col-md-12 row row-justifycon\">\n\t\t\t\t\t\t    \t<button class=\"btn color-blue\">Ver ficha</button>\n\t\t\t\t\t\t    \t<button (click)=\"schedule(myModal, provider)\" class=\"btn bprimary\">Agendar</button>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t</div>\n</div>\n<ptfm-footer></ptfm-footer>\n\n<modal #myModal>\n    <modal-content>\n    \t<div class=\"error text-center\">\n    \t\t<div class=\"icon\">\n    \t\t\t<i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>\n    \t\t</div>\n        \t<h4>{{message}}</h4>\n\t\t\t<br>\n        \t<button (click)=\"goReserved()\" class=\"btn bprimary\">Ir a reservados</button>\n    \t</div>\n    </modal-content>        \n</modal>"

/***/ }),

/***/ "./src/app/platform/components/select-provider/select-provider.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/platform/components/select-provider/select-provider.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SelectProviderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectProviderComponent", function() { return SelectProviderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_district_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/district.service */ "./src/app/services/district.service.ts");
/* harmony import */ var _services_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/provider.service */ "./src/app/services/provider.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SelectProviderComponent = /** @class */ (function () {
    function SelectProviderComponent(router, spinner, session, userS, categoryS, districtS, providerS) {
        this.router = router;
        this.spinner = spinner;
        this.session = session;
        this.userS = userS;
        this.categoryS = categoryS;
        this.districtS = districtS;
        this.providerS = providerS;
        this.serviceSearch = {
            type: 'programmed',
            category: 1,
            subcategory: 6,
            district: 1,
            date: '2019-07-10',
            hour: '08:00:00',
            provider_name: '',
            provider: 0,
        };
        this.allProviders = [
            {
                name: 'Luis Cardenas',
                category: 'Gasfitería',
                rating: 4.0,
                success: 41,
                criminalrecord: true,
                policerecord: true,
                judicialrecord: true,
                phone: '999999999',
                type_cedula: 'DNI',
                cedula: '77889955',
                certified: true,
                image: 'provider.png',
                experience: 4,
            },
            {
                name: 'Amelia Contreras',
                category: 'Lavandería',
                rating: 3.5,
                success: 41,
                criminalrecord: true,
                policerecord: true,
                judicialrecord: true,
                phone: '999999999',
                type_cedula: 'DNI',
                cedula: '25632152',
                certified: true,
                image: 'provider2.png',
                experience: 3,
            },
            {
                name: 'Sara Cruz',
                category: 'Lavandería',
                rating: 4.5,
                success: 25,
                criminalrecord: true,
                policerecord: true,
                judicialrecord: true,
                phone: '999999999',
                type_cedula: 'DNI',
                cedula: '65413321',
                certified: true,
                image: 'provider.png',
                experience: 5,
            },
            {
                name: 'Armando Pozo',
                category: 'Carpintería',
                rating: 5.0,
                success: 16,
                criminalrecord: true,
                policerecord: true,
                judicialrecord: true,
                phone: '999999999',
                type_cedula: 'DNI',
                cedula: '14785236',
                certified: true,
                image: 'provider2.png',
                experience: 2,
            }
        ];
        this.providers = [];
        this.allcategories = [];
        this.districts = [];
        this.categories = [];
        this.subCategories = [];
        this.user = {};
        this.message = '';
    }
    SelectProviderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.categoryChanged('Gasfitería');
        this.spinner.show();
        this.user = this.session.getObject('user');
        this.categoryS.guestGetCategories()
            .subscribe(function (response) {
            _this.allcategories = response.data;
            _this.spinner.hide();
            _this.categories = _this.allcategories.filter(function (item) { return item.parent == 0; });
            _this.categoryChanged();
            _this.getDistricts();
        });
    };
    SelectProviderComponent.prototype.getDistricts = function () {
        var _this = this;
        this.districtS.guestGetDistricts()
            .subscribe(function (response) {
            _this.districts = response.data;
            console.log(response);
        });
    };
    SelectProviderComponent.prototype.getProviders = function () {
        var _this = this;
        this.spinner.show();
        this.providerS.guestGetProviders({
            categorie: this.serviceSearch.category,
            district: this.serviceSearch.district,
        })
            .subscribe(function (response) {
            console.log(response);
            _this.providers = response.data;
            for (var i = _this.providers.length - 1; i >= 0; i--) {
                _this.providers[i].experience = Math.floor(((new Date()).getTime() - (new Date(_this.providers[i].experience)).getTime()) / (365 * 1000 * 3600 * 24));
                _this.providers[i].rating = Math.round(Math.random() * 5 * 10) / 10;
                _this.providers[i].success = Math.round(Math.random() * 45) + 5;
            }
            _this.spinner.hide();
        });
    };
    SelectProviderComponent.prototype.getSubcategories = function () {
        var _this = this;
        console.log(this.serviceSearch.category);
        this.subCategories = this.allcategories.filter(function (item) { return item.parent == _this.serviceSearch.category; });
        this.serviceSearch.subcategory = (this.subCategories.length ? this.subCategories[0].id : 0);
        console.log(this.serviceSearch.subcategory);
        console.log(this.subCategories);
    };
    SelectProviderComponent.prototype.categoryChanged = function () {
        this.getProviders();
        // this.providers = this.allProviders.filter(item => item.category == event);
        this.getSubcategories();
    };
    SelectProviderComponent.prototype.schedule = function (myModal, provider) {
        this.serviceSearch.provider_name = provider.user.name + ' ' + provider.user.lastname;
        this.serviceSearch.provider = provider.id;
        this.session.setObject('budget', this.serviceSearch);
        if (this.user && this.user.name) {
            this.router.navigate(['/pedir-propuesta']);
        }
        else {
            this.router.navigate(['/ingresar']);
        }
    };
    SelectProviderComponent.prototype.goReserved = function () {
        this.router.navigate(['/reservado']);
    };
    SelectProviderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select-provider',
            template: __webpack_require__(/*! ./select-provider.component.html */ "./src/app/platform/components/select-provider/select-provider.component.html"),
            styles: [__webpack_require__(/*! ./select-provider.component.css */ "./src/app/platform/components/select-provider/select-provider.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            _services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            _services_district_service__WEBPACK_IMPORTED_MODULE_5__["DistrictService"],
            _services_provider_service__WEBPACK_IMPORTED_MODULE_6__["ProviderService"]])
    ], SelectProviderComponent);
    return SelectProviderComponent;
}());



/***/ }),

/***/ "./src/app/platform/components/send-budget/send-budget.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/platform/components/send-budget/send-budget.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/platform/components/send-budget/send-budget.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/platform/components/send-budget/send-budget.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ptfm-header></ptfm-header>\n<div class=\"\">\n\t<section class=\"box-mh row row-center\">\n\t\t<div class=\"col-md-4 card mg-t-small card-sesion\">\n\t\t\t<div class=\"mg-t-small card-title\">\n\t\t\t\t<h5>Solicitar propuesta</h5>\n\t\t\t</div>\n\t\t\t<div class=\"divider\"></div>\n\n\t\t\t<form class=\"form\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input [(ngModel)]=\"budget.provider\" type=\"text\" placeholder=\"Proveedor\" name=\"provider\" required=\"true\" disabled=\"true\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input [(ngModel)]=\"budget.contact_name\" type=\"text\" placeholder=\"Nombre del contacto\" name=\"contact_name\" required=\"true\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input [(ngModel)]=\"budget.phone_name\" (keypress)=\"onlydigit($event)\" type=\"text\" placeholder=\"Celular del contacto\" name=\"phone_name\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input [(ngModel)]=\"budget.address\" type=\"text\" placeholder=\"Dirección donde se hará el servicio\" name=\"address\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<!-- <input [(ngModel)]=\"budget.description\" type=\"text\" placeholder=\"Descripción del servicio\" name=\"description\"> -->\n\t\t\t\t\t<textarea [(ngModel)]=\"budget.description\" type=\"text\" placeholder=\"Descripción del servicio\" name=\"description\"></textarea>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<input class=\"col-md-7 color-blue\" [(ngModel)]=\"budget.date\" type=\"date\" name=\"date\">\n\t\t\t\t\t<select class=\"col-md-5 color-blue\" [(ngModel)]=\"budget.hour\" style=\"width: initial\" name=\"hour\">\n\t\t\t\t\t\t<option>08:00:00</option>\n\t\t\t\t\t\t<option>09:00:00</option>\n\t\t\t\t\t\t<option>10:00:00</option>\n\t\t\t\t\t\t<option>11:00:00</option>\n\t\t\t\t\t\t<option>12:00:00</option>\n\t\t\t\t\t\t<option>13:00:00</option>\n\t\t\t\t\t\t<option>14:00:00</option>\n\t\t\t\t\t\t<option>15:00:00</option>\n\t\t\t\t\t\t<option>16:00:00</option>\n\t\t\t\t\t\t<option>17:00:00</option>\n\t\t\t\t\t\t<option>18:00:00</option>\n\t\t\t\t\t\t<option>19:00:00</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\t\t\t</form>\n\t\t\t<button (click)=\"sendBudget(myModal)\" class=\"btn bprimary\">Solicitar propuesta</button>\n\n\t\t</div>\n\t</section>\n</div>\n\n<modal #myModal>\n    <modal-content>\n    \t<div class=\"error text-center\">\n    \t\t<div class=\"icon\">\n    \t\t\t<i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>\n    \t\t</div>\n        \t<h4>{{message}}</h4>\n\t\t\t<br *ngIf=\"sbutton\">\n        \t<button *ngIf=\"sbutton\" (click)=\"goReserved()\" class=\"btn bprimary\">Ir a reservados</button>\n    \t</div>\n    </modal-content>        \n</modal>"

/***/ }),

/***/ "./src/app/platform/components/send-budget/send-budget.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/platform/components/send-budget/send-budget.component.ts ***!
  \**************************************************************************/
/*! exports provided: SendBudgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendBudgetComponent", function() { return SendBudgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SendBudgetComponent = /** @class */ (function () {
    function SendBudgetComponent(router, session, userS, spinner) {
        this.router = router;
        this.session = session;
        this.userS = userS;
        this.spinner = spinner;
        this.budget = {
            provider: '',
            user_provider_id: 0,
            contact_name: '',
            phone_name: '',
            address: '',
            district_id: 9,
            category_service_id: 0,
            description: '',
            date_service: '',
            date: '',
            hour: '08:00:00',
        };
        this.message = '';
        this.sbutton = true;
    }
    SendBudgetComponent.prototype.ngOnInit = function () {
        var budget = this.session.getObject('budget');
        this.budget.provider = 'Proveedor: ' + budget.provider_name;
        this.budget.user_provider_id = budget.provider;
        this.budget.category_service_id = budget.category;
        this.budget.date = budget.date;
        this.budget.hour = budget.hour;
    };
    SendBudgetComponent.prototype.sendBudget = function (modal) {
        var _this = this;
        this.sbutton = true;
        this.budget.date_service = this.budget.date + ' ' + this.budget.hour;
        if (!this.budget.contact_name || !this.budget.phone_name || !this.budget.address || !this.budget.description || !this.budget.date_service) {
            this.message = 'Campos incompletos';
            this.sbutton = false;
            modal.open();
            return;
        }
        console.log(this.budget.date_service);
        this.spinner.show();
        this.userS.sendBudget(this.budget)
            .subscribe(function (response) {
            _this.message = 'Se agendó un servicio';
            modal.open();
            _this.spinner.hide();
        });
    };
    SendBudgetComponent.prototype.onlydigit = function (e) {
        var tecla;
        var patron;
        var tecla_final;
        tecla = (document.all) ? e.keyCode : e.which;
        if (tecla == 8) {
            return true;
        }
        patron = /[0-9.]/;
        tecla_final = String.fromCharCode(tecla);
        return patron.test(tecla_final);
    };
    SendBudgetComponent.prototype.goReserved = function () {
        this.router.navigate(['/reservado']);
    };
    SendBudgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-budget',
            template: __webpack_require__(/*! ./send-budget.component.html */ "./src/app/platform/components/send-budget/send-budget.component.html"),
            styles: [__webpack_require__(/*! ./send-budget.component.css */ "./src/app/platform/components/send-budget/send-budget.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], SendBudgetComponent);
    return SendBudgetComponent;
}());



/***/ }),

/***/ "./src/app/platform/platform-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/platform/platform-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PlatformRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformRoutingModule", function() { return PlatformRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/platform/components/home/home.component.ts");
/* harmony import */ var _components_select_provider_select_provider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/select-provider/select-provider.component */ "./src/app/platform/components/select-provider/select-provider.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/platform/components/login/login.component.ts");
/* harmony import */ var _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/registro/registro.component */ "./src/app/platform/components/registro/registro.component.ts");
/* harmony import */ var _components_register_email_register_email_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register-email/register-email.component */ "./src/app/platform/components/register-email/register-email.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/platform/components/contact/contact.component.ts");
/* harmony import */ var _components_providers_providers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/providers/providers.component */ "./src/app/platform/components/providers/providers.component.ts");
/* harmony import */ var _components_send_budget_send_budget_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/send-budget/send-budget.component */ "./src/app/platform/components/send-budget/send-budget.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    {
        path: 'reserva',
        component: _components_select_provider_select_provider_component__WEBPACK_IMPORTED_MODULE_3__["SelectProviderComponent"]
    },
    {
        path: 'reservado',
        component: _components_providers_providers_component__WEBPACK_IMPORTED_MODULE_8__["ProvidersComponent"]
    },
    {
        path: 'pedir-propuesta',
        component: _components_send_budget_send_budget_component__WEBPACK_IMPORTED_MODULE_9__["SendBudgetComponent"]
    },
    {
        path: 'ingresar',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'registro',
        component: _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_5__["RegistroComponent"]
    },
    {
        path: 'registro/mail',
        component: _components_register_email_register_email_component__WEBPACK_IMPORTED_MODULE_6__["RegisterEmailComponent"]
    },
    {
        path: 'contacto',
        component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]
    }
];
var PlatformRoutingModule = /** @class */ (function () {
    function PlatformRoutingModule() {
    }
    PlatformRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PlatformRoutingModule);
    return PlatformRoutingModule;
}());



/***/ }),

/***/ "./src/app/platform/platform.module.ts":
/*!*********************************************!*\
  !*** ./src/app/platform/platform.module.ts ***!
  \*********************************************/
/*! exports provided: getAuthServiceConfigs, PlatformModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformModule", function() { return PlatformModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _platform_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./platform-routing.module */ "./src/app/platform/platform-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-rating */ "./node_modules/ngx-rating/index.js");
/* harmony import */ var ngx_rating__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_rating__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-modal */ "./node_modules/ngx-modal/index.js");
/* harmony import */ var ngx_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_provider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/provider.service */ "./src/app/services/provider.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/platform/components/home/home.component.ts");
/* harmony import */ var _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/error-page/error-page.component */ "./src/app/platform/components/error-page/error-page.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/platform/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/platform/components/footer/footer.component.ts");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/banner/banner.component */ "./src/app/platform/components/banner/banner.component.ts");
/* harmony import */ var _components_select_provider_select_provider_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/select-provider/select-provider.component */ "./src/app/platform/components/select-provider/select-provider.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/platform/components/login/login.component.ts");
/* harmony import */ var _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/registro/registro.component */ "./src/app/platform/components/registro/registro.component.ts");
/* harmony import */ var _components_register_email_register_email_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/register-email/register-email.component */ "./src/app/platform/components/register-email/register-email.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/platform/components/contact/contact.component.ts");
/* harmony import */ var _components_providers_providers_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/providers/providers.component */ "./src/app/platform/components/providers/providers.component.ts");
/* harmony import */ var _components_send_budget_send_budget_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/send-budget/send-budget.component */ "./src/app/platform/components/send-budget/send-budget.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























function getAuthServiceConfigs() {
    var config = new angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthServiceConfig"]([
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__["FacebookLoginProvider"]("632492680578542")
        },
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginProvider"]("106223678079-ragkiaoa6a5p2t9tje2r4u9g4kni5sa9.apps.googleusercontent.com")
        },
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__["LinkedinLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__["LinkedinLoginProvider"]("1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com")
        },
    ]);
    return config;
}
var PlatformModule = /** @class */ (function () {
    function PlatformModule() {
    }
    PlatformModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _platform_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlatformRoutingModule"],
                ngx_rating__WEBPACK_IMPORTED_MODULE_4__["RatingModule"],
                angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__["SocialLoginModule"],
                ngx_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__["SlickCarouselModule"]
            ],
            providers: [
                {
                    provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                },
                _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
                _services_provider_service__WEBPACK_IMPORTED_MODULE_9__["ProviderService"],
                _services_category_service__WEBPACK_IMPORTED_MODULE_10__["CategoryService"],
                _services_general_service__WEBPACK_IMPORTED_MODULE_11__["GeneralService"],
            ],
            declarations: [
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_13__["ErrorPageComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_16__["BannerComponent"],
                _components_select_provider_select_provider_component__WEBPACK_IMPORTED_MODULE_17__["SelectProviderComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_19__["RegistroComponent"],
                _components_register_email_register_email_component__WEBPACK_IMPORTED_MODULE_20__["RegisterEmailComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_21__["ContactComponent"], _components_providers_providers_component__WEBPACK_IMPORTED_MODULE_22__["ProvidersComponent"], _components_send_budget_send_budget_component__WEBPACK_IMPORTED_MODULE_23__["SendBudgetComponent"]
            ]
        })
    ], PlatformModule);
    return PlatformModule;
}());



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
    }
    CategoryService.prototype.guestGetCategories = function () {
        return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].BASE_PATH + _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].GUEST_GET_CATEGORIES);
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/services/district.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/district.service.ts ***!
  \**********************************************/
/*! exports provided: DistrictService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictService", function() { return DistrictService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DistrictService = /** @class */ (function () {
    function DistrictService(http) {
        this.http = http;
    }
    DistrictService.prototype.guestGetDistricts = function () {
        return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].BASE_PATH + _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].GUEST_GET_DISTRICTS);
    };
    DistrictService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DistrictService);
    return DistrictService;
}());



/***/ }),

/***/ "./src/app/services/general.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/general.service.ts ***!
  \*********************************************/
/*! exports provided: GeneralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralService", function() { return GeneralService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GeneralService = /** @class */ (function () {
    function GeneralService(sessionS, http) {
        this.sessionS = sessionS;
        this.http = http;
    }
    GeneralService.prototype.relogin = function (call, error, loading) {
        var _this = this;
        if (loading === void 0) { loading = null; }
        if (error.error.code == 401) {
            this.login(this.sessionS.getObject('access'))
                .subscribe(function (response) {
                _this.sessionS.setObject('answertoken', response);
                if (loading) {
                    loading.dismiss();
                }
                call();
            });
        }
    };
    GeneralService.prototype.login = function (params) {
        var body = JSON.stringify(params);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        var options = { headers: headers };
        return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].BASE_PATH + _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].LOGIN_USER_EMAIL, body, options);
    };
    GeneralService.prototype.getToken = function (params, contentType) {
        if (params === void 0) { params = {}; }
        if (contentType === void 0) { contentType = 'application/json'; }
        return {
            'headers': {
                'Authorization': this.sessionS.getObject('token').token_type + " " + this.sessionS.getObject('token').access_token
            },
            'params': params
        };
    };
    GeneralService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = "Error: " + error.error.message;
        }
        else {
            // server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        // window.alert(errorMessage);
        return errorMessage;
    };
    GeneralService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], GeneralService);
    return GeneralService;
}());



/***/ }),

/***/ "./src/app/services/provider.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/provider.service.ts ***!
  \**********************************************/
/*! exports provided: ProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderService", function() { return ProviderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.settings */ "./src/app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProviderService = /** @class */ (function () {
    function ProviderService(http) {
        this.http = http;
    }
    ProviderService.prototype.guestGetProviders = function (params) {
        var body = JSON.stringify(params);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        var options = { headers: headers };
        return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].BASE_PATH + _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].GUEST_GET_PROVIDERS, body, options);
    };
    ProviderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProviderService);
    return ProviderService;
}());



/***/ }),

/***/ "./src/app/services/session.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/session.service.ts ***!
  \*********************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SessionService = /** @class */ (function () {
    function SessionService() {
    }
    SessionService.prototype.setItem = function (key, value) {
        localStorage.setItem(key, value);
    };
    SessionService.prototype.getItem = function (key) {
        return localStorage.getItem(key);
    };
    SessionService.prototype.setObject = function (key, object) {
        var value = JSON.stringify(object);
        localStorage.setItem(key, value);
    };
    SessionService.prototype.getObject = function (key) {
        var value = localStorage.getItem(key);
        return JSON.parse(value);
    };
    SessionService.prototype.destroy = function (key) {
        localStorage.removeItem(key);
    };
    SessionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general.service */ "./src/app/services/general.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http, generalS) {
        this.http = http;
        this.generalS = generalS;
    }
    UserService.prototype.guestCreateUser = function (params) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
            fromObject: params
        });
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        var options = { headers: headers };
        return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].BASE_PATH + _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].GUEST_CREATE_USER, body, options);
    };
    UserService.prototype.getCurrentUser = function (params) {
        if (params === void 0) { params = {}; }
        var body = JSON.stringify(params);
        var header = this.generalS.getToken();
        return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].BASE_PATH + _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].CURRENT_USER, body, header);
    };
    UserService.prototype.sendBudget = function (params) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
            fromObject: params
        });
        var header = this.generalS.getToken({}, 'application/x-www-form-urlencoded');
        return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].BASE_PATH + _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].CLIENT_SEND_BUDGET, body, header);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"]])
    ], UserService);
    return UserService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/erving/proyectos2018/atypax/angular2/mrpro/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! /home/erving/proyectos2018/atypax/angular2/mrpro/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
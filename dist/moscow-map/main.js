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

/***/ "./src/app/_helpers/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_shared/auth.service */ "./src/app/_shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.auth.isAuthenticated()) {
            return true;
        }
        this.auth.logout();
        this.router.navigate(['/auth'], { queryParams: { accessDenied: true } });
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_helpers/auth.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/_helpers/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_shared/auth.service */ "./src/app/_shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class AuthInterceptor {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    intercept(req, next) {
        if (this.auth.isAuthenticated()) {
            req = req.clone({
                setHeaders: {
                    Authenticated: this.auth.token
                }
            });
        }
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            console.log('Intercepted Error: ', error);
            if (error.status === 401) {
                this.auth.logout();
                this.router.navigate(['/auth']), {
                    queryParams: {
                        authFailed: true
                    }
                };
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





const users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];
class FakeBackendInterceptor {
    intercept(request, next) {
        const { url, method, headers, body } = request;
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(handleRoute))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
        function handleRoute() {
            switch (true) {
                case url.endsWith('/api/auth') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }
        // route functions
        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user)
                return error('Username or password is incorrect');
            return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: 'fake-jwt-token'
            });
        }
        function getUsers() {
            if (!isLoggedIn())
                return unauthorized();
            return ok(users);
        }
        // helper functions
        function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body }));
        }
        function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message } });
        }
        function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
        }
        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }
    }
}
FakeBackendInterceptor.ɵfac = function FakeBackendInterceptor_Factory(t) { return new (t || FakeBackendInterceptor)(); };
FakeBackendInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FakeBackendInterceptor, factory: FakeBackendInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FakeBackendInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_layers/main-page/main-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/_layers/main-page/main-page.component.ts ***!
  \**********************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class MainPageComponent {
    constructor() { }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 18, vars: 0, consts: [[1, "mainPage"], [1, "mainPageHeader"], [1, "logo"], ["src", "./assets/images/logo/logo.svg"], [1, "organizators"], ["src", "./assets/images/logo/dit.svg"], ["src", "./assets/images/logo/dpi.svg"], ["src", "./assets/images/logo/aim.svg"], [1, "mainPageContent"], [1, "leftBlock"], [1, "leftBlockImages"], ["src", "./assets/images/logo/tlogo1.png", 1, "tlogoImg"], ["src", "./assets/images/logo/CoatOfArmsOfMoscow.svg", 1, "coatImg"], [1, "routerWrapper"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0418\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u043E\u0433\u043E \u0431\u043B\u0430\u0433\u043E\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 \u0433\u043E\u0440\u043E\u0434\u0430 \u041C\u043E\u0441\u043A\u0432\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".mainPage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: gray;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n}\n\n.mainPageHeader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.organizators[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 140px;\n}\n\n.organizators[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 30px;\n}\n\n.mainPageContent[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n\n.mainPageContent[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.leftBlock[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.leftBlock[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 45px;\n  color: #fff;\n  font-size: 4rem;\n}\n\n.leftBlockImages[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.tlogoImg[_ngcontent-%COMP%] {\n  width: 250px;\n  margin-right: 10px;\n}\n\n.coatImg[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n@media (max-width: 1010px) {\n  .mainPageHeader[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n\n  .mainPageContent[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .leftBlock[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .leftBlock[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    padding: 0 15% 0;\n  }\n\n  .tlogoImg[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n\n  .coatImg[_ngcontent-%COMP%] {\n    width: 125px;\n  }\n}\n\n@media (max-width: 600px) {\n  .mainPage[_ngcontent-%COMP%] {\n    overflow-y: scroll;\n  }\n\n  .organizators[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 90px;\n  }\n  .organizators[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 10px;\n  }\n\n  .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 180px;\n  }\n\n  .tlogoImg[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n\n  .coatImg[_ngcontent-%COMP%] {\n    width: 90px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2xheWVycy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFDRTtFQUNFLFlBQUE7QUFFSjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFBSTtFQUNFLGtCQUFBO0FBRU47O0FBRUE7RUFDRSxhQUFBO0VBQ0EsT0FBQTtBQUNGOztBQUFFO0VBQ0UsT0FBQTtBQUVKOztBQUNBO0VBQ0UsYUFBQTtFQU9BLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSkY7O0FBSkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFNSjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBR0Y7O0FBREE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFGQTtFQUNFLFlBQUE7QUFLRjs7QUFGQTtFQUNFO0lBQ0Usc0JBQUE7RUFLRjs7RUFIQTtJQUNFLG1CQUFBO0VBTUY7O0VBSkE7SUFDRSxzQkFBQTtFQU9GOztFQUxBO0lBSUUsbUJBQUE7RUFLRjtFQVJFO0lBQ0UsZ0JBQUE7RUFVSjs7RUFOQTtJQUNFLFlBQUE7RUFTRjs7RUFQQTtJQUNFLFlBQUE7RUFVRjtBQUNGOztBQVBBO0VBQ0U7SUFDRSxrQkFBQTtFQVNGOztFQU5FO0lBQ0UsV0FBQTtFQVNKO0VBUkk7SUFDRSxrQkFBQTtFQVVOOztFQUxFO0lBQ0UsWUFBQTtFQVFKOztFQUxBO0lBQ0UsWUFBQTtFQVFGOztFQU5BO0lBQ0UsV0FBQTtFQVNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9fbGF5ZXJzL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpblBhZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW5QYWdlSGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmxvZ28ge1xuICBpbWcge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxufVxuLm9yZ2FuaXphdG9ycyB7XG4gIGltZyB7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgfVxuICB9XG59XG4ubWFpblBhZ2VDb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgZGl2IHtcbiAgICBmbGV4OiAxO1xuICB9XG59XG4ubGVmdEJsb2NrIHtcbiAgcGFkZGluZzogMTBweDtcbiAgaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgfVxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5sZWZ0QmxvY2tJbWFnZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi50bG9nb0ltZyB7XG4gIHdpZHRoOiAyNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNvYXRJbWcge1xuICB3aWR0aDogMTUwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDEwcHgpIHtcbiAgLm1haW5QYWdlSGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5sb2dvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5tYWluUGFnZUNvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmxlZnRCbG9jayB7XG4gICAgaDEge1xuICAgICAgcGFkZGluZzogMCAxNSUgMDtcbiAgICB9XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAudGxvZ29JbWcge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuICAuY29hdEltZyB7XG4gICAgd2lkdGg6IDEyNXB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubWFpblBhZ2Uge1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxuICAub3JnYW5pemF0b3JzIHtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5sb2dvIHtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDE4MHB4O1xuICAgIH1cbiAgfVxuICAudGxvZ29JbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgfVxuICAuY29hdEltZyB7XG4gICAgd2lkdGg6IDkwcHg7XG4gIH1cbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/_layers/map-page/map-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/_layers/map-page/map-page.component.ts ***!
  \********************************************************/
/*! exports provided: MapPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageComponent", function() { return MapPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function MapPageComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 5);
} }
const _c0 = function (a0) { return { show: a0 }; };
class MapPageComponent {
    constructor() {
        this.animation = {
            mapOptionsOpened: false
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        const map = leaflet__WEBPACK_IMPORTED_MODULE_1__["map"]('map', { minZoom: 9 }).setView([55.755826, 37.61730], 12);
        leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('http://{s}.tiles.maps.sputnik.ru/{z}/{x}/{y}.png').addTo(map);
        const southWest = leaflet__WEBPACK_IMPORTED_MODULE_1__["latLng"](55.3, 37.2), northEast = leaflet__WEBPACK_IMPORTED_MODULE_1__["latLng"](56.0, 38.05);
        const bounds = leaflet__WEBPACK_IMPORTED_MODULE_1__["latLngBounds"](southWest, northEast);
        map.setMaxBounds(bounds);
        map.on('drag', function () {
            map.panInsideBounds(bounds, { animate: false });
        });
    }
}
MapPageComponent.ɵfac = function MapPageComponent_Factory(t) { return new (t || MapPageComponent)(); };
MapPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapPageComponent, selectors: [["app-map-page"]], decls: 8, vars: 7, consts: [["id", "map"], [1, "mapOptions", 3, "click"], [1, "optionControllersBind"], [3, "ngClass"], ["class", "optionControllers", 4, "ngIf"], [1, "optionControllers"]], template: function MapPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapPageComponent_Template_button_click_1_listener() { return ctx.animation.mapOptionsOpened = !ctx.animation.mapOptionsOpened; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MapPageComponent_div_7_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, !ctx.animation.mapOptionsOpened));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.animation.mapOptionsOpened));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.animation.mapOptionsOpened);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["#map[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.mapOptions[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 20px;\n  right: 20px;\n  font-size: 4rem;\n  font-weight: 700;\n  background-color: #6a6565;\n  z-index: 999;\n  border-radius: 2px;\n  box-shadow: 0px 0px 28px 4px rgba(0, 0, 0, 0.58);\n  cursor: pointer;\n}\n\n.optionControllersBind[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.optionControllersBind[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  opacity: 0;\n  line-height: 55px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transition: all 0.8s;\n  visibility: hidden;\n  transform: rotate(360deg);\n}\n\n.optionControllersBind[_ngcontent-%COMP%]    > span.show[_ngcontent-%COMP%] {\n  transform: rotate(0deg);\n  visibility: visible;\n  opacity: 1;\n}\n\n.optionControllers[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 300px;\n  height: 300px;\n  background-color: rgba(165, 162, 162, 0.8);\n  top: 60px;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2xheWVycy9tYXAtcGFnZS9tYXAtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsWUFUYTtFQVViLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBREY7O0FBR0E7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFDRTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxTQXBEYTtFQXFEYixRQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9fbGF5ZXJzL21hcC1wYWdlL21hcC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJ1dHRvbkhlaWdodDogNjBweDtcblxuI21hcCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXBPcHRpb25zIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogJGJ1dHRvbkhlaWdodDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmE2NTY1O1xuICB6LWluZGV4OiA5OTk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyOHB4IDRweCByZ2JhKDAsMCwwLDAuNTgpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5vcHRpb25Db250cm9sbGVyc0JpbmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ub3B0aW9uQ29udHJvbGxlcnNCaW5kID4gc3BhbiB7XG4gIG9wYWNpdHk6IDA7XG4gIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIC44cztcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAmLnNob3cge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLm9wdGlvbkNvbnRyb2xsZXJzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoI2E1YTJhMiwgLjgpO1xuICB0b3A6ICRidXR0b25IZWlnaHQ7XG4gIHJpZ2h0OiAwO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map-page',
                templateUrl: './map-page.component.html',
                styleUrls: ['./map-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/_layers/review-page/review-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/_layers/review-page/review-page.component.ts ***!
  \**************************************************************/
/*! exports provided: ReviewPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewPageComponent", function() { return ReviewPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ReviewPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReviewPageComponent.ɵfac = function ReviewPageComponent_Factory(t) { return new (t || ReviewPageComponent)(); };
ReviewPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviewPageComponent, selectors: [["app-review-page"]], decls: 11, vars: 0, consts: [[1, "reviewPage"], [1, "navbar"], [1, "navbarList"], ["routerLink", "generate", "routerLinkActive", "active", 1, "navbarListItem"], ["routerLink", "all-reviews", "routerLinkActive", "active", 1, "navbarListItem"], ["routerLink", "total", "routerLinkActive", "active", 1, "navbarListItem"], [1, "reviewPageContent"]], template: function ReviewPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0447\u0435\u0442 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 \u0437\u0430\u044F\u0432\u043A\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u0442\u043E\u0433\u043E\u0432\u044B\u0439 \u043E\u0442\u0447\u0435\u0442 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".reviewPage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 200px;\n  border-right: 1px solid #ccc;\n  box-shadow: 7px 0px 8px -3px rgba(0, 0, 0, 0.58);\n}\n\n.navbarList[_ngcontent-%COMP%] {\n  padding: 30px 15px 30px;\n}\n\n.navbarListItem[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-bottom: 20px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 15px -6px rgba(0, 0, 0, 0.58);\n  text-align: center;\n  padding: 10px 5px;\n  transition: all 0.5s;\n  font-size: 16px;\n}\n\n.navbarListItem[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.navbarListItem.active[_ngcontent-%COMP%] {\n  background-color: aquamarine;\n}\n\n.navbarListItem[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: dimgrey;\n  box-shadow: 0px 0px 15px -9px rgba(0, 0, 0, 0.58);\n  transform: scale(1.06);\n}\n\n.reviewPageContent[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2xheWVycy9yZXZpZXctcGFnZS9yZXZpZXctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGdEQUFBO0FBRUY7O0FBQUE7RUFDRSx1QkFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFJRjs7QUFIRTtFQUNFLGdCQUFBO0FBS0o7O0FBSEU7RUFDRSw0QkFBQTtBQUtKOztBQUZBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaURBQUE7RUFDQSxzQkFBQTtBQUtGOztBQUhBO0VBQ0UsT0FBQTtFQUNBLGFBQUE7QUFNRiIsImZpbGUiOiJzcmMvYXBwL19sYXllcnMvcmV2aWV3LXBhZ2UvcmV2aWV3LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmV2aWV3UGFnZXtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5uYXZiYXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAyMDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcbiAgYm94LXNoYWRvdzogN3B4IDBweCA4cHggLTNweCByZ2JhKDAsMCwwLDAuNTgpO1xufVxuLm5hdmJhckxpc3Qge1xuICBwYWRkaW5nOiAzMHB4IDE1cHggMzBweDtcbn1cbi5uYXZiYXJMaXN0SXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggLTZweCByZ2JhKDAsMCwwLDAuNTgpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICBmb250LXNpemU6IDE2cHg7XG4gICY6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcbiAgfVxufVxuLm5hdmJhckxpc3RJdGVtOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IGRpbWdyZXk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAtOXB4IHJnYmEoMCwwLDAsMC41OCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7XG59XG4ucmV2aWV3UGFnZUNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-review-page',
                templateUrl: './review-page.component.html',
                styleUrls: ['./review-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/_shared/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/_shared/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class AuthService {
    constructor(http) {
        this.http = http;
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    get token() {
        const expDate = new Date(localStorage.getItem('token-exp'));
        if (new Date() > expDate) {
            this.logout();
            return null;
        }
        return localStorage.getItem('token');
    }
    register(user) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/auth/register`, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(this.setToken), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError.bind(this)));
    }
    login(user) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/auth/login`, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(this.setToken), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError.bind(this)));
    }
    handleError(error) {
        if (error.error) {
            const message = error.error.message;
            switch (message) {
                case 'LOGIN_NOT_FOUND':
                    this.error$.next('Пользователь с таким логином не найден');
                case 'PASSWORD_INVALID':
                    this.error$.next('Неверный пароль');
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    }
    logout() {
        this.setToken(null);
    }
    isAuthenticated() {
        return !!this.token;
    }
    setToken(response) {
        if (response && response.token && response.expiresIn) {
            const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
            localStorage.setItem('token', response.token);
            localStorage.setItem('token-exp', String(expDate));
        }
        else {
            localStorage.clear();
        }
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_shared/rest.service.ts":
/*!*****************************************!*\
  !*** ./src/app/_shared/rest.service.ts ***!
  \*****************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





class RestService {
    constructor(http) {
        this.http = http;
    }
    loadFile(file) {
        const formData = new FormData();
        formData.append('excel', file);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'enctype': 'multipart/form-data'
        });
        return this.http.post('http://localhost:5050/api/file', formData, { headers });
    }
    getFile(id) {
        // return this.http.get(`/api/file/${id}`)
        const review = {
            coordinates: { lat: 0, long: 0 },
            label: 'kek',
            relevanceDate: new Date(),
            complexity: 'easy',
            condition: 3,
            dateAdded: new Date(),
            daysToRecover: 0,
            id: 'asssxd79789',
            name: 'Road',
            objectType: 'road'
        };
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(review);
    }
    updateFile(file, id) {
        const formData = new FormData();
        formData.append('file', file);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'enctype': 'multipart/form-data'
        });
        return this.http.patch(`/api/file/${id}`, formData, { headers });
    }
    deleteFile(id) {
        return this.http.delete(`/api/file/${id}`);
    }
    getAllFiles() {
        return this.http.get(`/api/file`);
    }
    getFilesMeta(chunk) {
        // return this.http.get(`/api/file?meta=true`)
        const reviewPreview = {
            complexity: 'easy',
            condition: 3,
            dateAdded: new Date(),
            daysToRecover: 0,
            id: 'asssxd79789',
            name: 'Road',
            objectType: 'road',
        };
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Array(chunk).fill(reviewPreview));
    }
    getFinalReview() {
        return this.http.get('/api/review');
    }
}
RestService.ɵfac = function RestService_Factory(t) { return new (t || RestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RestService, factory: RestService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/all-reviews/all-reviews.component.ts":
/*!******************************************************!*\
  !*** ./src/app/all-reviews/all-reviews.component.ts ***!
  \******************************************************/
/*! exports provided: AllReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllReviewsComponent", function() { return AllReviewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_shared/rest.service */ "./src/app/_shared/rest.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function AllReviewsComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllReviewsComponent_tr_17_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const review_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.chooseReview(review_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r3.objectType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, review_r3.dateAdded));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r3.condition);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r3.complexity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r3.daysToRecover);
} }
function AllReviewsComponent_div_18_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllReviewsComponent_div_18_tr_18_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const review_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.chooseReview(review_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r7.objectType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, review_r7.dateAdded));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r7.condition);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r7.complexity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r7.daysToRecover);
} }
function AllReviewsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043E\u0442\u0447\u0435\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0422\u0438\u043F \u043E\u0431\u044A\u0435\u043A\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0414\u0430\u0442\u0430 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041F\u0440\u0435\u0434\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u043C\u0430\u044F \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0440\u0430\u0431\u043E\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u041F\u0440\u0435\u0434\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u043C\u044B\u0435 \u0441\u0440\u043E\u043A\u0438 \u0440\u0435\u043C\u043E\u043D\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AllReviewsComponent_div_18_tr_18_Template, 14, 8, "tr", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.reviewsPreview);
} }
function AllReviewsComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
} }
class AllReviewsComponent {
    constructor(rest) {
        this.rest = rest;
        this.reviewsPreview = [];
        this.showFullReview = false;
        this.loading = false;
    }
    ngOnInit() {
        this.loadFiles();
    }
    loadFiles() {
        this.loading = true;
        this.rest.getFilesMeta(20).subscribe((reviewsPreview) => {
            this.reviewsPreview = [...this.reviewsPreview, ...reviewsPreview];
            this.loading = false;
        }, (error) => {
            console.log(error);
        });
    }
    chooseReview(id) {
        this.rest.getFile(id).subscribe(() => {
            this.showFullReview = true;
        }, (error) => console.log(error));
    }
    checkScrollForLoad(event) {
        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = setTimeout(() => {
            const target = event.target;
            if (target.scrollTop + 50 >= target.scrollHeight - target.offsetHeight) {
                this.loadFiles();
            }
        }, 40);
    }
}
AllReviewsComponent.ɵfac = function AllReviewsComponent_Factory(t) { return new (t || AllReviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"])); };
AllReviewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllReviewsComponent, selectors: [["app-all-reviews"]], decls: 20, vars: 3, consts: [[1, "allReviews", 3, "scroll"], [3, "click", 4, "ngFor", "ngForOf"], ["class", "fullReviewModal", 4, "ngIf"], ["class", "loader", 4, "ngIf"], [3, "click"], [1, "fullReviewModal"], [1, "fullReviewWrapper"], [1, "loader"]], template: function AllReviewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AllReviewsComponent_Template_div_scroll_0_listener($event) { return ctx.checkScrollForLoad($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043E\u0442\u0447\u0435\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0422\u0438\u043F \u043E\u0431\u044A\u0435\u043A\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0414\u0430\u0442\u0430 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041F\u0440\u0435\u0434\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u043C\u0430\u044F \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0440\u0430\u0431\u043E\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041F\u0440\u0435\u0434\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u043C\u044B\u0435 \u0441\u0440\u043E\u043A\u0438 \u0440\u0435\u043C\u043E\u043D\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AllReviewsComponent_tr_17_Template, 14, 8, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AllReviewsComponent_div_18_Template, 19, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AllReviewsComponent_div_19_Template, 1, 0, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reviewsPreview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFullReview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".allReviews[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n  padding-right: 15px;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-spacing: unset;\n  border: 1px solid #a5a2a2;\n  width: 100%;\n  height: 100%;\n  font-size: 1.9rem;\n}\n\nthead[_ngcontent-%COMP%] {\n  background-color: antiquewhite;\n}\n\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 2.1rem;\n  color: #181818;\n  font-weight: 900;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n  cursor: pointer;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: lightgray;\n}\n\ntbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 80px;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\nth[_ngcontent-%COMP%]:not(:last-child), td[_ngcontent-%COMP%]:not(:last-child) {\n  border-right: 1px solid #ccc;\n}\n\ntr[_ngcontent-%COMP%]:not(:last-child)   th[_ngcontent-%COMP%], tr[_ngcontent-%COMP%]:not(:last-child)   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n}\n\n.fullReviewModal[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  padding: 100px 150px;\n}\n\n.fullReviewWrapper[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n  box-shadow: 0px 0px 28px 4px rgba(0, 0, 0, 0.58);\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.loader[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsLXJldmlld3MvYWxsLXJldmlld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSw4QkFBQTtBQUdGOztBQUZFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFBRTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUZJO0VBQ0UsMkJBQUE7QUFJTjs7QUFERTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQUdKOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUFFO0VBQ0UsNEJBQUE7QUFFSjs7QUFFRTtFQUNFLDZCQUFBO0FBQ0o7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtFQUlBLG9CQUFBO0FBSkY7O0FBTUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC9hbGwtcmV2aWV3cy9hbGwtcmV2aWV3cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGxSZXZpZXdzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxudGFibGUge1xuICBib3JkZXItc3BhY2luZzogdW5zZXQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhNWEyYTI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS45cmVtO1xufVxudGhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG4gIHRoIHtcbiAgICBmb250LXNpemU6IDIuMXJlbTtcbiAgICBjb2xvcjogIzE4MTgxODtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICB9XG59XG50Ym9keSB7XG4gIHRyIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICB9XG4gIH1cbiAgdGQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cbn1cblxuXG50aCwgdGQge1xuICBwYWRkaW5nOiAxMHB4O1xuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XG4gIH1cbn1cbnRyOm5vdCg6bGFzdC1jaGlsZCkge1xuICB0aCwgdGQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICB9XG59XG5cblxuLmZ1bGxSZXZpZXdNb2RhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC43KTtcbiAgLy9kaXNwbGF5OiBmbGV4O1xuICAvL2p1c3RpZnktY29udGVudDogY2VudGVyO1xuICAvL2FsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwMHB4IDE1MHB4O1xufVxuLmZ1bGxSZXZpZXdXcmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyOHB4IDRweCByZ2JhKDAsMCwwLDAuNTgpO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5sb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllReviewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-reviews',
                templateUrl: './all-reviews.component.html',
                styleUrls: ['./all-reviews.component.scss']
            }]
    }], function () { return [{ type: _shared_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"] }]; }, null); })();


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
/* harmony import */ var _layers_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_layers/main-page/main-page.component */ "./src/app/_layers/main-page/main-page.component.ts");
/* harmony import */ var _layers_review_page_review_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_layers/review-page/review-page.component */ "./src/app/_layers/review-page/review-page.component.ts");
/* harmony import */ var _layers_map_page_map_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_layers/map-page/map-page.component */ "./src/app/_layers/map-page/map-page.component.ts");
/* harmony import */ var _total_review_total_review_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./total-review/total-review.component */ "./src/app/total-review/total-review.component.ts");
/* harmony import */ var _generate_review_generate_review_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generate-review/generate-review.component */ "./src/app/generate-review/generate-review.component.ts");
/* harmony import */ var _all_reviews_all_reviews_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./all-reviews/all-reviews.component */ "./src/app/all-reviews/all-reviews.component.ts");
/* harmony import */ var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_helpers/auth.guard */ "./src/app/_helpers/auth.guard.ts");
/* harmony import */ var _auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth-form/auth-form.component */ "./src/app/auth-form/auth-form.component.ts");
/* harmony import */ var _main_links_main_links_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main-links/main-links.component */ "./src/app/main-links/main-links.component.ts");













const routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: '', component: _layers_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"], children: [
            { path: 'auth', component: _auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_9__["AuthFormComponent"] },
            { path: 'main', component: _main_links_main_links_component__WEBPACK_IMPORTED_MODULE_10__["MainLinksComponent"], canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] }
        ] },
    { path: 'map', component: _layers_map_page_map_page_component__WEBPACK_IMPORTED_MODULE_4__["MapPageComponent"], canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'review', component: _layers_review_page_review_page_component__WEBPACK_IMPORTED_MODULE_3__["ReviewPageComponent"], canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]], children: [
            { path: '', redirectTo: 'generate', pathMatch: 'full' },
            { path: 'total', component: _total_review_total_review_component__WEBPACK_IMPORTED_MODULE_5__["TotalReviewComponent"] },
            { path: 'generate', component: _generate_review_generate_review_component__WEBPACK_IMPORTED_MODULE_6__["GenerateReviewComponent"] },
            { path: 'all-reviews', component: _all_reviews_all_reviews_component__WEBPACK_IMPORTED_MODULE_7__["AllReviewsComponent"] }
        ] }
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'moscow-map';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
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
/* harmony import */ var _layers_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_layers/main-page/main-page.component */ "./src/app/_layers/main-page/main-page.component.ts");
/* harmony import */ var _layers_map_page_map_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_layers/map-page/map-page.component */ "./src/app/_layers/map-page/map-page.component.ts");
/* harmony import */ var _layers_review_page_review_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_layers/review-page/review-page.component */ "./src/app/_layers/review-page/review-page.component.ts");
/* harmony import */ var _total_review_total_review_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./total-review/total-review.component */ "./src/app/total-review/total-review.component.ts");
/* harmony import */ var _generate_review_generate_review_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./generate-review/generate-review.component */ "./src/app/generate-review/generate-review.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _all_reviews_all_reviews_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./all-reviews/all-reviews.component */ "./src/app/all-reviews/all-reviews.component.ts");
/* harmony import */ var _auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth-form/auth-form.component */ "./src/app/auth-form/auth-form.component.ts");
/* harmony import */ var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_helpers/auth.interceptor */ "./src/app/_helpers/auth.interceptor.ts");
/* harmony import */ var _helpers_fake_backend__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_helpers/fake-backend */ "./src/app/_helpers/fake-backend.ts");
/* harmony import */ var _main_links_main_links_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main-links/main-links.component */ "./src/app/main-links/main-links.component.ts");

















const INTERCEPTOR_PROVIDER = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
    multi: true,
    useClass: _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptor"]
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [INTERCEPTOR_PROVIDER, _helpers_fake_backend__WEBPACK_IMPORTED_MODULE_14__["fakeBackendProvider"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _layers_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"],
        _layers_map_page_map_page_component__WEBPACK_IMPORTED_MODULE_5__["MapPageComponent"],
        _layers_review_page_review_page_component__WEBPACK_IMPORTED_MODULE_6__["ReviewPageComponent"],
        _total_review_total_review_component__WEBPACK_IMPORTED_MODULE_7__["TotalReviewComponent"],
        _generate_review_generate_review_component__WEBPACK_IMPORTED_MODULE_8__["GenerateReviewComponent"],
        _all_reviews_all_reviews_component__WEBPACK_IMPORTED_MODULE_11__["AllReviewsComponent"],
        _auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_12__["AuthFormComponent"],
        _main_links_main_links_component__WEBPACK_IMPORTED_MODULE_15__["MainLinksComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _layers_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"],
                    _layers_map_page_map_page_component__WEBPACK_IMPORTED_MODULE_5__["MapPageComponent"],
                    _layers_review_page_review_page_component__WEBPACK_IMPORTED_MODULE_6__["ReviewPageComponent"],
                    _total_review_total_review_component__WEBPACK_IMPORTED_MODULE_7__["TotalReviewComponent"],
                    _generate_review_generate_review_component__WEBPACK_IMPORTED_MODULE_8__["GenerateReviewComponent"],
                    _all_reviews_all_reviews_component__WEBPACK_IMPORTED_MODULE_11__["AllReviewsComponent"],
                    _auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_12__["AuthFormComponent"],
                    _main_links_main_links_component__WEBPACK_IMPORTED_MODULE_15__["MainLinksComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                ],
                providers: [INTERCEPTOR_PROVIDER, _helpers_fake_backend__WEBPACK_IMPORTED_MODULE_14__["fakeBackendProvider"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth-form/auth-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/auth-form/auth-form.component.ts ***!
  \**************************************************/
/*! exports provided: AuthFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFormComponent", function() { return AuthFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_shared/auth.service */ "./src/app/_shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function AuthFormComponent_span_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041B\u043E\u0433\u0438\u043D \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthFormComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AuthFormComponent_span_8_span_1_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("login").errors["required"]);
} }
function AuthFormComponent_span_13_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u0430\u0440\u043E\u043B\u044C \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthFormComponent_span_13_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" \u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 \u043F\u0430\u0440\u043E\u043B\u044F - ", ctx_r4.form.get("password").errors["minlength"]["requiredLength"], ". \u0412\u044B \u0432\u0432\u0435\u043B\u0438 ", ctx_r4.form.get("password").errors["minlength"]["actualLength"], " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 ");
} }
function AuthFormComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AuthFormComponent_span_13_span_1_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthFormComponent_span_13_span_2_Template, 2, 2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("password").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get("password").errors["minlength"]);
} }
const _c0 = function (a0) { return { "invalid": a0 }; };
class AuthFormComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.submitted = false;
        this.showLoginForm = true;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)
            ])
        });
    }
    onSubmit() {
        this.submitted = true;
        const user = {
            password: this.form.value.password,
            login: this.form.value.login
        };
        if (this.showLoginForm) {
            this.auth.login(user).subscribe(response => {
                this.submitted = false;
                this.router.navigate(['/main']);
            }, error => {
                console.log(error);
                this.submitted = false;
            });
        }
        else {
            this.auth.register(user).subscribe(response => {
                this.submitted = false;
                this.router.navigate(['/main']);
            }, error => {
                console.log(error);
                this.submitted = false;
            });
        }
    }
}
AuthFormComponent.ɵfac = function AuthFormComponent_Factory(t) { return new (t || AuthFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthFormComponent, selectors: [["app-auth-form"]], decls: 19, vars: 13, consts: [[1, "authForm"], [3, "formGroup", "ngSubmit"], [1, "inputBlock"], ["for", "login"], ["type", "text", "id", "login", "formControlName", "login", 3, "ngClass"], ["class", "helper-text", 4, "ngIf"], ["for", "password"], ["type", "text", "id", "password", "formControlName", "password", 3, "ngClass"], [1, "formButtons"], ["type", "submit", 1, "submit", 3, "disabled"], ["type", "button", 1, "change", 3, "click"], [1, "helper-text"], [4, "ngIf"]], template: function AuthFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AuthFormComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041B\u043E\u0433\u0438\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AuthFormComponent_span_8_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AuthFormComponent_span_13_Template, 3, 2, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthFormComponent_Template_button_click_17_listener() { ctx.showLoginForm = !ctx.showLoginForm; return ctx.form.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.showLoginForm ? "\u0412\u0445\u043E\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443" : "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.form.get("login").invalid && ctx.form.get("login").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("login").invalid && ctx.form.get("login").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.form.get("password").invalid && ctx.form.get("password").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("password").invalid && ctx.form.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid || ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.showLoginForm ? "\u0412\u043E\u0439\u0442\u0438" : "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.showLoginForm ? "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F" : "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F", " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".authForm[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nform[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n  padding: 20px 30px 20px;\n  max-width: 350px;\n  border-radius: 4px;\n  border: 2px solid #fff;\n  box-shadow: 0px 0px 28px 4px rgba(0, 0, 0, 0.58);\n  width: 100%;\n  min-height: 300px;\n}\n\nform[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #2b2b2b;\n  font-size: 2.3rem;\n  font-family: \"Comic Sans MS\", \"Verdana\", sans-serif;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 3px;\n  border: none;\n  font-size: 1.7rem;\n  border: 1.5px solid transparent;\n}\n\ninput.invalid[_ngcontent-%COMP%] {\n  border-color: red;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  color: #474444;\n  margin-bottom: 5px;\n  display: block;\n  font-weight: 700;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.inputBlock[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.formButtons[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.formButtons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  border-radius: 4px;\n  padding: 10px;\n  font-size: 1.8rem;\n  color: #fff;\n  cursor: pointer;\n}\n\n.submit[_ngcontent-%COMP%] {\n  background-color: #3a6ba7;\n  margin-right: 10px;\n}\n\n.submit[disabled][_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.change[_ngcontent-%COMP%] {\n  background-color: #a73a3e;\n}\n\n.helper-text[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: red;\n  margin-top: 5px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC1mb3JtL2F1dGgtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnREFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUVGOztBQURFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtREFBQTtBQUdKOztBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBR0Y7O0FBRkU7RUFDRSxpQkFBQTtBQUlKOztBQURBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFJRjs7QUFGQTtFQUNFLG1CQUFBO0FBS0Y7O0FBSEE7RUFDRSxtQkFBQTtBQU1GOztBQUpBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQU9GOztBQU5FO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFRSjs7QUFMQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFRRjs7QUFQRTtFQUNFLFlBQUE7QUFTSjs7QUFOQTtFQUNFLHlCQUFBO0FBU0Y7O0FBUEE7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVVGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC1mb3JtL2F1dGgtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoRm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgcGFkZGluZzogMjBweCAzMHB4IDIwcHg7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyOHB4IDRweCByZ2JhKDAsMCwwLDAuNTgpO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIGgxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMyYjJiMmI7XG4gICAgZm9udC1zaXplOiAyLjNyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiQ29taWMgU2FucyBNU1wiLCBcIlZlcmRhbmFcIiwgc2Fucy1zZXJpZjtcbiAgfVxufVxuaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAmLmludmFsaWQge1xuICAgIGJvcmRlci1jb2xvcjogcmVkO1xuICB9XG59XG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjb2xvcjogIzQ3NDQ0NDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbmgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5pbnB1dEJsb2NrIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5mb3JtQnV0dG9ucyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYnV0dG9uIHtcbiAgICBmbGV4OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuLnN1Ym1pdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTZiYTc7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgJltkaXNhYmxlZF0ge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxufVxuLmNoYW5nZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNzNhM2U7XG59XG4uaGVscGVyLXRleHQge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth-form',
                templateUrl: './auth-form.component.html',
                styleUrls: ['./auth-form.component.scss']
            }]
    }], function () { return [{ type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/generate-review/generate-review.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/generate-review/generate-review.component.ts ***!
  \**************************************************************/
/*! exports provided: GenerateReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateReviewComponent", function() { return GenerateReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_shared/rest.service */ "./src/app/_shared/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







class GenerateReviewComponent {
    constructor(rest) {
        this.rest = rest;
        this.submitted = false;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    onSubmit() {
        this.submitted = true;
        const file = this.files[0];
        console.log(file);
        this.rest.loadFile(file).subscribe(() => {
            this.submitted = false;
        }, (e) => {
            console.log(e);
            this.form.reset();
            this.submitted = false;
        });
    }
    handleFileInput(el) {
        console.log(el);
    }
}
GenerateReviewComponent.ɵfac = function GenerateReviewComponent_Factory(t) { return new (t || GenerateReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"])); };
GenerateReviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GenerateReviewComponent, selectors: [["app-generate-review"]], decls: 17, vars: 3, consts: [[1, "generateReview"], [1, "headerGenerateReview"], ["routerLink", "/main"], ["routerLink", "/map"], [1, "formLoadReview"], [3, "formGroup", "ngSubmit"], ["for", "fileInput"], ["id", "fileInput", "type", "file", "accept", ".xls,.xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel", "formControlName", "file", 3, "change"], ["type", "submit", 1, "generateReviewSubmit", 3, "disabled", "ngClass"], [1, "footerGenerateReview"]], template: function GenerateReviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043A\u0430\u0440\u0442\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GenerateReviewComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0441 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435\u043C .xls \u0438\u043B\u0438 .xlsx");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function GenerateReviewComponent_Template_input_change_13_listener($event) { return ctx.files = $event.target.files; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid || ctx.submitted)("ngClass", ctx.submitted || ctx.form.invalid ? "" : "active");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".generateReview[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\nform[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 20px;\n  cursor: pointer;\n  background-color: antiquewhite;\n  padding: 20px;\n  border-radius: 4px;\n  display: block;\n  width: 300px;\n  margin: 0 auto 50px;\n}\n\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n}\n\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 15px;\n  border-top: 1px solid #000;\n  padding-top: 5px;\n  margin-top: 10px;\n}\n\n#fileInput[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.generateReviewSubmit[_ngcontent-%COMP%] {\n  max-width: 200px;\n  width: 100%;\n  height: 60px;\n  background-color: lightgreen;\n  font-size: 20px;\n  transition: all 0.4s;\n  color: #a5a2a2;\n}\n\n.generateReviewSubmit.active[_ngcontent-%COMP%]:hover {\n  transform: scale(1.07);\n  border: 1px solid green;\n  box-shadow: 0px 0px 19px -6px rgba(0, 0, 0, 0.58);\n  color: gray;\n}\n\n.headerGenerateReview[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\n.headerGenerateReview[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #a5a2a2;\n  padding: 10px;\n  font-size: 20px;\n  color: #fff;\n  border-radius: 3px;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n\n.headerGenerateReview[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 20px;\n}\n\n.headerGenerateReview[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 19px -3px #a5a2a2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuZXJhdGUtcmV2aWV3L2dlbmVyYXRlLXJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFGRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUhJO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUtOOztBQURBO0VBQ0UsYUFBQTtBQUlGOztBQUZBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQUtGOztBQUpFO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlEQUFBO0VBQ0EsV0FBQTtBQU1KOztBQUhBO0VBQ0UsbUJBQUE7QUFNRjs7QUFMRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFPSjs7QUFOSTtFQUNFLGtCQUFBO0FBUU47O0FBTkk7RUFDRSxxQ0FBQTtBQVFOIiwiZmlsZSI6InNyYy9hcHAvZ2VuZXJhdGUtcmV2aWV3L2dlbmVyYXRlLXJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nZW5lcmF0ZVJldmlldyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5mb3JtIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDAgYXV0byA1MHB4O1xuICBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG4gIH1cbn1cbiNmaWxlSW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmdlbmVyYXRlUmV2aWV3U3VibWl0IHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xuICBjb2xvcjogI2E1YTJhMjtcbiAgJi5hY3RpdmU6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNyk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxOXB4IC02cHggcmdiYSgwLDAsMCwwLjU4KTtcbiAgICBjb2xvcjogZ3JheTtcbiAgfVxufVxuLmhlYWRlckdlbmVyYXRlUmV2aWV3IHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTVhMmEyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTlweCAtM3B4ICNhNWEyYTI7XG4gICAgfVxuICB9XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenerateReviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-generate-review',
                templateUrl: './generate-review.component.html',
                styleUrls: ['./generate-review.component.scss']
            }]
    }], function () { return [{ type: _shared_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main-links/main-links.component.ts":
/*!****************************************************!*\
  !*** ./src/app/main-links/main-links.component.ts ***!
  \****************************************************/
/*! exports provided: MainLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLinksComponent", function() { return MainLinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class MainLinksComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
}
MainLinksComponent.ɵfac = function MainLinksComponent_Factory(t) { return new (t || MainLinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MainLinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainLinksComponent, selectors: [["app-main-links"]], decls: 8, vars: 0, consts: [[1, "mainLinks"], ["href", "#", "routerLink", "/review", 3, "click"], ["href", "#", "routerLink", "/map", 3, "click"]], template: function MainLinksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainLinksComponent_Template_a_click_3_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u041E\u0442\u0447\u0435\u0442\u044B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainLinksComponent_Template_a_click_6_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u041A\u0430\u0440\u0442\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".mainLinks[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nul[_ngcontent-%COMP%] {\n  width: 50%;\n  font-size: 3rem;\n}\n\nli[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 40px;\n}\n\na[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: block;\n  cursor: pointer;\n  text-align: center;\n  background-color: #7d3030;\n  color: #fff;\n  transition: all 0.5s;\n}\n\na[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  box-shadow: 0px 0px 28px -2px rgba(0, 0, 0, 0.58);\n}\n\n@media (max-width: 1010px) {\n  a[_ngcontent-%COMP%] {\n    box-shadow: 0px 0px 28px -2px rgba(0, 0, 0, 0.58);\n    border-radius: 7px;\n  }\n}\n\n@media (max-width: 450px) {\n  ul[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1saW5rcy9tYWluLWxpbmtzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFFRjs7QUFBQTtFQUNFLG1CQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBSUY7O0FBSEU7RUFDRSxxQkFBQTtFQUNBLGlEQUFBO0FBS0o7O0FBREE7RUFDRTtJQUNFLGlEQUFBO0lBQ0Esa0JBQUE7RUFJRjtBQUNGOztBQUZBO0VBQ0U7SUFDRSxVQUFBO0VBSUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4tbGlua3MvbWFpbi1saW5rcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluTGlua3Mge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbnVsIHtcbiAgd2lkdGg6IDUwJTtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxubGk6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5hIHtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2QzMDMwO1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjhweCAtMnB4IHJnYmEoMCwwLDAsMC41OCk7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMTBweCkge1xuICBhIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDI4cHggLTJweCByZ2JhKDAsMCwwLDAuNTgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIHVsIHtcbiAgICB3aWR0aDogNzUlO1xuICB9XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainLinksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-links',
                templateUrl: './main-links.component.html',
                styleUrls: ['./main-links.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/total-review/total-review.component.ts":
/*!********************************************************!*\
  !*** ./src/app/total-review/total-review.component.ts ***!
  \********************************************************/
/*! exports provided: TotalReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalReviewComponent", function() { return TotalReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TotalReviewComponent {
    constructor() { }
    ngOnInit() {
    }
}
TotalReviewComponent.ɵfac = function TotalReviewComponent_Factory(t) { return new (t || TotalReviewComponent)(); };
TotalReviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TotalReviewComponent, selectors: [["app-total-review"]], decls: 2, vars: 0, template: function TotalReviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "total-review works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvdGFsLXJldmlldy90b3RhbC1yZXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TotalReviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-total-review',
                templateUrl: './total-review.component.html',
                styleUrls: ['./total-review.component.scss']
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
    production: false,
    apiUrl: 'http://localhost:5050'
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

module.exports = __webpack_require__(/*! /Users/serj/JS/Hakaton/moscow-map/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <todo-list></todo-list>\n</main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/todo-list.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todo-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"todo-content\">\n<h1 class=\"page-title\">My To-Dos</h1>\n<div class=\"todo-create\">\n  <form #todoForm=\"ngForm\" (ngSubmit)=\"createTodo(todoForm)\" novalidate>\n    <input type=\"text\" id=\"title\" class=\"form-control\" placeholder=\"Type a to-do and press enter...\"\n           required\n           name=\"title\" [(ngModel)]=\"newTodo.title\"\n           #title=\"ngModel\" >\n    <div *ngIf=\"title.errors && title.dirty\"\n         class=\"alert alert-danger\">\n      <div [hidden]=\"!title.errors.required\">\n        A title is required.\n      </div>\n    </div>\n  </form>\n</div>\n<ul class=\"todo-list\">\n  <li *ngFor=\"let todo of todos\" [class.completed]=\"todo.completed === true\" >\n    <div class=\"todo-row\" *ngIf=\"!editing || editingTodo.id != todo.id\">\n      <a class=\"todo-completed\" (click)=\"toggleCompleted(todo)\">\n        <i class=\"material-icons toggle-completed-checkbox\"></i>\n      </a>\n      <span class=\"todo-title\">\n              {{todo.title}}\n            </span>\n      <span class=\"todo-actions\">\n                <a (click)=\"editTodo(todo)\">\n                  <i class=\"material-icons edit\">edit</i>\n                </a>\n                <a (click)=\"deleteTodo(todo.id)\">\n                  <i class=\"material-icons delete\">clear</i>\n                </a>\n            </span>\n    </div>\n    <div class=\"todo-edit\" *ngIf=\"editing && editingTodo.id === todo.id\">\n      <input class=\"form-control\" type=\"text\"\n             [(ngModel)]=\"editingTodo.title\" required>\n      <span class=\"edit-actions\">\n                <a (click)=\"updateTodo(editingTodo)\">\n                  <i class=\"material-icons\">done</i>\n                </a>\n                <a (click)=\"clearEditing()\">\n                  <i class=\"material-icons\">clear</i>\n                </a>\n            </span>\n    </div>\n  </li>\n</ul>\n<div class=\"no-todos\" *ngIf=\"todos && todos.length == 0\">\n  <p>I don't see any to-dos here.</p>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'todoapp-angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _todo_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-list.component */ "./src/app/todo-list.component.ts");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo.service */ "./src/app/todo.service.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _todo_list_component__WEBPACK_IMPORTED_MODULE_6__["TodoListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ],
            providers: [_todo_service__WEBPACK_IMPORTED_MODULE_7__["TodoService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/todo-list.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo-list.component.ts ***!
  \****************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.service */ "./src/app/todo.service.ts");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ "./src/app/todo.ts");




var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(todoService) {
        this.todoService = todoService;
        this.newTodo = new _todo__WEBPACK_IMPORTED_MODULE_3__["Todo"]();
        this.editing = false;
        this.editingTodo = new _todo__WEBPACK_IMPORTED_MODULE_3__["Todo"]();
    }
    TodoListComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    TodoListComponent.prototype.getTodos = function () {
        var _this = this;
        this.todoService.getTodos()
            .then(function (todos) { return _this.todos = todos; });
    };
    TodoListComponent.prototype.createTodo = function (todoForm) {
        var _this = this;
        this.todoService.createTodo(this.newTodo)
            .then(function (createTodo) {
            todoForm.reset();
            _this.newTodo = new _todo__WEBPACK_IMPORTED_MODULE_3__["Todo"]();
            _this.todos.unshift(createTodo);
        });
    };
    TodoListComponent.prototype.deleteTodo = function (id) {
        var _this = this;
        this.todoService.deleteTodo(id)
            .then(function () {
            _this.todos = _this.todos.filter(function (todo) { return todo.id != id; });
        });
    };
    TodoListComponent.prototype.updateTodo = function (todoData) {
        var _this = this;
        console.log(todoData);
        this.todoService.updateTodo(todoData)
            .then(function (updatedTodo) {
            var existingTodo = _this.todos.find(function (todo) { return todo.id === updatedTodo.id; });
            Object.assign(existingTodo, updatedTodo);
            _this.clearEditing();
        });
    };
    TodoListComponent.prototype.toggleCompleted = function (todoData) {
        var _this = this;
        todoData.completed = !todoData.completed;
        this.todoService.updateTodo(todoData)
            .then(function (updatedTodo) {
            var existingTodo = _this.todos.find(function (todo) { return todo.id === updatedTodo.id; });
            Object.assign(existingTodo, updatedTodo);
        });
    };
    TodoListComponent.prototype.editTodo = function (todoData) {
        this.editing = true;
        Object.assign(this.editingTodo, todoData);
    };
    TodoListComponent.prototype.clearEditing = function () {
        this.editingTodo = new _todo__WEBPACK_IMPORTED_MODULE_3__["Todo"]();
        this.editing = false;
    };
    TodoListComponent.ctorParameters = function () { return [
        { type: _todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] }
    ]; };
    TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'todo-list',
            template: __webpack_require__(/*! raw-loader!./todo-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/todo-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/todo.service.ts":
/*!*********************************!*\
  !*** ./src/app/todo.service.ts ***!
  \*********************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
        this.baseUrl = 'http://to-do-do-do.herokuapp.com';
    }
    TodoService.prototype.getTodos = function () {
        return this.http.get(this.baseUrl + '/api/todos/')
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    TodoService.prototype.createTodo = function (todoData) {
        return this.http.post(this.baseUrl + '/api/todos/', todoData)
            .toPromise().then(function (response) { return response; })
            .catch(this.handleError);
    };
    TodoService.prototype.updateTodo = function (todoData) {
        return this.http.put(this.baseUrl + '/api/todos/' + todoData.id, todoData)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    TodoService.prototype.deleteTodo = function (id) {
        return this.http.delete(this.baseUrl + '/api/todos/' + id)
            .toPromise()
            .catch(this.handleError);
    };
    TodoService.prototype.handleError = function (error) {
        console.error('Oopsies!', error);
        return Promise.reject(error.message || error);
    };
    TodoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/app/todo.ts":
/*!*************************!*\
  !*** ./src/app/todo.ts ***!
  \*************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo() {
    }
    return Todo;
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
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ThePrecious/Downloads/todoapp/todoapp-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map

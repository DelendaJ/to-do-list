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

module.exports = "<div class=\"todo-content\">\n<h1 class=\"page-title\">My To-Dos</h1>\n<div class=\"todo-create\">\n  <form #todoForm=\"ngForm\" (ngSubmit)=\"createTodo(todoForm)\" novalidate>\n    <input type=\"text\" id=\"title\" class=\"form-control\" placeholder=\"Type a todo and press enter...\"\n           required\n           name=\"title\" [(ngModel)]=\"newTodo.title\"\n           #title=\"ngModel\" >\n    <div *ngIf=\"title.errors && title.dirty\"\n         class=\"alert alert-danger\">\n      <div [hidden]=\"!title.errors.required\">\n        A title is required.\n      </div>\n    </div>\n  </form>\n</div>\n<ul class=\"todo-list\">\n  <li *ngFor=\"let todo of todos\" [class.completed]=\"todo.completed === true\" >\n    <div class=\"todo-row\" *ngIf=\"!editing || editingTodo.id != todo.id\">\n      <a class=\"todo-completed\" (click)=\"toggleCompleted(todo)\">\n        <i class=\"material-icons toggle-completed-checkbox\"></i>\n      </a>\n      <span class=\"todo-title\">\n              {{todo.title}}\n            </span>\n      <span class=\"todo-actions\">\n                <a (click)=\"editTodo(todo)\">\n                  <i class=\"material-icons edit\">edit</i>\n                </a>\n                <a (click)=\"deleteTodo(todo.id)\">\n                  <i class=\"material-icons delete\">clear</i>\n                </a>\n            </span>\n    </div>\n    <div class=\"todo-edit\" *ngIf=\"editing && editingTodo.id === todo.id\">\n      <input class=\"form-control\" type=\"text\"\n             [(ngModel)]=\"editingTodo.title\" required>\n      <span class=\"edit-actions\">\n                <a (click)=\"updateTodo(editingTodo)\">\n                  <i class=\"material-icons\">done</i>\n                </a>\n                <a (click)=\"clearEditing()\">\n                  <i class=\"material-icons\">clear</i>\n                </a>\n            </span>\n    </div>\n  </li>\n</ul>\n<div class=\"no-todos\" *ngIf=\"todos && todos.length == 0\">\n  <p>I don't see any to-dos here.</p>\n</div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'todoapp-angular';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _todo_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-list.component */ "./src/app/todo-list.component.ts");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo.service */ "./src/app/todo.service.ts");








let AppModule = class AppModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.service */ "./src/app/todo.service.ts");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ "./src/app/todo.ts");




let TodoListComponent = class TodoListComponent {
    constructor(todoService) {
        this.todoService = todoService;
        this.newTodo = new _todo__WEBPACK_IMPORTED_MODULE_3__["Todo"]();
        this.editing = false;
        this.editingTodo = new _todo__WEBPACK_IMPORTED_MODULE_3__["Todo"]();
    }
    ngOnInit() {
        this.getTodos();
    }
    getTodos() {
        this.todoService.getTodos()
            .then(todos => this.todos = todos);
    }
    createTodo(todoForm) {
        this.todoService.createTodo(this.newTodo)
            .then(createTodo => {
            todoForm.reset();
            this.newTodo = new _todo__WEBPACK_IMPORTED_MODULE_3__["Todo"]();
            this.todos.unshift(createTodo);
        });
    }
    deleteTodo(id) {
        this.todoService.deleteTodo(id)
            .then(() => {
            this.todos = this.todos.filter(todo => todo.id != id);
        });
    }
    updateTodo(todoData) {
        console.log(todoData);
        this.todoService.updateTodo(todoData)
            .then(updatedTodo => {
            let existingTodo = this.todos.find(todo => todo.id === updatedTodo.id);
            Object.assign(existingTodo, updatedTodo);
            this.clearEditing();
        });
    }
    toggleCompleted(todoData) {
        todoData.completed = !todoData.completed;
        this.todoService.updateTodo(todoData)
            .then(updatedTodo => {
            let existingTodo = this.todos.find(todo => todo.id === updatedTodo.id);
            Object.assign(existingTodo, updatedTodo);
        });
    }
    editTodo(todoData) {
        this.editing = true;
        Object.assign(this.editingTodo, todoData);
    }
    clearEditing() {
        this.editingTodo = new _todo__WEBPACK_IMPORTED_MODULE_3__["Todo"]();
        this.editing = false;
    }
};
TodoListComponent.ctorParameters = () => [
    { type: _todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] }
];
TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'todo-list',
        template: __webpack_require__(/*! raw-loader!./todo-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/todo-list.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
], TodoListComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let TodoService = class TodoService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080';
    }
    getTodos() {
        return this.http.get(this.baseUrl + '/api/todos/')
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    createTodo(todoData) {
        return this.http.post(this.baseUrl + '/api/todos/', todoData)
            .toPromise().then(response => response)
            .catch(this.handleError);
    }
    updateTodo(todoData) {
        return this.http.put(this.baseUrl + '/api/todos/' + todoData.id, todoData)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    deleteTodo(id) {
        return this.http.delete(this.baseUrl + '/api/todos/' + id)
            .toPromise()
            .catch(this.handleError);
    }
    handleError(error) {
        console.error('Oopsies!', error);
        return Promise.reject(error.message || error);
    }
};
TodoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], TodoService);



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
class Todo {
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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
//# sourceMappingURL=main-es2015.js.map
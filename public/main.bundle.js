webpackJsonp([1,4],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotifyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpotifyService = (function () {
    function SpotifyService(_http) {
        var _this = this;
        this._http = _http;
        this.getAccessToken()
            .subscribe(function (token) {
            // set access token to be used
            localStorage.setItem('token', JSON.stringify(token.token));
            _this.accessToken = token.token;
            // starting time when access token is created
            _this.accessTokenStartTime = token.tokenStartTime;
            localStorage.setItem('tokenStartTime', token.tokenStartTime);
        }, function (err) {
            console.log(err);
            return false;
        });
    }
    SpotifyService.prototype.searchMusic = function (str, type) {
        if (type === void 0) { type = 'artist'; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Authorization', this.accessToken.token_type + ' ' + this.accessToken.access_token);
        this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
        return this._http.get(this.searchUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getArtist = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.loadToken();
        headers.append('Authorization', this.accessToken.token_type + ' ' + this.accessToken.access_token);
        this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
        return this._http.get(this.artistUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getAlbums = function (artistId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.loadToken();
        headers.append('Authorization', this.accessToken.token_type + ' ' + this.accessToken.access_token);
        this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums/?limit=50&market=US';
        return this._http.get(this.albumsUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getAlbum = function (albumId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.loadToken();
        headers.append('Authorization', this.accessToken.token_type + ' ' + this.accessToken.access_token);
        this.albumUrl = 'https://api.spotify.com/v1/albums/' + albumId;
        return this._http.get(this.albumUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getAccessToken = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        // return this._http.get('/spotifytoken', {headers: headers})
        return this._http.get('spotifytoken', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.loadToken = function () {
        var token = localStorage.getItem('token');
        this.accessToken = JSON.parse(token);
        var tokenStartTime = localStorage.getItem('tokenStartTime');
        this.accessTokenStartTime = tokenStartTime;
    };
    SpotifyService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], SpotifyService);
    return SpotifyService;
    var _a;
}());
//# sourceMappingURL=C:/xampp/htdocs/ngspotify/angular-src/src/spotify.service.js.map

/***/ }),

/***/ 385:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 385;


/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(504);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/xampp/htdocs/ngspotify/angular-src/src/main.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(665),
            styles: [__webpack_require__(664)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/ngspotify/angular-src/src/app.component.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_about_about_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_album_album_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_artist_artist_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_search_search_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_spotify_service__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_search_search_component__["a" /* SearchComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_6__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'artist/:id', component: __WEBPACK_IMPORTED_MODULE_8__components_artist_artist_component__["a" /* ArtistComponent */] },
    { path: 'album/:id', component: __WEBPACK_IMPORTED_MODULE_7__components_album_album_component__["a" /* AlbumComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_album_album_component__["a" /* AlbumComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_artist_artist_component__["a" /* ArtistComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_search_search_component__["a" /* SearchComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_spotify_service__["a" /* SpotifyService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/xampp/htdocs/ngspotify/angular-src/src/app.module.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'about',
            template: __webpack_require__(666)
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/ngspotify/angular-src/src/about.component.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(213);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlbumComponent = (function () {
    function AlbumComponent(_spotifyService, _route) {
        this._spotifyService = _spotifyService;
        this._route = _route;
    }
    AlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this._spotifyService.getAlbum(id)
                .subscribe(function (album) {
                _this.album = album;
            });
        });
    };
    AlbumComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'album',
            template: __webpack_require__(667)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], AlbumComponent);
    return AlbumComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/xampp/htdocs/ngspotify/angular-src/src/album.component.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(213);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtistComponent = (function () {
    function ArtistComponent(_spotifyService, _route) {
        this._spotifyService = _spotifyService;
        this._route = _route;
    }
    ArtistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this._spotifyService.getArtist(id)
                .subscribe(function (artist) {
                _this.artist = artist;
            });
            _this._spotifyService.getAlbums(id)
                .subscribe(function (albums) {
                _this.albums = albums.items;
            });
        });
    };
    ArtistComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'artist',
            template: __webpack_require__(668)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], ArtistComponent);
    return ArtistComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/xampp/htdocs/ngspotify/angular-src/src/artist.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'navbar',
            template: __webpack_require__(669)
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=C:/xampp/htdocs/ngspotify/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = (function () {
    function SearchComponent(_spotifyService) {
        this._spotifyService = _spotifyService;
    }
    SearchComponent.prototype.searchMusic = function () {
        var _this = this;
        this._spotifyService.searchMusic(this.searchStr)
            .subscribe(function (res) {
            _this.searchRes = res.artists.items;
        });
    };
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'search',
            template: __webpack_require__(670),
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_spotify_service__["a" /* SpotifyService */]) === 'function' && _a) || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a;
}());
//# sourceMappingURL=C:/xampp/htdocs/ngspotify/angular-src/src/search.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/xampp/htdocs/ngspotify/angular-src/src/environment.js.map

/***/ }),

/***/ 664:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<div class=\"main\">\n  <div class=\"container\">\n    <div class=\"background-image\"></div>\n    <!-- <img class=\"img-responsive\" src=\"assets/img/8921102852_ceb601a910_k.jpg\" alt=\"\"> -->\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <h1>About ngSpotify</h1>\r\n  <h3>Version: 2.0</h3>\r\n  <p>\r\n    This is an Angular 2 app that uses the Spotify Web API to find artists and display albums and tracks listings. Recently, the backend has been coded in Node JS to retrieve and pass around valid access tokens per changes to the Spotify Web API.\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = "<div id=\"album\" *ngIf=\"album\">\r\n  <header class=\"album-header well\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div *ngIf=\"album.images.length > 0\">\r\n          <img class=\"album-thumb\" src=\"{{album.images[0].url}}\" alt=\"\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n        <h4 *ngIf=\"album.artists.length > 0\">\r\n          <span *ngFor=\"let artist of album.artists\">\r\n            {{artist.name}}\r\n          </span>\r\n        </h4>\r\n        <h2>{{album.name}}</h2>\r\n        <h5>Release Date: {{album.release_date}}</h5>\r\n        <a class=\"btn btn-success\" target=\"_blank\" href=\"{{album.external_urls.spotify}}\">View in Spotify</a>\r\n      </div>\r\n    </div>\r\n  </header>\r\n\r\n  <div class=\"album-tracks\">\r\n    <h2>Album Tracks</h2>\r\n    <div *ngFor=\"let track of album.tracks.items\">\r\n      <div class=\"well\">\r\n        <h5>{{track.track_number}}. {{track.name}}</h5>\r\n        <a *ngIf=\"track.preview_url !== null\" href=\"{{track.preview_url}}\" target=\"_blank\">Preview</a>\r\n        <!-- <button *ngIf=\"track.preview_url !== null\" class=\"soundBt\" name=\"{{track.preview_url}}\"></button> -->\r\n        <span *ngIf=\"track.preview_url !== null\"> | </span>\r\n        <a *ngIf=\"track.external_urls !== null\" href=\"{{track.external_urls.spotify}}\" target=\"_blank\">Listen on Spotify</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"artist\">\r\n  <header class=\"artist-header well\">\r\n    <div *ngIf=\"artist.images.length > 0\">\r\n      <img class=\"artist-thumb img-circle\" src=\"{{artist.images[0].url}}\" alt=\"\">\r\n    </div>\r\n    <h1><strong>{{artist.name}}</strong></h1>\r\n    <p *ngIf=\"artist.genres.length > 0\">\r\n        <strong>Genres:</strong> <span *ngFor=\"let genre of artist.genres\">{{genre}} </span>\r\n    </p>\r\n  </header>\r\n\r\n  <div class=\"artist-albums\">\r\n    <div class=\"row\">\r\n      <div *ngFor=\"let album of albums\">\r\n        <div class=\"col-md-3\">\r\n          <div class=\"well album\">\r\n            <div *ngIf=\"album.images.length > 0\">\r\n              <img class=\"album-thumb img-thumbnail\" src=\"{{album.images[0].url}}\" alt=\"\">\r\n              <h4>{{album.name}}</h4>\r\n              <a class=\"btn btn-success btn-block\" routerLink=\"/album/{{album.id}}\">Album Details</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <img class=\"pull-left\" src=\"assets/img/icon-57x57.png\" alt=\"\">\r\n      <a class=\"navbar-brand\" href=\"#\">ngSpotify</a>\r\n    </div>\r\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/\">Home</a></li>\r\n        <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/about\">About</a></li>\r\n      </ul>\r\n    </div><!--/.nav-collapse -->\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <h1>Need Music?</h1>\r\n  <p class=\"lead\">Search and browse artists and find your favorite songs</p>\r\n\r\n  <form class=\"\">\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" name=\"searchStr\" [(ngModel)]=\"searchStr\" (keyup)=\"searchMusic()\" class=\"form-control\" placeholder=\"Search Artists...\">\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"searchRes\">\r\n  <div *ngFor=\"let res of searchRes\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"search-res well\">\r\n          <a routerLink=\"/artist/{{res.id}}\"><h4>{{res.name}}</h4></a>\r\n\r\n          <div class=\"\">\r\n            <strong>Genres: </strong>\r\n            <span *ngFor=\"let genre of res.genres\">{{genre}} </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(386);


/***/ })

},[690]);
//# sourceMappingURL=main.bundle.map
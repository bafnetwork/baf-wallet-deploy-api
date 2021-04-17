(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api/build/routes.ts":
/*!**********************************!*\
  !*** ./apps/api/build/routes.ts ***!
  \**********************************/
/*! exports provided: RegisterRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRoutes", function() { return RegisterRoutes; });
/* harmony import */ var _tsoa_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tsoa/runtime */ "@tsoa/runtime");
/* harmony import */ var _tsoa_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tsoa_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_app_controllers_DiscordController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../src/app/controllers/DiscordController */ "./apps/api/src/app/controllers/DiscordController.ts");
/* harmony import */ var _src_app_controllers_NearController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../src/app/controllers/NearController */ "./apps/api/src/app/controllers/NearController.ts");
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "RevokeTokenParams": {
        "dataType": "refObject",
        "properties": {
            "token": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "GetPubkeyForUserParams": {
        "dataType": "refObject",
        "properties": {
            "username": { "dataType": "string", "required": true },
            "tag": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BN": {
        "dataType": "refAlias",
        "type": { "dataType": "string", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ec.Signature": {
        "dataType": "refObject",
        "properties": {
            "r": { "ref": "BN", "required": true },
            "s": { "ref": "BN", "required": true },
            "recoveryParam": { "dataType": "union", "subSchemas": [{ "dataType": "double" }, { "dataType": "enum", "enums": [null] }], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PublicKeyWrapper": {
        "dataType": "refObject",
        "properties": {
            "pk": { "dataType": "buffer", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "eddsa.Signature": {
        "dataType": "refObject",
        "properties": {},
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateNearAccountParams": {
        "dataType": "refObject",
        "properties": {
            "discordUserId": { "dataType": "string", "required": true },
            "nonce": { "dataType": "string", "required": true },
            "secpSig": { "ref": "ec.Signature", "required": true },
            "edPubkey": { "ref": "PublicKeyWrapper", "required": true },
            "edSig": { "ref": "eddsa.Signature", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new _tsoa_runtime__WEBPACK_IMPORTED_MODULE_0__["ValidationService"](models);
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.post('/discord/revoke-token', function DiscordController_revokeToken(request, response, next) {
        const args = {
            accessToken: { "in": "body", "name": "accessToken", "required": true, "ref": "RevokeTokenParams" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new _src_app_controllers_DiscordController__WEBPACK_IMPORTED_MODULE_1__["DiscordController"]();
        const promise = controller.revokeToken.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/discord/get-pubkey-for-user', function DiscordController_getPubkeyForUser(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "GetPubkeyForUserParams" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new _src_app_controllers_DiscordController__WEBPACK_IMPORTED_MODULE_1__["DiscordController"]();
        const promise = controller.getPubkeyForUser.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/near/account', function NearController_createNearAccount(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "CreateNearAccountParams" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new _src_app_controllers_NearController__WEBPACK_IMPORTED_MODULE_2__["NearController"]();
        const promise = controller.createNearAccount.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function isController(object) {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }
    function promiseHandler(controllerObj, promise, response, successStatus, next) {
        return Promise.resolve(promise)
            .then((data) => {
            let statusCode = successStatus;
            let headers;
            if (isController(controllerObj)) {
                headers = controllerObj.getHeaders();
                statusCode = controllerObj.getStatus() || statusCode;
            }
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            returnHandler(response, statusCode, data, headers);
        })
            .catch((error) => next(error));
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function returnHandler(response, statusCode, data, headers = {}) {
        if (response.headersSent) {
            return;
        }
        Object.keys(headers).forEach((name) => {
            response.set(name, headers[name]);
        });
        if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
            data.pipe(response);
        }
        else if (data !== null && data !== undefined) {
            response.status(statusCode || 200).json(data);
        }
        else {
            response.status(statusCode || 204).end();
        }
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function responder(response) {
        return function (status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    }
    ;
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function getValidatedArgs(args, request, response) {
        const fieldErrors = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'formData':
                    if (args[key].dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.file, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                    else if (args[key].dataType === 'array' && args[key].array.dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.files, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                    else {
                        return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                case 'res':
                    return responder(response);
            }
        });
        if (Object.keys(fieldErrors).length > 0) {
            throw new _tsoa_runtime__WEBPACK_IMPORTED_MODULE_0__["ValidateError"](fieldErrors, '');
        }
        return values;
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


/***/ }),

/***/ "./apps/api/src/app/config/constants.ts":
/*!**********************************************!*\
  !*** ./apps/api/src/app/config/constants.ts ***!
  \**********************************************/
/*! exports provided: constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return constants; });
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @baf-wallet/interfaces */ "./libs/interfaces/src/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./apps/api/src/environments/environment.ts");



Object(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["initDotEnv"])();
const constants = {
    nearAccountConfig: {
        keyPath: process.env.NEAR_KEYPATH,
        networkId: Object(_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__["getNearNetworkId"])(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].env),
        masterAccountId: process.env.NEAR_MASTER_ACCOUNT_ID,
    },
    discord: {
        clientId: process.env.DISCORD_CLIENT_ID,
        clientSecret: process.env.DISCORD_CLIENT_SECRET,
    },
};


/***/ }),

/***/ "./apps/api/src/app/controllers/DiscordController.ts":
/*!***********************************************************!*\
  !*** ./apps/api/src/app/controllers/DiscordController.ts ***!
  \***********************************************************/
/*! exports provided: DiscordController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscordController", function() { return DiscordController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tsoa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsoa */ "tsoa");
/* harmony import */ var tsoa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tsoa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_discord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/discord */ "./apps/api/src/app/service/discord.ts");
var _a, _b;



let DiscordController = class DiscordController extends tsoa__WEBPACK_IMPORTED_MODULE_1__["Controller"] {
    async revokeToken(accessToken) {
        await Object(_service_discord__WEBPACK_IMPORTED_MODULE_2__["discordRevokeAccessToken"])(accessToken.token);
    }
    async getPubkeyForUser(requestBody) {
        const { username, tag } = requestBody;
        return Object(_service_discord__WEBPACK_IMPORTED_MODULE_2__["getPubkeyForUser"])(username, tag);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(tsoa__WEBPACK_IMPORTED_MODULE_1__["SuccessResponse"])('204'),
    Object(tsoa__WEBPACK_IMPORTED_MODULE_1__["Post"])('revoke-token'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(tsoa__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], DiscordController.prototype, "revokeToken", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(tsoa__WEBPACK_IMPORTED_MODULE_1__["SuccessResponse"])('200'),
    Object(tsoa__WEBPACK_IMPORTED_MODULE_1__["Post"])('get-pubkey-for-user'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(tsoa__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], DiscordController.prototype, "getPubkeyForUser", null);
DiscordController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(tsoa__WEBPACK_IMPORTED_MODULE_1__["Route"])('discord')
], DiscordController);



/***/ }),

/***/ "./apps/api/src/app/controllers/NearController.ts":
/*!********************************************************!*\
  !*** ./apps/api/src/app/controllers/NearController.ts ***!
  \********************************************************/
/*! exports provided: NearController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearController", function() { return NearController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tsoa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsoa */ "tsoa");
/* harmony import */ var tsoa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tsoa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_near__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/near */ "./apps/api/src/app/service/near.ts");
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @baf-wallet/interfaces */ "./libs/interfaces/src/index.ts");
var _a;




let NearController = class NearController extends tsoa__WEBPACK_IMPORTED_MODULE_1__["Controller"] {
    async createNearAccount(requestBody) {
        const secpPubkey = Buffer.from('60cf347dbc59d31c1358c8e5cf5e45b822ab85b79cb32a9f3d98184779a9efc2', 'hex'); // TODO: derive from torus
        await Object(_service_near__WEBPACK_IMPORTED_MODULE_2__["createNearAccount"])(secpPubkey, requestBody.edPubkey.pk, requestBody.discordUserId, requestBody.nonce, requestBody.secpSig, requestBody.edSig, _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_3__["CryptoCurves"].secp256k1);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(tsoa__WEBPACK_IMPORTED_MODULE_1__["SuccessResponse"])('204'),
    Object(tsoa__WEBPACK_IMPORTED_MODULE_1__["Post"])('account'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(tsoa__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], NearController.prototype, "createNearAccount", null);
NearController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(tsoa__WEBPACK_IMPORTED_MODULE_1__["Route"])('near')
], NearController);



/***/ }),

/***/ "./apps/api/src/app/service/discord.ts":
/*!*********************************************!*\
  !*** ./apps/api/src/app/service/discord.ts ***!
  \*********************************************/
/*! exports provided: discordRevokeAccessToken, getPubkeyForUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discordRevokeAccessToken", function() { return discordRevokeAccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPubkeyForUser", function() { return getPubkeyForUser; });
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! form-data */ "form-data");
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/constants */ "./apps/api/src/app/config/constants.ts");



async function discordRevokeAccessToken(token) {
    const formData = new form_data__WEBPACK_IMPORTED_MODULE_0___default.a();
    formData.append('token', token);
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('https://discordapp.com/api/oauth2/token/revoke', formData, {
        headers: Object.assign(Object.assign({}, formData.getHeaders()), { Authorization: `Basic ${Buffer.from(`${_config_constants__WEBPACK_IMPORTED_MODULE_2__["constants"].discord.clientId}:${_config_constants__WEBPACK_IMPORTED_MODULE_2__["constants"].discord.clientSecret}`, 'binary').toString('base64')}` }),
    });
}
// TODO: spec out
async function getPubkeyForUser(username, tag) {
    // check tag to make sure it is a 4-digit number, return a helpful error if it isn't
    // try to get the user info object from the discord api, return a helpful error if it DNE
    // use torus's `getPublicAddress` method to get the pubkey given the user ID
    return 'unimplemented';
}


/***/ }),

/***/ "./apps/api/src/app/service/near.ts":
/*!******************************************!*\
  !*** ./apps/api/src/app/service/near.ts ***!
  \******************************************/
/*! exports provided: createNearAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNearAccount", function() { return createNearAccount; });
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @baf-wallet/interfaces */ "./libs/interfaces/src/index.ts");
/* harmony import */ var _baf_wallet_multi_chain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @baf-wallet/multi-chain */ "./libs/multi-chain/src/index.ts");
/* harmony import */ var near_api_js_lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! near-api-js/lib/utils */ "near-api-js/lib/utils");
/* harmony import */ var near_api_js_lib_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(near_api_js_lib_utils__WEBPACK_IMPORTED_MODULE_2__);




// Check the found public key verifies the signature produced by (nonce + userId)
async function createNearAccount(secpPubkey, edPubkey, discordUserId, nonce, secpSig, edSig, curve = _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__["CryptoCurves"].secp256k1) {
    const sigsValid = verifyBothSigs(discordUserId, nonce, secpSig, edSig, secpPubkey, edPubkey);
    if (!sigsValid) {
        this.setStatus(403);
        throw 'Proof that the sender owns this public key must provided';
    }
    if (curve !== _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__["CryptoCurves"].secp256k1) {
        throw 'Only secp256k1 curves are currently supported';
    }
    const near = await _baf_wallet_multi_chain__WEBPACK_IMPORTED_MODULE_1__["NearAccount"].get();
    const accountName = near.getAccountNameFromPubkey(secpPubkey, curve);
    await near.accountCreator.createAccount(accountName, near_api_js_lib_utils__WEBPACK_IMPORTED_MODULE_2__["PublicKey"].fromString(Object(_baf_wallet_multi_chain__WEBPACK_IMPORTED_MODULE_1__["formatKey"])(edPubkey, _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__["KeyFormats"].bs58)));
}
function verifyBothSigs(discordUserId, nonce, secpSig, edSig, secpPubkey, edPubkey) {
    const msg = _baf_wallet_multi_chain__WEBPACK_IMPORTED_MODULE_1__["ChainUtil"].createUserVerifyMessage(discordUserId, nonce);
    return (!_baf_wallet_multi_chain__WEBPACK_IMPORTED_MODULE_1__["ChainUtil"].verifySignedSecp256k1(secpPubkey, msg, secpSig) ||
        !_baf_wallet_multi_chain__WEBPACK_IMPORTED_MODULE_1__["ChainUtil"].verifySignedEd25519(edPubkey, msg, edSig));
}
function toNearKey(edPubkey) {
    const x = near_api_js_lib_utils__WEBPACK_IMPORTED_MODULE_2__["PublicKey"].fromString(Object(_baf_wallet_multi_chain__WEBPACK_IMPORTED_MODULE_1__["formatKey"])(edPubkey, _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__["KeyFormats"].bs58));
    return x;
}


/***/ }),

/***/ "./apps/api/src/environments/environment.ts":
/*!**************************************************!*\
  !*** ./apps/api/src/environments/environment.ts ***!
  \**************************************************/
/*! exports provided: initDotEnv, environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initDotEnv", function() { return initDotEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @baf-wallet/interfaces */ "./libs/interfaces/src/index.ts");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);


function initDotEnv() {
    Object(dotenv__WEBPACK_IMPORTED_MODULE_1__["config"])({ path: './apps/api/src/environments/.env.dev' });
}
const environment = {
    env: _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__["Envs"].DEV,
    production: false,
};


/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baf_wallet_multi_chain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @baf-wallet/multi-chain */ "./libs/multi-chain/src/index.ts");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _build_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../build/routes */ "./apps/api/build/routes.ts");
/* harmony import */ var _app_config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/config/constants */ "./apps/api/src/app/config/constants.ts");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);






const app = express__WEBPACK_IMPORTED_MODULE_2___default()();
_baf_wallet_multi_chain__WEBPACK_IMPORTED_MODULE_0__["NearAccount"].setConfig(_app_config_constants__WEBPACK_IMPORTED_MODULE_4__["constants"].nearAccountConfig);
app.use(body_parser__WEBPACK_IMPORTED_MODULE_1__["urlencoded"]({
    extended: true,
}));
app.use(body_parser__WEBPACK_IMPORTED_MODULE_1__["json"]());
const whitelist = ['http://localhost:8080',];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};
app.use(cors__WEBPACK_IMPORTED_MODULE_5__(corsOptions));
Object(_build_routes__WEBPACK_IMPORTED_MODULE_3__["RegisterRoutes"])(app);
const port = process.env.port || 3333;
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});
server.on('error', console.error);


/***/ }),

/***/ "./libs/interfaces/src/index.ts":
/*!**************************************!*\
  !*** ./libs/interfaces/src/index.ts ***!
  \**************************************/
/*! exports provided: Envs, Chain, NearNetworkId, getNearNetworkId, NearSupportedActionTypes, CryptoCurves, KeyFormats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/configs */ "./libs/interfaces/src/lib/configs.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Envs", function() { return _lib_configs__WEBPACK_IMPORTED_MODULE_0__["Envs"]; });

/* harmony import */ var _lib_chains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/chains */ "./libs/interfaces/src/lib/chains.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chain", function() { return _lib_chains__WEBPACK_IMPORTED_MODULE_1__["Chain"]; });

/* harmony import */ var _lib_near__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/near */ "./libs/interfaces/src/lib/near.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NearNetworkId", function() { return _lib_near__WEBPACK_IMPORTED_MODULE_2__["NearNetworkId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNearNetworkId", function() { return _lib_near__WEBPACK_IMPORTED_MODULE_2__["getNearNetworkId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NearSupportedActionTypes", function() { return _lib_near__WEBPACK_IMPORTED_MODULE_2__["NearSupportedActionTypes"]; });

/* harmony import */ var _lib_crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/crypto */ "./libs/interfaces/src/lib/crypto.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CryptoCurves", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_3__["CryptoCurves"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyFormats", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_3__["KeyFormats"]; });







/***/ }),

/***/ "./libs/interfaces/src/lib/chains.ts":
/*!*******************************************!*\
  !*** ./libs/interfaces/src/lib/chains.ts ***!
  \*******************************************/
/*! exports provided: Chain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chain", function() { return Chain; });
var Chain;
(function (Chain) {
    Chain["NEAR"] = "near";
})(Chain || (Chain = {}));


/***/ }),

/***/ "./libs/interfaces/src/lib/configs.ts":
/*!********************************************!*\
  !*** ./libs/interfaces/src/lib/configs.ts ***!
  \********************************************/
/*! exports provided: Envs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Envs", function() { return Envs; });
var Envs;
(function (Envs) {
    Envs[Envs["DEV"] = 0] = "DEV";
    Envs[Envs["TEST"] = 1] = "TEST";
    Envs[Envs["PROD"] = 2] = "PROD";
})(Envs || (Envs = {}));


/***/ }),

/***/ "./libs/interfaces/src/lib/crypto.ts":
/*!*******************************************!*\
  !*** ./libs/interfaces/src/lib/crypto.ts ***!
  \*******************************************/
/*! exports provided: CryptoCurves, KeyFormats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoCurves", function() { return CryptoCurves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyFormats", function() { return KeyFormats; });
var CryptoCurves;
(function (CryptoCurves) {
    CryptoCurves["secp256k1"] = "secp256k1";
    CryptoCurves["ed25519"] = "ed25519";
})(CryptoCurves || (CryptoCurves = {}));
var KeyFormats;
(function (KeyFormats) {
    KeyFormats[KeyFormats["bs58"] = 0] = "bs58";
    KeyFormats[KeyFormats["hex"] = 1] = "hex";
})(KeyFormats || (KeyFormats = {}));


/***/ }),

/***/ "./libs/interfaces/src/lib/near.ts":
/*!*****************************************!*\
  !*** ./libs/interfaces/src/lib/near.ts ***!
  \*****************************************/
/*! exports provided: NearNetworkId, getNearNetworkId, NearSupportedActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearNetworkId", function() { return NearNetworkId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNearNetworkId", function() { return getNearNetworkId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearSupportedActionTypes", function() { return NearSupportedActionTypes; });
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configs */ "./libs/interfaces/src/lib/configs.ts");

var NearNetworkId;
(function (NearNetworkId) {
    NearNetworkId["DEVNET"] = "testnet";
    NearNetworkId["TESTNET"] = "testnet";
    NearNetworkId["MAINNET"] = "mainnet";
})(NearNetworkId || (NearNetworkId = {}));
function getNearNetworkId(env) {
    switch (env) {
        case _configs__WEBPACK_IMPORTED_MODULE_0__["Envs"].DEV:
            return NearNetworkId.DEVNET;
        case _configs__WEBPACK_IMPORTED_MODULE_0__["Envs"].TEST:
            return NearNetworkId.TESTNET;
        case _configs__WEBPACK_IMPORTED_MODULE_0__["Envs"].PROD:
            return NearNetworkId.MAINNET;
        default:
            return NearNetworkId.DEVNET;
    }
}
var NearSupportedActionTypes;
(function (NearSupportedActionTypes) {
    NearSupportedActionTypes["TRANSFER"] = "transfer";
})(NearSupportedActionTypes || (NearSupportedActionTypes = {}));


/***/ }),

/***/ "./libs/multi-chain/src/index.ts":
/*!***************************************!*\
  !*** ./libs/multi-chain/src/index.ts ***!
  \***************************************/
/*! exports provided: Signer, ChainUtil, NearSigner, NearAccount, formatKey, keyFromString, edPubkeyFromSK, secpPubkeyFromSK, edSKFromSeed, secpSKFromSeed, edSKFromRng, secpSKFromRng */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_interfaces_base_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/interfaces/base-classes */ "./libs/multi-chain/src/lib/interfaces/base-classes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Signer", function() { return _lib_interfaces_base_classes__WEBPACK_IMPORTED_MODULE_0__["Signer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChainUtil", function() { return _lib_interfaces_base_classes__WEBPACK_IMPORTED_MODULE_0__["ChainUtil"]; });

/* harmony import */ var _lib_near__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/near */ "./libs/multi-chain/src/lib/near/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NearSigner", function() { return _lib_near__WEBPACK_IMPORTED_MODULE_1__["NearSigner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NearAccount", function() { return _lib_near__WEBPACK_IMPORTED_MODULE_1__["NearAccount"]; });

/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/utils */ "./libs/multi-chain/src/lib/utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatKey", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_2__["formatKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyFromString", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_2__["keyFromString"]; });

/* harmony import */ var _lib_crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/crypto */ "./libs/multi-chain/src/lib/crypto/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "edPubkeyFromSK", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_3__["edPubkeyFromSK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "secpPubkeyFromSK", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_3__["secpPubkeyFromSK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "edSKFromSeed", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_3__["edSKFromSeed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "secpSKFromSeed", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_3__["secpSKFromSeed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "edSKFromRng", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_3__["edSKFromRng"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "secpSKFromRng", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_3__["secpSKFromRng"]; });







/***/ }),

/***/ "./libs/multi-chain/src/lib/crypto/index.ts":
/*!**************************************************!*\
  !*** ./libs/multi-chain/src/lib/crypto/index.ts ***!
  \**************************************************/
/*! exports provided: edPubkeyFromSK, secpPubkeyFromSK, edSKFromSeed, secpSKFromSeed, edSKFromRng, secpSKFromRng */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys */ "./libs/multi-chain/src/lib/crypto/keys.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "edPubkeyFromSK", function() { return _keys__WEBPACK_IMPORTED_MODULE_0__["edPubkeyFromSK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "secpPubkeyFromSK", function() { return _keys__WEBPACK_IMPORTED_MODULE_0__["secpPubkeyFromSK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "edSKFromSeed", function() { return _keys__WEBPACK_IMPORTED_MODULE_0__["edSKFromSeed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "secpSKFromSeed", function() { return _keys__WEBPACK_IMPORTED_MODULE_0__["secpSKFromSeed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "edSKFromRng", function() { return _keys__WEBPACK_IMPORTED_MODULE_0__["edSKFromRng"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "secpSKFromRng", function() { return _keys__WEBPACK_IMPORTED_MODULE_0__["secpSKFromRng"]; });




/***/ }),

/***/ "./libs/multi-chain/src/lib/crypto/keys.ts":
/*!*************************************************!*\
  !*** ./libs/multi-chain/src/lib/crypto/keys.ts ***!
  \*************************************************/
/*! exports provided: edPubkeyFromSK, secpPubkeyFromSK, edSKFromSeed, secpSKFromSeed, edSKFromRng, secpSKFromRng */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edPubkeyFromSK", function() { return edPubkeyFromSK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secpPubkeyFromSK", function() { return secpPubkeyFromSK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edSKFromSeed", function() { return edSKFromSeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secpSKFromSeed", function() { return secpSKFromSeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edSKFromRng", function() { return edSKFromRng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secpSKFromRng", function() { return secpSKFromRng; });
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! elliptic */ "elliptic");
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(elliptic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tweetnacl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tweetnacl */ "tweetnacl");
/* harmony import */ var tweetnacl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tweetnacl__WEBPACK_IMPORTED_MODULE_1__);


const secp256k1 = new elliptic__WEBPACK_IMPORTED_MODULE_0__["ec"]('secp256k1');
function edPubkeyFromSK(secret) {
    return Buffer.from(tweetnacl__WEBPACK_IMPORTED_MODULE_1__["sign"].keyPair.fromSecretKey(new Uint8Array(secret)).publicKey);
}
function secpPubkeyFromSK(secret) {
    return Buffer.from(secp256k1.keyFromPrivate(secret).getPublic(true, 'hex'), 'hex');
}
function edSKFromSeed(seed) {
    return Buffer.from(tweetnacl__WEBPACK_IMPORTED_MODULE_1__["sign"].keyPair.fromSeed(new Uint8Array(Buffer.from(seed))).secretKey);
}
function secpSKFromSeed(seed) {
    const entropy = tweetnacl__WEBPACK_IMPORTED_MODULE_1__["hash"](seed);
    const sk = secp256k1.genKeyPair({ entropy }).getPrivate('hex');
    console.log(sk);
    return Buffer.from(sk, 'hex');
}
function edSKFromRng() {
    return Buffer.from(tweetnacl__WEBPACK_IMPORTED_MODULE_1__["sign"].keyPair().secretKey);
}
function secpSKFromRng() {
    return Buffer.from(secp256k1.genKeyPair().getPrivate('hex'), 'hex');
}


/***/ }),

/***/ "./libs/multi-chain/src/lib/interfaces/base-classes.ts":
/*!*************************************************************!*\
  !*** ./libs/multi-chain/src/lib/interfaces/base-classes.ts ***!
  \*************************************************************/
/*! exports provided: Signer, ChainUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signer", function() { return Signer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChainUtil", function() { return ChainUtil; });
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! elliptic */ "elliptic");
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(elliptic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_sha3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-sha3 */ "js-sha3");
/* harmony import */ var js_sha3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_sha3__WEBPACK_IMPORTED_MODULE_1__);


const ecSecp = new elliptic__WEBPACK_IMPORTED_MODULE_0__["ec"]('secp256k1');
const ecEd = new elliptic__WEBPACK_IMPORTED_MODULE_0__["eddsa"]('ed25519');
class Signer {
    constructor(chain) {
        this.chain = chain;
    }
    static deserializeSendTXOpts(opts) {
        try {
            return JSON.parse(decodeURIComponent(opts));
        }
        catch (e) {
            throw `Error deserializing ${opts}: ${e}`;
        }
    }
    static serializeSendTXOpts(opts) {
        return encodeURIComponent(JSON.stringify(opts));
    }
}
class ChainUtil {
    constructor(chain) {
        this.chain = chain;
    }
    static verifySignedEd25519(pubkey, msg, signedMsg) {
        const msgHash = js_sha3__WEBPACK_IMPORTED_MODULE_1__["keccak256"](msg);
        let validSig = ecEd.verify(msgHash, signedMsg, Buffer.from(pubkey).toString('hex'));
        return validSig;
    }
    static signEd25519(sk, msg) {
        const msgHash = js_sha3__WEBPACK_IMPORTED_MODULE_1__["keccak256"](msg);
        const sig = ecEd.sign(msgHash, Buffer.from(sk).toString('hex'));
        return sig;
    }
    static verifySignedSecp256k1(pubkey, msg, signedMsg) {
        const msgHash = js_sha3__WEBPACK_IMPORTED_MODULE_1__["keccak256"](msg);
        let validSig = ecSecp.verify(msgHash, signedMsg, Buffer.from(pubkey));
        return validSig;
    }
    static signSecp256k1(sk, msg) {
        const msgHash = js_sha3__WEBPACK_IMPORTED_MODULE_1__["keccak256"](msg);
        const sig = ecSecp.sign(msgHash, sk, 'hex', {
            canonical: true,
        });
        return sig;
    }
    static createUserVerifyMessage(userId, nonce) {
        return `${userId}:${nonce}`;
    }
}


/***/ }),

/***/ "./libs/multi-chain/src/lib/near/account.ts":
/*!**************************************************!*\
  !*** ./libs/multi-chain/src/lib/near/account.ts ***!
  \**************************************************/
/*! exports provided: NearAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearAccount", function() { return NearAccount; });
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @baf-wallet/interfaces */ "./libs/interfaces/src/index.ts");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! near-api-js */ "near-api-js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var near_api_js_lib_account_creator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! near-api-js/lib/account_creator */ "near-api-js/lib/account_creator");
/* harmony import */ var near_api_js_lib_account_creator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(near_api_js_lib_account_creator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var near_api_js_lib_key_stores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! near-api-js/lib/key_stores */ "near-api-js/lib/key_stores");
/* harmony import */ var near_api_js_lib_key_stores__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(near_api_js_lib_key_stores__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./libs/multi-chain/src/lib/utils.ts");
/* harmony import */ var near_api_js_lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! near-api-js/lib/utils */ "near-api-js/lib/utils");
/* harmony import */ var near_api_js_lib_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(near_api_js_lib_utils__WEBPACK_IMPORTED_MODULE_5__);






class NearAccount {
    constructor(near, masterAccount, accountCreator, keyStore, params) {
        this.near = near;
        this.masterAccount = masterAccount;
        this.accountCreator = accountCreator;
        this.keyStore = keyStore;
        this.params = params;
    }
    static setConfig(params) {
        this.initParams = {
            masterAccountId: params.masterAccountId,
            connectConfig: {
                networkId: params.networkId,
                nodeUrl: `https://rpc.${params.networkId}.near.org`,
                helperUrl: `https://helper.${params.networkId}.near.org`,
                masterAccount: params.masterAccountId,
                keyPath: params.keyPath,
            },
        };
    }
    static async get() {
        var _a, _b;
        if (!this.initParams) {
            throw 'Near params must be set prior to calling getNea';
        }
        if (this.nearSingleton) {
            return this.nearSingleton;
        }
        const keyStore = ((_a = this.initParams.connectConfig.deps) === null || _a === void 0 ? void 0 : _a.keyStore) || new near_api_js_lib_key_stores__WEBPACK_IMPORTED_MODULE_3__["InMemoryKeyStore"]();
        this.initParams.connectConfig.deps = Object.assign(Object.assign({}, (((_b = this.initParams.connectConfig.deps) === null || _b === void 0 ? void 0 : _b.keyStore) || {})), { keyStore: keyStore });
        const near = await Object(near_api_js__WEBPACK_IMPORTED_MODULE_1__["connect"])(this.initParams.connectConfig);
        // const masterAccount = (near.accountCreator as LocalAccountCreator).masterAccount;
        // near.connection.provider
        const masterAccount = await near.account(this.initParams.masterAccountId);
        const urlAccountCreator = new near_api_js_lib_account_creator__WEBPACK_IMPORTED_MODULE_2__["UrlAccountCreator"](near.connection, this.initParams.connectConfig.helperUrl);
        // masterAccount.connection.signer;
        this.nearSingleton = new NearAccount(near, masterAccount, urlAccountCreator, keyStore, this.initParams);
        return this.nearSingleton;
    }
    getAccountNameFromPubkey(pubkey, curve) {
        return NearAccount.getAccountNameFromPubkey(pubkey, curve, this.params.connectConfig.networkId);
    }
    static getAccountNameFromPubkey(pubkey, curve, networkId) {
        return `${curve}_${Object(_utils__WEBPACK_IMPORTED_MODULE_4__["formatKey"])(pubkey, _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__["KeyFormats"].bs58)}.${networkId === _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__["NearNetworkId"].MAINNET ? 'near' : networkId}`.toLowerCase();
    }
    async updateKeyPair(accountId, secret) {
        const newKeyPair = new near_api_js_lib_utils__WEBPACK_IMPORTED_MODULE_5__["KeyPairEd25519"](Object(_utils__WEBPACK_IMPORTED_MODULE_4__["formatKey"])(secret, _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__["KeyFormats"].bs58));
        await this.keyStore.setKey(this.params.connectConfig.networkId, accountId, newKeyPair);
    }
}


/***/ }),

/***/ "./libs/multi-chain/src/lib/near/index.ts":
/*!************************************************!*\
  !*** ./libs/multi-chain/src/lib/near/index.ts ***!
  \************************************************/
/*! exports provided: NearSigner, NearAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signer */ "./libs/multi-chain/src/lib/near/signer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NearSigner", function() { return _signer__WEBPACK_IMPORTED_MODULE_0__["NearSigner"]; });

/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account */ "./libs/multi-chain/src/lib/near/account.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NearAccount", function() { return _account__WEBPACK_IMPORTED_MODULE_1__["NearAccount"]; });





/***/ }),

/***/ "./libs/multi-chain/src/lib/near/signer.ts":
/*!*************************************************!*\
  !*** ./libs/multi-chain/src/lib/near/signer.ts ***!
  \*************************************************/
/*! exports provided: NearSigner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearSigner", function() { return NearSigner; });
/* harmony import */ var _interfaces_base_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/base-classes */ "./libs/multi-chain/src/lib/interfaces/base-classes.ts");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! near-api-js */ "near-api-js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @baf-wallet/interfaces */ "./libs/interfaces/src/index.ts");
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-sha256 */ "js-sha256");
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! buffer */ "buffer");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./libs/multi-chain/src/lib/utils.ts");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bn.js */ "bn.js");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_6__);







class NearSigner extends _interfaces_base_classes__WEBPACK_IMPORTED_MODULE_0__["Signer"] {
    constructor(privKey, accountId, networkId) {
        super(_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_2__["Chain"].NEAR);
        this.accountId = accountId;
        this.networkId = networkId;
        this.keyStore = new near_api_js__WEBPACK_IMPORTED_MODULE_1__["keyStores"].InMemoryKeyStore();
        const keyPair = near_api_js__WEBPACK_IMPORTED_MODULE_1__["KeyPair"].fromString(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["formatKey"])(privKey, _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_2__["KeyFormats"].bs58));
        this.initProm = this.keyStore.setKey(this.networkId, this.accountId, keyPair);
        this.provider = new near_api_js__WEBPACK_IMPORTED_MODULE_1__["providers"].JsonRpcProvider(`https://rpc.${networkId}.near.org`);
    }
    async awaitConstructorInit() {
        return this.initProm;
    }
    buildNativeAction(action) {
        switch (action.type) {
            case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_2__["NearSupportedActionTypes"].TRANSFER:
                if (action.params.discriminator !== _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_2__["NearSupportedActionTypes"].TRANSFER) {
                    throw 'the input parameters do not match the call';
                }
                return near_api_js__WEBPACK_IMPORTED_MODULE_1__["transactions"].transfer(new bn_js__WEBPACK_IMPORTED_MODULE_6___default.a(action.params.amount));
            default:
                throw `Action of type ${action.type} is unsupported`;
        }
    }
    async createTX(opts) {
        const keyPair = await this.keyStore.getKey(this.networkId, this.accountId);
        const pubkey = keyPair.getPublicKey();
        const accessKey = await this.provider.query(`access_key/${this.accountId}/${pubkey.toString()}`, '');
        const nonce = ++accessKey.nonce;
        const recentBlockHash = near_api_js__WEBPACK_IMPORTED_MODULE_1__["utils"].serialize.base_decode(accessKey.block_hash);
        return near_api_js__WEBPACK_IMPORTED_MODULE_1__["transactions"].createTransaction(this.accountId, pubkey, opts.receiverAccountId, nonce, opts.actions.map(this.buildNativeAction), recentBlockHash);
    }
    async signTX(tx) {
        const keyPair = await this.keyStore.getKey(this.networkId, this.accountId);
        const serializedTx = near_api_js__WEBPACK_IMPORTED_MODULE_1__["utils"].serialize.serialize(near_api_js__WEBPACK_IMPORTED_MODULE_1__["transactions"].SCHEMA, tx);
        const serializedTxHash = new Uint8Array(js_sha256__WEBPACK_IMPORTED_MODULE_3__["sha256"].array(serializedTx));
        const signature = keyPair.sign(serializedTxHash);
        const signedTransaction = new near_api_js__WEBPACK_IMPORTED_MODULE_1__["transactions"].SignedTransaction({
            tx,
            signature: new near_api_js__WEBPACK_IMPORTED_MODULE_1__["transactions"].Signature({
                keyType: tx.publicKey.keyType,
                data: signature.signature,
            }),
        });
        // encodes transaction to serialized Borsh (required for all transactions)
        const signedSerializedTx = signedTransaction.encode();
        return signedSerializedTx;
    }
    async sendTX(signedTX) {
        // sends transaction to NEAR blockchain via JSON RPC call and records the result
        const result = await this.provider.sendJsonRpc('broadcast_tx_commit', [
            buffer__WEBPACK_IMPORTED_MODULE_4__["Buffer"].from(signedTX).toString('base64'),
        ]);
        const transactionLink = `https://explorer.${this.networkId}.near.org/transactions/${result.transaction.hash}`;
        return transactionLink;
    }
}


/***/ }),

/***/ "./libs/multi-chain/src/lib/utils.ts":
/*!*******************************************!*\
  !*** ./libs/multi-chain/src/lib/utils.ts ***!
  \*******************************************/
/*! exports provided: formatKey, keyFromString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatKey", function() { return formatKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyFromString", function() { return keyFromString; });
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @baf-wallet/interfaces */ "./libs/interfaces/src/index.ts");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bs58 */ "bs58");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_1__);


function formatKey(key, keyFormat = _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__["KeyFormats"].hex) {
    switch (keyFormat) {
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__["KeyFormats"].hex:
            return Buffer.from(key).toString('hex');
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__["KeyFormats"].bs58:
            return bs58__WEBPACK_IMPORTED_MODULE_1__["encode"](Buffer.from(key));
    }
}
function keyFromString(key, keyFormat = _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__["KeyFormats"].hex) {
    switch (keyFormat) {
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__["KeyFormats"].hex:
            return Buffer.from(key, 'hex');
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__["KeyFormats"].bs58:
            return Buffer.from(bs58__WEBPACK_IMPORTED_MODULE_1__["decode"](key));
    }
}


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/baf-wallet-v2/baf-wallet-v2/apps/api/src/main.ts */"./apps/api/src/main.ts");


/***/ }),

/***/ "@tsoa/runtime":
/*!********************************!*\
  !*** external "@tsoa/runtime" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@tsoa/runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "bn.js":
/*!************************!*\
  !*** external "bn.js" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bn.js");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "bs58":
/*!***********************!*\
  !*** external "bs58" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bs58");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "elliptic":
/*!***************************!*\
  !*** external "elliptic" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("elliptic");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "form-data":
/*!****************************!*\
  !*** external "form-data" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("form-data");

/***/ }),

/***/ "js-sha256":
/*!****************************!*\
  !*** external "js-sha256" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-sha256");

/***/ }),

/***/ "js-sha3":
/*!**************************!*\
  !*** external "js-sha3" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-sha3");

/***/ }),

/***/ "near-api-js":
/*!******************************!*\
  !*** external "near-api-js" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("near-api-js");

/***/ }),

/***/ "near-api-js/lib/account_creator":
/*!**************************************************!*\
  !*** external "near-api-js/lib/account_creator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("near-api-js/lib/account_creator");

/***/ }),

/***/ "near-api-js/lib/key_stores":
/*!*********************************************!*\
  !*** external "near-api-js/lib/key_stores" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("near-api-js/lib/key_stores");

/***/ }),

/***/ "near-api-js/lib/utils":
/*!****************************************!*\
  !*** external "near-api-js/lib/utils" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("near-api-js/lib/utils");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ "tsoa":
/*!***********************!*\
  !*** external "tsoa" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tsoa");

/***/ }),

/***/ "tweetnacl":
/*!****************************!*\
  !*** external "tweetnacl" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tweetnacl");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map
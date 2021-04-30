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
/******/ 	return __webpack_require__(__webpack_require__.s = 67);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_platforms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _lib_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _lib_configs__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _lib_chains__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_chains__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _lib_keysource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var _lib_crypto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_4__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_4__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_4__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _lib_crypto__WEBPACK_IMPORTED_MODULE_4__["e"]; });

/* harmony import */ var _lib_frontend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33);
/* harmony import */ var _lib_generic_tx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _lib_generic_tx__WEBPACK_IMPORTED_MODULE_6__["a"]; });










/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["f"]; });




/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("tsoa");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("near-api-js");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_baf_contract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_baf_contract__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _lib_baf_contract__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _lib_baf_contract__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);




/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["d"]; });




/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("tweetnacl");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return constants; });
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baf_wallet_near__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);



Object(_environments_environment__WEBPACK_IMPORTED_MODULE_2__[/* initDotEnv */ "b"])();
const constants = {
    chainParams: {
        near: {
            keyPath: process.env.NEAR_KEYPATH,
            networkID: Object(_baf_wallet_near__WEBPACK_IMPORTED_MODULE_1__[/* getNearNetworkID */ "a"])(_environments_environment__WEBPACK_IMPORTED_MODULE_2__[/* environment */ "a"].env),
            masterAccountID: process.env.NEAR_MASTER_ACCOUNT_ID,
        },
    },
    discord: {
        clientId: process.env.DISCORD_CLIENT_ID,
        clientSecret: process.env.DISCORD_CLIENT_SECRET,
    },
    torus: {
        verifierName: 'discord',
        network: _environments_environment__WEBPACK_IMPORTED_MODULE_2__[/* environment */ "a"].env === _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Env */ "d"].PROD ? 'mainnet' : 'testnet',
        proxyAddress: '0x4023d2a0D330bF11426B12C6144Cfb96B7fa6183',
    },
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nearConverter; });
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_3__);




const nearConverter = Object.assign(Object.assign({}, _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* bufferConverter */ "a"]), { pkToUnified(pk, curveMarker) {
        if (curveMarker.toString() !== 'ed25519') {
            throw new Error('currently this function only supports ! Please specify the correct curve marker');
        }
        const data = buffer__WEBPACK_IMPORTED_MODULE_3__["Buffer"].from(pk.data);
        return {
            curve: curveMarker,
            data: data,
            format: (fmt) => Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* formatBytes */ "d"])(data, fmt),
        };
    }, pkFromUnified: (unifiedPk) => near_api_js__WEBPACK_IMPORTED_MODULE_1__["utils"].PublicKey.fromString(unifiedPk.format(_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].BS58)), keyPairToUnified(keyPair, curveMarker) {
        const skFmt = keyPair.toString();
        if (!skFmt.startsWith(curveMarker.toString())) {
            throw new Error('keyPair is on the wrong curve! Please specify the correct curve in the type argument');
        }
        const skStr = skFmt.split(':')[1];
        const skData = Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* encodeBytes */ "c"])(skStr, _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].BS58);
        const pkData = buffer__WEBPACK_IMPORTED_MODULE_3__["Buffer"].from(keyPair.getPublicKey().data);
        return {
            curve: curveMarker,
            pk: {
                curve: curveMarker,
                data: pkData,
                format: (fmt) => Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* formatBytes */ "d"])(pkData, fmt),
            },
            sk: {
                curve: curveMarker,
                data: skData,
                format: (fmt) => Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* formatBytes */ "d"])(skData, fmt),
            },
        };
    },
    keyPairFromUnified(unifiedKeyPair) {
        const prefix = unifiedKeyPair.curve.toString();
        const skStr = unifiedKeyPair.sk.format(_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].BS58);
        return near_api_js__WEBPACK_IMPORTED_MODULE_1__["KeyPair"].fromString(`${prefix}:${skStr}`);
    } });


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return torusConstants; });
const torusConstants = {
    network: 'ropsten',
    proxyAddress: '0x4023d2a0D330bF11426B12C6144Cfb96B7fa6183',
    verifierInfo: {
        discord: {
            verifier: 'baf wallet-discord-testnet',
            clientId: '821890148198776874',
        },
    },
};


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nearTx; });
/* unused harmony export buildParamsFromGenericTx */
/* unused harmony export buildNearTx */
/* unused harmony export signNearTx */
/* unused harmony export sendNearTx */
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baf_wallet_multi_chain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58);
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _convert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _baf_wallet_baf_contract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);







function nearTx(innerSdk) {
    return {
        build: buildNearTx(innerSdk),
        sign: signNearTx,
        send: sendNearTx(innerSdk),
        buildParamsFromGenericTx: buildParamsFromGenericTx(innerSdk),
    };
}
function buildNativeAction(action) {
    switch (action.type) {
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* GenericTxSupportedActions */ "e"].TRANSFER:
            return near_api_js__WEBPACK_IMPORTED_MODULE_4__["transactions"].transfer(new bn_js__WEBPACK_IMPORTED_MODULE_3___default.a(action.amount, 10));
        default:
            throw `Action of type ${action.type} is unsupported`;
    }
}
const buildParamsFromGenericTx = (innerSdk) => async (txParams, recipientPk, _senderPk, senderPk) => {
    const recipientAccountID = await Object(_baf_wallet_baf_contract__WEBPACK_IMPORTED_MODULE_6__[/* getBafContract */ "b"])().getAccountId(recipientPk);
    const nearTransferParams = {
        actions: txParams.actions,
        senderPk: senderPk,
        senderAccountID: innerSdk.nearMasterAccount.accountId,
        recipientAccountID,
    };
    return nearTransferParams;
};
const buildNearTx = (innerSdk) => async ({ actions, senderPk, senderAccountID, recipientAccountID, }) => {
    const nearSenderPk = _convert__WEBPACK_IMPORTED_MODULE_5__[/* nearConverter */ "a"].pkFromUnified(senderPk);
    const accessKey = await innerSdk.rpcProvider.query(`access_key/${senderAccountID}/${nearSenderPk.toString()}`, '');
    const nonce = ++accessKey.nonce;
    const recentBlockHash = near_api_js__WEBPACK_IMPORTED_MODULE_4__["utils"].serialize.base_decode(accessKey.block_hash);
    const nativeActions = actions.map(buildNativeAction);
    return near_api_js__WEBPACK_IMPORTED_MODULE_4__["transactions"].createTransaction(senderAccountID, nearSenderPk, recipientAccountID, nonce, nativeActions, recentBlockHash);
};
async function signNearTx(tx, keyPair, _opts) {
    const nearKeyPair = _convert__WEBPACK_IMPORTED_MODULE_5__[/* nearConverter */ "a"].keyPairFromUnified(keyPair);
    const serializedTx = near_api_js__WEBPACK_IMPORTED_MODULE_4__["utils"].serialize.serialize(near_api_js__WEBPACK_IMPORTED_MODULE_4__["transactions"].SCHEMA, tx);
    const serializedTxHash = new Uint8Array(Object(_baf_wallet_multi_chain__WEBPACK_IMPORTED_MODULE_1__[/* sha256 */ "c"])(buffer__WEBPACK_IMPORTED_MODULE_2__["Buffer"].from(serializedTx)));
    const signature = nearKeyPair.sign(serializedTxHash);
    // const [_, signedTx] = await signTransaction(tx, )
    return new near_api_js__WEBPACK_IMPORTED_MODULE_4__["transactions"].SignedTransaction({
        transaction: tx,
        signature: new near_api_js__WEBPACK_IMPORTED_MODULE_4__["transactions"].Signature({
            keyType: tx.publicKey.keyType,
            data: signature.signature,
        }),
    });
}
const sendNearTx = (innerSdk) => async (tx) => {
    const serialized = tx.encode();
    const result = await innerSdk.rpcProvider.sendJsonRpc('broadcast_tx_commit', [
        buffer__WEBPACK_IMPORTED_MODULE_2__["Buffer"].from(serialized).toString('base64'),
    ]);
    const explorerLink = `https://explorer.${innerSdk.networkID}.near.org/transactions/${result.transaction.hash}`;
    return {
        fst: result,
        snd: explorerLink,
    };
};


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return encodeBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return pkToArray; });
/* unused harmony export pkToString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return pkFromString; });
/* unused harmony export skFromString */
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_1__);


function formatBytes(buf, fmt = _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].HEX) {
    switch (fmt) {
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].HEX:
            return Buffer.from(buf).toString('hex');
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].BS58:
            return bs58__WEBPACK_IMPORTED_MODULE_1__["encode"](Buffer.from(buf));
        default:
            throw 'Encoding type not supported';
    }
}
function encodeBytes(str, fmt) {
    switch (fmt) {
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].HEX:
            return Buffer.from(str, 'hex');
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].BS58:
            return bs58__WEBPACK_IMPORTED_MODULE_1__["decode"](str);
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].UTF8:
            return Buffer.from(str, 'utf8');
        default:
            throw 'Encoding type not supported';
    }
}
function pkToArray(key) {
    return [...key.data];
}
function pkToString(key, keyFormat = _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].HEX) {
    return formatBytes(key.data, keyFormat);
}
function pkFromString(key, curve, keyFormat = _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].HEX) {
    const data = encodeBytes(key, keyFormat);
    return {
        data,
        curve,
        format: (fmt) => formatBytes(data, fmt),
    };
}
function skFromString(key, curve, keyFormat = _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].HEX) {
    const data = encodeBytes(key, keyFormat);
    return {
        data,
        curve,
        format: (fmt) => formatBytes(data, fmt),
    };
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return keccak256; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sha256; });
/* harmony import */ var js_sha3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var js_sha3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_sha3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_1__);


function keccak256(msg) {
    return Buffer.from(js_sha3__WEBPACK_IMPORTED_MODULE_0__["keccak256"](msg), 'hex');
}
function sha256(msg) {
    return Buffer.from(Object(js_sha256__WEBPACK_IMPORTED_MODULE_1__["sha256"])(msg), 'hex');
}
// add more wrappers here as needed


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initChains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNearChain; });
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baf_wallet_multi_chain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);



let nearChain;
let init = false;
async function initChains() {
    nearChain = await Object(_baf_wallet_multi_chain__WEBPACK_IMPORTED_MODULE_1__[/* getWrappedInterface */ "a"])(_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Chain */ "a"].NEAR, _config_constants__WEBPACK_IMPORTED_MODULE_2__[/* constants */ "a"].chainParams[_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Chain */ "a"].NEAR]);
    init = true;
}
function getNearChain() {
    if (!init)
        throw 'You must first initialize the chains';
    return nearChain;
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NearNetworkID */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return stringToNetworkID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNearNetworkID; });
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

var NearNetworkID;
(function (NearNetworkID) {
    NearNetworkID["DEVNET"] = "testnet";
    NearNetworkID["TESTNET"] = "testnet";
    NearNetworkID["MAINNET"] = "mainnet";
})(NearNetworkID || (NearNetworkID = {}));
function stringToNetworkID(str) {
    switch (str) {
        case NearNetworkID.DEVNET:
            return NearNetworkID.DEVNET;
        case NearNetworkID.TESTNET:
            return NearNetworkID.TESTNET;
        case NearNetworkID.MAINNET:
            return NearNetworkID.MAINNET;
        default:
            throw new Error(`Unknown network identifier ${str}`);
    }
}
function getNearNetworkID(env) {
    switch (env) {
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Env */ "d"].DEV:
            return NearNetworkID.DEVNET;
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Env */ "d"].TEST:
            return NearNetworkID.TESTNET;
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Env */ "d"].PROD:
            return NearNetworkID.MAINNET;
        default:
            return NearNetworkID.DEVNET;
    }
}


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_near__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _lib_near__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_1__["a"]; });





/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("elliptic");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initDotEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);


function initDotEnv() {
    Object(dotenv__WEBPACK_IMPORTED_MODULE_1__["config"])({ path: './apps/api/src/environments/.env.prod' });
}
const environment = {
    env: _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Env */ "d"].DEV,
    production: true,
};


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NearController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tsoa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var tsoa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tsoa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_near__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _baf_wallet_torus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63);
/* harmony import */ var _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
var _a, _b, _c;






let NearController = class NearController extends tsoa__WEBPACK_IMPORTED_MODULE_1__["Controller"] {
    async createNearAccount(requestBody) {
        const secpPubkey = await Object(_baf_wallet_torus__WEBPACK_IMPORTED_MODULE_4__[/* getTorusPublicAddress */ "a"])(requestBody.userID, 'discord');
        await Object(_service_near__WEBPACK_IMPORTED_MODULE_2__[/* createNearAccount */ "a"])(secpPubkey, Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_5__[/* pkFromString */ "e"])(requestBody.edPubkey, _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_3__[/* ed25519Marker */ "g"], _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_3__[/* Encoding */ "c"].HEX), requestBody.userID, requestBody.nonce, requestBody.secpSigHex, requestBody.secpSig_s, requestBody.edSigHex, requestBody.accountID);
    }
    async getAccountNonce(secpPubkeyB58) {
        const pk = Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_5__[/* pkFromString */ "e"])(secpPubkeyB58, _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_3__[/* secp256k1Marker */ "h"], _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_3__[/* Encoding */ "c"].BS58);
        return await Object(_service_near__WEBPACK_IMPORTED_MODULE_2__[/* getAccountNonce */ "c"])(pk);
    }
    async getAccountInfo(secpPubkeyB58) {
        const pk = Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_5__[/* pkFromString */ "e"])(secpPubkeyB58, _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_3__[/* secp256k1Marker */ "h"], _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_3__[/* Encoding */ "c"].BS58);
        return await Object(_service_near__WEBPACK_IMPORTED_MODULE_2__[/* getAccountInfoFromSecpPK */ "b"])(pk);
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
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(tsoa__WEBPACK_IMPORTED_MODULE_1__["SuccessResponse"])('200'),
    Object(tsoa__WEBPACK_IMPORTED_MODULE_1__["Get"])('account/{secpPubkeyB58}/nonce'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(tsoa__WEBPACK_IMPORTED_MODULE_1__["Path"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], NearController.prototype, "getAccountNonce", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(tsoa__WEBPACK_IMPORTED_MODULE_1__["SuccessResponse"])('200'),
    Object(tsoa__WEBPACK_IMPORTED_MODULE_1__["Get"])('account/{secpPubkeyB58}/id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(tsoa__WEBPACK_IMPORTED_MODULE_1__["Path"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], NearController.prototype, "getAccountInfo", null);
NearController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(tsoa__WEBPACK_IMPORTED_MODULE_1__["Route"])('near')
], NearController);



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createNearAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAccountNonce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAccountInfoFromSecpPK; });
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baf_wallet_baf_contract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _baf_wallet_multi_chain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _chains_singletons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);





// Check the found public key verifies the signature produced by (nonce + userId)
async function createNearAccount(secpPK, edPK, userId, nonce, secpSig, rustEncodedSecpSig, edSig, accountID) {
    const msg = Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* createUserVerifyMessage */ "b"])(userId, nonce);
    const sigsValid = verifyBothSigs(msg, secpSig, edSig, secpPK, edPK);
    if (!sigsValid) {
        throw 'Proof that the sender owns this public key must provided';
    }
    const near = await Object(_chains_singletons__WEBPACK_IMPORTED_MODULE_4__[/* getNearChain */ "a"])();
    const nearAccount = near.accounts;
    await nearAccount.create({
        accountID,
        newAccountPk: edPK,
    });
    const bafContract = await Object(_baf_wallet_baf_contract__WEBPACK_IMPORTED_MODULE_1__[/* getBafContract */ "b"])();
    await bafContract.setAccountInfo(secpPK, userId, Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* encodeBytes */ "c"])(rustEncodedSecpSig, _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].HEX), accountID);
}
async function getAccountNonce(pk) {
    return await Object(_baf_wallet_baf_contract__WEBPACK_IMPORTED_MODULE_1__[/* getBafContract */ "b"])().getAccountNonce(pk);
}
async function getAccountInfoFromSecpPK(pk) {
    return {
        near_id: await Object(_baf_wallet_baf_contract__WEBPACK_IMPORTED_MODULE_1__[/* getBafContract */ "b"])().getAccountId(pk),
    };
}
function verifyBothSigs(msg, secpSig, edSig, secpPubkey, edPubkey) {
    return (Object(_baf_wallet_multi_chain__WEBPACK_IMPORTED_MODULE_3__[/* verifySignature */ "d"])(secpPubkey, msg, Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* encodeBytes */ "c"])(secpSig, _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].HEX)) &&
        Object(_baf_wallet_multi_chain__WEBPACK_IMPORTED_MODULE_3__[/* verifySignature */ "d"])(edPubkey, msg, Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* encodeBytes */ "c"])(edSig, _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].HEX)));
}


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@tsoa/runtime");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("bs58");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("near-api-js/lib/account_creator");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("near-api-js/lib/key_stores");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@toruslabs/torus.js");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Env; });
var Env;
(function (Env) {
    Env[Env["DEV"] = 0] = "DEV";
    Env[Env["TEST"] = 1] = "TEST";
    Env[Env["PROD"] = 2] = "PROD";
})(Env || (Env = {}));


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chain; });
var Chain;
(function (Chain) {
    Chain["NEAR"] = "near";
})(Chain || (Chain = {}));


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export KeySourceMethod */
var KeySourceMethod;
(function (KeySourceMethod) {
    KeySourceMethod[KeySourceMethod["TORUS"] = 0] = "TORUS";
    KeySourceMethod[KeySourceMethod["LOCAL_STORAGE"] = 1] = "LOCAL_STORAGE";
    // e.g. file, ledger, brain, etc, as they are implemented
})(KeySourceMethod || (KeySourceMethod = {}));


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ED25519_STR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SECP256K1_STR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return secp256k1Marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ed25519Marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Encoding; });
const ED25519_STR = 'ed25519';
const SECP256K1_STR = 'secp256k1';
const secp256k1Marker = { toString: () => SECP256K1_STR };
const ed25519Marker = { toString: () => ED25519_STR };
var Encoding;
(function (Encoding) {
    Encoding[Encoding["BS58"] = 0] = "BS58";
    Encoding[Encoding["HEX"] = 1] = "HEX";
    Encoding[Encoding["UTF8"] = 2] = "UTF8";
})(Encoding || (Encoding = {}));


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericTxSupportedActions; });
var GenericTxSupportedActions;
(function (GenericTxSupportedActions) {
    GenericTxSupportedActions["TRANSFER"] = "transfer";
})(GenericTxSupportedActions || (GenericTxSupportedActions = {}));


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nearChainInterface; });
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _rpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59);
/* harmony import */ var _accounts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60);
/* harmony import */ var _convert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var near_api_js_lib_key_stores__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26);
/* harmony import */ var near_api_js_lib_key_stores__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(near_api_js_lib_key_stores__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var near_api_js_lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61);
/* harmony import */ var near_api_js_lib_utils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(near_api_js_lib_utils__WEBPACK_IMPORTED_MODULE_7__);









const nearChainInterface = {
    accounts: _accounts__WEBPACK_IMPORTED_MODULE_4__[/* nearAccounts */ "a"],
    tx: _tx__WEBPACK_IMPORTED_MODULE_2__[/* nearTx */ "a"],
    convert: _convert__WEBPACK_IMPORTED_MODULE_5__[/* nearConverter */ "a"],
    rpc: _rpc__WEBPACK_IMPORTED_MODULE_3__[/* nearRpc */ "a"],
    init,
};
async function init({ networkID, masterAccountID, keyPath, keyPair, }) {
    const nodeUrl = `https://rpc.${networkID}.near.org`;
    const connectConfig = {
        networkId: networkID,
        nodeUrl,
        helperUrl: `https://helper.${networkID}.near.org`,
        masterAccount: masterAccountID,
        keyPath,
    };
    if (keyPair) {
        const keyStore = new near_api_js_lib_key_stores__WEBPACK_IMPORTED_MODULE_6__["InMemoryKeyStore"]();
        const nearKp = new near_api_js_lib_utils__WEBPACK_IMPORTED_MODULE_7__["KeyPairEd25519"](keyPair.sk.format(_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].BS58));
        keyStore.setKey(networkID, masterAccountID, nearKp);
        connectConfig.deps = {
            keyStore: keyStore,
        };
        connectConfig.keyStore = keyStore;
    }
    else if (keyPath) {
        const keyStore = new near_api_js_lib_key_stores__WEBPACK_IMPORTED_MODULE_6__["InMemoryKeyStore"]();
        connectConfig.deps = {
            keyStore: keyStore,
        };
    }
    else {
        throw 'A key path or key pair must be provided';
    }
    const near = await Object(near_api_js__WEBPACK_IMPORTED_MODULE_1__["connect"])(connectConfig);
    return {
        near,
        networkID,
        rpcProvider: new near_api_js__WEBPACK_IMPORTED_MODULE_1__["providers"].JsonRpcProvider(nodeUrl),
        nearMasterAccount: await near.account(masterAccountID),
    };
}


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _switches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _switches__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _crypto__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _crypto__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _crypto__WEBPACK_IMPORTED_MODULE_1__["c"]; });





/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getWrappedInterface; });
/* unused harmony export getChainInterface */
/* unused harmony export wrapChainInterface */
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baf_wallet_near__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);


// these are kind of ugly, but the ugly should be limited to here, all in the pursuit of typed-ness and editor completions
// NOTE: This will return the wrong type if you put in a type paramteter that conflicts with the 'chain' argument
async function getWrappedInterface(chain, initParams) {
    const chainInterface = getChainInterface(chain);
    return await wrapChainInterface(chainInterface, initParams);
}
// NOTE: This will return the wrong type if you put in a type paramter that conflicts with the 'chain' argument
function getChainInterface(chain) {
    switch (chain) {
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Chain */ "a"].NEAR:
            return _baf_wallet_near__WEBPACK_IMPORTED_MODULE_1__[/* nearChainInterface */ "b"];
        default:
            throw new Error(`Unsupported chain ${chain}`);
    }
}
async function wrapChainInterface(unwrapped, initParams) {
    const innerSdk = await unwrapped.init(initParams);
    const wrapped = {
        rpc: unwrapped.rpc(innerSdk),
        tx: unwrapped.tx(innerSdk),
        accounts: unwrapped.accounts(innerSdk),
        convert: unwrapped.convert,
        // Note: in the future, some chainInterfaces might want to do stuff in this fn
        getInner: () => innerSdk,
    };
    return wrapped;
}


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _keys__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _hash__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony import */ var _sign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _sign__WEBPACK_IMPORTED_MODULE_2__["a"]; });






/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pkSecpFromXY; });
/* unused harmony export keyPairFromSk */
/* unused harmony export pkFromSk */
/* unused harmony export skFromSeed */
/* unused harmony export skFromRng */
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elliptic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tweetnacl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var tweetnacl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tweetnacl__WEBPACK_IMPORTED_MODULE_3__);




const ellipticSecp256k1 = new elliptic__WEBPACK_IMPORTED_MODULE_2__["ec"]('secp256k1');
function pkSecpFromXY(x, y) {
    const key = ellipticSecp256k1.keyFromPublic({ x, y }, 'hex');
    return _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_1__[/* bufferConverter */ "a"].pkToUnified(Buffer.from(key.getPublic('array')), _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* secp256k1Marker */ "h"]);
}
function keyPairFromSk(sk) {
    const pk = pkFromSk(sk);
    return {
        curve: sk.curve,
        pk,
        sk,
    };
}
function pkFromSk(sk) {
    switch (sk.curve.toString()) {
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* SECP256K1_STR */ "f"]: {
            const data = Buffer.from(ellipticSecp256k1.keyFromPrivate(sk.data).getPublic(false, 'hex'), 'hex');
            return _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_1__[/* bufferConverter */ "a"].pkToUnified(data, sk.curve);
        }
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* ED25519_STR */ "b"]: {
            const data = Buffer.from(tweetnacl__WEBPACK_IMPORTED_MODULE_3__["sign"].keyPair.fromSecretKey(new Uint8Array(sk.data)).publicKey);
            return _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_1__[/* bufferConverter */ "a"].pkToUnified(data, sk.curve);
        }
        default:
            throw new Error(`Unsupported curve ${sk.curve.toString()}`);
    }
}
function skFromSeed(seed, curveMarker) {
    switch (curveMarker.toString()) {
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* SECP256K1_STR */ "f"]: {
            const entropy = tweetnacl__WEBPACK_IMPORTED_MODULE_3__["hash"](seed);
            const ellipticSk = ellipticSecp256k1
                .genKeyPair({ entropy })
                .getPrivate('hex');
            const data = Buffer.from(ellipticSk, 'hex');
            return _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_1__[/* bufferConverter */ "a"].skToUnified(data, curveMarker);
        }
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* ED25519_STR */ "b"]: {
            const data = Buffer.from(tweetnacl__WEBPACK_IMPORTED_MODULE_3__["sign"].keyPair.fromSeed(new Uint8Array(Buffer.from(seed))).secretKey);
            return _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_1__[/* bufferConverter */ "a"].pkToUnified(data, curveMarker);
        }
        default:
            throw new Error(`Unsupported curve ${curveMarker.toString()}`);
    }
}
function skFromRng(curveMarker) {
    switch (curveMarker.toString()) {
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* ED25519_STR */ "b"]: {
            const data = Buffer.from(tweetnacl__WEBPACK_IMPORTED_MODULE_3__["sign"].keyPair().secretKey);
            return _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_1__[/* bufferConverter */ "a"].skToUnified(data, curveMarker);
        }
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* SECP256K1_STR */ "f"]: {
            const data = Buffer.from(ellipticSecp256k1.genKeyPair().getPrivate('hex'), 'hex');
            return _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_1__[/* bufferConverter */ "a"].pkToUnified(data, curveMarker);
        }
        default:
            throw new Error(`Unsupported curve ${curveMarker.toString()}`);
    }
}


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _bytes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _bytes__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _bytes__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _bytes__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _bytes__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony import */ var _conversions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _conversions__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
/* harmony import */ var _user_verifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _user_verifier__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44);







/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bufferConverter; });
/* harmony import */ var _bytes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_1__);


const bufferConverter = {
    skFromUnified,
    skToUnified,
    pkFromUnified,
    pkToUnified,
    keyPairFromUnified,
    keyPairToUnified,
};
function skFromUnified(unifiedSk) {
    return buffer__WEBPACK_IMPORTED_MODULE_1__["Buffer"].from(unifiedSk.data);
}
function skToUnified(sk, curveMarker) {
    const data = buffer__WEBPACK_IMPORTED_MODULE_1__["Buffer"].from(sk);
    return {
        data,
        curve: curveMarker,
        format: (fmt) => Object(_bytes__WEBPACK_IMPORTED_MODULE_0__[/* formatBytes */ "b"])(data, fmt),
    };
}
function pkFromUnified(bafPk) {
    return buffer__WEBPACK_IMPORTED_MODULE_1__["Buffer"].from(bafPk.data);
}
function pkToUnified(pk, curveMarker) {
    const data = buffer__WEBPACK_IMPORTED_MODULE_1__["Buffer"].from(pk);
    return {
        data,
        curve: curveMarker,
        format: (fmt) => Object(_bytes__WEBPACK_IMPORTED_MODULE_0__[/* formatBytes */ "b"])(data, fmt),
    };
}
function keyPairFromUnified(unifiedKeyPair) {
    const { pk, sk } = unifiedKeyPair;
    return {
        fst: buffer__WEBPACK_IMPORTED_MODULE_1__["Buffer"].from(sk.data),
        snd: buffer__WEBPACK_IMPORTED_MODULE_1__["Buffer"].from(pk.data),
    };
}
function keyPairToUnified(keyPair, curveMarker) {
    const skBytes = keyPair.fst;
    const pkBytes = keyPair.snd;
    return {
        curve: curveMarker,
        sk: skToUnified(skBytes, curveMarker),
        pk: pkToUnified(pkBytes, curveMarker),
    };
}


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getEnumValues */
const getEnumValues = (enumObj) => Object.keys(enumObj).map((key) => enumObj[key]);


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createUserVerifyMessage; });
function createUserVerifyMessage(userId, nonce) {
    return `${userId}:${nonce}`;
}


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export serializeData */
/* unused harmony export deserializeData */
const serializeData = (data) => JSON.stringify(data);
// TODO: add type checking. See https://github.com/bafnetwork/baf-wallet-v2/issues/36
const deserializeData = (uriEncoded) => JSON.parse(uriEncoded);


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return verifySignature; });
/* unused harmony export signMsg */
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(elliptic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tweetnacl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var tweetnacl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tweetnacl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _baf_wallet_baf_contract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);






const ellipticSecp256k1 = new elliptic__WEBPACK_IMPORTED_MODULE_2__["ec"]('secp256k1');
function verifySignature(pk, msg, signedMsg, hashFn = _hash__WEBPACK_IMPORTED_MODULE_1__[/* keccak256 */ "a"]) {
    const msgFormat = typeof msg === 'string' ? Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_4__[/* encodeBytes */ "c"])(msg, _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].UTF8) : msg;
    switch (pk.curve.toString()) {
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* SECP256K1_STR */ "f"]: {
            const msgHash = hashFn(msgFormat);
            let validSig = ellipticSecp256k1.verify(msgHash, signedMsg, pk.data);
            return validSig;
        }
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* ED25519_STR */ "b"]: {
            const msgHash = hashFn(msgFormat);
            return tweetnacl__WEBPACK_IMPORTED_MODULE_3__["sign"].detached.verify(new Uint8Array(msgHash), new Uint8Array(signedMsg), new Uint8Array(pk.data));
        }
        default:
            throw new Error(`Unsupported curve ${pk.curve.toString()}`);
    }
}
function signMsg(sk, msg, bafContractFormat = false, hashFn = _hash__WEBPACK_IMPORTED_MODULE_1__[/* keccak256 */ "a"]) {
    const msgFormat = typeof msg === 'string' ? Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_4__[/* encodeBytes */ "c"])(msg, _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* Encoding */ "c"].UTF8) : msg;
    switch (sk.curve.toString()) {
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* SECP256K1_STR */ "f"]: {
            const msgHash = hashFn(msgFormat);
            const ellipticSig = ellipticSecp256k1.sign(msgHash, sk.data, 'hex', {
                canonical: true,
            });
            return bafContractFormat
                ? Object(_baf_wallet_baf_contract__WEBPACK_IMPORTED_MODULE_5__[/* encodeSecpSigBafContract */ "a"])(ellipticSig)
                : Buffer.from(ellipticSig.toDER('hex'), 'hex');
        }
        case _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* ED25519_STR */ "b"]: {
            const msgHash = hashFn(msgFormat);
            return Buffer.from(tweetnacl__WEBPACK_IMPORTED_MODULE_3__["sign"].detached(new Uint8Array(msgHash), new Uint8Array(sk.data)));
        }
        default:
            throw new Error(`Unsupported curve ${sk.curve.toString()}`);
    }
}


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setBafContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getBafContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return encodeSecpSigBafContract; });
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57);
var _config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(57, 1);
/* harmony import */ var _baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);



let bafContract;
async function setBafContract(account) {
    bafContract = await buildBafContract(account);
    return bafContract;
}
function getBafContract() {
    if (bafContract)
        return bafContract;
    throw 'BAF Contract is not initialized yet, please call setBafContract';
}
async function buildBafContract(account) {
    const contract = new near_api_js__WEBPACK_IMPORTED_MODULE_0__["Contract"](account, _config_json__WEBPACK_IMPORTED_MODULE_1__.contractName, {
        viewMethods: ['get_account_id', 'get_account_nonce'],
        changeMethods: ['set_account_info', 'delete_account_info'],
    });
    return {
        getAccountId: async (pk) => {
            const ret = await contract.get_account_id({
                secp_pk: Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* pkToArray */ "f"])(pk),
            });
            if (!ret || ret === '')
                return null;
            else
                return ret;
        },
        getAccountNonce: (pk) => contract.get_account_nonce({
            secp_pk: Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* pkToArray */ "f"])(pk),
        }),
        setAccountInfo: (pk, user_id, secp_sig_s, new_account_id) => contract.set_account_info({
            user_id,
            secp_pk: Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* pkToArray */ "f"])(pk),
            secp_sig_s: [...secp_sig_s],
            new_account_id,
        }),
        deleteAccountInfo: (pk, user_id, secp_sig_s) => contract.delete_account_info({
            user_id,
            secp_pk: Object(_baf_wallet_utils__WEBPACK_IMPORTED_MODULE_2__[/* pkToArray */ "f"])(pk),
            secp_sig_s: [...secp_sig_s],
        }),
    };
}
function encodeSecpSigBafContract(sig) {
    return Buffer.from(`${sig.r.toString('hex', 64)}${sig.s.toString('hex', 64)}`, 'hex');
}


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bafContractConstants */
const bafContractConstants = {
    // :)
    beneficiaryId: 'lev.near',
};


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTorusPublicAddress; });
/* unused harmony export assertLoginTypeRegistered */
/* harmony import */ var _toruslabs_torus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _toruslabs_torus_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_toruslabs_torus_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _toruslabs_fetch_node_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64);
/* harmony import */ var _toruslabs_fetch_node_details__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_toruslabs_fetch_node_details__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _baf_wallet_multi_chain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);





const torus = new _toruslabs_torus_js__WEBPACK_IMPORTED_MODULE_0___default.a({
    metadataHost: 'https://metadata.tor.us',
    allowHost: 'https://signer.tor.us/api/allow',
});
_toruslabs_torus_js__WEBPACK_IMPORTED_MODULE_0___default.a.setAPIKey('torus-default');
async function getTorusPublicAddress(userId, loginType) {
    assertLoginTypeRegistered(loginType);
    // Configuration from https://github.com/torusresearch/torus-direct-web-sdk/blob/master/src/login.ts
    const nodeManager = new _toruslabs_fetch_node_details__WEBPACK_IMPORTED_MODULE_1___default.a({
        network: _constants__WEBPACK_IMPORTED_MODULE_3__[/* torusConstants */ "a"].network,
        proxyAddress: _constants__WEBPACK_IMPORTED_MODULE_3__[/* torusConstants */ "a"].proxyAddress,
    });
    const { torusNodeEndpoints, torusNodePub, torusIndexes, } = await nodeManager.getNodeDetails();
    global.fetch = node_fetch__WEBPACK_IMPORTED_MODULE_2__;
    console.log(torusNodeEndpoints, torusNodePub);
    const torusPublicKey = await torus.getPublicAddress(torusNodeEndpoints, torusNodePub, {
        verifier: _constants__WEBPACK_IMPORTED_MODULE_3__[/* torusConstants */ "a"].verifierInfo[loginType].verifier,
        verifierId: userId,
    }, true);
    return Object(_baf_wallet_multi_chain__WEBPACK_IMPORTED_MODULE_4__[/* pkSecpFromXY */ "b"])(torusPublicKey.X, torusPublicKey.Y);
}
function assertLoginTypeRegistered(loginType) {
    if (!_constants__WEBPACK_IMPORTED_MODULE_3__[/* torusConstants */ "a"].verifierInfo[loginType])
        throw `No verifier info exits for login type ${loginType}`;
    return true;
}


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterRoutes; });
/* harmony import */ var _tsoa_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _tsoa_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tsoa_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_app_controllers_DiscordController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);
/* harmony import */ var _src_app_controllers_NearController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
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
    "hexString": {
        "dataType": "refAlias",
        "type": { "dataType": "string", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateNearAccountParams": {
        "dataType": "refObject",
        "properties": {
            "userID": { "dataType": "string", "required": true },
            "nonce": { "ref": "hexString", "required": true },
            "secpSigHex": { "ref": "hexString", "required": true },
            "secpSig_s": { "ref": "hexString", "required": true },
            "edPubkey": { "ref": "hexString", "required": true },
            "edSigHex": { "ref": "hexString", "required": true },
            "accountID": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NearAccountInfo": {
        "dataType": "refObject",
        "properties": {
            "near_id": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }], "required": true },
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
        const controller = new _src_app_controllers_DiscordController__WEBPACK_IMPORTED_MODULE_1__[/* DiscordController */ "a"]();
        const promise = controller.revokeToken.apply(controller, validatedArgs);
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
        const controller = new _src_app_controllers_NearController__WEBPACK_IMPORTED_MODULE_2__[/* NearController */ "a"]();
        const promise = controller.createNearAccount.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/near/account/:secpPubkeyB58/nonce', function NearController_getAccountNonce(request, response, next) {
        const args = {
            secpPubkeyB58: { "in": "path", "name": "secpPubkeyB58", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new _src_app_controllers_NearController__WEBPACK_IMPORTED_MODULE_2__[/* NearController */ "a"]();
        const promise = controller.getAccountNonce.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/near/account/:secpPubkeyB58/id', function NearController_getAccountInfo(request, response, next) {
        const args = {
            secpPubkeyB58: { "in": "path", "name": "secpPubkeyB58", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new _src_app_controllers_NearController__WEBPACK_IMPORTED_MODULE_2__[/* NearController */ "a"]();
        const promise = controller.getAccountInfo.apply(controller, validatedArgs);
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
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscordController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tsoa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var tsoa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tsoa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_discord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52);
var _a;



let DiscordController = class DiscordController extends tsoa__WEBPACK_IMPORTED_MODULE_1__["Controller"] {
    async revokeToken(accessToken) {
        await Object(_service_discord__WEBPACK_IMPORTED_MODULE_2__[/* discordRevokeAccessToken */ "a"])(accessToken.token);
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
DiscordController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(tsoa__WEBPACK_IMPORTED_MODULE_1__["Route"])('discord')
], DiscordController);



/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return discordRevokeAccessToken; });
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);



async function discordRevokeAccessToken(token) {
    const formData = new form_data__WEBPACK_IMPORTED_MODULE_0___default.a();
    formData.append('token', token);
    const res = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('https://discordapp.com/api/oauth2/token/revoke', formData, {
        headers: Object.assign(Object.assign({}, formData.getHeaders()), { Authorization: `Basic ${Buffer.from(`${_config_constants__WEBPACK_IMPORTED_MODULE_2__[/* constants */ "a"].discord.clientId}:${_config_constants__WEBPACK_IMPORTED_MODULE_2__[/* constants */ "a"].discord.clientSecret}`, 'binary').toString('base64')}` }),
    });
}


/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("form-data");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("js-sha3");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("js-sha256");

/***/ }),
/* 57 */
/***/ (function(module) {

module.exports = JSON.parse("{\"contractName\":\"dev-1619398846158-6592600\"}");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("bn.js");

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nearRpc; });
/* unused harmony export getNodeUrl */
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);

// * add more RPC methods as they are needed
function nearRpc(_innerSdk) {
    return {
        endpoint: getNodeUrl,
    };
}
function getNodeUrl(network) {
    const networkID = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* stringToNetworkID */ "b"])(network !== null && network !== void 0 ? network : 'mainnet');
    return `https://rpc.${networkID}.near.org`;
}


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nearAccounts; });
/* harmony import */ var near_api_js_lib_account_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var near_api_js_lib_account_creator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(near_api_js_lib_account_creator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _convert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);


function nearAccounts(nearState) {
    const { near } = nearState;
    return {
        lookup: async (accountID) => await near.account(accountID),
        getGenericMasterAccount: () => {
            return {
                getBalance: async () => (await nearState.nearMasterAccount.getAccountBalance())
                    .total,
            };
        },
        create: async ({ accountID, newAccountPk, initialBalance, method = 'helper', }) => {
            if (method === 'local' && !initialBalance) {
                throw 'An initial balance must be specified when using a local account creator';
            }
            const masterAccount = await near.account(near.config.masterAccount);
            const accountCreator = method === 'helper'
                ? new near_api_js_lib_account_creator__WEBPACK_IMPORTED_MODULE_0__["UrlAccountCreator"](near.connection, near.config.helperUrl)
                : new near_api_js_lib_account_creator__WEBPACK_IMPORTED_MODULE_0__["LocalAccountCreator"](masterAccount, initialBalance);
            await accountCreator.createAccount(accountID, _convert__WEBPACK_IMPORTED_MODULE_1__[/* nearConverter */ "a"].pkFromUnified(newAccountPk));
            return await near.account(accountID);
        },
    };
}


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("near-api-js/lib/utils");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _torus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _torus__WEBPACK_IMPORTED_MODULE_1__["a"]; });





/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("@toruslabs/fetch-node-details");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(68);


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _build_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);
/* harmony import */ var _app_config_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _baf_wallet_baf_contract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _app_chains_singletons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);








const app = express__WEBPACK_IMPORTED_MODULE_1___default()();
async function initContracts() {
    const masterAccount = await Object(_app_chains_singletons__WEBPACK_IMPORTED_MODULE_7__[/* getNearChain */ "a"])().accounts.lookup(_app_config_constants__WEBPACK_IMPORTED_MODULE_3__[/* constants */ "a"].chainParams[_baf_wallet_interfaces__WEBPACK_IMPORTED_MODULE_6__[/* Chain */ "a"].NEAR].masterAccountID);
    await Object(_baf_wallet_baf_contract__WEBPACK_IMPORTED_MODULE_5__[/* setBafContract */ "c"])(masterAccount);
}
async function init() {
    await Object(_app_chains_singletons__WEBPACK_IMPORTED_MODULE_7__[/* initChains */ "b"])();
    await initContracts();
    app.use(body_parser__WEBPACK_IMPORTED_MODULE_0__["urlencoded"]({
        extended: true,
    }));
    app.use(body_parser__WEBPACK_IMPORTED_MODULE_0__["json"]());
    const whitelist = ['http://localhost:8080'];
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
    app.use(cors__WEBPACK_IMPORTED_MODULE_4__(corsOptions));
    Object(_build_routes__WEBPACK_IMPORTED_MODULE_2__[/* RegisterRoutes */ "a"])(app);
    const port = process.env.port || 3333;
    const server = app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}/`);
    });
    server.on('error', console.error);
}
init();


/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map
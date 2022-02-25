"use strict";
exports.__esModule = true;
exports.addProduct = void 0;
var constants_1 = require("./constants");
var addProduct = function (payload) {
    return {
        type: constants_1.ADD_PRODUCT,
        payload: payload
    };
};
exports.addProduct = addProduct;

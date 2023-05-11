"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAssetsFile = void 0;
const getAssetsFile = (url) => {
    return new URL(`../assets/${url}`, import.meta.url).href;
};
exports.getAssetsFile = getAssetsFile;

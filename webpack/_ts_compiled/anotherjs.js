"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obj = {};
let newVal = '';
Object.defineProperty(obj, 'name', {
    get() {
        console.log('get');
        return newVal;
    },
    set(val) {
        console.log('set');
        newVal = val;
    }
});
obj.name = 'es';
console.log(obj.name);
exports.default = {
    obj
};
//# sourceMappingURL=anotherjs.js.map
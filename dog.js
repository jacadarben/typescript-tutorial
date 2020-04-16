"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Animal_1 = require("./Animal");
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, _tricks) {
        var _this = _super.call(this, name) || this;
        _this._tricks = _tricks;
        return _this;
    }
    Object.defineProperty(Dog.prototype, "tricks", {
        get: function () {
            return this._tricks;
        },
        set: function (v) {
            this._tricks = v;
        },
        enumerable: true,
        configurable: true
    });
    return Dog;
}(Animal_1.Animal));
exports.Dog = Dog;

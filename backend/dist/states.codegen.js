"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const engine_1 = require("@neuledge/engine");
/**
 * This is the category state.
 */
let Category = class Category {
    static $name = 'Category';
    static $id = { fields: ['+id'], auto: 'increment' };
    static $scalars = () => ({
        id: { type: engine_1.$.scalars.Integer, index: 1 },
        name: { type: engine_1.$.scalars.String, index: 2 },
    });
    static $where;
    static $unique;
    static $filter;
    /**
     * The category id
     */
    id;
    /**
     * The category name
     */
    name;
};
Category = __decorate([
    engine_1.$.State()
], Category);
exports.Category = Category;
//# sourceMappingURL=states.codegen.js.map
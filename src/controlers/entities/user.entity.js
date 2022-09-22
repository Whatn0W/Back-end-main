"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const cart_entity_1 = require("./cart.entity");
let User = class User {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "user_id", unsigned: true }),
    __metadata("design:type", Number)
], User.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "email",
        unique: true,
        length: 255,
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "password_hash",
        length: 128,
    }),
    __metadata("design:type", String)
], User.prototype, "passwordHash", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "forename", length: 64 }),
    __metadata("design:type", String)
], User.prototype, "forename", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "surname", length: 64 }),
    __metadata("design:type", String)
], User.prototype, "surname", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "phone_number",
        unique: true,
        length: 24,
    }),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    typeorm_1.Column("text", { name: "postal_address" }),
    __metadata("design:type", String)
], User.prototype, "postalAddress", void 0);
__decorate([
    typeorm_1.OneToMany(() => cart_entity_1.Cart, (cart) => cart.user),
    __metadata("design:type", Array)
], User.prototype, "carts", void 0);
User = __decorate([
    typeorm_1.Index("uq_user_email", ["email"], { unique: true }),
    typeorm_1.Index("uq_user_phone_number", ["phoneNumber"], { unique: true }),
    typeorm_1.Entity("user")
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map
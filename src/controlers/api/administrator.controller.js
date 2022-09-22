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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministratorController = void 0;
const common_1 = require("@nestjs/common");
const add_administrator_dto_1 = require("../../dtos/administrator/add.administrator.dto");
const edit_administrator_dto_1 = require("../../dtos/administrator/edit.administrator.dto");
const administrator_service_1 = require("../../services/administrator/administrator.service");
let AdministratorController = class AdministratorController {
    constructor(administratorService) {
        this.administratorService = administratorService;
    }
    getAll() {
        return this.administratorService.getAll();
    }
    getById(administratorId) {
        return this.administratorService.getById(administratorId);
    }
    add(data) {
        return this.administratorService.add(data);
    }
    edit(id, data) {
        return this.administratorService.editById(id, data);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdministratorController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdministratorController.prototype, "getById", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_administrator_dto_1.AddAdministratorDto]),
    __metadata("design:returntype", Promise)
], AdministratorController.prototype, "add", null);
__decorate([
    common_1.Post(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, edit_administrator_dto_1.EditAdministratorDto]),
    __metadata("design:returntype", Promise)
], AdministratorController.prototype, "edit", null);
AdministratorController = __decorate([
    common_1.Controller('api/administrator'),
    __metadata("design:paramtypes", [administrator_service_1.AdministratorService])
], AdministratorController);
exports.AdministratorController = AdministratorController;
//# sourceMappingURL=administrator.controller.js.map
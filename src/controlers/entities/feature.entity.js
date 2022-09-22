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
exports.Feature = void 0;
const typeorm_1 = require("typeorm");
const article_feature_entity_1 = require("./article-feature.entity");
const category_entity_1 = require("./category.entity");
let Feature = class Feature {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "feature_id", unsigned: true }),
    __metadata("design:type", Number)
], Feature.prototype, "featureId", void 0);
__decorate([
    typeorm_1.Column("varchar", { name: "name", length: 32 }),
    __metadata("design:type", String)
], Feature.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("int", { name: "category_id", unsigned: true }),
    __metadata("design:type", Number)
], Feature.prototype, "categoryId", void 0);
__decorate([
    typeorm_1.OneToMany(() => article_feature_entity_1.ArticleFeature, (articleFeature) => articleFeature.feature),
    __metadata("design:type", Array)
], Feature.prototype, "articleFeatures", void 0);
__decorate([
    typeorm_1.ManyToOne(() => category_entity_1.Category, (category) => category.features, {
        onDelete: "NO ACTION",
        onUpdate: "CASCADE",
    }),
    typeorm_1.JoinColumn([{ name: "category_id", referencedColumnName: "categoryId" }]),
    __metadata("design:type", category_entity_1.Category)
], Feature.prototype, "category", void 0);
Feature = __decorate([
    typeorm_1.Index("uq_feature_name_category_id", ["name", "categoryId"], { unique: true }),
    typeorm_1.Index("fk_feature_category_id", ["categoryId"], {}),
    typeorm_1.Entity("feature")
], Feature);
exports.Feature = Feature;
//# sourceMappingURL=feature.entity.js.map
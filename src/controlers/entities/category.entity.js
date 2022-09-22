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
var Category_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const typeorm_1 = require("typeorm");
const article_entity_1 = require("./article.entity");
const feature_entity_1 = require("./feature.entity");
let Category = Category_1 = class Category {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "category_id", unsigned: true }),
    __metadata("design:type", Number)
], Category.prototype, "categoryId", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "name",
        unique: true,
        length: 32,
    }),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "image_path",
        unique: true,
        length: 128,
    }),
    __metadata("design:type", String)
], Category.prototype, "imagePath", void 0);
__decorate([
    typeorm_1.Column("int", {
        name: "parent__category_id",
        nullable: true,
        unsigned: true,
    }),
    __metadata("design:type", Number)
], Category.prototype, "parentCategoryId", void 0);
__decorate([
    typeorm_1.OneToMany(() => article_entity_1.Article, (article) => article.category),
    __metadata("design:type", Array)
], Category.prototype, "articles", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Category_1, (category) => category.categories, {
        onDelete: "NO ACTION",
        onUpdate: "CASCADE",
    }),
    typeorm_1.JoinColumn([
        { name: "parent__category_id", referencedColumnName: "categoryId" },
    ]),
    __metadata("design:type", Category)
], Category.prototype, "parentCategory", void 0);
__decorate([
    typeorm_1.OneToMany(() => Category_1, (category) => category.parentCategory),
    __metadata("design:type", Array)
], Category.prototype, "categories", void 0);
__decorate([
    typeorm_1.OneToMany(() => feature_entity_1.Feature, (feature) => feature.category),
    __metadata("design:type", Array)
], Category.prototype, "features", void 0);
Category = Category_1 = __decorate([
    typeorm_1.Index("uq_category_name", ["name"], { unique: true }),
    typeorm_1.Index("uq_category_image_path", ["imagePath"], { unique: true }),
    typeorm_1.Index("fk_category_parent__category_id", ["parentCategoryId"], {}),
    typeorm_1.Entity("category")
], Category);
exports.Category = Category;
//# sourceMappingURL=category.entity.js.map
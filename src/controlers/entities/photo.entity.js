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
exports.Photo = void 0;
const typeorm_1 = require("typeorm");
const article_entity_1 = require("./article.entity");
let Photo = class Photo {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "int", name: "photo_id", unsigned: true }),
    __metadata("design:type", Number)
], Photo.prototype, "photoId", void 0);
__decorate([
    typeorm_1.Column("int", { name: "article_id", unsigned: true }),
    __metadata("design:type", Number)
], Photo.prototype, "articleId", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        name: "image_path",
        unique: true,
        length: 128,
    }),
    __metadata("design:type", String)
], Photo.prototype, "imagePath", void 0);
__decorate([
    typeorm_1.ManyToOne(() => article_entity_1.Article, (article) => article.photos, {
        onDelete: "NO ACTION",
        onUpdate: "CASCADE",
    }),
    typeorm_1.JoinColumn([{ name: "article_id", referencedColumnName: "articleId" }]),
    __metadata("design:type", article_entity_1.Article)
], Photo.prototype, "article", void 0);
Photo = __decorate([
    typeorm_1.Index("uq_photo_image_path", ["imagePath"], { unique: true }),
    typeorm_1.Index("fk_photo_article_id", ["articleId"], {}),
    typeorm_1.Entity("photo")
], Photo);
exports.Photo = Photo;
//# sourceMappingURL=photo.entity.js.map
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
exports.ArticlePrice = void 0;
const typeorm_1 = require("typeorm");
const article_entity_1 = require("./article.entity");
let ArticlePrice = class ArticlePrice {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: "int",
        name: "article_price_id",
        unsigned: true,
    }),
    __metadata("design:type", Number)
], ArticlePrice.prototype, "articlePriceId", void 0);
__decorate([
    typeorm_1.Column("int", { name: "article_id", unsigned: true }),
    __metadata("design:type", Number)
], ArticlePrice.prototype, "articleId", void 0);
__decorate([
    typeorm_1.Column("decimal", {
        name: "price",
        unsigned: true,
        precision: 10,
        scale: 2,
    }),
    __metadata("design:type", Number)
], ArticlePrice.prototype, "price", void 0);
__decorate([
    typeorm_1.Column("timestamp", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], ArticlePrice.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.ManyToOne(() => article_entity_1.Article, (article) => article.articlePrices, {
        onDelete: "NO ACTION",
        onUpdate: "CASCADE",
    }),
    typeorm_1.JoinColumn([{ name: "article_id", referencedColumnName: "articleId" }]),
    __metadata("design:type", article_entity_1.Article)
], ArticlePrice.prototype, "article", void 0);
ArticlePrice = __decorate([
    typeorm_1.Index("fk_article_price_article_id", ["articleId"], {}),
    typeorm_1.Entity("article_price")
], ArticlePrice);
exports.ArticlePrice = ArticlePrice;
//# sourceMappingURL=article-price.entity.js.map
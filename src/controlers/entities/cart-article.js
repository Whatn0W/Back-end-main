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
exports.CartArticle = void 0;
const typeorm_1 = require("typeorm");
const article_entity_1 = require("./article.entity");
const cart_entity_1 = require("./cart.entity");
let CartArticle = class CartArticle {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: "int",
        name: "cart_article_id",
        unsigned: true,
    }),
    __metadata("design:type", Number)
], CartArticle.prototype, "cartArticleId", void 0);
__decorate([
    typeorm_1.Column("int", { name: "cart_id", unsigned: true }),
    __metadata("design:type", Number)
], CartArticle.prototype, "cartId", void 0);
__decorate([
    typeorm_1.Column("int", { name: "article_id", unsigned: true }),
    __metadata("design:type", Number)
], CartArticle.prototype, "articleId", void 0);
__decorate([
    typeorm_1.Column("int", { name: "quantity", unsigned: true }),
    __metadata("design:type", Number)
], CartArticle.prototype, "quantity", void 0);
__decorate([
    typeorm_1.ManyToOne(() => article_entity_1.Article, (article) => article.cartArticles, {
        onDelete: "NO ACTION",
        onUpdate: "CASCADE",
    }),
    typeorm_1.JoinColumn([{ name: "article_id", referencedColumnName: "articleId" }]),
    __metadata("design:type", article_entity_1.Article)
], CartArticle.prototype, "article", void 0);
__decorate([
    typeorm_1.ManyToOne(() => cart_entity_1.Cart, (cart) => cart.cartArticles, {
        onDelete: "NO ACTION",
        onUpdate: "CASCADE",
    }),
    typeorm_1.JoinColumn([{ name: "cart_id", referencedColumnName: "cartId" }]),
    __metadata("design:type", cart_entity_1.Cart)
], CartArticle.prototype, "cart", void 0);
CartArticle = __decorate([
    typeorm_1.Index("uq_cart_article_cart_id_article_id", ["cartId", "articleId"], {
        unique: true,
    }),
    typeorm_1.Index("fk_cart_article_article_id", ["articleId"], {}),
    typeorm_1.Index("fk_cart_article_cart_id", ["cartId"], {}),
    typeorm_1.Entity("cart_article")
], CartArticle);
exports.CartArticle = CartArticle;
//# sourceMappingURL=cart-article.js.map
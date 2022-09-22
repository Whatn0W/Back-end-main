import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./category.entity";
import { ArticleFeature } from "./article-feature.entity";
import { ArticlePrice } from "./article-price.entity";
import { CartArticle } from "./cart-article.entity";
import { Photo } from "./photo.entity";
import { type } from "os";
import { Feature } from "./feature.entity";
import { join } from "path";
import * as Validator from 'class-validator';


@Index("fk_article_category_id", ["categoryId"], {})
@Entity("article")
export class Article {
  @PrimaryGeneratedColumn({ type: "int", name: "article_id", unsigned: true })
  articleId: number;

  @Column("varchar", { length: 128 })
  @Validator.IsNotEmpty()
  @Validator.IsString()
  @Validator.Length(5, 128)
  name: string;

  @Column("int", { name: "category_id", unsigned: true })
  categoryId: number;

  @Column("varchar", { name: "excerpt", length: 255})
  @Validator.IsNotEmpty()
  @Validator.IsString()
  @Validator.Length(10, 255)
  excerpt: string;

  @Column("text", { name: "description" })
  @Validator.IsNotEmpty()
  @Validator.IsString()
  @Validator.Length(64, 20000)
  description: string;

  @Column("enum", {
    name: "status",
    enum: ["available", "visable", "hidden"],
    default: () => "'available'",
  })
  @Validator.IsNotEmpty()
  @Validator.IsString()
  @Validator.IsIn(["available" , "visable" , "hidden"])
  status: "available" | "visable" | "hidden";

  @Column("tinyint", { name: "is_promoted"})
  @Validator.IsNotEmpty()
  @Validator.IsIn([0 , 1])
  isPromoted: number;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @ManyToOne(() => Category, (category) => category.articles, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "category_id", referencedColumnName: "categoryId" }])
  category: Category;

  @OneToMany(() => ArticleFeature, (articleFeature) => articleFeature.article)
  articleFeatures: ArticleFeature[];

  @ManyToMany(type => Feature, feature => feature.articles)
  @JoinTable({
    name: "article_feature",
    joinColumn: {name: "article_id", referencedColumnName: "articleId"},
    inverseJoinColumn: {name: "feature_id", referencedColumnName: "featureId"}
  })
  features: Feature[];

  @OneToMany(() => ArticlePrice, (articlePrice) => articlePrice.article)
  articlePrices: ArticlePrice[];

  @OneToMany(() => CartArticle, (cartArticle) => cartArticle.article)
  cartArticles: CartArticle[];

  @OneToMany(() => Photo, (photo) => photo.article)
  photos: Photo[];
}

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfiguration } from '../config/database.configuration';
import { Administrator } from './controlers/entities/administrator.entity';
import { ArticleFeature } from './controlers/entities/article-feature.entity';
import { ArticlePrice } from './controlers/entities/article-price.entity';
import { Article } from './controlers/entities/article.entity';
import { CartArticle } from './controlers/entities/cart-article.entity';
import { Cart } from './controlers/entities/cart.entity';
import { Category } from './controlers/entities/category.entity';
import { Feature } from './controlers/entities/feature.entity';
import { Order } from './controlers/entities/order.entity';
import { Photo } from './controlers/entities/photo.entity';
import { User } from './controlers/entities/user.entity';
import { AdministratorController } from './controlers/api/administrator.controller';
import { ArticleController } from './controlers/api/article.controller';
import { AuthController } from './controlers/api/auth.controller';
import { CagetoryController } from './controlers/api/category.controller';
import { AppController } from './controlers/app.controller';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { AdministratorService } from './services/administrator/administrator.service';
import { CategoryService } from './services/category/category.service';
import { ArticleService } from './services/article/article.service';
import { PhotoService } from './services/photo/photo.service';
import { FeatureService } from './services/feature/feature.service';
import { FeatureController } from './controlers/api/feature.controller';
import { UserService } from './services/user/user.service';
import { CartService } from './services/cart/cart.service';
import { UserCartController } from './controlers/api/user.cart.controller';
import { OrderService } from './services/order/order.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailConfig } from 'config/mail.config';
import { OrderMailer } from './services/order/order.mailer.service';
import { UserToken } from './controlers/entities/user-token.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : 'mysql',
      host : DatabaseConfiguration.hostname,
      port : 3306 ,
      username : DatabaseConfiguration.username,
      password : DatabaseConfiguration.password,
      database : DatabaseConfiguration.database,
      entities : [
      Administrator,
      ArticleFeature,
      ArticlePrice,
      Article,
      CartArticle,
      Cart,
      Category,
      Feature,
      Order,
      Photo,
      User,
      UserToken,
    ]
    }),
    TypeOrmModule.forFeature([
      Administrator,
      ArticleFeature,
      ArticlePrice,
      Article,
      CartArticle,
      Cart,
      Category,
      Feature,
      Order,
      Photo,
      User,
      UserToken,
      




    ]),
    MailerModule.forRoot({
      transport: 'smtps://' + MailConfig.username + ':' + MailConfig.password + '@' + MailConfig.hostname,
      defaults:{
        from : MailConfig.senderEmail,
      },
    }),

  ],
  controllers: [
    AppController,
    AdministratorController,
    CagetoryController,
    ArticleController,
    AuthController,
    FeatureController,
    UserCartController,
  ],
  providers: [
    AdministratorService,
    CategoryService,
    ArticleService,  
    PhotoService,
    FeatureService,
    UserService,
    CartService,
    OrderService,
    OrderMailer,
  ],
  exports: [
    AdministratorService,
    UserService,
    
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(AuthMiddleware)
    .exclude('auth/*')
    .forRoutes('api/*');

  }
}

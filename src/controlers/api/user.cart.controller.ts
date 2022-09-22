import { Body, Controller, Get, Patch, Post, Req, UseGuards } from "@nestjs/common";
import { AllowToRoles } from "src/misc/allow.to.roles.descriptor";
import { RoleCheckedGuard } from "src/misc/role.checker.guard";
import { CartService } from "src/services/cart/cart.service";
import { Cart } from "../entities/cart.entity";
import { Request } from "express";    
import { AddArticleToCartDto } from "src/dtos/cart/add.article.to.cart.dto";
import { EditArticleInCartDto } from "src/dtos/cart/edit.article.in.cart.dto";
import { Order } from "../entities/order.entity";
import { request } from "http";
import { OrderService } from "src/services/order/order.service";
import { ApiResponse } from "src/misc/Api.Response.class";
import { OrderMailer } from "src/services/order/order.mailer.service";


@Controller('api/user/cart')
export class UserCartController{
    constructor(
        private cartService:CartService,
        private orderService:OrderService,
        private orderMailer: OrderMailer,
    ){ }
    private async getActiveCartForUserId(userId:number): Promise<Cart>{
        let cart =  await this.cartService.getLastActiveCartByUserId(userId);
  
        if (!cart){
            cart = await this.cartService.createNewCartForUser(userId);
        }
  
        return await this.cartService.getById(cart.cartId);
    }


  @Get()
  @UseGuards(RoleCheckedGuard)
  @AllowToRoles('user')
  async getCurrentCart(@Req() req : Request): Promise<Cart>{
     return await this.getActiveCartForUserId(req.token.id);
  }

  @Post('addToCart')
  @UseGuards(RoleCheckedGuard)
  @AllowToRoles('user')
  async addToCart(@Body() data: AddArticleToCartDto, @Req() req: Request): Promise <Cart>{
    const cart =  await this.getActiveCartForUserId(req.token.id);

  return await  this.cartService.addArticleToCart(cart.cartId, data.articleId, data.quantity);
  }

  @Patch()
  @UseGuards(RoleCheckedGuard)
  @AllowToRoles('user')
  async changeQuantity(@Body() data: EditArticleInCartDto , @Req() req:Request): Promise<Cart>{
    const cart =  await this.getActiveCartForUserId(req.token.id);
    return await this.cartService.changeQuantity(cart.cartId, data.articleId, data.quantity)
    }

    @Post('makeOrder')
    @UseGuards(RoleCheckedGuard)
    @AllowToRoles('user')
    async makeOrder(@Req() req:Request): Promise<Order | ApiResponse>{
      const cart =  await this.getActiveCartForUserId(req.token.id);
      const  order =  await this.orderService.add(cart.cartId);
      
      if(order instanceof ApiResponse){
        return order;
      }
      
      await this.orderMailer.sendOrderEmail(order);
      return order;
    }
}

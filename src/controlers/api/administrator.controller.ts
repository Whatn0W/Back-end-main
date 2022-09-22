import { Body, Controller, Get, Param, Patch, Post, Put, SetMetadata, UseGuards } from "@nestjs/common";
import { ApiResponse } from "src/misc/Api.Response.class";
import { Administrator } from "../entities/administrator.entity";
import { AddAdministratorDto } from "../../dtos/administrator/add.administrator.dto";
import { EditAdministratorDto } from "../../dtos/administrator/edit.administrator.dto";
import { AdministratorService } from "../../services/administrator/administrator.service";
import { AllowToRoles } from "src/misc/allow.to.roles.descriptor";
import { RoleCheckedGuard } from "src/misc/role.checker.guard";

@Controller('api/administrator')
export class AdministratorController{
    constructor(
        private administratorService:AdministratorService
    ){ }

    
  @Get()
  @UseGuards(RoleCheckedGuard)
  @AllowToRoles('administrator')
  getAll(): Promise<Administrator[]>{
    return this.administratorService.getAll();
  }

  
  @Get(':id')
  @UseGuards(RoleCheckedGuard)
  @AllowToRoles('administrator')
  getById(@Param('id')  administratorId:number): Promise<Administrator | ApiResponse>{
    return new Promise(async (resolve) => {
    let admin = await this.administratorService.getById(administratorId);
    if (admin === undefined){
      resolve(new ApiResponse("error", - 1002));
    }
    });
  } 

  @Post()
  @UseGuards(RoleCheckedGuard)
  @AllowToRoles('administrator')
  add( @Body() data: AddAdministratorDto ): Promise<Administrator | ApiResponse>{
    return this.administratorService.add(data); 
  }

  @Patch(':id')
  @UseGuards(RoleCheckedGuard)
  @AllowToRoles('administrator')
  edit(@Param('id') id:number, @Body() data: EditAdministratorDto): Promise<Administrator | ApiResponse>{
      return this.administratorService.editById(id, data);
  }



}
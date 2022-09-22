import { Controller, UseGuards } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { Category } from "src/controlers/entities/category.entity";
import { features } from "process";
import { CategoryService } from "src/services/category/category.service";
import { AllowToRoles } from "src/misc/allow.to.roles.descriptor";
import { RoleCheckedGuard } from "src/misc/role.checker.guard";

@Controller('api/category')
@Crud({
    model:{
        type: Category
    },
    params:{
        id: {
            field:'categoryId',
            type: 'number',
            primary: true
        }
    },
    query:{
        join:{
            categories:{
                eager:true
            },
            parentCategory:{
                eager:false
            },
            features:{
                eager:true
            },
            articles: {
                eager:false
            }

        }
    },
    routes : {
        only:[
            "createOneBase",
            "createManyBase",
            "getManyBase",
            "getOneBase",
            'updateOneBase',
        ],
        createOneBase: {
            decorators:[
                UseGuards(RoleCheckedGuard),
                AllowToRoles('administrator'),
            ],
        },
        createManyBase: {
            decorators:[
                UseGuards(RoleCheckedGuard),
                AllowToRoles('administrator'),
            ],
        },
        updateOneBase:{
            decorators:[
                UseGuards(RoleCheckedGuard),
                AllowToRoles('administrator'),
            ],
        },
        getManyBase: {
            decorators:[
                UseGuards(RoleCheckedGuard),
                AllowToRoles('administrator', 'user'),
            ],
        },
        getOneBase: {
            decorators:[
                UseGuards(RoleCheckedGuard),
                AllowToRoles('administrator', 'user'),
            ],
        }

    }
})
export class CagetoryController{
    constructor(
        public service : CategoryService
    ){ }

}
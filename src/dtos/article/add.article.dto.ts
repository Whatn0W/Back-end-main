import * as Validator from 'class-validator';
import { IsArray, ValidateNested } from 'class-validator';
import { ArticleFeatureComponentDto } from './article.feature.component.dto';
export class AddArticleDto{

       @Validator.IsNotEmpty()
       @Validator.IsString()
       @Validator.Length(5, 128)
        name : string;

        categoryId : number;

        @Validator.IsNotEmpty()
        @Validator.IsString()
        @Validator.Length(10, 255)
        excerpt: string;

        @Validator.IsNotEmpty()
        @Validator.IsString()
        @Validator.Length(64, 20000)
        description: string;

        @Validator.IsNotEmpty()
        @Validator.IsPositive()
        @Validator.IsNumber({
          allowInfinity: false,
          allowNaN: false,
          maxDecimalPlaces: 2,
        })
        price: number;
        @IsArray()
        @ValidateNested({
            always:true,
        })
        features: ArticleFeatureComponentDto[];
}
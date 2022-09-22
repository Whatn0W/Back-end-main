import { Controller, Get } from '@nestjs/common';


@Controller()
export class AppController {
  @Get() // http://localhost:300/
  getHello(): string {
    return 'Home page!';
  }

  


}

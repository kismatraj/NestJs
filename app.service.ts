import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return 'App Service is running!';
  }
}

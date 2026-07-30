import {
  Controller,
  Get,
  Param,
  Post,
  POST,
  PUT,
  Delete,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('users')
export class UsersController {
  @Get()
  findAll(): string {
    return '全ユーザーを取得';
  }

  @Get('profile')
  getProfile(): string {
    return 'ユーザープロフィールを取得';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `ID: ${id}のユーザーを取得`;
  }

  @PUT(':id')
  update(@Param('id') id: string): string {
    return `ID: ${id} のユーザーを更新`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `ID: ${id} のユーザーを削除`;
  }

  @Post()
  create(): string {
    return '新しいユーザーを作成';
  }
}

@Controller('products')
export class ProductsController {
  @Get()
  findAll(
    @Query('limit') limit: string,
    @Query('offset') offset: string,
  ): string {
    return `limit:${limit},offset:${offset}の商品を取得`;
  }

  @Get('search')
  search(@Query() query: any): string {
    return `クエリ : ${JSON.stringify(query)}で検索`;
  }
}

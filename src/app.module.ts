import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TelegramMessagesModule } from './telegram-messages/telegram-messages.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://192.168.13.193:27017/pyrogram'),
    TelegramMessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [MongooseModule],
})
export class AppModule {}

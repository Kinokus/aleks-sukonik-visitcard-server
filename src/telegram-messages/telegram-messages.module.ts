import { Module } from '@nestjs/common';
import { TelegramMessagesService } from './telegram-messages.service';
import { TelegramMessagesController } from './telegram-messages.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TelegramMessage,
  TelegramMessageSchema,
} from './telegram-message.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TelegramMessage.name, schema: TelegramMessageSchema },
    ]),
  ],
  controllers: [TelegramMessagesController],
  providers: [TelegramMessagesService],
})
export class TelegramMessagesModule {}

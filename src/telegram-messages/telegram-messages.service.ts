import { Injectable } from '@nestjs/common';
import { CreateTelegramMessageDto } from './dto/create-telegram-message.dto';
import { UpdateTelegramMessageDto } from './dto/update-telegram-message.dto';
import { InjectModel } from '@nestjs/mongoose';
import {
  TelegramMessage,
  TelegramMessageDocument,
} from './telegram-message.model';
import { Model } from 'mongoose';

@Injectable()
export class TelegramMessagesService {
  constructor(
    @InjectModel(TelegramMessage.name)
    private telegramMessageModel: Model<TelegramMessageDocument>,
  ) {}

  findAll() {
    return this.telegramMessageModel.find({}, {}, { limit: 5 });
  }

  getWordsDataSet({ username, chatId }) {
    console.log(username, chatId);
    return null;
  }
}

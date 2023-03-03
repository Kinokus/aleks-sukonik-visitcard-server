import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TelegramMessagesService } from './telegram-messages.service';
import { CreateTelegramMessageDto } from './dto/create-telegram-message.dto';
import { UpdateTelegramMessageDto } from './dto/update-telegram-message.dto';
import { InjectModel } from '@nestjs/mongoose';
import {
  TelegramMessage,
  TelegramMessageDocument,
} from './telegram-message.model';
import { Model } from 'mongoose';

@Controller('telegram-messages')
export class TelegramMessagesController {
  constructor(
    private readonly telegramMessagesService: TelegramMessagesService,
    @InjectModel(TelegramMessage.name)
    private readonly telegramMessageModel: Model<TelegramMessageDocument>,
  ) {}

  @Get()
  findAll() {
    return this.telegramMessagesService.findAll();
  }
}

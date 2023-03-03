import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TelegramMessageDocument = TelegramMessage & Document;

@Schema({ collection: 'messages' })
export class TelegramMessage {
  @Prop({ required: true })
  chatId?: number;

  @Prop({ required: true })
  messageId?: number;

  @Prop({ required: true })
  text?: string;

  @Prop()
  createdAt?: Date;
}

export const TelegramMessageSchema =
  SchemaFactory.createForClass(TelegramMessage);

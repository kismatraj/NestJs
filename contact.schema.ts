import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Contact extends Document {
  @Prop()
  @IsNotEmpty()
  @IsString()
  @Length(3, 30)
  name: string;

  @Prop({ unique: true })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Prop({ unique: true })
  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;

  @Prop()
  @IsString()
  city: string;

  @Prop()
  @IsString()
  state: string;

  @Prop()
  @IsString()
  country: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);

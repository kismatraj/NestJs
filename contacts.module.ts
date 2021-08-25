import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { ContactSchema } from './contact.schema';

@Module({
  imports: [
    // MongooseModule.forFeature([{ name: 'name of Model in singular', schema: "name of the schema to be mapped" }]),
    MongooseModule.forFeature([{ name: 'Contact', schema: ContactSchema }]),
  ],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}

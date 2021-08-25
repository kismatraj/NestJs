import { Contact } from './contact.schema';
import { ContactsService } from './contacts.service';
import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

@Controller('contacts')
export class ContactsController {
  constructor(private service: ContactsService) {}

  @Get()
  getAllContact(
    @Query('_page', new DefaultValuePipe(1), ParseIntPipe) page,
    @Query('_limit', new DefaultValuePipe(10), ParseIntPipe) limit,
  ) {
    return this.service.getAllContacts(page, limit);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  addContact(@Body() body: Contact) {
    return this.service.addOneContact(body);
  }
}

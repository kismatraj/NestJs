import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact } from './contact.schema';

@Injectable()
export class ContactsService {
  constructor(@InjectModel('Contact') private contactModel: Model<Contact>) {}
  addOneContact(contact: Contact) {
    const c = new this.contactModel({ ...contact });
    c.save();
    return c;
  }

  getAllContacts(page: number, limit: number) {
    return this.contactModel
      .find()
      .limit(limit)
      .skip((page - 1) * limit);
  }
}

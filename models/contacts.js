import { Schema, model } from "mongoose";

const contactsSchema = new Schema({
  name: String,
  email: String,
  phone: Number,

})

const Contact = model('contact', contactsSchema);

export default Contact;


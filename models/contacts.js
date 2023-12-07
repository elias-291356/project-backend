import { Schema, model } from "mongoose";
import { handleSaveError } from '../models/hooks.js'
import Joi from 'joi';
const contactsSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },

}, { versionKey: false, timestamps: true });

contactsSchema.post('save', handleSaveError)

contactsSchema.pre('findOneAndUpdate', function (next) {
  this.options.new = true;
  this.options.runValidators = true;
  next();
})
export const contactAddSchema = Joi.object({
  // title: Joi.string().required().messages({
  //   "any.required": ` "title" is a required field `
  // }),
  name: Joi.string().required(),
  email: Joi.string(),
  phone: Joi.string(),
  favorite: Joi.boolean()


})
export const contactUpdateSchema = Joi.object({
  // title: Joi.string(),
  name: Joi.string().required(),
  email: Joi.string(),
  phone: Joi.string(),
  favorite: Joi.boolean()

})

const Contact = model('contact', contactsSchema);

export default Contact;


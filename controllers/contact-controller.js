// import contactsService from '../models/index.js';
import { HttpError } from '../helpers/index.js'
import { contactAddSchema, contactUpdateSchema } from '../models/contacts.js'
import Contact from '../models/contacts.js';


const getAll = async (req, res, next) => {
  try {
    const result = await Contact.find({})
    res.json(result);
  }
  catch (error) {
    next(error);
  }

}

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Contact.findById(id);
    if (!result) {
      throw HttpError(404);
    }
    res.json(result);
  }
  catch (error) {
    next(error);
  }
}

const add = async (req, res, next) => {
  // try {
  //   const { error } = contactAddSchema.validate(req.body);
  //   if (error) {
  //     throw HttpError(400);
  //   }
  const result = await Contact.create(req.body);
  res.status(201).json(result);
  // } catch (error) {
  //   next(error);
  // }
}

const updateById = async (req, res, next) => {
  try {
    const { error } = contactUpdateSchema.validate(req.body);
    if (error) {
      throw HttpError(400);
    }
    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body);
    if (error) {
      throw HttpError(404);
    }
    res.json(result);
  }
  catch (error) {
    next(error);
  }
}

// const deleteById = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const result = await contactsService.removeContact(id);
//     if (!result) {
//       throw HttpError(404);
//     }
//     // res.status(204).send();
//     res.json({
//       message: 'Contact deleted'
//     })
//   }
//   catch (error) {
//     next(error);
//   }
// }
export default {
  getAll,
  getById,
  add,
  updateById,
  // deleteById
}
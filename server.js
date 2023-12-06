import mongoose from "mongoose";
import { app } from './app.js';
// r1ceFS4e22JYqSe1
const DB_HOST = 'mongodb+srv://Illia:r1ceFS4e22JYqSe1@cluster0.dqo4lam.mongodb.net/db-contacts?retryWrites=true&w=majority';
mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000")
    })

  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  })


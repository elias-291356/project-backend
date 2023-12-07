import app from './app.js';


const { DB_HOST } = process.env
app.listen(3002, () => {
  console.log("Server running. Use our API on port: 3002")
})

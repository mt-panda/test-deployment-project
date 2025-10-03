import express from 'express';
import router from "./routes/index.js"
import dotenv from 'dotenv';

// Configure dotenv to load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3030;

// Add middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router)

app.get('/', (req, res) => {
  res.send("Hello World...!")
})

app.listen(PORT, () => {
  console.log("The Server has Started at the port:", PORT)
})
import dotenv from "dotenv";
dotenv.config();
import app from './app.js';
const PORT = process.env.PORT || 3000;

import connectDB from "./src/Config/database.js";

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server started on  http://localhost:${PORT}`)
});
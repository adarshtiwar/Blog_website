import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import { connectDB } from './config/connectionDb.js';
import blogRoutes from './routes/blog.routes.js';


const app = express();
app.use(express.json());
app.use(cors());


app.use('/user', userRoutes);
app.use('/blog', blogRoutes);
app.use("/image", express.static("uploads"));
app.listen(process.env.PORT||3000, () => { 
  console.log('Server is running on port 3000');
  connectDB(); 
}); 

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config();



mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log('connected to Database');

})
.catch((err)=>{
    console.log("err");
})
const app=express();
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
//app.use('/api/user',userRouter)
app.use(express.json());

app.use("/api/user",router);
app.use("/api/auth",authRouter);
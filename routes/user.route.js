import express from 'express';
//import { test } from '../controllers.js/user.controller.js'
const router = express.Router();

router.get('/test',(req , res)=>{
    res.json({
        message:"hello world",
    })
})

export default router;
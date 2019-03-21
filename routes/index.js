const express =require('express');
const router = express.Router();

router.get('/index/:placeholder1/:placeholder2',(req,res)=>{
    res.render('index',{placeholder1:req.params.placeholder1,placeholder2:req.params.placeholder2})
});












module.exports=router;
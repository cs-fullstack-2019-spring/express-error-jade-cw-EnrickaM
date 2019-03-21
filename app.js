const express=require('express');
const router=express.Router();
const app=express();
var index=require("./routes/index.js");
app.use(express.static("public"));
app.set('view engine','pug');
app.use('/',index);
app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});
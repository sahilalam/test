const exp=require('express');
const app=exp();
let PORT=process.env.PORT || 1234
app.use('/',exp.static("./public"));
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})
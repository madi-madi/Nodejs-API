const  express = require('express');
const app =  express();
const contactRoutes = require('./routes/contacts');
const PORT = 3000;
const morgan = require('morgan');

app.use(morgan('dev'));
// useing middleware
app.use('/api/contacts',contactRoutes)


// handdle error
app.use((request , response,next)=>{
    const error = new Error();
    error.status = 404;
    next(error);
})

app.use((error , request , response,next)=>{
    response.status(error.status || 500)
    response.json({
        message: error.message
    })
})

app.listen(PORT,()=> console.log('kkkkkkk'));

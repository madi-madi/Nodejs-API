const  express = require('express');
const app =  express();
const contactRoutes = require('./routes/contacts');
const PORT = 3000;

// app.use('/api/contacts',contactRoutes)
app.use(app.contactRoutes);
routes.initialize(app);


app.listen(PORT,()=> console.log('kkkkkkk'));

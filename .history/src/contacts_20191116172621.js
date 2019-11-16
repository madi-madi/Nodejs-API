// get all contacts 
app.get('/api/contacts',(request, response)=>{
    response.status(200).json({
        message:"All Contact Info :)"
    })
});


// get spicific id contacts
app.get('/api/contacts/:id',(request ,response)=>{
    response.status(200).json({
        message:"get spicific id contacts",
         contact_id : request.params.id
    })
});

// create new  contacts 
app.post('/api/contacts/create',(request ,response)=>{
    response.status(201).json({
        message:"Create Contacts successfuly",
        contact_id : request.params.id
    })
});

// partially update 
app.patch('/api/contacts/:id/update',(request ,response)=>{
    response.status(201).json({
        message:"Update Contacts Successfuly",
        contact_id : request.params.id
    })
});

// completly update (create new and replace old )
app.put('/api/contacts/:id/create',(request,response)=>{
    response.status(201).json({
        message: "Update all contacts put",
        contact_id : request.params.id
    })
});

// delete contacts
app.delete('/api/contacts/:id/delete',(request ,response)=>{
    response.status().json({
        message:"Delete Contact Successfuly",
        contact_id : request.params.id
    })
});

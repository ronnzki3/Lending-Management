const router = require('express').Router();
let Client = require('../models/client.model');


//show all clients
router.route('/').get((req, res)=>{
    Client.find()
    .then(client => res.json(client))
    .catch( err => res.status(400).json(err));
});

//show client details by id
router.route('/:id').get((req, res)=>{
    Client.findById(req.params.id)
    .then(client => res.json(client))
    .catch(err => res.status(400).json(err));
});


//delete client
router.route('/:id').delete((req,res)=>{
    Client.findByIdAndDelete(req.params.id)
    .then( client => res.json('Client was deleted successfully.'))
    .catch( err => res.status(400).json(err));
})


//add new client
router.route('/new-client').post((req, res)=>{
    const fname = req.body.fname;
    const mname = req.body.mname;
    const lname = req.body.lname;
    const address = req.body.address;
    const contact = req.body.contact;;

    const newClient = new Client({
        fname,
        mname,
        lname,
        address,
        contact
    });

    newClient.save()
    .then( client => res.json(client._id))
    .catch( err => res.status(400).json(err));

});






//update client
router.route('/edit/:id').post((req, res)=>{

    //fetch client first
    Client.findById(req.params.id)
    .then(client => {
        //update
        client.fname = req.body.fname;
        client.mname = req.body.mname;
        client.lname = req.body.lname;
        client.address = req.body.address;
        client.contact = req.body.contact; 
        
        client.save()
        .then(()=>res.json('Client details successfully updated'))
        .catch(err=>res.status(400).json('Error: ' + err));
    })
    .catch(err=>res.status(400).json('Error:' + err));

});


module.exports = router;
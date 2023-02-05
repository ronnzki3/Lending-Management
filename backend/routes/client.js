const router = require('express').Router();
let Client = require('../models/client.model');
let Loan = require('../models/loan.model');
let Payment = require('../models/payment.model');


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


//show loan details by id
router.route('/loan/:id').get((req, res)=>{
    Loan.findOne({client_id:req.params.id})
    .then(loan => res.json(loan))
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
    const contact = req.body.contact;

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



//add new payment
router.route('/payment/new-payment/:id').post((req, res)=>{
    const client_id = req.body.client_id;
    const loan_id = req.body.loan_id;
    const paymentdate = req.body.paymentdate;
    const particular = req.body.particular;
    const debit = req.body.debit;
    const credit = req.body.credit;

    const newPayment = new Payment({
        client_id,
        loan_id,
        paymentdate,
        particular,
        debit,
        credit,
    });

    newPayment.save()
    .then( pay => res.json(pay.client_id))
    .catch( err => res.status(400).json(err));

});


//delete payments
router.route('/payment/:id').delete((req,res)=>{
    Payment.findByIdAndDelete(req.params.id)
    .then( payment => res.json('Payment was deleted successfully.'))
    .catch( err => res.status(400).json(err));
})


//show Payments lists of id
router.route('/payment/:id').get((req, res)=>{
    Payment.find({client_id:req.params.id}).sort({paymentdate: -1})
    .then(payment => res.json(payment))
    .catch(err => res.status(400).json(err));
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
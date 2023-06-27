var express = require('express');
var router = express.Router();
const Trip = require('../models/trips')
const MyCart = require('../models/myCart')

router.post('/',(req,res)=>{
    const newCart = new MyCart ({
        trip : req.body.tripId,
        isPurchased : false})
    newCart.save().then(data=>{
        res.json({newTrip : data})
    })
});

router.delete('/',(req,res)=>{
    MyCart.deleteOne({id : req.body.myCartId})
    .then(data=>{
        res.json({allTrips : data})
    })
});

module.exports = router;
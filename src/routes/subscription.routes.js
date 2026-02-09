import { Router } from 'express';

const subRouter = Router();

subRouter.get('/',(req,res)=>{
    res.send({title :'get all the subscription'})
});
subRouter.get('/:id',(req,res)=>{
    res.send({title : ' get the deatials of the subscription'});
});
subRouter.post('/',(req,res)=>{
    res.send({title:'create the new subscription'});
});
subRouter.put('/:id',(req,res)=>{
    res.send({title : 'update subscription'});
});
subRouter.delete('/:id',(req,res)=>{
    res.send({title :'delete the subcription'});
});
subRouter.get('/user/:id',(req,res)=>{
    res.send({title :'get all the user subscription'});
});
subRouter.put('/:id/cancel',(req,res)=>{
    res.send({title :'cancel alll the subscription'});
});
subRouter.get('/upcoming-renewals',(req,res)=>{
    res.send({title :'get upcoming renewals'});
});
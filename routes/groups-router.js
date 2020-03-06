const express = require("express");
const groupsRouter = express.Router();
const createError = require("http-errors");
const User = require("../models/user");
const Group = require("../models/group");

const {
    isLoggedIn
  } = require("../helpers/middlewares");

groupsRouter.post('/create', isLoggedIn, async (req,res,next) =>{
    console.log(req.session.currentUser);
        const {name, description, duration, maxParticipants} = req.body;
        const userId = req.session.currentUser._id;
        console.log(req.body);
        
    try{
       const newGroup = await Group.create({name, description, duration, maxParticipants, participants:[userId]});
       
       await User.findByIdAndUpdate(userId, {$push: {groups: newGroup._id}}, {new:true}) 

       console.log(newGroup);
       res.status(201)
       .json(newGroup);
    } 
    catch (error) {
        next(createError(error));
      }
});

groupsRouter.put('/join', isLoggedIn, async(req,res, next) =>{
    const userId = req.session.currentUser._id;
    const {groupid} = req.body;

    try{
        const updatedUser = await User.findByIdAndUpdate(userId, {$push: 
        {groups: groupid}}, {new:true})

        const updatedGroup = await Group.findByIdAndUpdate(groupid, {$push: {participants: userId}}, {new:true})
        res.status(201)
        .json({updatedGroup,updatedUser} )


    }
    catch (error) {
        next(createError(error));
      }
});

groupsRouter.get('/:id', isLoggedIn, async(req,res,next)=> {
     const {id} = req.params;

     try{
     const groupInfo = await Group.findById(id)
     res.status(200)
     .json(groupInfo);
    }
    catch (error) {
        next(createError(error))
    }
})

groupsRouter.get('/', isLoggedIn, async(req,res,next)=>{

    const {_id} = req.session.currentUser;

    try { // AGAFA ELS GRUPS I 
        const userWithGroups = await User.findById(_id, "groups").populate("groups");
        res.status(200)
        .json(userWithGroups.groups);
    }
    catch (error) {
        next(createError(error))
    }


})



module.exports = groupsRouter;
/**
 * Write the logic to create the controllers for the idea reesoures
 */
const ideas = require('../models/ideas.model');

let id = 3 //initial count of the id

/**
 * Create the controller for fetching all the ideas
 * 
 * GET 127.0.0.1:8000/ideaApp/api/v1/ideas
 * 
 * Return list of all the ideas
 */

exports.getAllIdeas = (req,res)=>{

    // First read all the ideas from the idea model file

    //return all those ideas
    res.status(200).send(ideas)

}

/**
 * controller that fetches idea based on the id
 * 
 * GET 127.0.0.1:8000./ideaApp/api/v1/ideas/2
 */
exports.getIdeaBasedOnId = (req, res)=>{
    // we need to first read the idea id from the req path param
    idea_id = req.params.id

    // using id, check if the idea with that id is present
    if(ideas[idea_id]){
        res.status(200).send(ideas[idea_id])
    }else{
        res.status(404).send({
            message : "Idea with the given idea id not found"
        })
    }

    //if present return the id 
}

/**
 * controller  to create a new idea
 */
exports.createIdea = (req, res)=>{

    // i need to read the request body
    idea_object = req.body
    id++
    idea_object["id"] = id  //setting the id in the new created idea object
    ideas[id] = idea_object

    //add the new object provided in the ideas object

    // return the response
    res.status(201).send(idea_object)
}
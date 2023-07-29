const Todo = require('../models/todoSchema');

const getdata = async (req,res)=>{
    try {
        const data = await Todo.find();
        // res.render('index' , {data});
        res.send(data);
        
    } catch (error) {
        console.log(error);
    }
}

const createTodo = async (req,res)=>{
    try {
        const data = new Todo({
            todo : req.body.text
        });

        const result = await data.save();
        res.send(result);
        // res.redirect('/');

        
    } catch (error) {
        console.log(error);
    }
}

//deleting tasks
const deleteTask = async (req, res) => {
    try {
      const { _id } = req.body; // Destructure _id from the request body
      const data = await Todo.findByIdAndDelete(_id);
      console.log(data);
      res.send(data);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error while deleting the task.");
    }
  }
  

const updatetask = async(req,res)=>{
    try {
        const {_id, text} = req.body;
        const data = await Todo.findByIdAndUpdate(_id , { todo: text }, { new: true });
        // res.redirect('/');
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getdata , createTodo ,deleteTask ,updatetask};
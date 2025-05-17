const {createTask,updateTask,deleteTask,getTask} = require("../Controller/taskController")

const route = require("express").Router()

route.get("/",getTask)

route.post("/",createTask)

route.put("/:id",updateTask)

route.delete("/:id",deleteTask)

module.exports = route


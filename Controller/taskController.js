const Task = require("../Model/Task")

exports.getTask = async (req,res)=>{
try {
    const data = await Task.find()
    return res.json({errors:false,data:data})
} catch (error) {
    return res.status(500).json({errors:true,message:error.message})
}
}

exports.createTask = async (req,res)=>{
    try {
        const data = await Task.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.updateTask = async (req,res)=>{
    try {
        const data = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteTask = async (req,res)=>{
    try {
        const data = await Task.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
       return res.status(500).json({errors:true,message:error.message}) 
    }
}


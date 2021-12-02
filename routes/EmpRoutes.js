const express = require('express');
const app = express();
const empModel = require('../models/EmpModel.js');


app.post('/api/employees', async(req, res) => {
    const result = new empModel(req.body);

    try{
        await result.save();
        res.send(result)
        res.status(201)
    }catch(err){
        res.status(500).send(err)
    }
}); 

// Retrieve all Emp

app.get('/api/employees', async(req, res) => {
    const result = await empModel.find({})
    try{
        res.send(result);
        res.status(200)
    }catch(err){
        res.status(500).send(err);
    }
});

// Retrieve a single emp with EmpId
app.get('/api/employees/:empId', async(req, res) => {

    try{
        res.send(await empModel.findById(req.params.empId, req.body))
    }catch(err){
        res.status(500).send(err)
    }
});

// Update single emp with EmpId
app.put('/api/employees/:empId', async(req, res) => {

    try{
        await empModel.findByIdAndUpdate(req.params.empId, req.body)
        result = await empModel.save();
        res.send(result)
        res.status(200).send("Updated successfully")
    }catch(err){
        res.status(500).send(err);
    }
});

// Delete a emp with EmpId
app.delete('/api/employees/:empId', async(req, res) => {

    try {
        const result = await empModel.findByIdAndDelete(req.params.empId, req.body)
        if (!result) res.status(204).send("No Employee found")

        res.status(200).send("Delete Successfully")
      } catch (err) {
        res.status(500).send(err)
    }
});

module.exports = app;
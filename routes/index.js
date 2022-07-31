const express = require('express');
const mongoose = require('mongoose');
const os = require('os');
const router = express.Router();

const Schema = mongoose.Schema;

const TaskSchema = Schema({
    name: String,
    content: String,
    status: Boolean
});

const Task = mongoose.model(
    'tasks',
    TaskSchema
);

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.render(
        'index',
        {
            hostname: os.hostname(),
            tasks
        }
    );
});

router.post('/add', async (req, res, next) => {
    const task = new Task(req.body);
    await task.save();
    res.redirect('/');
});

router.get('/delete/:id', async (req, res, next) => {
    let { id } = req.params;
    await Task.remove({ _id: id });
    res.redirect('/');
});


module.exports = router;
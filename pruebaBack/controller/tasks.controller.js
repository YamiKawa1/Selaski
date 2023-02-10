const pool = require('../config/dbConfig') 

const getTask = async (req, res) => {
    try {
        let task = await pool.query('SELECT * FROM tasks')
        task = task.rows;
        return res.json({data:task, message: 'task'})

    } catch (error) {
        console.error(error);
        return res.status(500).json({data: null, message: 'internal error'})
    }
}

const getTaskById = async (req, res) => {
    try {
        const {id} = req.params;
        let task = await pool.query('SELECT * FROM tasks WHERE id = $1', [id])
        task = task.rows[0];
        return res.json({data:task, message: 'task'})

    } catch (error) {
        console.error(error);
        return res.status(500).json({data: null, message: 'internal error'})
    }
}

const addTask = async(req, res) => {
    try {
        const {id, title, description, completed} = req.body;
        await pool.query('INSERT INTO tasks (id, title, description, completed) VALUES ($1, $2, $3, $4)', [id, title, description, completed])
        
        return res.json({data:null, message: 'task creada'})

    } catch (error) {
        console.error(error);
        return res.status(500).json({data: null, message: 'internal error'})
    }
}

const updateTask = async (req, res) => {
    try {
        const {id} = req.params
        const { title, description, completed} = req.body;

        await pool.query('UPDATE tasks SET title = $2, description = $3, completed = $4 WHERE id = $1', [id, title, description, completed]);

        return res.json({data:null, message: 'task updated'})

    } catch (error) {
        console.error(error);
        return res.status(500).json({data: null, message: 'internal error'})
    }
}

const deleteTask= async (req, res) => {
    try {
        const {id} = req.params
        const task = await pool.query('DELETE FROM tasks WHERE id = $1', [id])   
        return res.json({data:null, message: 'task borrada'})

    } catch (error) {
        console.error(error);
        return res.status(500).json({data: null, message: 'internal error'})
    }
}

module.exports = {
    getTask,
    getTaskById,
    addTask,
    updateTask,
    deleteTask
}
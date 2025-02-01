require('dotenv').config();
const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasks.route');

app.use(express.json());

app.use('/tareas', tasksRouter);

app.get('/', (req, res) => {
    res.send('Lista de tareas');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor ${port} levantado`);                                                                                                                                                                                                                  
})
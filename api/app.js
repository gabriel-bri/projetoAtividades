const express = require('express');
const app = express();
const port = 8080;

// Configurando o Express para aceitar JSON no corpo das requisições
app.use(express.json());

const tasks = [];

app.post('/tasks', (req, res) => {
  const { description } = req.body;

  if (!description) {
    return res.status(400).json({ error: 'A descrição da tarefa é obrigatória.' });
  }

  const newTask = {
    id: tasks.length + 1,
    descricao
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

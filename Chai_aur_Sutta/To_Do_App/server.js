import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// In-memory storage
let todos = [];
let nextId = 1;

// Routes
app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: 'Text is required' });
    }
    
    const newTodo = {
        id: nextId++,
        text,
        completed: false
    };
    
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(todo => todo.id !== id);
    res.status(204).end();
});

// Start server
app.listen(PORT, () => {
    console.log("Server running on http://localhost:${PORT}");
});
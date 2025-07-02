import db from '../models/index.js';

const Todo = db.Todo;

let todos = [];

export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.findAll();
        res.json(todos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'eror ambil data' });
    }
};

export const createTodo = async (req, res) => {
    try {
        const { title } = req.body;
        const newTodo = await Todo.create({ title });
        res.status(201).json(newTodo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'gagal tambah todo' });
    }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRows = await Todo.destroy({
      where: { id: id }
    });

    if (deletedRows === 0) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.json({ message: 'berhasil hapus todo' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'gagal hapus todo' });
  }
};

export const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body;

        const [updatedRows] = await Todo.update({ title: title }, {
            where: { id: id }
        });

        if (updatedRows === 0) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.json({ message: 'Todo updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'gagal update todo' });
  }
};

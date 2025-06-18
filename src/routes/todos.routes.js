import { Router } from 'express';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../controllers/todos.controller.js';

const router = Router();

router.get('/', getTodos);
router.post('/', createTodo);
router.delete('/:id', deleteTodo);
router.put('/:id', updateTodo);

export default router;

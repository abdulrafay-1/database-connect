import express from "express"
import { addTodo, deleteTodo, editTodo, getAllTodos, getSingleTodo } from "../controllers/todos.controller.js"

const router = express.Router()


router.post('/todo', addTodo)
router.get('/todo', getAllTodos)
router.get('/todo/:id', getSingleTodo)
router.delete('/todo/:id', deleteTodo)
router.put('/todo/:id', editTodo)

export default router;
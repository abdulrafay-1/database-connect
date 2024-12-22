// import todos from "../models/todo.models"

const addTodo = async (req, res) => {
    res.send("Todo Added")
}
const getAllTodos = async (req, res) => {
    res.send("All Todos")
}
const getSingleTodo = async (req, res) => {
    res.send('single todo')
}
const deleteTodo = async (req, res) => {
    res.send("Todo deleted")
}
const editTodo = async (req, res) => {
    res.send("todo edited")
}

export { addTodo, getAllTodos, getSingleTodo, deleteTodo, editTodo }
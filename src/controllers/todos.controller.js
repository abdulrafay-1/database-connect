import mongoose from "mongoose";
import Todos from "../models/todo.models.js"

const addTodo = async (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) return res.status(400).json({
        message: "title and description required"
    })

    try {
        const todo = await Todos.create({
            title, description
        })

        res.status(200).json({
            message: "todo added successfully",
            todo
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
        })
    }

}
const getAllTodos = async (req, res) => {
    try {
        const todo = await Todos.find({})
        res.json({
            data: todo
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
        })
    }
}
const getSingleTodo = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.json({
        message: "not a valid id"
    })
    try {
        const todo = await Todos.findById({ _id: id })
        if (!todo) return res.status(404).json({
            message: "todo not found"
        })

        res.json({
            data: todo
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
        })
    }
}
const deleteTodo = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.json({
        message: "not a valid id"
    })
    try {
        const todo = await Todos.findByIdAndDelete({ _id: id })
        if (!todo) return res.status(404).json({
            message: "todo not found"
        })

        res.json({
            message: "todo deleted",
            data: todo
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
        })
    }
}
const editTodo = async (req, res) => {
    const { id } = req.params;
    console.log(req.body)
    if (!mongoose.Types.ObjectId.isValid(id)) return res.json({
        message: "not a valid id"
    })
    try {
        const todo = await Todos.findOneAndUpdate(
            { _id: id },
            {
                ...req.body,
            },
            { new: true }
        );

        if (!todo) {
            return res.status(404).json({ error: "Todo not found!" });
        }

        res.json(todo)
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
        })
    }
}

export { addTodo, getAllTodos, getSingleTodo, deleteTodo, editTodo }
import * as mongoose from 'mongoose'

export interface ITodo extends mongoose.Document{
    title: string,
    description: string
}

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String
})

const TodoModel = mongoose.model<ITodo>('Todo', TodoSchema)
export default TodoModel

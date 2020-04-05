import { IRepository, ID } from '../../interfaces'
import Todo from '../entity/Todo'
import TodoModel, { ITodo } from './schema/TodoSchema'

export default class TodoRepository implements IRepository<Todo> {
  save (item: Todo): Promise<Todo> {
    throw new Error('Method not implemented.')
  }

  delete (id: ID): Promise<void> {
    throw new Error('Method not implemented.')
  }

  update (item: Todo): Promise<Todo> {
    throw new Error('Method not implemented.')
  }

  async get (query: any): Promise<Todo[]> {
    const todosInDatabase = await TodoModel.find({ title: query.title, ...query })

    const todos: Array<Todo> = todosInDatabase.map((element) => {
      const todo = Todo.create({ id: element._id, title: element.title, description: element.description })
      return todo
    })

    return todos
  }

  getOne (query: any): Promise<Todo> {
    throw new Error('Method not implemented.')
  }
}

import { IRepository } from '../../interfaces'
import Todo, { TodoValues } from '../entity/Todo'

class TodoService {
    repository: IRepository<Todo>

    constructor (repository: IRepository<Todo>) {
      this.repository = repository
    }

    public async getTodos (query: TodoValues) {
      return await this.repository.get(query)
    }

    public async getTodo (query: TodoValues) {
      return await this.repository.getOne(query)
    }

    public async addTodo (todoValues: {title: string, description: string}) {
      const todo = Todo.create(todoValues)
      return await this.repository.save(todo)
    }

    public async deleteTodo (todo: Todo): Promise<void> {
      return await this.repository.delete(todo.id)
    }
}

export default TodoService

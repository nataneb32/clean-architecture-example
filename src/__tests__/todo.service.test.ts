import TodoService from '../app/services/TodoService'
import { IRepository } from '../interfaces'
import Todo from '../app/entity/Todo'
import { mock } from 'jest-mock-extended'

describe('Todo Service', () => {
  describe('create', () => {
    it('should create', async () => {
      const mockDevice = mock<IRepository<Todo>>()
      const todo = Todo.create({ title: 'title', description: 'description' })

      mockDevice.save.mockResolvedValue(todo)
      const service = new TodoService(mockDevice)
      expect(await service.addTodo({ title: 'title', description: 'description' })).toEqual(todo)
      expect(mockDevice.save).toHaveBeenCalledWith(expect.objectContaining({
        title: 'title',
        description: 'description'
      }))
    })
  })
  describe('getTodos', () => {
    it('should get array', async () => {
      const mockDevice = mock<IRepository<Todo>>()
      const todo = Todo.create({ title: 'title', description: 'description' })
      mockDevice.get.mockResolvedValue([todo])
      const service = new TodoService(mockDevice)
      expect(await service.getTodos({})).toEqual([todo])
      expect(mockDevice.get).toHaveBeenCalledWith({})
    })
  })
  describe('delete', () => {
    it('should delete', async () => {
      const mockDevice = mock<IRepository<Todo>>()
      const todo = Todo.create({ title: 'title', description: 'description' })

      const service = new TodoService(mockDevice)
      await service.deleteTodo(todo)
      expect(mockDevice.delete).toHaveBeenCalledWith(todo.id)
    })
  })
  it('getTodo', async () => {
    const mockDevice = mock<IRepository<Todo>>()
    const todo = Todo.create({ title: 'title', description: 'description' })
    const service = new TodoService(mockDevice)
    mockDevice.getOne
      .mockResolvedValue(todo)

    expect(await service.getTodo({ title: 'title', description: 'description' })).toBe(todo)
    expect(mockDevice.getOne).toHaveBeenCalledWith({ title: 'title', description: 'description' })
  })
})

import Todo from '../app/entity/Todo'

describe('Todo entity', () => {
  it('create with number id', () => {
    const todo = Todo.create({ id: 1, title: 'title', description: 'description' })
    expect(todo.id).toBe(1)
    expect(todo.title).toBe('title')
    expect(todo.description).toBe('description')
  })
  it('create with string id', () => {
    const todo = Todo.create({ id: '1', title: 'title', description: 'description' })
    expect(todo.id).toBe('1')
    expect(todo.title).toBe('title')
    expect(todo.description).toBe('description')
  })
  it('create without id', () => {
    const todo = Todo.create({ title: 'title', description: 'description' })
    expect(todo.id).toBe(null)
    expect(todo.title).toBe('title')
    expect(todo.description).toBe('description')
  })
  it('check', () => {
    const todo = Todo.create({ id: '1', title: 'title', description: 'description' })
    todo.check()
    expect(todo.isChecked).toBeTruthy()
  })
  it('uncheck', () => {
    const todo = Todo.create({ id: '1', title: 'title', description: 'description' })
    todo.unCheck()
    expect(todo.isChecked).toBeFalsy()
  })
  it('isSaved', () => {
    const todo = Todo.create({ id: '1', title: 'title', description: 'description' })
    expect(todo.isSaved).toBeTruthy()
  })
  it('isSaved not', () => {
    const todo = Todo.create({ title: 'title', description: 'description' })
    expect(todo.isSaved).toBeFalsy()
  })
})

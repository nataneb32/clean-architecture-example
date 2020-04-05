import TodoRepository from '../app/repository/TodoRepository'
import { MongoMemoryServer } from 'mongodb-memory-server'
import * as mongoose from 'mongoose'
import TodoModel from '../app/repository/schema/TodoSchema'

const mongod = new MongoMemoryServer()

describe('Todo Repository', () => {
  beforeAll(async (done) => {
    const uri = await mongod.getUri()

    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => done())
  })
  afterAll(async () => {
    await mongoose.disconnect()
    mongod.stop()
  })
  describe('get', () => {
    it('get empty', async () => {
      const repository = new TodoRepository()
      expect(await repository.get({})).toEqual([])
    })
    it('get todo', async () => {
      const repository = new TodoRepository()
      await TodoModel.create({ title: 'title', description: 'description' })
      await TodoModel.create({ title: 'title', description: 'description' })

      expect(await repository.get({ title: 'title' })).toEqual(expect.arrayContaining([expect.objectContaining({ title: 'title' })]))
    })
  })
})

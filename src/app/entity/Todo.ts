import { IEntity, ID } from '../../interfaces'

export type TodoValues = {
    id?: ID,
    title?: string,
    description?: string
}

export default class Todo implements IEntity {
    private _id: ID = null
    title: string = ''
    description: string = ''
    private checked: Boolean = false

    public static create (todoValues: TodoValues) {
      const todo = new Todo()
      todo.setValues(todoValues)
      return todo
    }

    private setValues (todoValues: TodoValues) {
      if (todoValues.id) this._id = todoValues.id
      if (todoValues.title) this.title = todoValues.title
      if (todoValues.description) this.description = todoValues.description
    }

    public get id () : ID {
      return this._id
    }

    public get isChecked () : Boolean {
      return this.checked
    }

    public check () {
      this.checked = true
    }

    public unCheck () {
      this.checked = false
    }

    public get isSaved () {
      return this._id !== null
    }
}

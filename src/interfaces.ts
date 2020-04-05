export interface IEntity {
    id?: ID
}

export type ID = number | string

export interface IRepository<T> {
    save(item: T): Promise<T>
    delete(id: ID): Promise<void>
    update(item: T): Promise<T>
    get(query: any): Promise<Array<T>>
    getOne(query: any): Promise<T>
}

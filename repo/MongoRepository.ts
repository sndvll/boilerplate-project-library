import { BaseRepository } from '../core';

export class MongoRepository<T> extends BaseRepository<T> {

    public fetchAll(): T[] {
        throw new Error('Method not implemented.');
    }    public fetchOne(id: string): T {
        throw new Error('Method not implemented.');
    }
    public create(entity: T, idProperty: string): T {
        throw new Error('Method not implemented.');
    }
    public update(updatedData: any, id: string): T {
        throw new Error('Method not implemented.');
    }
    public delete(id: string): void {
        throw new Error('Method not implemented.');
    }
}

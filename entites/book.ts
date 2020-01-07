import { BaseEntity } from '../core/entity';
import { Entity, Persist } from '../core/decorators';

@Entity('books')
export default class Book extends BaseEntity {
    @Persist
    public title: string;
    @Persist
    public commentcount: number;
}

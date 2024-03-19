import { Repository } from 'typeorm';

export class BaseRepository<Entity> extends Repository<Entity> {
  paginate(pageNum: number, limit: number = 10) {
    this.count();
  }
}

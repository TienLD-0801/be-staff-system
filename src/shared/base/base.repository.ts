import { Repository } from 'typeorm';

export class BaseRepository<Entity> extends Repository<Entity> {
  paginate(_pageNum: number, _limit: number = 10) {
    this.count();
  }
}

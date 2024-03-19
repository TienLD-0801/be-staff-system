import { IsBoolean, IsInt, IsNotEmpty, IsOptional, Min } from 'class-validator';

export class PagerDto {
  @Min(0, { message: 'limit must be greater than equal to 0.' })
  @IsInt({ message: 'limit must be an integer number.' })
  @IsNotEmpty({ message: 'limit is required.' })
  limit: number;

  @IsOptional()
  @Min(0, { message: 'offset must be greater than equal to 0.' })
  @IsInt({ message: 'offset must be an integer number.' })
  @IsOptional()
  offset?: number;

  @Min(1, { message: 'page must be greater than equal to 1.' })
  @IsInt({ message: 'page must be an integer number.' })
  @IsOptional()
  page?: number;

  @IsBoolean({ message: 'isTakeAll must be a boolean value.' })
  @IsOptional()
  isTakeAll?: boolean;
}

export class PagingDto {
  limit: number;
  offset: number;
  page: number;
  totalCount: number;
  isNext: boolean;
  isPrev: boolean;
  filters: any;
  orders: any;
  constructor(
    totalCount: number,
    pager: PagerDto,
    filters?: any,
    orders?: any,
  ) {
    this.offset = pager.offset;
    this.limit = pager.limit;
    this.page = pager.page;
    this.totalCount = totalCount;
    this.isNext = pager.page * pager.limit < this.totalCount;
    this.isPrev = pager.page > 1;
    this.filters = filters || null;
    this.orders = orders || null;
  }
}

export class PageDto<T> {
  data: T[];

  readonly paging: PagingDto;

  constructor(data: T[], paging: PagingDto) {
    this.data = data;
    this.paging = paging;
  }
}

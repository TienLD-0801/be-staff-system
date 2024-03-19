import {
  BadRequestException,
  HttpStatus,
  ForbiddenException,
  InternalServerErrorException,
} from '@nestjs/common';

export function customResponseError(error: any) {
  if (error.status === HttpStatus.BAD_REQUEST) {
    throw new BadRequestException(error.message);
  } else if (error.status === HttpStatus.FORBIDDEN) {
    throw new ForbiddenException(error.message);
  } else {
    throw new InternalServerErrorException(error.message);
  }
}

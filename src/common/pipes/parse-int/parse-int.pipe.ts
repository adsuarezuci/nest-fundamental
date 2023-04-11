import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const intValue = parseInt(value);
    if (isNaN(intValue)) {
      throw new BadRequestException(
        `Validation failed. "${value}" is not an integer.`,
      );
    }
    return intValue;
  }
}

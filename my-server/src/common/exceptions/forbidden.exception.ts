import { HttpException, HttpStatus } from "@nestjs/common";

export class ForbiddenException extends HttpException {
    multipleInfo: Array<number>;

    constructor() {
      super('Forbidden', HttpStatus.FORBIDDEN);
        this.multipleInfo = [1,2];
    }
  }
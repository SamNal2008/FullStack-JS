import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from "express";

export const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log('Some log functionnal ...');
    next();
}

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('Request ... log');
        next();
    }
}
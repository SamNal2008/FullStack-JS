import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from "express";

export const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`New request on : ${req.originalUrl}`);
    console.log(`Returned : ${res.statusCode}`)
    next();
}

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('Request ... log');
        next();
    }
}

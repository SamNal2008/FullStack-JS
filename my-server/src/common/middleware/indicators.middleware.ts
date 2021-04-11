import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";



@Injectable()
export class IndicatorMiddleware implements NestMiddleware {

    use(req: Request, res: Response, next: NextFunction) {
        console.log('Some log ...')
        next();
    }
}
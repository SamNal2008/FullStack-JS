import { Controller, Get } from '@nestjs/common';
import { MarketService } from './market.service';

@Controller('market')
export class MarketController {
    constructor(private marketService: MarketService) {
        console.log('Creation of market controller');
    }

    @Get('catalog')
    getCatalog() {
        
    }

}

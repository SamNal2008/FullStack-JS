import { Injectable } from '@nestjs/common';
import { Animal } from 'src/helper/animal.interface';
import { Market } from './interface/market.interface';

@Injectable()
export class MarketService {
    private readonly market: Market;

    constructor() {
        this.market.name = "My market";
        this.market.inventory = [];
        this.market.change = 0;
    }

    addNewAnimal(animal: Animal, price: number) {
        console.log('Adding a new cat at the inventory');
        this.market.inventory.push([animal, price]);
    }

    checkInventory(): [Animal, number][] {
        return this.market.inventory;
    }

    sellAnimal(id: number) {
        if (this.market.inventory.length < id) {
            this.marke
            return 
        }
    }


    
}

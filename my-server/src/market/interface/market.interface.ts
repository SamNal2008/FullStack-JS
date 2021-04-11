import { Cat } from "src/cat/interface/cat.interface";
import { Dog } from "src/dogs/interface/dog.interface";
import { Animal } from "src/helper/animal.interface";

export interface Market {
    name: string,
    inventory: [Animal, number][],
    change: number,
};

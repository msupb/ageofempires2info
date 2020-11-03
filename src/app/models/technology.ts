import { ICost } from "./cost";
import {IModel} from './model';

export interface ITechnology extends IModel {
    id: number;
    name: string;
    description: string;
    expansion: string;
    age: string;
    develops_in: string;
    cost: ICost;
    build_time: number;
    applies_to: Array<string>;
}
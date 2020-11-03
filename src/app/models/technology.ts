import { ICost } from "./cost";
import {IModelBase} from './modelBase';

export interface ITechnology extends IModelBase {
    description: string;
    expansion: string;
    age: string;
    develops_in: string;
    cost: ICost;
    build_time: number;
    applies_to: Array<string>;
}
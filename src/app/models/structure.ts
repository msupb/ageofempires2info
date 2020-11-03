import { ICost } from "./cost";
import {IModelBase} from './modelBase';

export interface IStructure extends IModelBase {
    description: string;
    expansion: string;
    age: string;
    cost: ICost;
    build_time: number;
    hit_points: number;
    line_of_sight: number;
    armor: string;
    range: string;
    relaod_time: number;
    attack: number;
    special: Array<string>
}
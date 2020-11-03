import { ICost } from "./cost";
import {IModel} from './model';

export interface IStructure extends IModel {
    id: number;
    name: string;
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
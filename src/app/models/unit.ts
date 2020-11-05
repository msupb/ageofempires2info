import { ICost } from "./cost";
import {IModelBase} from './modelBase';

export interface IUnit extends IModelBase {
    description: string;
    expansion: string;
    age: string;
    created_in: string;
    cost: ICost;
    build_time: number;
    reload_time: number;
    attack_delay: number;
    movement_rate: number;
    line_of_sight: number;
    hit_points: number;
    range: string;
    attack: number;
    armor: string;
    attack_bonus: Array<string>;
    armor_bonus: Array<string>;
    search_radius: number;
    accuracy: string;
    blast_radius: number;
}
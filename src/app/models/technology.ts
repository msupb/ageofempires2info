import { ICost } from "./cost";

export interface ITechnology {
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
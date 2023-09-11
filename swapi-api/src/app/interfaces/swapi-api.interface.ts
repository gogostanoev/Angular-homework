import { Person } from "./person.interface";

export interface SwapiApi {
    count: number;
    next: string;
    previous: any;
    results: Person[];
}
import { Timestamp } from "@angular/fire/firestore";

export interface RawFirestorePost {
    id: string;
    title: string;
    content: string;
    author: string;
    createdAt: Timestamp;
}
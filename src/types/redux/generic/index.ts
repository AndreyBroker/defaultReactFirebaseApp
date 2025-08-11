import { Timestamp } from "firebase/firestore";

export interface BaseEntity {
    cod: string | null;
    dateCreate: Timestamp;
}
export type User = {
    name: string;
    id: string;
}

export interface Event {
    authorization: string; 
    description?: string;
    consultant: User;
    startDate: Date;
    endDate: Date;
    name: string;
    client: User;
}   

export interface EventUpdate {
    authorization?: string; 
    data?: Partial<Event>;
    id?: string;
}   
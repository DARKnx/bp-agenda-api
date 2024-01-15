export type User = {
    name: string;
    id: string;
}

export interface Event {
    authorization: string; 
    description?: string;
    consultant: User;
    startDate: Date;
    status: string;
    endDate: Date;
    name: string;
    client: User;
}   

export interface EventUpdate {
    authorization?: string; 
    data?: Partial<Event>;
    id?: string;
}   

export interface EventsBrokerGet {
    authorization?: string; 
    id?: string;
    date: Date;
}   
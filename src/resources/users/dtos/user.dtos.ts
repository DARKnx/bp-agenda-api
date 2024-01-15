export interface UserSignIn {
    password: string;
    email: string;
}

export interface UserSignUp {
    password: string;
    email: string;
    name: string;
    role?: string; 
}

export interface UserGet {
    authorization: string;
}

export interface  UserOptions{
    authorization: string;
    role?: 'cliente' | 'admin' | 'corretor'
}

type User = {
    password: string;
    resume: string;
    email: string;
    role: string; 
    name: string;
}

export interface UserUpdate {
    authorization: string;
    data: Partial<User>;
    id?: string;
    
}   
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
    authorization: string
}
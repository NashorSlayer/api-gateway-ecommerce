
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class LoginData {
    email: string;
    password: string;
}

export class RegisterData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export class UserData {
    email: string;
    password: string;
    lastName: string;
    firstName: string;
}

export abstract class IQuery {
    abstract getUsers(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;

    abstract getUserById(): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract updateUser(id?: Nullable<string>, user?: Nullable<UserData>): Nullable<User> | Promise<Nullable<User>>;

    abstract deleteUser(id?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;

    abstract login(input?: Nullable<LoginData>): User | Promise<User>;

    abstract register(input?: Nullable<RegisterData>): User | Promise<User>;
}

export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    lastName: string;
    firstName: string;
    image?: Nullable<string>;
    address?: Nullable<string>;
    Cart?: Nullable<Cart>;
}

export class Cart {
    id: string;
}

type Nullable<T> = T | null;

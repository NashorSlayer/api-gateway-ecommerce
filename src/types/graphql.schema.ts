
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class UserData {
    name: string;
    email: string;
    password: string;
    lastname: string;
    firstname: string;
}

export abstract class IQuery {
    abstract getUsers(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;

    abstract getUserById(): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createUser(user?: Nullable<UserData>): Nullable<User> | Promise<Nullable<User>>;

    abstract updateUser(id?: Nullable<string>, user?: Nullable<UserData>): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    lastname: string;
    firstname: string;
    image?: Nullable<string>;
}

type Nullable<T> = T | null;

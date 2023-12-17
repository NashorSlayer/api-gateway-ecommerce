
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class UserData {
    email: string;
    password: string;
    lastName: string;
    firstName: string;
}

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

export abstract class IQuery {
    abstract getUsers(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;

    abstract getUserById(): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract updateUser(id?: Nullable<string>, user?: Nullable<UserData>): Nullable<User> | Promise<Nullable<User>>;

    abstract deleteUser(id?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;

    abstract login(input?: Nullable<LoginData>): Nullable<AuthPayload> | Promise<Nullable<AuthPayload>>;

    abstract register(input?: Nullable<RegisterData>): Nullable<User> | Promise<Nullable<User>>;
}

export class AuthPayload {
    access_token: string;
    user: User;
}

export class User {
    id: string;
    email: string;
    password: string;
    lastName: string;
    firstName: string;
    image: string;
    address: string;
    Cart: Cart;
    Historical: Historical;
}

export class Cart {
    id: string;
    isEmpty: boolean;
}

export class Cart_Products {
    id: string;
    cart_id: string;
    product_id: string;
    amount: number;
}

export class Historical {
    id: string;
}

export class Historical_Products {
    id: string;
    historical_id: string;
    orderBuyId: string;
    date: Date;
}

type Nullable<T> = T | null;

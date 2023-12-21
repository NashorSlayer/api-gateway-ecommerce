
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

export class Historical_ProductsData {
    historical_id: string;
    order_buy_id: string;
}

export class CartData {
    id: string;
    isEmpty?: Nullable<boolean>;
}

export class Cart_ProductsData {
    cart_id: string;
    product_id: string;
    amount: number;
}

export class UpdateCart_ProductsData {
    amount: number;
}

export class HistoricalData {
    id?: Nullable<string>;
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
    abstract getUserById(id?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;

    abstract getUsers(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;

    abstract getCart(id?: Nullable<string>): Nullable<Cart> | Promise<Nullable<Cart>>;

    abstract getCarts(): Nullable<Nullable<Cart>[]> | Promise<Nullable<Nullable<Cart>[]>>;

    abstract getHistorical(id?: Nullable<string>): Nullable<Historical> | Promise<Nullable<Historical>>;

    abstract getHistoricals(): Nullable<Nullable<Historical>[]> | Promise<Nullable<Nullable<Historical>[]>>;

    abstract getCart_Product(id?: Nullable<string>): Nullable<Cart_Products> | Promise<Nullable<Cart_Products>>;

    abstract getCart_ProductsByCartId(id?: Nullable<string>): Nullable<Cart_Products> | Promise<Nullable<Cart_Products>>;

    abstract getHistorical_Product(id?: Nullable<string>): Nullable<Historical_Products> | Promise<Nullable<Historical_Products>>;

    abstract getHistorical_ProductsByHistoricalId(id?: Nullable<string>): Nullable<Historical_Products> | Promise<Nullable<Historical_Products>>;
}

export abstract class IMutation {
    abstract updateUser(id?: Nullable<string>, user?: Nullable<UserData>): Nullable<User> | Promise<Nullable<User>>;

    abstract deleteUser(id?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;

    abstract updateCart(input?: Nullable<CartData>): Nullable<Cart> | Promise<Nullable<Cart>>;

    abstract createCart_Products(input?: Nullable<Cart_ProductsData>): Nullable<Cart_Products> | Promise<Nullable<Cart_Products>>;

    abstract updateCart_Products(input: UpdateCart_ProductsData, id: string): Nullable<Cart_Products> | Promise<Nullable<Cart_Products>>;

    abstract deleteCart_Products(id?: Nullable<string>): Nullable<Cart_Products> | Promise<Nullable<Cart_Products>>;

    abstract deleteHistorical(id?: Nullable<string>): Nullable<Historical> | Promise<Nullable<Historical>>;

    abstract createHistorical_Products(input?: Nullable<Historical_ProductsData>): Nullable<Historical_Products> | Promise<Nullable<Historical_Products>>;

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
    id?: Nullable<string>;
    isEmpty?: Nullable<boolean>;
}

export class Historical {
    id?: Nullable<string>;
}

export class Cart_Products {
    cart_id: string;
    product_id: string;
    amount: number;
}

export class Historical_Products {
    id: string;
    historical_id: string;
    order_buy_id: string;
    date: Date;
}

type Nullable<T> = T | null;

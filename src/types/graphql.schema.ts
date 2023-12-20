
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateProductInput {
    name: string;
    price: number;
    stock: number;
    description: string;
    offer: boolean;
    promotion: number;
    image: string;
    category_id: string;
}

export class CreateCategoryInput {
    name: string;
}

export class ProductData {
    name: string;
    price: number;
    stock: number;
    description: string;
    offer: boolean;
    promotion: number;
    image: string;
    category_id: string;
}

export class CategoryData {
    name: string;
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

export class UserData {
    email: string;
    password: string;
    lastName: string;
    firstName: string;
}

export abstract class IQuery {
    abstract getProducts(): Nullable<Nullable<Product>[]> | Promise<Nullable<Nullable<Product>[]>>;

    abstract getCategory(): Nullable<Nullable<Category>[]> | Promise<Nullable<Nullable<Category>[]>>;

    abstract getUsers(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;

    abstract getUserById(): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createProduct(input: CreateProductInput): Nullable<Product> | Promise<Nullable<Product>>;

    abstract createCategory(input: CreateCategoryInput): Nullable<Category> | Promise<Nullable<Category>>;

    abstract updateProduct(id?: Nullable<string>, product?: Nullable<ProductData>): Nullable<Product> | Promise<Nullable<Product>>;

    abstract deleteProduct(id?: Nullable<string>): Nullable<Product> | Promise<Nullable<Product>>;

    abstract updateCategory(id?: Nullable<string>, category?: Nullable<CategoryData>): Nullable<Category> | Promise<Nullable<Category>>;

    abstract deleteCategory(id?: Nullable<string>): Nullable<Category> | Promise<Nullable<Category>>;

    abstract updateUser(id?: Nullable<string>, user?: Nullable<UserData>): Nullable<User> | Promise<Nullable<User>>;

    abstract deleteUser(id?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;

    abstract login(input?: Nullable<LoginData>): Nullable<AuthPayload> | Promise<Nullable<AuthPayload>>;

    abstract register(input?: Nullable<RegisterData>): Nullable<User> | Promise<Nullable<User>>;
}

export class Product {
    id: string;
    name: string;
    price: number;
    stock: number;
    description: string;
    offer: boolean;
    promotion: number;
    image: string;
    category_id: string;
    category: Category;
}

export class Category {
    id: string;
    name: string;
}

export class AuthPayload {
    access_token: string;
    user: User;
}

export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    lastName: string;
    firstName: string;
    image: string;
    address: string;
    Cart: Cart;
}

export class Cart {
    id: string;
}

type Nullable<T> = T | null;

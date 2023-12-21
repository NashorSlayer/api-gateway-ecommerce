import { Query, Mutation, Resolver, Args } from "@nestjs/graphql";
import { Observable } from 'rxjs';

import { RabbitMQProxy } from "../../infraestructure/rabbitMQ/clientProxy";
import { AuthMsg, UserMsg, CartMsg, HistoricalMsg, Historical_productMsg, Cart_productMsg } from "../../utils/constants";
import { AuthPayload, Cart, Cart_Products, Cart_ProductsData, Historical, Historical_Products, Historical_ProductsData, LoginData, RegisterData, User } from "../../types/graphql.schema";




@Resolver('User')
export class UserResolver {
    constructor(
        private readonly clientProxy: RabbitMQProxy) { }
    private clientProxyUser = this.clientProxy.clientProxyUser();

    @Query('getUserById')
    getUserById(): Observable<User> {
        return this.clientProxyUser.send(UserMsg.FIND_ONE, "");
    }

    @Query('getUsers')
    findAll(): Observable<User[]> {
        return this.clientProxyUser.send(UserMsg.FIND_ALL, "");
    }

    @Query('getCart')
    createCart(@Args('id') id: string): Observable<Cart> {
        return this.clientProxyUser.send(CartMsg.FIND_ONE, id);
    }

    @Query('getCarts')
    getCarts(): Observable<Cart[]> {
        return this.clientProxyUser.send(CartMsg.FIND_ALL, "");
    }

    @Query('getHistoricals')
    getHistorical(@Args('id') id: string): Observable<Historical[]> {
        return this.clientProxyUser.send(HistoricalMsg.FIND_ONE, id);
    }

    @Query('getHistoricals')
    getHistoricals(): Observable<Historical> {
        return this.clientProxyUser.send(HistoricalMsg.FIND_ALL, "");
    }

    @Query('getCart_Product')
    getCart_Products(@Args('id') id: string): Observable<Cart_productMsg> {
        return this.clientProxyUser.send(Cart_productMsg.FIND_ONE, id);
    }

    @Query('getCart_ProductsByCartId')
    getCart_ProductsByCartId(@Args('cart_id') cart_id: string): Observable<Cart_productMsg> {
        return this.clientProxyUser.send(Cart_productMsg.FIND_PRODUCTS_BY_CART, cart_id);
    }

    @Query('getHistorical_Product')
    getHistorical_Product(@Args('id') id: string): Observable<Historical_productMsg> {
        return this.clientProxyUser.send(Historical_productMsg.FIND_ONE, id);
    }

    @Query('getHistorical_ProductsByHistoricalId')
    getHistorical_ProductsByHistoricalId(@Args('historical_id') historical_id: string): Observable<Historical_productMsg> {
        return this.clientProxyUser.send(Historical_productMsg.GET_PRODUCTS_BY_HISTORICAL, historical_id);
    }

    @Mutation('login')
    login(@Args('input') loginData: LoginData): Observable<AuthPayload> {
        return this.clientProxyUser.send(AuthMsg.LOGIN, loginData);
    }

    @Mutation('register')
    register(@Args('input') registerData: RegisterData): Observable<User> {
        console.log("register:", registerData)
        return this.clientProxyUser.send(AuthMsg.REGISTER, registerData);
    }

    @Mutation('updateUser')
    updateUser(@Args('input') user: User): Observable<User> {
        return this.clientProxyUser.send(UserMsg.UPDATE, user);
    }

    @Mutation('deleteUser')
    deleteUser(@Args('id') id: string): Observable<User> {
        return this.clientProxyUser.send(UserMsg.DELETE, id);
    }

    @Mutation('updateCart')
    updateCart(@Args('input') cart: Cart): Observable<Cart> {
        return this.clientProxyUser.send(CartMsg.UPDATE, cart);
    }

    @Mutation('createCart_Products')
    createCart_Products(@Args('input') cart_products: Cart_ProductsData): Observable<Cart_Products> {
        return this.clientProxyUser.send(Cart_productMsg.CREATE, cart_products);
    }

    @Mutation('updateCart_Products')
    updateCart_Products(@Args('input') cart_products: Cart_ProductsData,
        @Args('id') id: string): Observable<Cart_Products> {
        return this.clientProxyUser.send(Cart_productMsg.UPDATE, { cart_products, id },);
    }

    @Mutation('deleteCart_Products')
    deleteCart_Products(@Args('id') id: string): Observable<Cart_Products> {
        return this.clientProxyUser.send(Cart_productMsg.DELETE, id);
    }

    @Mutation('deleteHistorical')
    deleteHistorical(@Args('id') id: string): Observable<Historical_Products> {
        return this.clientProxyUser.send(HistoricalMsg.DELETE, id);
    }

    @Mutation('createHistorical_Products')
    createHistorical_Products(@Args('input') historical_products: Historical_ProductsData): Observable<Historical_Products> {
        return this.clientProxyUser.send(Historical_productMsg.CREATE, historical_products);
    }

}
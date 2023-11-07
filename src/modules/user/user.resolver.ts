import { Query, Mutation, Resolver, Args } from "@nestjs/graphql";
import { Observable } from 'rxjs';

import { RabbitMQProxy } from "../../infraestructure/rabbitMQ/clientProxy";
import { AuthMsg, UserMsg } from "../../utils/constants";
import { LoginData, RegisterData, User } from "../../types/graphql.schema";




@Resolver('User')
export class UserResolver {
    constructor(
        private readonly clientProxy: RabbitMQProxy) { }
    private clientProxyUser = this.clientProxy.clientProxyUser();

    @Query('getUsers')
    findAll(): Observable<User[]> {
        return this.clientProxyUser.send(UserMsg.FIND_ALL, "");
    }

    @Mutation('login')
    login(@Args('input') loginData: LoginData): Observable<User> {
        return this.clientProxyUser.send(AuthMsg.LOGIN, loginData);
    }

    @Mutation('register')
    register(@Args('input') registerData: RegisterData): Observable<User> {
        console.log("register:", registerData)
        return this.clientProxyUser.send(AuthMsg.REGISTER, registerData);
    }
}
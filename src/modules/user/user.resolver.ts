import { Query, Resolver } from "@nestjs/graphql";
import { Observable } from 'rxjs';

import { RabbitMQProxy } from "../../infraestructure/rabbitMQ/clientProxy";
import { UserMsg } from "../../utils/constants";
import { User } from "src/types/graphql.schema";




@Resolver('User')
export class UserResolver {
    constructor(
        private readonly clientProxy: RabbitMQProxy) { }
    private clientProxyUser = this.clientProxy.clientProxyUser();

    @Query('getUsers')
    findAll(): Observable<User[]> {
        return this.clientProxyUser.send(UserMsg.FIND_ALL, "");
    }
}
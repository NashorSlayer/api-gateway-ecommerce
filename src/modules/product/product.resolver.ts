import { Query, Mutation, Resolver, Args } from "@nestjs/graphql";
import { Observable } from 'rxjs';

import { AuthMsg, ProductMsg } from "../../utils/constants";
import { RabbitMQProxy } from "../../infraestructure/rabbitMQ/clientProxy";

@Resolver('Product')
export class ProductResolver {
        constructor(
            private readonly clientProxy: RabbitMQProxy) { }
        private clientProxyProduct = this.clientProxy.clientProxyProduct();


        @Query('getProducts')
        findAll(): Observable<any> {
            return this.clientProxyProduct.send(ProductMsg.FIND_ALL, "");
        }

        @Mutation('createProduct')
        create(@Args('input') createProduct): Observable<any> {
            return this.clientProxyProduct.send(ProductMsg.CREATE, createProduct);
        }

        @Mutation('updateProduct')
        update(@Args('input') updateProduct): Observable<any> {
            return this.clientProxyProduct.send(ProductMsg.UPDATE, updateProduct);
        }

        @Mutation('deleteProduct')
        delete(@Args('input') deleteProduct): Observable<any> {
            return this.clientProxyProduct.send(ProductMsg.DELETE, deleteProduct);
        }

        




    }


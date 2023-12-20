import { Query, Mutation, Resolver, Args } from "@nestjs/graphql";
import { Observable } from 'rxjs';

import { ProductMsg, CategoryMsg } from "../../utils/constants";
import { RabbitMQProxy } from "../../infraestructure/rabbitMQ/clientProxy";
import { query } from "express";

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
        @Mutation('createCategory')
        createCategory(@Args('input') createCategory): Observable<any> {
            return this.clientProxyProduct.send(CategoryMsg.CREATE, createCategory);
        }

        @Query('getCategory')
        getCategory(): Observable<any> {
            return this.clientProxyProduct.send(CategoryMsg.FIND_ALL, "");
        }

        @Mutation('updateCategory')
        updateCategory(@Args('input') updateCategory): Observable<any> {
            return this.clientProxyProduct.send(CategoryMsg.UPDATE, updateCategory);
        }

        @Mutation('deleteCategory')
        deleteCategory(@Args('input') deleteCategory): Observable<any> {
            return this.clientProxyProduct.send(CategoryMsg.DELETE, deleteCategory);
        }



    }
    


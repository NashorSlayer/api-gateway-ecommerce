import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { RabbitMQProxy } from "../../infraestructure/rabbitMQ/clientProxy";
import { TransbankMsg } from "../../utils/constants";
import { CreatePaymentDto } from "./dto/create-payment.dto";
import { ConfirmPaymentDto } from "./dto/confirm-payment.dto";

@Resolver('Transbank')
export class TransbankResolver {
    constructor(
        private readonly clientProxy: RabbitMQProxy) { }
    private clientProxyTransbank = this.clientProxy.clientProxyTransbank();

    @Mutation('createPayment')
    createTransaction(@Args('payment') createPaymentDto: CreatePaymentDto) {
        return this.clientProxyTransbank.send(TransbankMsg.CREATE, { payment: createPaymentDto });
    }

    @Mutation('confirmPayment')
    confirmPayment(@Args('ws_token') confirmPaymentDto: ConfirmPaymentDto) {
        return this.clientProxyTransbank.send(TransbankMsg.CONFIRM, { ws_token: confirmPaymentDto });
    }

}
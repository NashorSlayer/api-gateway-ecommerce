import { Module } from '@nestjs/common';
import { RabbitMQProxy } from './clientProxy';

@Module({
    providers: [RabbitMQProxy],
    exports: [RabbitMQProxy],
})
export class ProxyModule { }

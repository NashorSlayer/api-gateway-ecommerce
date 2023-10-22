import { Module } from '@nestjs/common';
import { RabbitMQProxy } from './client.Proxy';

@Module({
    providers: [RabbitMQProxy],
    exports: [RabbitMQProxy],
})
export class ProxyModule { }

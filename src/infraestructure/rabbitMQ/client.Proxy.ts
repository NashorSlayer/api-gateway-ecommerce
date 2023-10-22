import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
    ClientProxy,
    ClientProxyFactory,
    Transport,
} from '@nestjs/microservices';

import { RabbitMQ } from '../../utils/constants';

@Injectable()
export class RabbitMQProxy {
    constructor(private readonly config: ConfigService) { }

    clientProxyMovies(): ClientProxy {
        console.log(this.config.get('AMQP_URL'))
        return ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: this.config.get('AMQP_URL'),
                queue: RabbitMQ.UserQueue,
            },
        });
    }
}

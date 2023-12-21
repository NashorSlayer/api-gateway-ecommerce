import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/infraestructure';
import { TransbankResolver } from './transbank.resolver';

@Module({
    providers: [TransbankResolver],
    imports: [ProxyModule],
})
export class TransbankModule { }

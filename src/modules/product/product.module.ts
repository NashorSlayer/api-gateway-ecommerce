import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/infraestructure';
import { ProductResolver } from './product.resolver';

@Module({
    providers: [ProductResolver],
    imports: [ProxyModule],
})
export class ProductModule{ }
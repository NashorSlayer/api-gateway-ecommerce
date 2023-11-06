import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/infraestructure';
import { UserResolver } from './user.resolver';

@Module({
    providers: [UserResolver],
    imports: [ProxyModule],
})
export class UserModule { }

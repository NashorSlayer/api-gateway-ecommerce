import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            typePaths: ['./**/**/*.graphql'],
            context: ({ req, res }) => ({ req, res }),
            playground: {
                settings: {
                    "editor.theme": 'dark'
                }
            }
        }),
    ],
})
export class GraphQlModule { }

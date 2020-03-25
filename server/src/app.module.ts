import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PokemonModule} from './pokemon/pokemon.module';
import {AuthModule} from './auth/auth.module';
import {UsersModule} from './users/users.module';
import {NeighborhoodModule} from './neighborhood/neighborhood.module';
import {NeighborhoodController} from './neighborhood/neighborhood.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PokemonModule,
    AuthModule,
    UsersModule,
    NeighborhoodModule,
  ],
  controllers: [AppController, NeighborhoodController],
  providers: [AppService],
})
export class AppModule {}

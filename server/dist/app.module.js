"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const pokemon_module_1 = require("./pokemon/pokemon.module");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const neighborhood_module_1 = require("./neighborhood/neighborhood.module");
const neighborhood_controller_1 = require("./neighborhood/neighborhood.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(),
            pokemon_module_1.PokemonModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            neighborhood_module_1.NeighborhoodModule,
        ],
        controllers: [app_controller_1.AppController, neighborhood_controller_1.NeighborhoodController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const neighborhood_service_1 = require("./neighborhood.service");
const neighborhood_entity_1 = require("./neighborhood.entity");
let NeighborhoodController = class NeighborhoodController {
    constructor(neighborhoodService) {
        this.neighborhoodService = neighborhoodService;
    }
    index() {
        return this.neighborhoodService.findAll();
    }
    async register(neighborhood) {
        return this.neighborhoodService.create(neighborhood);
    }
};
__decorate([
    common_1.Get('neighbordhood'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NeighborhoodController.prototype, "index", null);
__decorate([
    common_1.Post('neighbordhood/create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [neighborhood_entity_1.NeighborhoodEntity]),
    __metadata("design:returntype", Promise)
], NeighborhoodController.prototype, "register", null);
NeighborhoodController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [neighborhood_service_1.NeighborhoodService])
], NeighborhoodController);
exports.NeighborhoodController = NeighborhoodController;
//# sourceMappingURL=neighborhood.controller.js.map
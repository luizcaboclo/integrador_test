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
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("@nestjs/common/enums");
const exceptions_1 = require("@nestjs/common/exceptions");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt_1 = require("../../auth/bcrypt/bcrypt");
const usuario_entity_1 = require("../entities/usuario.entity");
let UsuarioService = class UsuarioService {
    constructor(usuarioRepository, bcrypt) {
        this.usuarioRepository = usuarioRepository;
        this.bcrypt = bcrypt;
    }
    async findByUsuario(usuario) {
        return await this.usuarioRepository.findOne({
            where: {
                usuario: usuario
            }
        });
    }
    async findByNome(nome) {
        return await this.usuarioRepository.findOne({
            where: {
                nome: nome
            }
        });
    }
    async findAll() {
        return await this.usuarioRepository.find({
            relations: {
                postagem: true
            }
        });
    }
    async findById(id) {
        let usuario = await this.usuarioRepository.findOne({
            where: {
                id
            },
            relations: {
                postagem: true
            }
        });
        if (!usuario)
            throw new exceptions_1.HttpException('Usuario não encontrado!', enums_1.HttpStatus.NOT_FOUND);
        return usuario;
    }
    async create(usuario) {
        let buscarUsuario = await this.findByUsuario(usuario.usuario);
        if (!buscarUsuario) {
            usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha);
            return await this.usuarioRepository.save(usuario);
        }
        throw new exceptions_1.HttpException('O Usuario já está cadastrado', enums_1.HttpStatus.BAD_REQUEST);
    }
    async update(usuario) {
        let updateUsuario = await this.findById(usuario.id);
        let buscarUsuario = await this.findByUsuario(usuario.usuario);
        if (!updateUsuario)
            throw new exceptions_1.HttpException('Usuario não existe', enums_1.HttpStatus.NOT_FOUND);
        if (buscarUsuario && buscarUsuario.id !== usuario.id)
            throw new exceptions_1.HttpException('Usuario Já cadastrado', enums_1.HttpStatus.BAD_REQUEST);
        usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha);
        return await this.usuarioRepository.save(usuario);
    }
};
UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        bcrypt_1.Bcrypt])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map
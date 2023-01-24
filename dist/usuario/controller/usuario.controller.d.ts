import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../service/usuario.service";
export declare class UsuarioController {
    private readonly UsuarioService;
    constructor(UsuarioService: UsuarioService);
    findAll(): Promise<Usuario[]>;
    findById(id: number): Promise<Usuario>;
    findByNome(nome: string): Promise<Usuario>;
    findByUsuario(usuario: string): Promise<Usuario>;
    create(usuario: Usuario): Promise<Usuario>;
    update(usuario: Usuario): Promise<Usuario>;
}

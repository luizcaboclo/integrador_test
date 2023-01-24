import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
export declare class Postagem {
    id: number;
    titulo: string;
    texto: string;
    tema: Tema;
    usuario: Usuario;
}

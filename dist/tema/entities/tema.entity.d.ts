import { Postagem } from "../../postagem/entities/postagem.entity";
export declare class Tema {
    id: number;
    assunto: string;
    descricao: string;
    postagem: Postagem[];
}

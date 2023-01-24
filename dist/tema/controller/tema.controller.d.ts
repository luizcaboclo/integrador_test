import { Tema } from "../entities/tema.entity";
import { TemaService } from "../service/tema.service";
export declare class TemaCrontoller {
    private readonly temaService;
    constructor(temaService: TemaService);
    findAll(): Promise<Tema[]>;
    findById(id: number): Promise<Tema>;
    findByAssunto(assunto: string): Promise<Tema[]>;
    create(tema: Tema): Promise<Tema>;
    update(tema: Tema): Promise<Tema>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}

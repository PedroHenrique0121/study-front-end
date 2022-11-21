import { Pena } from "../penas/Pena";
import { TopicoLei } from "../topicos-leis/TopicoLei";

export class Artigo {

    id!: number;
    descricao!: string;
    numero!: string;
    categoria!: string;
    topicoLei!: TopicoLei;
    topicoLeiId!: number;
    penas!: Pena[];
}

export type ArtigoPage = {
    content: Artigo[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;

}

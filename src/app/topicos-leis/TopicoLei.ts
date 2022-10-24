import { Assunto } from "../assuntos/Assunto";

export class TopicoLei  {

    id!: number;
    descricao!: string;
    assunto!: Assunto;
    assuntoId!: number;
}

export type TopicoLeiPage = {
    content: TopicoLei[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;

}

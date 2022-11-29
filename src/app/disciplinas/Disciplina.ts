import { Assunto } from "../assuntos/Assunto";

export class Disciplina {

    id!: number;
    descricao!: string;
    userId!: number;
    assuntos!: Assunto[]
}

export type DisciplinaPage= {
    content: Disciplina[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}
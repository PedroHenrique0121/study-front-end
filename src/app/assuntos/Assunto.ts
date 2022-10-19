import { Disciplina } from "../disciplinas/Disciplina";

export class Assunto{

    id!: number;
    descricao!: string;
    disciplinaId!:number;
    disciplina!: Disciplina;

}

export type AssuntoPage={
     
    content: Assunto[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;

}
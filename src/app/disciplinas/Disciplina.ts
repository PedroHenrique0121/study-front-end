export class Disciplina {

    id!: number;
    descricao!: string;
    userId!: number;
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
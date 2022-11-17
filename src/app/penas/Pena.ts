import { Artigo } from "../artigos/Artigo";

export class Pena{
     
    id!:number;
    descricao!:string;
    categoria!:string;
    artigo!:Artigo;
    artigoId!: number
}
export default class Cliente{
    id: string;
    nome: string;
    cpf: string;
    email: string;
    telefone: string;
    idade: number;
    sexo: string;

    constructor(
        id: string, nome:string,cpf:string,email:string,
        telefone:string, idade:number,sexo:string
    ){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
        this.idade = idade;
        this.sexo = sexo;
    }
}
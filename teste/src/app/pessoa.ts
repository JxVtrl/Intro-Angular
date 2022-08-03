export class Pessoa {
    public id?: number;
    public nome?: string;
    public idade?: number;

    constructor(id: number, nome: string, idade: number) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }

    getType() {
        if (this.idade) {
            if (this.idade <= 15) {
                return 'Criança';
            } else if (this.idade <= 30) {
                return 'Jovem';
            } else if (this.idade <= 60) {
                return 'Adulto';
            } else {
                return 'Idoso';
            }
        }
        return 'Não definido';
    }
}
